export interface BirdData {
  id: number;
  species: string;
  imageUrl: string;
  audioUrl: string;
  quote: string;
  author: string;
  source: string;
  year: number;
  mood: 'happy' | 'sad' | 'fear' | 'anger' | 'surprise' | 'neutral' | 'love';
  wingspan: number; // Actually body length in cm - keeping name for compatibility
  region?: string; // Add geographic region for cultural context
}

export interface CircleNode {
  id: number;
  bird: BirdData;
  x: number;
  y: number;
  radius: number;
}

export type FilterOption = 'all' | 'mood' | 'author' | 'source' | 'species' | 'region';

// Updated to support multiple simultaneous filters
export interface MultiFilterState {
  mood: string;
  author: string;
  source: string;
  species: string;
  region: string;
}

// Updated mood-based color system matching Figma palette
export const MOOD_COLORS = {
  'love': {
    primary: '#e186be', // Pink from Figma
    secondary: 'color-mix(in srgb, #e186be 10%, white 90%)',
    accent: 'color-mix(in srgb, #e186be 80%, black 20%)',
    text: 'color-mix(in srgb, #e186be 90%, black 10%)'
  },
  'happy': {
    primary: '#e2a35f', // Orange from Figma
    secondary: 'color-mix(in srgb, #e2a35f 10%, white 90%)',
    accent: 'color-mix(in srgb, #e2a35f 80%, black 20%)',
    text: 'color-mix(in srgb, #e2a35f 90%, black 10%)'
  },
  'surprise': {
    primary: '#ded97a', // Yellow from Figma
    secondary: 'color-mix(in srgb, #ded97a 10%, white 90%)',
    accent: 'color-mix(in srgb, #ded97a 80%, black 20%)',
    text: 'color-mix(in srgb, #ded97a 90%, black 10%)'
  },
  'neutral': {
    primary: '#c9bdba', // Beige from Figma
    secondary: 'color-mix(in srgb, #c9bdba 10%, white 90%)',
    accent: 'color-mix(in srgb, #c9bdba 80%, black 20%)',
    text: 'color-mix(in srgb, #c9bdba 90%, black 10%)'
  },
  'sad': {
    primary: '#96a5cc', // Blue from Figma
    secondary: 'color-mix(in srgb, #96a5cc 10%, white 90%)',
    accent: 'color-mix(in srgb, #96a5cc 80%, black 20%)',
    text: 'color-mix(in srgb, #96a5cc 90%, black 10%)'
  },
  'fear': {
    primary: '#9f76ac', // Purple from Figma
    secondary: 'color-mix(in srgb, #9f76ac 10%, white 90%)',
    accent: 'color-mix(in srgb, #9f76ac 80%, black 20%)',
    text: 'color-mix(in srgb, #9f76ac 90%, black 10%)'
  },
  'anger': {
    primary: '#d88282', // Red from Figma
    secondary: 'color-mix(in srgb, #d88282 10%, white 90%)',
    accent: 'color-mix(in srgb, #d88282 80%, black 20%)',
    text: 'color-mix(in srgb, #d88282 90%, black 10%)'
  }
};

// Dark mode colors (keeping same structure but adjusting for contrast)
export const MOOD_COLORS_DARK = {
  'love': {
    primary: '#e186be',
    secondary: 'color-mix(in srgb, #e186be 20%, black 80%)',
    accent: 'color-mix(in srgb, #e186be 70%, white 30%)',
    text: 'color-mix(in srgb, #e186be 80%, white 20%)'
  },
  'happy': {
    primary: '#e2a35f',
    secondary: 'color-mix(in srgb, #e2a35f 20%, black 80%)',
    accent: 'color-mix(in srgb, #e2a35f 70%, white 30%)',
    text: 'color-mix(in srgb, #e2a35f 80%, white 20%)'
  },
  'surprise': {
    primary: '#ded97a',
    secondary: 'color-mix(in srgb, #ded97a 20%, black 80%)',
    accent: 'color-mix(in srgb, #ded97a 70%, black 30%)',
    text: 'color-mix(in srgb, #ded97a 80%, black 20%)'
  },
  'neutral': {
    primary: '#c9bdba',
    secondary: 'color-mix(in srgb, #c9bdba 20%, black 80%)',
    accent: 'color-mix(in srgb, #c9bdba 70%, white 30%)',
    text: 'color-mix(in srgb, #c9bdba 80%, white 20%)'
  },
  'sad': {
    primary: '#96a5cc',
    secondary: 'color-mix(in srgb, #96a5cc 20%, black 80%)',
    accent: 'color-mix(in srgb, #96a5cc 70%, white 30%)',
    text: 'color-mix(in srgb, #96a5cc 80%, white 20%)'
  },
  'fear': {
    primary: '#9f76ac',
    secondary: 'color-mix(in srgb, #9f76ac 20%, black 80%)',
    accent: 'color-mix(in srgb, #9f76ac 70%, white 30%)',
    text: 'color-mix(in srgb, #9f76ac 80%, white 20%)'
  },
  'anger': {
    primary: '#d88282',
    secondary: 'color-mix(in srgb, #d88282 20%, black 80%)',
    accent: 'color-mix(in srgb, #d88282 70%, white 30%)',
    text: 'color-mix(in srgb, #d88282 80%, white 20%)'
  }
};