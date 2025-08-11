import { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';
import { AdminInterface } from './components/AdminInterface';
import { AdminLogin } from './components/AdminLogin';
import { BirdData } from './types/bird';
import { DataManager } from './utils/dataManager';
import { defaultBirdsData } from './data/defaultBirds';
import { Button } from './components/ui/button';
import { Eye } from 'lucide-react';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  const [birds, setBirds] = useState<BirdData[]>([]);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on app load
  useEffect(() => {
    const authStatus = localStorage.getItem('literaryAviaryAuth');
    const authTime = localStorage.getItem('literaryAviaryAuthTime');
    
    if (authStatus === 'authenticated' && authTime) {
      const authDate = new Date(parseInt(authTime));
      const now = new Date();
      const daysDiff = (now.getTime() - authDate.getTime()) / (1000 * 3600 * 24);
      
      // Session expires after 7 days
      if (daysDiff < 7) {
        setIsAuthenticated(true);
      } else {
        // Clear expired authentication
        localStorage.removeItem('literaryAviaryAuth');
        localStorage.removeItem('literaryAviaryAuthTime');
      }
    }
  }, []);

  // Load birds data on component mount
  useEffect(() => {
    const loadedBirds = DataManager.loadBirds(defaultBirdsData);
    setBirds(loadedBirds);
    setIsLoading(false);
  }, []);

  // Handle birds update from admin interface
  const handleBirdsUpdate = (updatedBirds: BirdData[]) => {
    setBirds(updatedBirds);
    DataManager.saveBirds(updatedBirds);
  };

  // Handle login success
  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsAdminMode(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdminMode(false);
  };

  // Toggle admin mode (only if authenticated)
  const toggleAdminMode = () => {
    if (isAuthenticated) {
      setIsAdminMode(!isAdminMode);
    } else {
      setIsAdminMode(true); // This will show the login screen
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="literary-description">Loading Literary Aviary...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">


      {/* Main Content */}
      {isAdminMode ? (
        isAuthenticated ? (
          <AdminInterface
            birds={birds}
            onBirdsUpdate={handleBirdsUpdate}
            onClose={() => setIsAdminMode(false)}
            onLogout={handleLogout}
          />
        ) : (
          <AdminLogin onLogin={handleLogin} />
        )
      ) : (
        <Gallery birds={birds} onOpenAdmin={toggleAdminMode} isAuthenticated={isAuthenticated} />
      )}

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: 'Crimson Text, serif',
            background: 'var(--sidebar-bg)',
            color: 'var(--primary-text)',
            border: '1px solid var(--main-border)'
          }
        }}
      />
    </div>
  );
}