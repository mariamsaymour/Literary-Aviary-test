import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { BirdData, MultiFilterState } from '../types/bird';
import svgPaths from '../imports/svg-xnl6kpayx8';
import menuSvgPaths from '../imports/svg-t3euf89ls8';
import imgImage18 from 'figma:asset/1cc3580d7dcf9d76032997ff2085c6436c87bfb7.png';

// VisuallyHidden component for accessibility
const VisuallyHidden = ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => (
  <div
    style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: '0',
    }}
    {...props}
  >
    {children}
  </div>
);

interface MobileFilterHeaderProps {
  birds: BirdData[];
  filters: MultiFilterState;
  onFiltersChange: (filters: MultiFilterState) => void;
  onShuffleBirds?: () => void;
  isAudioMuted?: boolean;
  onToggleAudio?: () => void;
  isAuthenticated?: boolean;
  onOpenAdmin?: () => void;
  onDiscoverQuote?: () => void;
  onAbout?: () => void;
  onSubmitQuote?: () => void;
}

// Hamburger menu icon component
function HamburgerIcon() {
  return (
    <div className="relative shrink-0 size-6 p-[0px] px-[0px] py-[0px]" data-name="List">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="List">
          <path
            d={menuSvgPaths.p2136a900}
            fill="#856658"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

// Binoculars icon component with optional notification circle
function Binoculars({ showNotification = false }: { showNotification?: boolean }) {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Binoculars">
      {/* Background rounded rectangle */}
      <div className="absolute inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 33"
        >
          <rect
            fill="#E5D1C5"
            height="30"
            rx="9.02025"
            width="30"
            y="3"
          />
        </svg>
      </div>
      
      {/* Binoculars icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g id="Binoculars">
              <path
                d={svgPaths.p6b0f100}
                fill="#302420"
                id="Vector"
              />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Notification circle - positioned like in Figma design */}
      {showNotification && (
        <div className="absolute top-0 right-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32 33"
            width="32"
            height="33"
          >
            <circle
              cx="26.5605"
              cy="5.43555"
              fill="#66800B"
              r="4.06445"
              stroke="#536907"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

// Logo component for the menu header
function LogoIcon() {
  return (
    <div className="bg-[#695046] overflow-clip relative rounded-bl-[1.5px] rounded-br-[3px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 size-6">
      <div className="absolute left-[9.75px] size-[14.25px] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 15 15"
        >
          <g id="Frame 181">
            <rect
              fill="#695046"
              height="14.25"
              rx="4.50606"
              width="14.25"
            />
            <path d={menuSvgPaths.p2ea16180} fill="#FFF8F2" id="â" />
          </g>
        </svg>
      </div>
      <div className="absolute flex h-[16.817px] items-center justify-center left-[-4.65px] top-[11.82px] w-[19.013px]">
        <div className="flex-none rotate-[357.548deg]">
          <div className="h-[16.061px] relative w-[18.348px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19 17"
            >
              <g id="Group 52">
                <path
                  d={menuSvgPaths.p12846000}
                  fill="#DEC7BA"
                  id="Rectangle 1039"
                />
                <g id="Group 51">
                  <path
                    d={menuSvgPaths.p3281c500}
                    fill="#DEC7BA"
                    id="Vector 3"
                  />
                  <path
                    d={menuSvgPaths.pc3a9fa0}
                    fill="#DEC7BA"
                    id="Vector 4"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileFilterHeader({ 
  birds, 
  filters, 
  onFiltersChange,
  onShuffleBirds,
  isAudioMuted = false,
  onToggleAudio,
  isAuthenticated = false,
  onOpenAdmin,
  onDiscoverQuote,
  onAbout,
  onSubmitQuote
}: MobileFilterHeaderProps) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [tempFilters, setTempFilters] = useState<MultiFilterState>(filters);

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(value => value !== 'all');

  // Get unique values for filter options
  const filterOptions = {
    authors: Array.from(new Set(birds.map(bird => bird.author))).sort(),
    sources: Array.from(new Set(birds.map(bird => bird.source))).sort(),
    species: Array.from(new Set(birds.map(bird => bird.species))).sort(),
    moods: Array.from(new Set(birds.map(bird => bird.mood))).sort(),
    regions: Array.from(new Set(birds.map(bird => bird.region).filter(Boolean))).sort(),
  };

  // Get author surname for mobile display
  const getAuthorSurname = (fullName: string) => {
    const parts = fullName.split(' ');
    return parts[parts.length - 1];
  };

  // Get selected filter display text
  const getSelectedFiltersText = () => {
    const selectedItems = [];
    
    if (filters.author !== 'all') {
      selectedItems.push(getAuthorSurname(filters.author));
    }
    if (filters.source !== 'all') {
      selectedItems.push(filters.source);
    }
    if (filters.region !== 'all') {
      selectedItems.push(filters.region);
    }
    if (filters.mood !== 'all') {
      selectedItems.push(filters.mood);
    }
    if (filters.species !== 'all') {
      selectedItems.push(filters.species);
    }

    return selectedItems.join(', ');
  };

  // Handle opening filter modal
  const handleOpenFilters = () => {
    setTempFilters(filters);
    setShowFilterModal(true);
    // Prevent body scroll when modal is open
    document.body.classList.add('modal-open');
  };

  // Handle applying filters
  const handleApplyFilters = () => {
    onFiltersChange(tempFilters);
    setShowFilterModal(false);
    // Re-enable body scroll when modal closes
    document.body.classList.remove('modal-open');
  };

  // Handle modal close
  const handleModalClose = (open: boolean) => {
    setShowFilterModal(open);
    if (!open) {
      // Re-enable body scroll when modal closes
      document.body.classList.remove('modal-open');
    }
  };

  // Handle filter change in modal
  const handleTempFilterChange = (filterType: keyof MultiFilterState, value: string) => {
    setTempFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Handle discover random quote
  const handleDiscoverQuote = () => {
    if (onDiscoverQuote) {
      onDiscoverQuote();
    } else {
      // Fallback: select a random bird from filtered birds
      const filteredBirds = birds.filter(bird => {
        const matchesMood = filters.mood === 'all' || bird.mood === filters.mood;
        const matchesAuthor = filters.author === 'all' || bird.author === filters.author;
        const matchesSource = filters.source === 'all' || bird.source === filters.source;
        const matchesSpecies = filters.species === 'all' || bird.species === filters.species;
        const matchesRegion = filters.region === 'all' || bird.region === filters.region;
        
        return matchesMood && matchesAuthor && matchesSource && matchesSpecies && matchesRegion;
      });
      
      if (filteredBirds.length > 0) {
        const randomBird = filteredBirds[Math.floor(Math.random() * filteredBirds.length)];
        console.log('Discovering random quote:', randomBird);
      }
    }
  };

  return (
    <>
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
        {/* Mobile Header Row with Hamburger Menu and Binoculars */}
        <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative size-full">
          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="cursor-pointer">
                <HamburgerIcon />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-[308px] bg-[#faeee6] border-r border-[#e5d1c5] p-0 h-full [&>button]:hidden"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-full">
                <div className="bg-[#faeee6] box-border content-stretch flex flex-col min-h-full items-start justify-between p-[17.75px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full">
                {/* Menu Header and Navigation */}
                <div className="box-border content-stretch flex flex-col gap-[55px] items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Header with Logo and Close */}
                  <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                      <LogoIcon />
                      <div className="font-semibold italic leading-[0] relative shrink-0 text-[#302420] text-[20px] text-left text-nowrap uppercase" style={{ fontFamily: 'Cormorant', serif: '' }}>
                        <p className="block leading-[normal] whitespace-pre">Literary Aviary</p>
                      </div>
                    </div>
                    <SheetTrigger asChild>
                      <button className="relative shrink-0 size-6" data-name="X">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 24 24"
                        >
                          <g id="X">
                            <path
                              d={menuSvgPaths.p1d19b320}
                              fill="#695046"
                              id="Vector"
                            />
                          </g>
                        </svg>
                      </button>
                    </SheetTrigger>
                  </div>

                  {/* Navigation Items */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    {/* Explore Flocks */}
                    <button 
                      onClick={handleOpenFilters}
                      className="relative rounded-[9.02px] shrink-0 w-full hover:bg-[#f2dfd3] transition-colors"
                    >
                      <div className="relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-[11px] items-start justify-start px-[9.02px] py-3.5 relative w-full">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative shrink-0">
                            <div className="relative shrink-0 size-6" data-name="Binoculars">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 24 24"
                              >
                                <g id="Binoculars">
                                  <path
                                    d={menuSvgPaths.p2b3e5d00}
                                    fill="#9C7C6B"
                                    id="Vector"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-center leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#695046] text-left">
                            <div className="font-semibold not-italic relative shrink-0 text-[22.5px] text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                              <p className="block leading-[normal] whitespace-pre">Explore Flocks</p>
                            </div>
                            <div className="italic min-w-full relative shrink-0 text-[15.75px]" style={{ fontFamily: 'Crimson Text', serif: '', width: 'min-content' }}>
                              <p className="block leading-[normal]">Filter quotes to discover new connections</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Discover Quotes */}
                    <button 
                      onClick={handleDiscoverQuote}
                      className="relative rounded-[9.02px] shrink-0 w-full hover:bg-[#f2dfd3] transition-colors"
                    >
                      <div className="relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-[11px] items-start justify-start px-[9.02px] py-3.5 relative w-full">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative shrink-0">
                            <div className="relative shrink-0 size-6" data-name="BookOpenText">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 24 24"
                              >
                                <g id="BookOpenText">
                                  <path
                                    d={menuSvgPaths.p106ee280}
                                    fill="#9C7C6B"
                                    id="Vector"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-center leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#695046] text-left">
                            <div className="font-semibold not-italic relative shrink-0 text-[22.5px] text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                              <p className="block leading-[normal] whitespace-pre">Discover Quotes</p>
                            </div>
                            <div className="italic min-w-full relative shrink-0 text-[15.75px]" style={{ fontFamily: 'Crimson Text', serif: '', width: 'min-content' }}>
                              <p className="block leading-[normal]">Browse details &amp; data in quote view</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Change Breeze */}
                    {onShuffleBirds && (
                      <button 
                        onClick={onShuffleBirds}
                        className="relative rounded-[9.02px] shrink-0 w-full hover:bg-[#f2dfd3] transition-colors"
                      >
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-[11px] items-start justify-start px-[9.02px] py-3.5 relative w-full">
                            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative shrink-0">
                              <div className="relative shrink-0 size-6" data-name="Wind">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                >
                                  <g id="Wind">
                                    <path
                                      d={menuSvgPaths.p2a00fa00}
                                      fill="#9C7C6B"
                                      id="Vector"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-center leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#695046] text-left">
                              <div className="font-semibold not-italic relative shrink-0 text-[22.5px] text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                                <p className="block leading-[normal] whitespace-pre">Change breeze</p>
                              </div>
                              <div className="italic min-w-full relative shrink-0 text-[15.75px]" style={{ fontFamily: 'Crimson Text', serif: '', width: 'min-content' }}>
                                <p className="block leading-[normal]">Shuffle the flock's flight path</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    )}

                    {/* About */}
                    <button 
                      onClick={onAbout}
                      className="relative rounded-[9.02px] shrink-0 w-full hover:bg-[#f2dfd3] transition-colors"
                    >
                      <div className="relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-[11px] items-start justify-start px-[9.02px] py-3.5 relative w-full">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative shrink-0">
                            <div className="relative shrink-0 size-6" data-name="Info">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 24 24"
                              >
                                <g id="Info">
                                  <path
                                    d={menuSvgPaths.p40a9c00}
                                    fill="#9C7C6B"
                                    id="Vector"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#695046] text-left">
                            <div className="font-semibold not-italic relative shrink-0 text-[22.5px] text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                              <p className="block leading-[normal] whitespace-pre">About</p>
                            </div>
                            <div className="italic min-w-full relative shrink-0 text-[15.75px]" style={{ fontFamily: 'Crimson Text', serif: '', width: 'min-content' }}>
                              <p className="block leading-[normal]">Learn about the Aviary</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Bottom Button Section */}
                <div className="box-border content-stretch flex flex-col gap-[12.5px] items-center justify-center p-0 relative shrink-0 w-full pt-[36px] pr-[0px] pb-[0px] pl-[0px]">
                  {/* Mute Birdsong */}
                  {onToggleAudio && (
                    <button 
                      onClick={onToggleAudio}
                      className="bg-[#fff8f2] relative rounded-[9.02px] shrink-0 w-full hover:bg-[#f5ede4] transition-colors"
                      data-name="Button"
                    >
                      <div className="flex flex-row items-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-[6.765px] items-center justify-start p-[11px] relative w-full">
                          <div className="relative shrink-0 size-4" data-name="SpeakerSimpleSlash">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 16 16"
                            >
                              <g id="SpeakerSimpleSlash">
                                <path
                                  d={menuSvgPaths.p1af4bf00}
                                  fill="#9C7C6B"
                                  id="Vector"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="leading-[0] not-italic relative shrink-0 text-[#695046] text-[15.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                            <p className="block leading-none whitespace-pre">{isAudioMuted ? 'Unmute Birdsong' : 'Mute Birdsong'}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  )}

                  {/* Login/Settings Button */}
                  <button 
                    onClick={onOpenAdmin}
                    className="bg-[#e5d1c5] relative rounded-[9.02px] shrink-0 w-full hover:bg-[#d4c4b8] transition-colors"
                    data-name="Button"
                  >
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-[6.765px] items-center justify-start p-[11px] relative w-full">
                        <div className="relative shrink-0 size-4" data-name="UserCircle">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 16 16"
                          >
                            <g id="UserCircle">
                              <path
                                d={menuSvgPaths.p18daea80}
                                fill="#695046"
                                id="Vector"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="leading-[0] not-italic relative shrink-0 text-[#302420] text-[15.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                          <p className="block leading-none whitespace-pre">
                            {isAuthenticated ? 'Settings' : 'Login to Dashboard'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Submit a Quote */}
                  <button 
                    onClick={onSubmitQuote}
                    className="bg-[#4f382f] relative rounded-[9.02px] shrink-0 w-full hover:bg-[#3d2b1f] transition-colors"
                    data-name="Button"
                  >
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-[6.765px] items-center justify-start p-[11px] relative w-full">
                        <div className="relative shrink-0 size-4" data-name="PaperPlaneTilt">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 16 16"
                          >
                            <g id="PaperPlaneTilt">
                              <path
                                d={menuSvgPaths.p2668bb00}
                                fill="#CCAE9D"
                                id="Vector"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="leading-[0] not-italic relative shrink-0 text-[#faeee6] text-[15.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                          <p className="block leading-none whitespace-pre">Submit a Quote</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          {/* Explore Flocks Button - Icon only with notification circle when filters are active */}
          <div 
            className="box-border content-stretch flex flex-row items-center justify-center p-[0px] relative rounded-[9.02px] shrink-0 cursor-pointer px-[0px] py-[9px]"
            onClick={handleOpenFilters}
          >
            <Binoculars showNotification={hasActiveFilters} />
          </div>
        </div>

        {/* Description Text */}
        <div className="font-normal leading-[0] relative shrink-0 text-[#302420] text-[20px] text-center px-2" style={{ fontFamily: 'Cormorant', serif: '' }}>
          {hasActiveFilters ? (
            <p className="leading-[normal] text-center break-words mobile-text-wrap">
              {getSelectedFiltersText()}
            </p>
          ) : (
            <p className="leading-[normal] text-center mobile-text-wrap">
              <span className="block sm:inline">All authors, works, regions, emotions </span>
              <span className="italic" style={{ fontFamily: 'Cormorant', serif: '' }}>&amp; </span>
              <span>birds</span>
            </p>
          )}
        </div>
      </div>

      {/* Filter Modal */}
      <Dialog open={showFilterModal} onOpenChange={handleModalClose}>
        <DialogContent className="mobile-filter-modal bg-[#f2dfd3] box-border flex flex-col gap-[6.765px] items-center pb-[12.5px] pt-[9.02px] px-[9.02px] rounded-[9.02px] left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
          {/* Accessible Dialog Title and Description - Hidden but available to screen readers */}
          <VisuallyHidden>
            <DialogTitle>
              Explore Flocks - Filter Options
            </DialogTitle>
            <DialogDescription>
              Filter literary birds by authors, works, regions, emotions, and species. Select your preferences and click Apply Filters to update the view.
            </DialogDescription>
          </VisuallyHidden>
          {/* Modal Header */}
          <div className="bg-[#f2dfd3] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] relative rounded-[9.02px] shrink-0">
            <Binoculars />
            <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#695046] text-[14px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
              <p className="block leading-[normal] whitespace-pre">Explore Flocks</p>
            </div>
          </div>

          <div className="font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#695046] text-[12.5px] text-center" style={{ fontFamily: 'Crimson Text', serif: '', width: 'min-content' }}>
            <p className="block leading-[1.426]">Discover connections between:</p>
          </div>

          {/* Filter Options - Scrollable Content */}
          <div className="box-border content-stretch flex flex-col gap-[12.5px] items-center justify-center p-0 relative flex-1 w-full min-h-0 overflow-y-auto">
            {/* Authors */}
            <div className="bg-[#faeee6] relative rounded-[10px] shrink-0 w-full">
              <Select
                value={tempFilters.author}
                onValueChange={(value) => handleTempFilterChange('author', value)}
              >
                <SelectTrigger className="w-full bg-transparent border-none shadow-none">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-[7px] relative w-full">
                    <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#695046] text-[17.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                      <p className="block leading-[1.426] whitespace-pre">
                        {tempFilters.author === 'all' ? 'Authors' : tempFilters.author}
                      </p>
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Authors</SelectItem>
                  {filterOptions.authors.map(author => (
                    <SelectItem key={author} value={author}>{author}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Works */}
            <div className="bg-[#faeee6] relative rounded-[10px] shrink-0 w-full">
              <Select
                value={tempFilters.source}
                onValueChange={(value) => handleTempFilterChange('source', value)}
              >
                <SelectTrigger className="w-full bg-transparent border-none shadow-none">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-[7px] relative w-full">
                    <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#695046] text-[17.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                      <p className="block leading-[1.426] whitespace-pre">
                        {tempFilters.source === 'all' ? 'Works' : tempFilters.source}
                      </p>
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Works</SelectItem>
                  {filterOptions.sources.map(source => (
                    <SelectItem key={source} value={source}>{source}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Regions */}
            <div className="bg-[#faeee6] relative rounded-[10px] shrink-0 w-full">
              <Select
                value={tempFilters.region}
                onValueChange={(value) => handleTempFilterChange('region', value)}
              >
                <SelectTrigger className="w-full bg-transparent border-none shadow-none">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-[7px] relative w-full">
                    <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#695046] text-[17.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                      <p className="block leading-[1.426] whitespace-pre">
                        {tempFilters.region === 'all' ? 'Regions' : tempFilters.region}
                      </p>
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {filterOptions.regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Emotions */}
            <div className="bg-[#faeee6] relative rounded-[10px] shrink-0 w-full">
              <Select
                value={tempFilters.mood}
                onValueChange={(value) => handleTempFilterChange('mood', value)}
              >
                <SelectTrigger className="w-full bg-transparent border-none shadow-none">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-[7px] relative w-full">
                    <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#695046] text-[17.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                      <p className="block leading-[1.426] whitespace-pre capitalize">
                        {tempFilters.mood === 'all' ? 'Emotions' : tempFilters.mood}
                      </p>
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Emotions</SelectItem>
                  {filterOptions.moods.map(mood => (
                    <SelectItem key={mood} value={mood} className="capitalize">{mood}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Birds */}
            <div className="bg-[#faeee6] relative rounded-[10px] shrink-0 w-full">
              <Select
                value={tempFilters.species}
                onValueChange={(value) => handleTempFilterChange('species', value)}
              >
                <SelectTrigger className="w-full bg-transparent border-none shadow-none">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-[7px] relative w-full">
                    <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#695046] text-[17.75px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                      <p className="block leading-[1.426] whitespace-pre">
                        {tempFilters.species === 'all' ? 'Birds' : tempFilters.species}
                      </p>
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Birds</SelectItem>
                  {filterOptions.species.map(species => (
                    <SelectItem key={species} value={species}>{species}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>
          
          {/* Fixed Apply Filters Button */}
          <div className="bg-[#695046] relative rounded-[9.02px] shrink-0 w-full mt-4">
            <Button
              onClick={handleApplyFilters}
              className="flex flex-row items-center justify-center relative size-full w-full bg-transparent hover:bg-transparent border-none shadow-none p-0"
            >
              <div className="box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center px-[9.02px] py-[15.75px] relative w-full">
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#faeee6] text-[15.75px] text-center text-nowrap" style={{ fontFamily: 'Crimson Text', serif: '' }}>
                  <p className="block leading-[normal] whitespace-pre">
                    Apply filters
                  </p>
                </div>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}