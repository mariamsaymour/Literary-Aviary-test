import { useState, useMemo, useEffect, useRef } from 'react';
import { CircularBirdCard } from './CircularBirdCard';
import { FilterHeader } from './FilterHeader';
import { MobileFilterHeader } from './MobileFilterHeader';
import { MobileBirdBottomSheet } from './MobileBirdBottomSheet';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Volume2, VolumeX, Play, PanelLeft, PanelLeftClose, ChevronLeft, ChevronRight, Shuffle, X, Send, Settings } from 'lucide-react';
import { BirdData, MultiFilterState, CircleNode, MOOD_COLORS } from '../types/bird';
import { createCirclePacking } from './utils/circlePacking';
import { SvgImage } from './SvgImage';
import { useIsMobile } from './ui/use-mobile';
import svgPaths from '../imports/svg-4zxh7pbhhq';
import collapsedSvgPaths from '../imports/svg-fzcpfsohae';
import buttonSvgPaths from '../imports/svg-s61xatzvu3';

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

interface GalleryProps {
  birds: BirdData[];
  onOpenAdmin?: () => void;
  onShowAbout?: () => void;
  onSubmitQuote?: () => void;
  onGoToInitialGallery?: () => void;
  galleryResetRef?: React.MutableRefObject<(() => void) | null>;
  isAuthenticated?: boolean;
}

