import { useState, useRef } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { BirdData, MultiFilterState } from '../types/bird';
import { useIsMobile } from './ui/use-mobile';
import chevronSvgPaths from '../imports/svg-4zoxu4pfoz';

interface FilterHeaderProps {
  filters: MultiFilterState;
  onFilterChange: (filterType: keyof MultiFilterState, value: string) => void;
  filterOptions: {
    authors: string[];
    sources: string[];
    species: string[];
    moods: string[];
    regions: string[];
  };
  filteredCount: number;
  totalCount: number;
}

export function FilterHeader({ 
  filters, 
  onFilterChange, 
  filterOptions, 
  filteredCount, 
  totalCount 
}: FilterHeaderProps) {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  // Get mood color with updated palette
  const getMoodColor = (mood: string) => {
    const colorMap: { [key: string]: string } = {
      'love': '#DB73B0',
      'joy': '#DF8D3B', 
      'surprise': '#A7B75F',
      'calm': '#8BB0B1',
      'sadness': '#7681C2',
      'fear': '#8A5F97',
      'anger': '#CB5656'
    };
    return colorMap[mood] || '#8BB0B1';
  };

  // Ordered moods list for dropdown
  const orderedMoods = ['love', 'joy', 'surprise', 'calm', 'sadness', 'fear', 'anger'];

  const handleFilterClick = (filterType: keyof MultiFilterState, element?: HTMLElement) => {
    let rect;
    if (element) {
      rect = element.getBoundingClientRect();
    } else {
      // Fallback positioning
      rect = { left: 100, top: 100, bottom: 140 };
    }
    
    setDropdownStyle({
      position: 'fixed',
      left: `${rect.left - 15}px`,
      top: `${rect.bottom - 5}px`,
      zIndex: 50
    });
    
    setActiveFilter(filterType);
  };

  const handleFilterChange = (filterType: keyof MultiFilterState, value: string) => {
    onFilterChange(filterType, value);
    setActiveFilter(null);
  };

  const ChevronComponent = ({ filterType }: { filterType: keyof MultiFilterState }) => (
    <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-start pb-0 pt-[7px] px-0 relative shrink-0">
      <div className="flex h-[6.703px] items-center justify-center relative shrink-0 w-[11.656px]">
        <div className="flex-none rotate-[90deg]">
          <div 
            className="h-[11.664px] relative w-[6.705px] cursor-pointer" 
            onClick={(e) => handleFilterClick(filterType, e.currentTarget)}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 7 12"
            >
              <path
                d={chevronSvgPaths.p158bf9c0}
                fill="#341818"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFilterText = () => {
    return (
      <>
        {/* All authors */}
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p className="leading-[normal] text-[32px] whitespace-pre">
              <span className="font-['Cormorant',_serif] font-normal">
                {filters.author === 'all' ? 'All ' : ''}
              </span>
              <span 
                className="[text-decoration-line:underline] [text-decoration-style:dotted] [text-underline-offset:17.5%] [text-decoration-thickness:1px] cursor-pointer not-italic font-normal"
                onClick={(e) => handleFilterClick('author', e.currentTarget)}
              >
                {filters.author === 'all' ? 'authors' : filters.author}
              </span>
            </p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <ChevronComponent filterType="author" />
          </div>
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">,</p>
          </div>
        </div>

        {/* works */}
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p 
              className="[text-decoration-line:underline] [text-decoration-style:dotted] [text-underline-offset:17.5%] [text-decoration-thickness:1px] block leading-[normal] whitespace-pre cursor-pointer not-italic font-normal"
              onClick={(e) => handleFilterClick('source', e.currentTarget)}
            >
              {filters.source === 'all' ? 'works' : filters.source}
            </p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <ChevronComponent filterType="source" />
          </div>
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">,</p>
          </div>
        </div>

        {/* regions */}
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p 
              className="[text-decoration-line:underline] [text-decoration-style:dotted] [text-underline-offset:17.5%] [text-decoration-thickness:1px] block leading-[normal] whitespace-pre cursor-pointer not-italic font-normal"
              onClick={(e) => handleFilterClick('region', e.currentTarget)}
            >
              {filters.region === 'all' ? 'regions' : filters.region}
            </p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <ChevronComponent filterType="region" />
          </div>
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">,</p>
          </div>
        </div>

        {/* emotions */}
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p 
              className="[text-decoration-line:underline] [text-decoration-style:dotted] [text-underline-offset:17.5%] [text-decoration-thickness:1px] block leading-[normal] whitespace-pre cursor-pointer not-italic font-normal"
              onClick={(e) => handleFilterClick('mood', e.currentTarget)}
            >
              {filters.mood === 'all' ? 'emotions' : filters.mood}
            </p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <ChevronComponent filterType="mood" />
          </div>
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">,</p>
          </div>
        </div>

        {/* & birds */}
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
          <div className="font-['Cormorant',_serif] font-normal leading-[0] relative shrink-0 text-[#341818] text-[32px] text-left text-nowrap">
            <p className="leading-[normal] whitespace-pre">
              <span className="font-['Cormorant',_serif] font-normal italic">& </span>
              <span 
                className="[text-decoration-line:underline] [text-decoration-style:dotted] [text-underline-offset:17.5%] [text-decoration-thickness:1px] cursor-pointer not-italic font-normal"
                onClick={(e) => handleFilterClick('species', e.currentTarget)}
              >
                {filters.species === 'all' ? 'birds' : filters.species}
              </span>
            </p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <ChevronComponent filterType="species" />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={`relative literary-main-bg ${isMobile ? 'filter-header' : ''}`}>
      <div className={`${isMobile ? 'px-4 py-4' : 'px-8 py-6'} flex flex-col items-center justify-center`}>
        {/* Filter Display Text - Centered */}
        <div className="mb-4 relative">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0">
            {renderFilterText()}
          </div>
        </div>

        {/* Filter Count - Centered with Crimson Text Italic */}
        <div className="font-['Crimson_Text',_serif] italic leading-[0] relative shrink-0 text-[#856658] text-[11px] text-center">
          <p className="block leading-none whitespace-pre">
            Showing {filteredCount} of {totalCount} literary birds
          </p>
        </div>

        {/* Positioned Select Dropdowns */}
        <div style={dropdownStyle}>
          <Select 
            value={filters.author} 
            onValueChange={(value) => handleFilterChange('author', value)}
            open={activeFilter === 'author'}
            onOpenChange={(open) => setActiveFilter(open ? 'author' : null)}
          >
            <SelectTrigger className="w-[240px] opacity-0 pointer-events-none absolute">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="literary-dropdown">
              <SelectItem value="all">All Authors</SelectItem>
              {filterOptions.authors.map(author => (
                <SelectItem key={author} value={author}>{author}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={filters.source} 
            onValueChange={(value) => handleFilterChange('source', value)}
            open={activeFilter === 'source'}
            onOpenChange={(open) => setActiveFilter(open ? 'source' : null)}
          >
            <SelectTrigger className="w-[240px] opacity-0 pointer-events-none absolute">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="literary-dropdown">
              <SelectItem value="all">All Works</SelectItem>
              {filterOptions.sources.map(source => (
                <SelectItem key={source} value={source}>{source}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={filters.mood} 
            onValueChange={(value) => handleFilterChange('mood', value)}
            open={activeFilter === 'mood'}
            onOpenChange={(open) => setActiveFilter(open ? 'mood' : null)}
          >
            <SelectTrigger className="w-[240px] opacity-0 pointer-events-none absolute">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="literary-dropdown">
              <SelectItem value="all">All Emotions</SelectItem>
              {orderedMoods.filter(mood => filterOptions.moods.includes(mood)).map(mood => (
                <SelectItem key={mood} value={mood}>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getMoodColor(mood) }}
                    />
                    <span className="capitalize">{mood}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={filters.species} 
            onValueChange={(value) => handleFilterChange('species', value)}
            open={activeFilter === 'species'}
            onOpenChange={(open) => setActiveFilter(open ? 'species' : null)}
          >
            <SelectTrigger className="w-[240px] opacity-0 pointer-events-none absolute">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="literary-dropdown">
              <SelectItem value="all">All Birds</SelectItem>
              {filterOptions.species.map(species => (
                <SelectItem key={species} value={species}>{species}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={filters.region} 
            onValueChange={(value) => handleFilterChange('region', value)}
            open={activeFilter === 'region'}
            onOpenChange={(open) => setActiveFilter(open ? 'region' : null)}
          >
            <SelectTrigger className="w-[240px] opacity-0 pointer-events-none absolute">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="literary-dropdown">
              <SelectItem value="all">All Regions</SelectItem>
              {filterOptions.regions.map(region => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {activeFilter && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setActiveFilter(null)}
        />
      )}
    </div>
  );
}