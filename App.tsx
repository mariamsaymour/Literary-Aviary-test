import { useState, useEffect, useRef } from 'react';
import { Gallery } from './components/Gallery';
import { AdminInterface } from './components/AdminInterface';
import { AdminLogin } from './components/AdminLogin';
import { About } from './components/About';
import { LoadingScreen } from './components/LoadingScreen';
import { BirdData } from './types/bird';
import { DataManager } from './utils/dataManager';
import { defaultBirdsData } from './data/defaultBirds';
import { createNavigationHandlers } from './utils/navigation';
import { useAuth } from './hooks/useAuth';
import { AppMode } from './constants/app';
import { Toaster } from "sonner";  // ✅ Correct - just the package name

export default function App() {
  const [birds, setBirds] = useState<BirdData[]>([]);
  const [appMode, setAppMode] = useState<AppMode>('gallery');
  const [isLoading, setIsLoading] = useState(true);
  const galleryResetRef = useRef<(() => void) | null>(null);

  const { isAuthenticated, handleLogin, handleLogout } = useAuth();

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
  const onLogin = () => {
    handleLogin();
    setAppMode('admin');
  };

  // Handle logout
  const onLogout = () => {
    handleLogout();
    setAppMode('gallery');
  };

  // Handle gallery reset to initial state
  const handleResetGallery = () => {
    if (galleryResetRef.current) {
      galleryResetRef.current();
    }
  };

  // Create navigation handlers
  const {
    handleShowAbout,
    handleBackToGallery,
    handleGoToInitialGallery,
    toggleAdminMode,
    handleSubmitQuote
  } = createNavigationHandlers(setAppMode, isAuthenticated, handleResetGallery);

  // Show loading state
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Main Content */}
      {appMode === 'about' && (
        <About 
          onBack={handleGoToInitialGallery}
          onSubmitQuote={handleSubmitQuote}
        />
      )}
      
      {appMode === 'admin' && isAuthenticated && (
        <AdminInterface
          birds={birds}
          onBirdsUpdate={handleBirdsUpdate}
          onClose={handleBackToGallery}
          onLogout={onLogout}
        />
      )}
      
      {appMode === 'login' && (
        <AdminLogin onLogin={onLogin} />
      )}
      
      {appMode === 'gallery' && (
        <Gallery 
          birds={birds} 
          onOpenAdmin={toggleAdminMode} 
          onShowAbout={handleShowAbout}
          onSubmitQuote={handleSubmitQuote}
          onGoToInitialGallery={handleGoToInitialGallery}
          galleryResetRef={galleryResetRef}
          isAuthenticated={isAuthenticated} 
        />
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