import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Eye, EyeOff, Lock, User, Mail, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { UserManager } from '../utils/userManager';
import { LoginCredentials, CreateUserRequest } from '../types/user';

interface AdminLoginProps {
  onLogin: () => void;
}

type LoginMode = 'login' | 'register' | 'forgot-password';

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [mode, setMode] = useState<LoginMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState<LoginCredentials>({
    username: '',
    password: ''
  });

  // Registration form state
  const [registerData, setRegisterData] = useState<CreateUserRequest>({
    username: '',
    email: '',
    recoveryEmail: '',
    password: '',
    role: 'editor'
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  // Password recovery state
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [recoveryStep, setRecoveryStep] = useState<'email' | 'reset'>('email');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = UserManager.authenticate(loginData);
    
    if (result.success && result.user) {
      // Store authentication in localStorage for App.tsx compatibility
      localStorage.setItem('literaryAviaryAuth', 'authenticated');
      localStorage.setItem('literaryAviaryAuthTime', Date.now().toString());
      
      toast.success(`Welcome back, ${result.user.username}!`);
      onLogin();
    } else {
      toast.error(result.error || 'Login failed');
    }

    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (registerData.password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (registerData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (registerData.email && !isValidEmail(registerData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (registerData.recoveryEmail && !isValidEmail(registerData.recoveryEmail)) {
      toast.error('Please enter a valid recovery email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = UserManager.createUser(registerData);
    
    if (result.success) {
      toast.success('Account created successfully! You can now log in.');
      setMode('login');
      // Reset form
      setRegisterData({
        username: '',
        email: '',
        recoveryEmail: '',
        password: '',
        role: 'editor'
      });
      setConfirmPassword('');
    } else {
      toast.error(result.error || 'Registration failed');
    }

    setIsLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (recoveryStep === 'email') {
      // Check if recovery email exists
      const users = UserManager.getAllUsers();
      const user = users.find(u => u.email === recoveryEmail || u.recoveryEmail === recoveryEmail);
      
      if (!user) {
        toast.error('No account found with this email address');
        return;
      }

      if (!user.email && !user.recoveryEmail) {
        toast.error('This account does not have a recovery email set up');
        return;
      }

      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd send an email here
      toast.success('Password reset instructions sent to your email (simulated)');
      setRecoveryStep('reset');
      setIsLoading(false);
    } else {
      // Reset password step
      if (newPassword !== confirmNewPassword) {
        toast.error('Passwords do not match');
        return;
      }

      if (newPassword.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return;
      }

      setIsLoading(true);
      
      const users = UserManager.getAllUsers();
      const user = users.find(u => u.email === recoveryEmail || u.recoveryEmail === recoveryEmail);
      
      if (user) {
        const result = UserManager.changePassword({
          userId: user.id,
          newPassword: newPassword
        });
        
        if (result.success) {
          toast.success('Password reset successfully! You can now log in.');
          setMode('login');
          setRecoveryStep('email');
          setRecoveryEmail('');
          setNewPassword('');
          setConfirmNewPassword('');
        } else {
          toast.error(result.error || 'Failed to reset password');
        }
      }
      
      setIsLoading(false);
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetToLogin = () => {
    setMode('login');
    setRecoveryStep('email');
    setRecoveryEmail('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="min-h-screen literary-main-bg flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="literary-title text-4xl mb-2">Literary Aviary</h1>
          <p className="literary-description text-lg">
            {mode === 'forgot-password' ? 'Password Recovery' : 'Account Access'}
          </p>
        </div>

        <Card className="shadow-lg border-0">
          {mode === 'forgot-password' ? (
            <>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetToLogin}
                    className="absolute left-4 top-4"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="literary-title text-2xl flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />
                  Reset Password
                </CardTitle>
                <CardDescription className="literary-description">
                  {recoveryStep === 'email' 
                    ? 'Enter your email to receive reset instructions'
                    : 'Enter your new password'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleForgotPassword} className="space-y-6">
                  {recoveryStep === 'email' ? (
                    <div className="space-y-2">
                      <Label htmlFor="recovery-email" className="literary-label text-sm">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="recovery-email"
                          type="email"
                          value={recoveryEmail}
                          onChange={(e) => setRecoveryEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="literary-label text-sm">
                          New Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="new-password"
                            type={showPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter new password"
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-new-password" className="literary-label text-sm">
                          Confirm New Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="confirm-new-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            placeholder="Confirm new password"
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    </>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading || (recoveryStep === 'email' ? !recoveryEmail : !newPassword || !confirmNewPassword)}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {recoveryStep === 'email' ? 'Sending...' : 'Resetting...'}
                      </div>
                    ) : (
                      recoveryStep === 'email' ? 'Send Reset Instructions' : 'Reset Password'
                    )}
                  </Button>
                </form>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="text-center">
                <CardTitle className="literary-title text-2xl flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />
                  Account Access
                </CardTitle>
                <CardDescription className="literary-description">
                  Sign in to your account or create a new one
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={mode} onValueChange={(value) => setMode(value as LoginMode)} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Sign In</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login" className="space-y-6 mt-6">
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="username" className="literary-label text-sm">
                          Username
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="username"
                            type="text"
                            value={loginData.username}
                            onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                            placeholder="Enter username"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="literary-label text-sm">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            placeholder="Enter password"
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button
                          type="button"
                          variant="link"
                          onClick={() => setMode('forgot-password')}
                          className="text-sm literary-description"
                        >
                          Forgot your password?
                        </Button>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isLoading || !loginData.username || !loginData.password}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Signing in...
                          </div>
                        ) : (
                          'Sign In'
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <p className="text-sm literary-description text-center">
                        <strong>Demo Credentials:</strong><br />
                        Username: admin<br />
                        Password: admin123
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-6 mt-6">
                    <form onSubmit={handleRegister} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="reg-username" className="literary-label text-sm">
                          Username *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="reg-username"
                            type="text"
                            value={registerData.username}
                            onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                            placeholder="Choose a username"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reg-email" className="literary-label text-sm">
                          Email Address (Optional)
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="reg-email"
                            type="email"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                            placeholder="your.email@example.com"
                            className="pl-10"
                          />
                        </div>
                        <p className="text-xs literary-description">
                          Used for password recovery and notifications
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recovery-email" className="literary-label text-sm">
                          Recovery Email (Optional)
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="recovery-email"
                            type="email"
                            value={registerData.recoveryEmail}
                            onChange={(e) => setRegisterData({...registerData, recoveryEmail: e.target.value})}
                            placeholder="backup.email@example.com"
                            className="pl-10"
                          />
                        </div>
                        <p className="text-xs literary-description">
                          Backup email for account recovery
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reg-password" className="literary-label text-sm">
                          Password *
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="reg-password"
                            type={showPassword ? 'text' : 'password'}
                            value={registerData.password}
                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                            placeholder="Create a password"
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="literary-label text-sm">
                          Confirm Password *
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isLoading || !registerData.username || !registerData.password || !confirmPassword}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Creating account...
                          </div>
                        ) : (
                          'Create Account'
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </>
          )}
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm literary-description">
            Need help? Contact your administrator
          </p>
        </div>
      </div>
    </div>
  );
}