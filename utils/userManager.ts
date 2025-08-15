import { User, CreateUserRequest, UpdateUserRequest, ChangePasswordRequest, LoginCredentials } from '../types/user';

// Simple hash function for passwords (in production, use proper bcrypt)
function simpleHash(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16);
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Default permissions based on role
function getDefaultPermissions(role: 'admin' | 'editor' | 'viewer') {
  switch (role) {
    case 'admin':
      return {
        manageBirds: true,
        manageUsers: true,
        exportData: true,
        importData: true,
        viewStatistics: true,
      };
    case 'editor':
      return {
        manageBirds: true,
        manageUsers: false,
        exportData: true,
        importData: true,
        viewStatistics: true,
      };
    case 'viewer':
      return {
        manageBirds: false,
        manageUsers: false,
        exportData: false,
        importData: false,
        viewStatistics: true,
      };
  }
}

export class UserManager {
  private static readonly STORAGE_KEY = 'literaryAviaryUsers';
  private static readonly CURRENT_USER_KEY = 'literaryAviaryCurrentUser';

  // Initialize with default admin user if no users exist
  static init(): void {
    const users = this.getAllUsers();
    if (users.length === 0) {
      const defaultAdmin: User = {
        id: generateId(),
        username: 'admin',
        email: 'admin@literaryaviary.com',
        passwordHash: simpleHash('admin123'),
        role: 'admin',
        createdAt: new Date(),
        isActive: true,
        permissions: getDefaultPermissions('admin'),
      };
      this.saveUsers([defaultAdmin]);
    }
  }

  // Get all users from localStorage
  static getAllUsers(): User[] {
    try {
      const usersJson = localStorage.getItem(this.STORAGE_KEY);
      if (!usersJson) return [];
      
      const users = JSON.parse(usersJson);
      // Convert date strings back to Date objects
      return users.map((user: any) => ({
        ...user,
        createdAt: new Date(user.createdAt),
        lastLogin: user.lastLogin ? new Date(user.lastLogin) : undefined,
      }));
    } catch (error) {
      console.error('Error loading users:', error);
      return [];
    }
  }

  // Save users to localStorage
  private static saveUsers(users: User[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users:', error);
      throw new Error('Failed to save users');
    }
  }

  // Get current logged-in user
  static getCurrentUser(): User | null {
    try {
      const currentUserJson = localStorage.getItem(this.CURRENT_USER_KEY);
      if (!currentUserJson) return null;
      
      const userData = JSON.parse(currentUserJson);
      return {
        ...userData,
        createdAt: new Date(userData.createdAt),
        lastLogin: userData.lastLogin ? new Date(userData.lastLogin) : undefined,
      };
    } catch (error) {
      console.error('Error loading current user:', error);
      return null;
    }
  }

  // Set current user
  private static setCurrentUser(user: User): void {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  }

  // Authenticate user
  static authenticate(credentials: LoginCredentials): { success: boolean; user?: User; error?: string } {
    const users = this.getAllUsers();
    const user = users.find(u => u.username === credentials.username && u.isActive);
    
    if (!user) {
      return { success: false, error: 'Invalid username or password' };
    }

    const passwordHash = simpleHash(credentials.password);
    if (user.passwordHash !== passwordHash) {
      return { success: false, error: 'Invalid username or password' };
    }

    // Update last login
    user.lastLogin = new Date();
    this.updateUser({ id: user.id });
    this.setCurrentUser(user);

    return { success: true, user };
  }

  // Create new user
  static createUser(request: CreateUserRequest): { success: boolean; user?: User; error?: string } {
    try {
      const users = this.getAllUsers();
      
      // Check if username already exists
      if (users.some(u => u.username === request.username)) {
        return { success: false, error: 'Username already exists' };
      }

      // Check if email already exists (if provided)
      if (request.email && users.some(u => u.email === request.email)) {
        return { success: false, error: 'Email already exists' };
      }

      const newUser: User = {
        id: generateId(),
        username: request.username,
        email: request.email,
        recoveryEmail: request.recoveryEmail,
        passwordHash: simpleHash(request.password),
        role: request.role,
        createdAt: new Date(),
        isActive: true,
        permissions: getDefaultPermissions(request.role),
      };

      users.push(newUser);
      this.saveUsers(users);

      return { success: true, user: newUser };
    } catch (error) {
      console.error('Error creating user:', error);
      return { success: false, error: 'Failed to create user' };
    }
  }