export function Gallery({ birds, onOpenAdmin, onShowAbout, onSubmitQuote, onGoToInitialGallery, galleryResetRef, isAuthenticated }: GalleryProps) {
  const isMobile = useIsMobile();
  
  // Determine if we should use mobile behavior - be more aggressive about mobile detection
  const shouldUseMobile = isMobile || (typeof window !== 'undefined' && window.innerWidth < 768);
  
  // Debug logging
  console.log('Mobile detection:', { 
    isMobile, 
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 'undefined',
    shouldUseMobile 
  });
  
  const [filters, setFilters] = useState<MultiFilterState>({
    mood: 'all',
    author: 'all',
    source: 'all',
    species: 'all',
    region: 'all'
  });
  
  const [containerDimensions, setContainerDimensions] = useState({ width: 1200, height: 800 });
  const [selectedBirdId, setSelectedBirdId] = useState<number | null>(null);
  const [isGlobalMuted, setIsGlobalMuted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showMobileBottomSheet, setShowMobileBottomSheet] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0); // For forcing circle packing recalculation
  const [isShuffling, setIsShuffling] = useState(false); // For transition state
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const birdGalleryRef = useRef<HTMLDivElement>(null);

  // Auto-collapse sidebar on mobile and adjust for mobile behavior
  useEffect(() => {
    if (shouldUseMobile) {
      setIsSidebarCollapsed(true);
    }
  }, [shouldUseMobile]);

  // Initialize mobile behavior more reliably
  useEffect(() => {
    // Force a re-check on mount to ensure mobile detection works
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsSidebarCollapsed(true);
    }
  }, []);

  // Update container dimensions on resize and sidebar collapse
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        
        if (shouldUseMobile) {
          // Mobile-specific dimensions
          const newWidth = Math.max(320, rect.width || window.innerWidth);
          const newHeight = Math.max(400, window.innerHeight - 200); // Account for header and filter
          
          setContainerDimensions({
            width: newWidth,
            height: newHeight
          });
        } else {
          // Desktop dimensions
          const newWidth = Math.max(800, rect.width || 1200);
          const newHeight = Math.max(600, window.innerHeight * 0.6 || 700);
          
          setContainerDimensions({
            width: newWidth,
            height: newHeight
          });
        }
      }
    };

    // Slight delay to allow sidebar animation to complete
    const timeoutId = setTimeout(updateDimensions, 100);
    
    window.addEventListener('resize', updateDimensions);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [isSidebarCollapsed, shouldUseMobile]);

  // Click outside to deselect
  /*
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (birdGalleryRef.current && !birdGalleryRef.current.contains(event.target as Node)) {
        return; // Don't deselect if clicking outside the gallery area
      }
      
      // Check if clicked on a bird
      const target = event.target as HTMLElement;
      const birdElement = target.closest('.circle-node');
      
      if (!birdElement && selectedBirdId !== null) {
        setSelectedBirdId(null);
        setIsPlayingAudio(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedBirdId]);
  */

  // Get unique values for filter options
  const filterOptions = useMemo(() => {
    const authors = Array.from(new Set(birds.map(bird => bird.author))).sort();
    const sources = Array.from(new Set(birds.map(bird => bird.source))).sort();
    const species = Array.from(new Set(birds.map(bird => bird.species))).sort();
    const moods = Array.from(new Set(birds.map(bird => bird.mood))).sort();
    const regions = Array.from(new Set(birds.map(bird => bird.region).filter(Boolean))).sort();
    
    return { authors, sources, species, moods, regions };
  }, [birds]);

  // Filter birds based on current combined filters
  const filteredBirds = useMemo(() => {
    return birds.filter(bird => {
      const matchesMood = filters.mood === 'all' || bird.mood === filters.mood;
      const matchesAuthor = filters.author === 'all' || bird.author === filters.author;
      const matchesSource = filters.source === 'all' || bird.source === filters.source;
      const matchesSpecies = filters.species === 'all' || bird.species === filters.species;
      const matchesRegion = filters.region === 'all' || bird.region === filters.region;
      
      return matchesMood && matchesAuthor && matchesSource && matchesSpecies && matchesRegion;
    });
  }, [birds, filters]);

  // Create circle packing layout
  const circleNodes = useMemo(() => {
    return createCirclePacking(
      filteredBirds, 
      containerDimensions.width, 
      containerDimensions.height,
      null
    );
  }, [filteredBirds, containerDimensions, shuffleKey]); // Include shuffleKey to force recalculation

  const handleFilterChange = (filterType: keyof MultiFilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setSelectedBirdId(null);
  };

  // Handle mobile filter changes
  const handleMobileFiltersChange = (newFilters: MultiFilterState) => {
    setFilters(newFilters);
    setSelectedBirdId(null);
  };

  // Auto-deselect bird when sidebar collapses (only on desktop manual collapse, not on mobile)
  useEffect(() => {
    if (isSidebarCollapsed && selectedBirdId && !shouldUseMobile) {
      // Only clear on desktop when sidebar is manually collapsed
      setSelectedBirdId(null);
      setIsPlayingAudio(false);
    }
  }, [isSidebarCollapsed, selectedBirdId, shouldUseMobile]);

  const handleBirdSelect = (birdId: number) => {
    console.log('handleBirdSelect called:', { birdId, shouldUseMobile, selectedBirdId });
    
    if (shouldUseMobile) {
      if (selectedBirdId === birdId) {
        console.log('Closing mobile bottom sheet');
        setShowMobileBottomSheet(false);
        setSelectedBirdId(null);
      } else {
        console.log('Opening mobile bottom sheet for bird:', birdId);
        setSelectedBirdId(birdId);
        setShowMobileBottomSheet(true);
        setIsPlayingAudio(false);
      }
    } else {
      // Desktop logic remains the same
      if (selectedBirdId === birdId) {
        setSelectedBirdId(null);
        setIsPlayingAudio(false);
      } else {
        setSelectedBirdId(birdId);
        setIsPlayingAudio(false);
      }
      
      if (isSidebarCollapsed) {
        setIsSidebarCollapsed(false);
      }
    }
  };

  const closeMobileBottomSheet = () => {
    console.log('closeMobileBottomSheet called');
    setShowMobileBottomSheet(false);
    setSelectedBirdId(null);
    setIsPlayingAudio(false);
  };
  
  const selectedBird = selectedBirdId ? birds.find(b => b.id === selectedBirdId) : null;
  console.log('Selected bird state:', { selectedBirdId, selectedBird: selectedBird?.species, showMobileBottomSheet });

  // Navigation functions that respect filters
  const getFilteredBirdIndex = (birdId: number) => {
    return filteredBirds.findIndex(bird => bird.id === birdId);
  };

  const navigateToNext = () => {
    if (!selectedBird || filteredBirds.length === 0) return;
    
    const currentIndex = getFilteredBirdIndex(selectedBird.id);
    const nextIndex = (currentIndex + 1) % filteredBirds.length;
    const nextBird = filteredBirds[nextIndex];
    
    setSelectedBirdId(nextBird.id);
    setIsPlayingAudio(false);
    
    // Auto-expand sidebar if collapsed when navigating to a bird
    if (isSidebarCollapsed && !shouldUseMobile) {
      setIsSidebarCollapsed(false);
    }
    
    if (shouldUseMobile) {
      setShowMobileBottomSheet(true);
    }
  };

  const navigateToPrevious = () => {
    if (!selectedBird || filteredBirds.length === 0) return;
    
    const currentIndex = getFilteredBirdIndex(selectedBird.id);
    const prevIndex = currentIndex === 0 ? filteredBirds.length - 1 : currentIndex - 1;
    const prevBird = filteredBirds[prevIndex];
    
    setSelectedBirdId(prevBird.id);
    setIsPlayingAudio(false);
    
    // Auto-expand sidebar if collapsed when navigating to a bird
    if (isSidebarCollapsed && !shouldUseMobile) {
      setIsSidebarCollapsed(false);
    }
    
    if (shouldUseMobile) {
      setShowMobileBottomSheet(true);
    }
  };

  const navigateToRandom = () => {
    if (filteredBirds.length === 0) return;
    
    let randomBird;
    do {
      const randomIndex = Math.floor(Math.random() * filteredBirds.length);
      randomBird = filteredBirds[randomIndex];
    } while (randomBird.id === selectedBirdId && filteredBirds.length > 1);
    
    setSelectedBirdId(randomBird.id);
    setIsPlayingAudio(false);
    
    if (shouldUseMobile) {
      setShowMobileBottomSheet(true);
    } else if (isSidebarCollapsed) {
      setIsSidebarCollapsed(false);
    }
  };

  // Mobile navigation handler for bottom sheet
  const handleMobileNavigate = (direction: 'previous' | 'next' | 'random') => {
    switch (direction) {
      case 'previous':
        navigateToPrevious();
        break;
      case 'next':
        navigateToNext();
        break;
      case 'random':
        navigateToRandom();
        break;
    }
  };

  // Handle reorder flight (shuffle birds) with smooth animation
  const handleReorderFlight = () => {
    setIsShuffling(true);
    setSelectedBirdId(null); // Deselect current bird
    setIsPlayingAudio(false);
    
    // Slight delay to ensure smooth transition
    setTimeout(() => {
      setShuffleKey(prev => prev + 1);
      
      // Reset shuffling state after animation completes
      setTimeout(() => {
        setIsShuffling(false);
      }, 500); // Match the animation duration
    }, 50);
  };

  // Handle audio mute toggle
  const handleAudioMuteToggle = () => {
    setIsGlobalMuted(!isGlobalMuted);
    if (!isGlobalMuted && isPlayingAudio) {
      setIsPlayingAudio(false);
    }
  };

  // Handle discover quote (open random bird details)
  const handleDiscoverQuote = () => {
    if (filteredBirds.length === 0) return;
    
    let randomBird;
    do {
      const randomIndex = Math.floor(Math.random() * filteredBirds.length);
      randomBird = filteredBirds[randomIndex];
    } while (randomBird.id === selectedBirdId && filteredBirds.length > 1);
    
    setSelectedBirdId(randomBird.id);
    setIsPlayingAudio(false);
    
    if (shouldUseMobile) {
      setShowMobileBottomSheet(true);
    } else if (isSidebarCollapsed) {
      setIsSidebarCollapsed(false);
    }
  };

  // Handle about page
  const handleAbout = () => {
    if (onShowAbout) {
      onShowAbout();
    }
  };

  // Handle submit quote
  const handleSubmitQuote = () => {
    if (onSubmitQuote) {
      onSubmitQuote();
    }
  };

  // Handle go to initial gallery (reset state)
  const handleGoToInitial = () => {
    // Reset all state to initial values
    setFilters({
      mood: 'all',
      author: 'all',
      source: 'all',
      species: 'all',
      region: 'all'
    });
    setSelectedBirdId(null);
    setIsPlayingAudio(false);
    setShowMobileBottomSheet(false);
    
    // Call the parent handler if provided
    if (onGoToInitialGallery) {
      onGoToInitialGallery();
    }
  };

  // Expose reset function through ref
  useEffect(() => {
    if (galleryResetRef) {
      galleryResetRef.current = handleGoToInitial;
    }
    return () => {
      if (galleryResetRef) {
        galleryResetRef.current = null;
      }
    };
  }, [galleryResetRef]);

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

  // Enhanced audio functions with autoplay
  const playBirdCall = async () => {
    if (!selectedBird || isGlobalMuted || isPlayingAudio) return;
    
    setIsPlayingAudio(true);
    
    // Try to play the real audio first
    if (audioRef.current && selectedBird.audioUrl) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        return;
      } catch (error) {
        console.warn('Real audio failed, falling back to synthetic sound:', error);
      }
    }
    
    // Fallback to synthetic bird sound
    createMockBirdCall();
  };

  // Auto-play audio when bird is selected (with delay)
  useEffect(() => {
    if (selectedBird && !isGlobalMuted) {
      const timeoutId = setTimeout(() => {
        playBirdCall();
      }, 800); // Small delay to let the user see the bird first
      
      return () => clearTimeout(timeoutId);
    }
  }, [selectedBird, isGlobalMuted]);

  const createMockBirdCall = () => {
    if (!selectedBird || isGlobalMuted) {
      setIsPlayingAudio(false);
      return;
    }
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Species-specific frequencies for more realistic bird calls
      const frequencies: { [key: string]: number } = {
        'Raven': 220, 'Crow': 200, 'Lark': 1200, 'Nightingale': 1000,
        'Owl': 250, 'Swan': 400, 'Robin': 900, 'Sparrow': 1100, 'Eagle': 350,
        'Dove': 700, 'Peacock': 450, 'Hawk': 380, 'Falcon': 420, 'Goose': 320,
        'Rooster': 280, 'Hoopoe': 600, 'Parrot': 750, 'Bulbul': 950, 'Kite': 340,
        'Swallow': 850, 'Magpie': 500, 'Wren': 1300, 'Albatross': 300
      };
      
      const baseFreq = frequencies[selectedBird.species] || 500;
      oscillator.frequency.setValueAtTime(baseFreq, audioContext.currentTime);
      oscillator.type = 'sine';
      
      // Create a more natural bird call pattern
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
      
      // Add some frequency variation for realism
      oscillator.frequency.linearRampToValueAtTime(baseFreq * 1.2, audioContext.currentTime + 0.5);
      oscillator.frequency.linearRampToValueAtTime(baseFreq * 0.8, audioContext.currentTime + 1.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 2);
      
      oscillator.onended = () => {
        setIsPlayingAudio(false);
      };
      
      // Fallback timeout in case onended doesn't fire
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 2500);
      
    } catch (error) {
      console.warn('Audio context not available:', error);
      setIsPlayingAudio(false);
    }
  };

  const handleAudioEnd = () => {
    setIsPlayingAudio(false);
  };

  const handleAudioError = () => {
    console.warn('Audio failed to load, using synthetic sound');
    createMockBirdCall();
  };
  
  return (
    <div className="flex h-screen bg-white">
      {/* Hidden audio element */}
      {selectedBird && (
        <audio
          ref={audioRef}
          src={selectedBird.audioUrl}
          onEnded={handleAudioEnd}
          onError={handleAudioError}
          preload="none"
        />
      )}

      {/* Desktop Sidebar - Hidden on Mobile */}
      {!shouldUseMobile && (
        <>
          {/* Expanded Sidebar */}
          {!isSidebarCollapsed && (
            <div 
              className="h-full flex flex-col literary-sidebar transition-all duration-500 ease-in-out w-96"
              style={{ backgroundColor: '#faeee6' }}
            >
        <div className="flex flex-col items-start justify-between pb-10 pt-[17px] px-[26px] h-full">
          {/* Header with Logo and Controls */}
          <div className="flex items-center justify-between p-0 w-full mb-0">
            {/* Logo */}
            <div 
              className="bg-[#856658] overflow-clip relative rounded-bl-[2px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 size-8 cursor-pointer hover:bg-[#695046] transition-colors duration-300"
              onClick={handleGoToInitial}
              title="Return to gallery"
            >
              <div className="absolute left-[13px] size-[19px] top-0">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  role="presentation"
                  viewBox="0 0 19 19"
                >
                  <rect
                    fill="#856658"
                    height="19"
                    rx="6.00808"
                    width="19"
                  />
                  <path d={svgPaths.pb734e00} fill="#FFF8F2" />
                </svg>
              </div>
              <div className="absolute flex h-[22.433px] items-center justify-center left-[-6.2px] top-[15.76px] w-[25.346px]">
                <div className="flex-none rotate-[357.548deg]">
                  <div className="h-[21.414px] relative w-[24.457px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 25 22"
                    >
                      <path
                        d={svgPaths.p11188200}
                        fill="#DEC7BA"
                      />
                      <path
                        d={svgPaths.p27cf0000}
                        fill="#DEC7BA"
                      />
                      <path
                        d={svgPaths.p2c50d100}
                        fill="#DEC7BA"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 
              className="font-bold italic leading-[0] text-[#856658] text-[22.5px] text-left text-nowrap cursor-pointer hover:text-[#695046] transition-colors duration-300"
              style={{ 
                fontFamily: 'Cormorant, serif'
              }}
              onClick={handleGoToInitial}
              title="Return to gallery"
            >
              Literary Aviary
            </h1>

            {/* Close Button */}
            <div 
              className="flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] shrink-0 expand-button action-button literary-chevron-button hover:bg-[#F2DFD3] transition-all duration-300 ease-in-out"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              title="Hide sidebar"
            >
              <div className="relative shrink-0 size-[18px]">
                <svg
                  className="block size-full transition-all duration-200 ease-in-out"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M11.25 4.5L6.75 9L11.25 13.5"
                    stroke="#856658"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-hidden rounded-lg w-full">
            <ScrollArea className="h-full literary-sidebar-scroll">
              <div className="sidebar-content-container">
                <div className="flex flex-col gap-[25.25px] items-center justify-center p-[24px] w-full">
                
                {/* Featured Bird Image */}
                {selectedBird && (
                  <div className="h-[93.38px] relative w-[69.297px] cursor-pointer" onClick={playBirdCall}>
                    <SvgImage
                      src={selectedBird.imageUrl}
                      alt={selectedBird.species}
                      className="w-full h-full clickable-bird"
                      style={{ 
                        color: getMoodColor(selectedBird.mood)
                      }}
                    />
                  </div>
                )}
                
                {/* Selected Quote Section */}
                <div className="flex flex-col gap-4 items-center w-full">
                  {selectedBird ? (
                    <blockquote 
                      className="font-semibold italic leading-[normal] text-[#160e0c] text-[36px] text-center w-full"
                      style={{ 
                        fontFamily: 'Cormorant, serif'
                      }}
                    >
                      {selectedBird.quote}
                    </blockquote>
                  ) : (
                    <p 
                      className="text-[36px] italic opacity-50 text-center w-full"
                      style={{ 
                        fontFamily: 'Cormorant, serif',
                        color: '#160e0c'
                      }}
                    >
                      Click on a bird to see its literary quote…
                    </p>
                  )}
                </div>

                {/* Audio Player */}
                {selectedBird && (
                  <div className="flex flex-col gap-[12.5px] items-center justify-center w-full">
                    <div className="flex flex-row-reverse gap-[3px] items-center justify-start overflow-clip px-[12.5px] py-0 rounded-3xl cursor-pointer" onClick={playBirdCall}>
                      {/* Play Button */}
                      <div className="order-2 relative shrink-0 size-6">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            fill="#F2DFD3"
                            r="12"
                          />
                          {isPlayingAudio ? (
                            // Pause icon - two rectangles
                            <g fill="#CCAE9D">
                              <rect x="9" y="8" width="2" height="8" rx="0.5" />
                              <rect x="13" y="8" width="2" height="8" rx="0.5" />
                            </g>
                          ) : (
                            // Play icon
                            <path
                              d={svgPaths.p2258ac80}
                              fill="#CCAE9D"
                            />
                          )}
                        </svg>
                      </div>

                      {/* Waveform */}
                      <div className="flex flex-row items-center justify-start order-1 overflow-clip pl-0 pr-0.5 py-0">
                        <div className="flex flex-row gap-1 h-8 items-center justify-start mr-[-2px] px-0 py-2">
                          {[2, 8, 14, 4, 16, 14, 10, 10, 10, 14, 10, 16, 10, 4, 2].map((height, i) => (
                            <div 
                              key={i}
                              className="bg-[#ccae9d] opacity-[0.66] rounded-[1px] shrink-0 w-0.5"
                              style={{ 
                                height: `${height}px`,
                                animation: isPlayingAudio ? `audioWaveForm 1.2s ease-in-out infinite ${i * 0.08}s` : 'none'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bird Details Section */}
                {selectedBird && (
                  <div className="flex flex-col items-start justify-start px-0 py-[25.25px] w-full">
                    {/* Species Row */}
                    <div className="bg-[#faeee6] w-full">
                      <div className="flex flex-row items-center justify-center h-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center leading-[0] px-1.5 py-[5px] text-[12.5px] text-left w-full" style={{ fontFamily: 'Crimson Text, serif' }}>
                          <div className="basis-0 font-normal grow min-h-px min-w-px text-[#856658]">
                            <p className="block leading-none">Species</p>
                          </div>
                          <div className="font-semibold text-[#160e0c] text-nowrap">
                            <p className="underline block leading-none whitespace-pre">{selectedBird.species}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Author Row */}
                    <div className="bg-[#f2dfd3] w-full">
                      <div className="flex flex-row items-center justify-center h-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center leading-[0] px-1.5 py-[5px] text-[12.5px] text-left w-full" style={{ fontFamily: 'Crimson Text, serif' }}>
                          <div className="basis-0 font-normal grow min-h-px min-w-px text-[#856658]">
                            <p className="block leading-none">Author</p>
                          </div>
                          <div className="font-semibold text-[#160e0c] text-nowrap">
                            <p className="underline block leading-none whitespace-pre">{selectedBird.author}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Work Row */}
                    <div className="bg-[#faeee6] w-full">
                      <div className="flex flex-row items-center justify-center h-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center leading-[0] px-1.5 py-[5px] text-[12.5px] text-left w-full" style={{ fontFamily: 'Crimson Text, serif' }}>
                          <div className="basis-0 font-normal grow min-h-px min-w-px text-[#856658]">
                            <p className="block leading-none">Work</p>
                          </div>
                          <div className="font-semibold text-[#160e0c] text-nowrap">
                            <p className="underline block leading-none whitespace-pre">{selectedBird.source}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Year Row */}
                    <div className="bg-[#f2dfd3] w-full">
                      <div className="flex flex-row items-center justify-center h-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center leading-[0] px-1.5 py-[5px] text-[12.5px] text-left w-full" style={{ fontFamily: 'Crimson Text, serif' }}>
                          <div className="basis-0 font-normal grow min-h-px min-w-px text-[#856658]">
                            <p className="block leading-none">Year</p>
                          </div>
                          <div className="font-semibold text-[#160e0c] text-nowrap">
                            <p className="underline block leading-none whitespace-pre">{selectedBird.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Region Row */}
                    {selectedBird.region && (
                      <div className="bg-[#faeee6] w-full">
                        <div className="flex flex-row items-center justify-center h-full">
                          <div className="flex flex-row gap-2.5 items-center justify-center leading-[0] px-1.5 py-[5px] text-[12.5px] text-left w-full" style={{ fontFamily: 'Crimson Text, serif' }}>
                            <div className="basis-0 font-normal grow min-h-px min-w-px text-[#856658]">
                              <p className="block leading-none">Region</p>
                            </div>
                            <div className="font-semibold text-[#160e0c] text-nowrap">
                              <p className="underline block leading-none whitespace-pre">{selectedBird.region}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Emotion Row */}
                    <div className={selectedBird.region ? "bg-[#f2dfd3]" : "bg-[#faeee6]"} style={{ width: "100%" }}>
                      <div className="flex flex-row items-center justify-center h-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center px-1.5 py-[5px] w-full">
                          <div className="basis-0 font-normal grow leading-[0] min-h-px min-w-px text-[#856658] text-[12.5px] text-left" style={{ fontFamily: 'Crimson Text, serif' }}>
                            <p className="block leading-none">Emotion</p>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-start">
                            <div 
                              className="h-[9px] rounded-[7px] w-[7px]"
                              style={{ backgroundColor: getMoodColor(selectedBird.mood) }}
                            />
                            <div className="font-semibold leading-[0] text-[#160e0c] text-[12.5px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text, serif' }}>
                              <p className="underline block leading-none whitespace-pre capitalize">{selectedBird.mood}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Controls */}
                {selectedBird && filteredBirds.length > 1 && (
                  <div className="flex flex-row gap-1.5 items-start justify-start">
                    <div 
                      className="bg-[#f2dfd3] flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] rounded-[9.02px] cursor-pointer hover:bg-[#ede0d4] transition-colors"
                      onClick={navigateToPrevious}
                    >
                      <ChevronLeft className="w-3 h-3 text-[#695046]" strokeWidth="2" />
                      <div className="font-semibold leading-[0] text-[#695046] text-[12.5px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text, serif' }}>
                        <p className="block leading-none whitespace-pre">Previous</p>
                      </div>
                    </div>
                    
                    <div 
                      className="bg-[#f2dfd3] flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] rounded-[9.02px] cursor-pointer hover:bg-[#ede0d4] transition-colors"
                      onClick={navigateToRandom}
                    >
                      <Shuffle className="w-3 h-3 text-[#695046]" strokeWidth="2" />
                      <div className="font-semibold leading-[0] text-[#695046] text-[12.5px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text, serif' }}>
                        <p className="block leading-none whitespace-pre">Random</p>
                      </div>
                    </div>
                    
                    <div 
                      className="bg-[#f2dfd3] flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] rounded-[9.02px] cursor-pointer hover:bg-[#ede0d4] transition-colors"
                      onClick={navigateToNext}
                    >
                      <div className="font-semibold leading-[0] text-[#695046] text-[12.5px] text-left text-nowrap" style={{ fontFamily: 'Crimson Text, serif' }}>
                        <p className="block leading-none whitespace-pre">Next</p>
                      </div>
                      <ChevronRight className="w-3 h-3 text-[#695046]" strokeWidth="2" />
                    </div>
                  </div>
                )}
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* Footer with Action Buttons */}
          <div className="[flex-flow:wrap] flex gap-3.5 h-[78.081px] items-start justify-center p-0 w-full">
            <div 
              className="flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[16px] rounded-[9.02px] cursor-pointer hover:bg-[#F2DFD3] transition-all duration-300 ease-in-out px-[16px] py-[20px]"
              onClick={handleAbout}
            >
              <div 
                className="font-semibold leading-[0] text-[#856658] text-[14px] text-left text-nowrap"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                About the Aviary
              </div>
            </div>
            
            <div 
              className="bg-[rgba(255,248,242,0)] flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[16px] rounded-[9.02px] cursor-pointer hover:bg-[#F2DFD3] transition-all duration-300 ease-in-out px-[16px] py-[20px]"
              onClick={onOpenAdmin}
              title={isAuthenticated ? "Open Settings" : "Login to Admin"}
            >
              <div 
                className="font-semibold leading-[0] text-[#856658] text-[14px] text-left text-nowrap"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                {isAuthenticated ? 'Settings' : 'Login'}
              </div>
            </div>
            
            <div className="bg-[#fff8f2] flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] rounded-[9.02px] cursor-pointer hover:bg-[#F2DFD3] transition-all duration-300 ease-in-out">
              <div className="relative shrink-0 size-[13.53px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    d={svgPaths.p3a7c5780}
                    stroke="#856658"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.35304"
                  />
                </svg>
                </div>
              <div 
                className="font-semibold leading-[0] text-[#856658] text-[14px] text-left text-nowrap"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Submit a Quote
              </div>
            </div>
          </div>
        </div>
            </div>
          )}

          {/* Collapsed Sidebar */}
          {isSidebarCollapsed && (
            <div className="h-full flex flex-col literary-sidebar collapsed-sidebar">
              <div className="flex flex-col items-start justify-between px-2.5 py-[17px] h-full">
                {/* Top Section - Logo and Expand Button */}
                <div className="flex flex-col gap-[15px] items-center justify-start shrink-0">
                  {/* Logo */}
                  <div 
                    className="bg-[#856658] overflow-clip relative rounded-bl-[2px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 size-8 sidebar-logo cursor-pointer hover:bg-[#695046] transition-colors duration-300"
                    onClick={handleGoToInitial}
                    title="Return to gallery"
                  >
                    <div className="absolute left-[13px] size-[19px] top-0">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        role="presentation"
                        viewBox="0 0 19 19"
                      >
                        <rect
                          fill="#856658"
                          height="19"
                          rx="6.00808"
                          width="19"
                        />
                        <path d={collapsedSvgPaths.pb734e00} fill="#FFF8F2" />
                      </svg>
                    </div>
                    <div className="absolute flex h-[22.433px] items-center justify-center left-[-6.2px] top-[15.76px] w-[25.346px]">
                      <div className="flex-none rotate-[357.548deg]">
                        <div className="h-[21.414px] relative w-[24.459px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 25 22"
                          >
                            <path
                              d={collapsedSvgPaths.p25bf2200}
                              fill="#DEC7BA"
                            />
                            <path
                              d={collapsedSvgPaths.p2b105400}
                              fill="#DEC7BA"
                            />
                            <path
                              d={collapsedSvgPaths.p2cdff600}
                              fill="#DEC7BA"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <div 
                    className="flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] shrink-0 expand-button action-button"
                    onClick={() => setIsSidebarCollapsed(false)}
                    title="Expand sidebar"
                  >
                    <div className="relative shrink-0 size-[18px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M6.75 13.5L11.25 9L6.75 4.5"
                          stroke="#856658"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Action Buttons */}
                <div className="flex flex-col gap-3.5 items-center justify-center shrink-0 w-full">
                  {/* Info Button (About the Aviary) */}
                  <div 
                    className="flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] shrink-0 action-button"
                    onClick={handleAbout}
                    title="About the Aviary"
                  >
                    <div className="relative shrink-0 size-[22px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 22 22"
                      >
                        <g clipPath="url(#clip0_2209_205)">
                          <path
                            d={collapsedSvgPaths.p294a0500}
                            stroke="#856658"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2209_205">
                            <rect fill="white" height="22" width="22" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Settings Button (Admin Dashboard) */}
                  <div 
                    className="bg-[#fff8f2] flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] shrink-0 w-[40.041px] action-button hover:bg-[#f5ede4]"
                    onClick={onOpenAdmin}
                    title={isAuthenticated ? 'Settings' : 'Login'}
                  >
                    <Settings className="w-[22px] h-[22px] text-[#856658]" strokeWidth="1.5" />
                  </div>

                  {/* Send Button (Submit a Quote) */}
                  <div 
                    className="bg-[#fff8f2] flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] shrink-0 w-[40.041px] action-button hover:bg-[#f5ede4]"
                    onClick={handleSubmitQuote}
                    title="Submit a Quote"
                  >
                    <div className="relative shrink-0 size-[22px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 22 22"
                      >
                        <g clipPath="url(#clip0_2209_202)">
                          <path
                            d={collapsedSvgPaths.p3ab2f880}
                            stroke="#856658"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2209_202">
                            <rect fill="white" height="22" width="22" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Main Content Area with Unified Background */}
      <div className="flex-1 flex flex-col literary-main-bg">


        {/* Mobile: Use new filter header, Desktop: Keep existing header with shuffle and mute */}
        {shouldUseMobile ? (
          <div className="px-[25.25px] py-[17.75px] bg-[#fff8f2] px-[20px] py-[16px]">
            <MobileFilterHeader
              birds={birds}
              filters={filters}
              onFiltersChange={handleMobileFiltersChange}
              onShuffleBirds={handleReorderFlight}
              isAudioMuted={isGlobalMuted}
              onToggleAudio={handleAudioMuteToggle}
              isAuthenticated={isAuthenticated}
              onOpenAdmin={onOpenAdmin}
              onDiscoverQuote={handleDiscoverQuote}
              onAbout={handleAbout}
              onSubmitQuote={handleSubmitQuote}
              onGoToInitialGallery={handleGoToInitial}
            />
          </div>
        ) : (
          <>
            
            {/* Filter Header - Desktop Only */}
            <FilterHeader
              filters={filters}
              onFilterChange={handleFilterChange}
              filterOptions={filterOptions}
              filteredCount={filteredBirds.length}
              totalCount={birds.length}
            />
          </>
        )}

        {/* Birds Container */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {/* Birds Circle Packing */}
          <div className="flex-1 relative w-full h-full">
            <div 
              ref={containerRef}
              className={`relative w-full h-full ${isMobile ? 'bird-gallery-mobile' : ''}`}
              style={{ 
                minHeight: shouldUseMobile ? '400px' : '500px',
                touchAction: shouldUseMobile ? 'pan-x pan-y' : 'auto'
              }}
            >
              <div ref={birdGalleryRef} className="w-full h-full">
                {circleNodes.map((circleNode) => (
                  <CircularBirdCard 
                    key={circleNode.id} 
                    circleNode={circleNode}
                    isSelected={!shouldUseMobile && selectedBirdId === circleNode.id}
                    isDimmed={!shouldUseMobile && selectedBirdId !== null && selectedBirdId !== circleNode.id}
                    onSelect={handleBirdSelect}
                    isShuffling={isShuffling}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Control Buttons - Centered at Bottom */}
          <div className="hidden md:flex items-center justify-center gap-2.5 py-6">
            {/* Reorder Flight Button */}
            <div 
              className={`bg-[#faeee6] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] rounded-[9.02px] cursor-pointer hover:bg-[#F2DFD3] transition-all duration-300 ease-in-out ${isShuffling ? 'opacity-75 pointer-events-none' : ''}`}
              onClick={handleReorderFlight}
              title="Shuffle bird positions"
            >
              <div className={`relative shrink-0 size-[13.53px] ${isShuffling ? 'animate-spin' : ''}`}>
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    d={buttonSvgPaths.p1bed0b60}
                    stroke="#856658"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div 
                className="font-semibold leading-[0] text-[#856658] text-[12.5px] text-left text-nowrap"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                {isShuffling ? 'Reordering...' : 'Reorder Flight'}
              </div>
            </div>

            {/* Audio Mute/Unmute Button */}
            <div 
              className={`bg-[#faeee6] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] rounded-[9.02px] cursor-pointer hover:bg-[#F2DFD3] transition-all duration-300 ease-in-out ${isGlobalMuted ? 'bg-red-50' : ''}`}
              onClick={handleAudioMuteToggle}
              title={isGlobalMuted ? 'Unmute audio' : 'Mute audio'}
            >
              <div className="relative shrink-0 size-[13.53px]">
                {isGlobalMuted ? (
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 14 14"
                  >
                    <g clipPath="url(#clip0_2213_173)">
                      <path
                        d={buttonSvgPaths.p3292fe80}
                        stroke="#dc2626"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2213_173">
                        <rect fill="white" height="13.5304" width="13.5304" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <Volume2 className="w-[13.53px] h-[13.53px] text-[#856658]" strokeWidth="1.5" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet - Only render on mobile */}
      {shouldUseMobile && (
        <MobileBirdBottomSheet
          isOpen={showMobileBottomSheet}
          onClose={closeMobileBottomSheet}
          bird={selectedBird}
          onNavigate={handleMobileNavigate}
        />
      )}
    </div>
  );
}