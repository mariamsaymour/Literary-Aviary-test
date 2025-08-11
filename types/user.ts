export interface User {
  id: string;
  username: string;
  email?: string;
  recoveryEmail?: string;
  passwordHash: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
  permissions: {
    manageBirds: boolean;
    manageUsers: boolean;
    exportData: boolean;
    importData: boolean;
    viewStatistics: boolean;
  };
}

export interface CreateUserRequest {
  username: string;
  email?: string;
  recoveryEmail?: string;
  password: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface UpdateUserRequest {
  id: string;
  username?: string;
  email?: string;
  recoveryEmail?: string;
  role?: 'admin' | 'editor' | 'viewer';
  isActive?: boolean;
}

export interface ChangePasswordRequest {
  userId: string;
  currentPassword?: string;
  newPassword: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface PasswordResetRequest {
  email: string;
  resetToken?: string;
  newPassword?: string;
}

export interface UserSummary {
  totalUsers: number;
  activeUsers: number;
  adminUsers: number;
  editorUsers: number;
  viewerUsers: number;
  recentLogins: User[];
}