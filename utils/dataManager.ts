import { BirdData } from '../types/bird';

const STORAGE_KEY = 'literary-aviary-birds';

export const DataManager = {
  // Save birds to localStorage
  saveBirds: (birds: BirdData[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(birds));
    } catch (error) {
      console.error('Failed to save birds to localStorage:', error);
    }
  },

  // Load birds from localStorage
  loadBirds: (defaultBirds: BirdData[]): BirdData[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Validate that the data has the expected structure
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('Failed to load birds from localStorage:', error);
    }
    
    // Return default birds if localStorage is empty or invalid
    return defaultBirds;
  },

  // Clear all data
  clearData: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear data from localStorage:', error);
    }
  },

  // Check if data exists in localStorage
  hasStoredData: (): boolean => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored !== null && stored.length > 0;
    } catch (error) {
      return false;
    }
  }
};