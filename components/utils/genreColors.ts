import { MOOD_COLORS } from '../../types/bird';

export function getMoodStyles(mood: string) {
  const colors = MOOD_COLORS[mood as keyof typeof MOOD_COLORS] || MOOD_COLORS.neutral;
  
  return {
    '--mood-primary': colors.primary,
    '--mood-secondary': colors.secondary,
    '--mood-accent': colors.accent,
    '--mood-text': colors.text,
  } as React.CSSProperties;
}

export function getMoodColor(mood: string, variant: 'primary' | 'secondary' | 'accent' | 'text' = 'primary') {
  const colors = MOOD_COLORS[mood as keyof typeof MOOD_COLORS] || MOOD_COLORS.neutral;
  return colors[variant];
}

// Helper function to get mood description
export function getMoodDescription(mood: string): string {
  const descriptions = {
    'love': 'Romantic, tender, passionate quotes',
    'happy': 'Joyful, uplifting, celebratory quotes',
    'sad': 'Melancholic, sorrowful, lamenting quotes', 
    'fear': 'Frightening, ominous, foreboding quotes',
    'anger': 'Passionate, intense, wrathful quotes',
    'surprise': 'Unexpected, wondrous, astonishing quotes',
    'neutral': 'Contemplative, balanced, observational quotes'
  };
  
  return descriptions[mood as keyof typeof descriptions] || 'Mixed emotional content';
}

// Helper to determine if a mood is "warm" or "cool" for styling
export function getMoodTemperature(mood: string): 'warm' | 'cool' | 'neutral' {
  const warmMoods = ['love', 'happy', 'anger'];
  const coolMoods = ['sad', 'fear'];
  
  if (warmMoods.includes(mood)) return 'warm';
  if (coolMoods.includes(mood)) return 'cool';
  return 'neutral';
}