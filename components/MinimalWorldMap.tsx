import Group1 from '../imports/Group1';

interface RegionData {
  region: string;
  count: number;
  opacity: number;
}

interface MinimalWorldMapProps {
  regionData: RegionData[];
}

export function MinimalWorldMap({ regionData }: MinimalWorldMapProps) {
  // Create a mapping of region counts for dynamic opacity
  const regionOpacityMap: { [key: string]: number } = {};
  regionData.forEach(region => {
    regionOpacityMap[region.region] = Math.max(region.opacity, 0.1); // Minimum 10% opacity
  });

  return (
    <div className="w-full h-80 bg-slate-50 rounded-lg p-6 relative overflow-hidden">
      <div className="w-full h-full relative">
        {/* Use CSS variables to control the fill opacity */}
        <style>
          {`
            .world-map-container {
              --fill-0: rgba(169, 143, 137, ${regionOpacityMap['North America'] || 0.1});
            }
            .world-map-container svg path {
              fill: var(--fill-0);
              transition: opacity 0.3s ease;
            }
          `}
        </style>
        
        {/* World map with brown coloring */}
        <div className="world-map-container w-full h-full">
          <Group1 />
        </div>
        
        {/* Overlay region labels and counts */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* North America - positioned over the left continent */}
            <div className="absolute" style={{ left: '20%', top: '30%' }}>
              <div className="text-center">
                <div className="text-sm font-medium text-[#341818]">North America</div>
                <div className="text-xs text-[#5a3636]">
                  ({regionData.find(r => r.region === 'North America')?.count || 0})
                </div>
              </div>
            </div>
            
            {/* Europe - positioned over the center area */}
            <div className="absolute" style={{ left: '45%', top: '25%' }}>
              <div className="text-center">
                <div className="text-sm font-medium text-[#341818]">Europe</div>
                <div className="text-xs text-[#5a3636]">
                  ({regionData.find(r => r.region === 'Europe')?.count || 0})
                </div>
              </div>
            </div>
            
            {/* Asia - positioned over the large right continent */}
            <div className="absolute" style={{ left: '70%', top: '30%' }}>
              <div className="text-center">
                <div className="text-sm font-medium text-[#341818]">Asia</div>
                <div className="text-xs text-[#5a3636]">
                  ({regionData.find(r => r.region === 'Asia')?.count || 0})
                </div>
              </div>
            </div>
            
            {/* Africa - positioned over center-lower continent */}
            <div className="absolute" style={{ left: '50%', top: '55%' }}>
              <div className="text-center">
                <div className="text-sm font-medium text-[#341818]">Africa</div>
                <div className="text-xs text-[#5a3636]">
                  ({regionData.find(r => r.region === 'Africa')?.count || 0})
                </div>
              </div>
            </div>
            
            {/* South America - positioned over bottom-left */}
            <div className="absolute" style={{ left: '30%', top: '70%' }}>
              <div className="text-center">
                <div className="text-sm font-medium text-[#341818]">South America</div>
                <div className="text-xs text-[#5a3636]">
                  ({regionData.find(r => r.region === 'South America')?.count || 0})
                </div>
              </div>
            </div>
            
            {/* Oceania - positioned over bottom-right */}
            <div className="absolute" style={{ left: '80%', top: '75%' }}>
              <div className="text-center">
                <div className="text-sm font-medium text-[#341818]">Oceania</div>
                <div className="text-xs text-[#5a3636]">
                  ({regionData.find(r => r.region === 'Oceania')?.count || 0})
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}