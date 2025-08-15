import { AppMode } from '../constants/app';

export function createNavigationHandlers(
  setAppMode: (mode: AppMode) => void,
  isAuthenticated: boolean,
  onResetGallery?: () => void
) {
  const handleShowAbout = () => {
    setAppMode('about');
  };

  const handleBackToGallery = () => {
    setAppMode('gallery');
  };

  const handleGoToInitialGallery = () => {
    setAppMode('gallery');
    // Reset gallery to initial state if we're already on gallery
    if (onResetGallery) {
      onResetGallery();
    }
  };

  const toggleAdminMode = () => {
    if (isAuthenticated) {
      setAppMode('admin');
    } else {
      setAppMode('login');
    }
  };

  const handleSubmitQuote = () => {
    // TODO: Implement quote submission functionality
    console.log('Submit quote functionality to be implemented');
  };

  return {
    handleShowAbout,
    handleBackToGallery,
    handleGoToInitialGallery,
    toggleAdminMode,
    handleSubmitQuote
  };
}