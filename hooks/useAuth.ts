import { useState, useEffect } from 'react';
import { APP_CONSTANTS } from '../constants/app';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.AUTH);
    const authTime = localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.AUTH_TIME);
    
    if (authStatus === APP_CONSTANTS.AUTH_STATUS.AUTHENTICATED && authTime) {
      const authDate = new Date(parseInt(authTime));
      const now = new Date();
      const daysDiff = (now.getTime() - authDate.getTime()) / (1000 * 3600 * 24);
      
      // Session expires after specified days
      if (daysDiff < APP_CONSTANTS.SESSION_EXPIRY_DAYS) {
        setIsAuthenticated(true);
      } else {
        // Clear expired authentication
        localStorage.removeItem(APP_CONSTANTS.STORAGE_KEYS.AUTH);
        localStorage.removeItem(APP_CONSTANTS.STORAGE_KEYS.AUTH_TIME);
      }
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    handleLogin,
    handleLogout
  };
}