  // Update user
  static updateUser(request: UpdateUserRequest): { success: boolean; user?: User; error?: string } {
    try {
      const users = this.getAllUsers();
      const userIndex = users.findIndex(u => u.id === request.id);
      
      if (userIndex === -1) {
        return { success: false, error: 'User not found' };
      }

      const user = users[userIndex];
      
      // Check if new username conflicts (if changed)
      if (request.username && request.username !== user.username) {
        if (users.some(u => u.username === request.username && u.id !== request.id)) {
          return { success: false, error: 'Username already exists' };
        }
      }

      // Check if new email conflicts (if changed)
      if (request.email && request.email !== user.email) {
        if (users.some(u => u.email === request.email && u.id !== request.id)) {
          return { success: false, error: 'Email already exists' };
        }
      }

      // Update user fields
      if (request.username) user.username = request.username;
      if (request.email !== undefined) user.email = request.email;
      if (request.recoveryEmail !== undefined) user.recoveryEmail = request.recoveryEmail;
      if (request.role) {
        user.role = request.role;
        user.permissions = getDefaultPermissions(request.role);
      }
      if (request.isActive !== undefined) user.isActive = request.isActive;

      users[userIndex] = user;
      this.saveUsers(users);

      // Update current user if it's the same user
      const currentUser = this.getCurrentUser();
      if (currentUser && currentUser.id === user.id) {
        this.setCurrentUser(user);
      }

      return { success: true, user };
    } catch (error) {
      console.error('Error updating user:', error);
      return { success: false, error: 'Failed to update user' };
    }
  }

  // Change password
  static changePassword(request: ChangePasswordRequest): { success: boolean; error?: string } {
    try {
      const users = this.getAllUsers();
      const userIndex = users.findIndex(u => u.id === request.userId);
      
      if (userIndex === -1) {
        return { success: false, error: 'User not found' };
      }

      const user = users[userIndex];

      // If current password is provided, verify it
      if (request.currentPassword) {
        const currentPasswordHash = simpleHash(request.currentPassword);
        if (user.passwordHash !== currentPasswordHash) {
          return { success: false, error: 'Current password is incorrect' };
        }
      }

      // Update password
      user.passwordHash = simpleHash(request.newPassword);
      users[userIndex] = user;
      this.saveUsers(users);

      return { success: true };
    } catch (error) {
      console.error('Error changing password:', error);
      return { success: false, error: 'Failed to change password' };
    }
  }

  // Delete user
  static deleteUser(userId: string): { success: boolean; error?: string } {
    try {
      const users = this.getAllUsers();
      const userIndex = users.findIndex(u => u.id === userId);
      
      if (userIndex === -1) {
        return { success: false, error: 'User not found' };
      }

      // Prevent deleting the last admin
      const user = users[userIndex];
      if (user.role === 'admin') {
        const adminCount = users.filter(u => u.role === 'admin' && u.isActive && u.id !== userId).length;
        if (adminCount === 0) {
          return { success: false, error: 'Cannot delete the last admin user' };
        }
      }

      users.splice(userIndex, 1);
      this.saveUsers(users);

      return { success: true };
    } catch (error) {
      console.error('Error deleting user:', error);
      return { success: false, error: 'Failed to delete user' };
    }
  }

  // Get user by ID
  static getUserById(id: string): User | null {
    const users = this.getAllUsers();
    return users.find(u => u.id === id) || null;
  }

  // Check if user has permission
  static hasPermission(userId: string, permission: keyof User['permissions']): boolean {
    const user = this.getUserById(userId);
    return user ? user.permissions[permission] : false;
  }

  // Logout current user
  static logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    localStorage.removeItem('literaryAviaryAuth');
    localStorage.removeItem('literaryAviaryAuthTime');
  }
}

// Initialize user manager
UserManager.init();