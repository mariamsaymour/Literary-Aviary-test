import { BirdData } from '../types/bird';

// Scientific bird family classifications
const BIRD_FAMILIES: { [species: string]: string } = {
  // Corvidae - Crows, Ravens, Magpies
  'Raven': 'Corvidae',
  'Crow': 'Corvidae', 
  'Magpie': 'Corvidae',
  
  // Alaudidae - Larks
  'Lark': 'Alaudidae',
  
  // Turdidae - Thrushes (includes Nightingales, Robins)
  'Nightingale': 'Turdidae',
  'Robin': 'Turdidae',
  
  // Strigidae - True Owls
  'Owl': 'Strigidae',
  
  // Accipitridae - Hawks, Eagles, Kites
  'Eagle': 'Accipitridae',
  'Hawk': 'Accipitridae',
  'Kite': 'Accipitridae',
  
  // Falconidae - Falcons
  'Falcon': 'Falconidae',
  
  // Anatidae - Ducks, Geese, Swans
  'Swan': 'Anatidae',
  'Goose': 'Anatidae',
  
  // Columbidae - Doves and Pigeons
  'Dove': 'Columbidae',
  
  // Passeridae - Old World Sparrows
  'Sparrow': 'Passeridae',
  
  // Troglodytidae - Wrens
  'Wren': 'Troglodytidae',
  
  // Phasianidae - Pheasants, Peacocks, Chickens
  'Peacock': 'Phasianidae',
  'Rooster': 'Phasianidae',
  
  // Upupidae - Hoopoes
  'Hoopoe': 'Upupidae',
  
  // Psittacidae - True Parrots
  'Parrot': 'Psittacidae',
  
  // Pycnonotidae - Bulbuls
  'Bulbul': 'Pycnonotidae',
  
  // Diomedeidae - Albatrosses
  'Albatross': 'Diomedeidae',
  
  // Hirundinidae - Swallows and Martins
  'Swallow': 'Hirundinidae'
};

// Family display names (common names)
const FAMILY_DISPLAY_NAMES: { [family: string]: string } = {
  'Corvidae': 'Crows & Ravens',
  'Alaudidae': 'Larks',
  'Turdidae': 'Thrushes',
  'Strigidae': 'True Owls',
  'Accipitridae': 'Hawks & Eagles',
  'Falconidae': 'Falcons',
  'Anatidae': 'Waterfowl',
  'Columbidae': 'Doves & Pigeons',
  'Passeridae': 'Old World Sparrows',
  'Troglodytidae': 'Wrens',
  'Phasianidae': 'Pheasants & Allies',
  'Upupidae': 'Hoopoes',
  'Psittacidae': 'True Parrots',
  'Pycnonotidae': 'Bulbuls',
  'Diomedeidae': 'Albatrosses',
  'Hirundinidae': 'Swallows & Martins'
};

// Latin family names (scientific nomenclature)
const FAMILY_LATIN_NAMES: { [family: string]: string } = {
  'Corvidae': 'Corvidae',
  'Alaudidae': 'Alaudidae',
  'Turdidae': 'Turdidae',
  'Strigidae': 'Strigidae',
  'Accipitridae': 'Accipitridae',
  'Falconidae': 'Falconidae',
  'Anatidae': 'Anatidae',
  'Columbidae': 'Columbidae',
  'Passeridae': 'Passeridae',
  'Troglodytidae': 'Troglodytidae',
  'Phasianidae': 'Phasianidae',
  'Upupidae': 'Upupidae',
  'Psittacidae': 'Psittacidae',
  'Pycnonotidae': 'Pycnonotidae',
  'Diomedeidae': 'Diomedeidae',
  'Hirundinidae': 'Hirundinidae'
};

export function getBirdFamily(species: string): string {
  return BIRD_FAMILIES[species] || 'Unknown';
}

export function getFamilyDisplayName(family: string): string {
  return FAMILY_DISPLAY_NAMES[family] || family;
}

export function getFamilyLatinName(family: string): string {
  return FAMILY_LATIN_NAMES[family] || family;
}

export function getTopFamilies(birds: BirdData[], n: number = 5): Array<{ family: string; count: number }> {
  const familyCounts: { [family: string]: number } = {};
  
  birds.forEach(bird => {
    const family = getBirdFamily(bird.species);
    familyCounts[family] = (familyCounts[family] || 0) + 1;
  });
  
  return Object.entries(familyCounts)
    .map(([family, count]) => ({ family, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
}

// Get all birds in a specific family
export function getBirdsByFamily(birds: BirdData[], family: string): BirdData[] {
  return birds.filter(bird => getBirdFamily(bird.species) === family);
}

// Get family diversity statistics
export function getFamilyStats(birds: BirdData[]): {
  totalFamilies: number;
  averageBirdsPerFamily: number;
  mostDiverseFamily: string;
  familyDistribution: Array<{ family: string; count: number; percentage: number }>;
} {
  const familyCounts: { [family: string]: number } = {};
  
  birds.forEach(bird => {
    const family = getBirdFamily(bird.species);
    familyCounts[family] = (familyCounts[family] || 0) + 1;
  });
  
  const families = Object.keys(familyCounts);
  const totalFamilies = families.length;
  const totalBirds = birds.length;
  const averageBirdsPerFamily = totalBirds / totalFamilies;
  
  const mostDiverseFamily = Object.entries(familyCounts)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || '';
  
  const familyDistribution = Object.entries(familyCounts)
    .map(([family, count]) => ({
      family,
      count,
      percentage: (count / totalBirds) * 100
    }))
    .sort((a, b) => b.count - a.count);
  
  return {
    totalFamilies,
    averageBirdsPerFamily,
    mostDiverseFamily,
    familyDistribution
  };
}