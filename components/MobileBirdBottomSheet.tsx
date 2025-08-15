import React from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription,
  DrawerClose 
} from './ui/drawer';
import { BirdData } from '../types/bird';
import { getMoodStyles } from './utils/genreColors';
import { SvgImage } from './SvgImage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Volume2, VolumeX, X, ChevronLeft, ChevronRight, Shuffle, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from '../imports/svg-hj78jyc1uc';

interface MobileBirdBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  bird: BirdData | null;
  onNavigate?: (direction: 'previous' | 'next' | 'random') => void;
}

// Audio Player Component
function AudioPlayer({ bird }: { bird: BirdData }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handlePlayToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-row gap-[3px] items-center justify-start overflow-clip px-[12.5px] py-0 relative rounded-3xl">
      <audio 
        ref={audioRef}
        onEnded={handleAudioEnd}
        src={`/audio/${bird.species.toLowerCase().replace(/\s+/g, '_')}.mp3`}
      />
      
      {/* Play Button */}
      <button 
        onClick={handlePlayToggle}
        className="relative shrink-0 size-6 z-[2]" 
        data-name="Player Play"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="#F2DFD3" r="12" />
          <path 
            d={svgPaths.p2258ac80} 
            fill="#9C7C6B" 
          />
        </svg>
      </button>

      {/* Waveform */}
      <div className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start mr-[-2px] px-0 py-2 relative shrink-0">
        {[2, 8, 14, 4, 16, 14, 10, 10, 10, 14, 10, 16, 10, 4, 2].map((height, index) => (
          <div 
            key={index}
            className={`bg-[#9c7c6b] opacity-[0.66] rounded-[1px] shrink-0 w-0.5 ${
              isPlaying ? 'waveform-bar' : ''
            }`}
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}

// Detail Row Component
function DetailRow({ 
  label, 
  value, 
  isLight = false, 
  showMoodDot = false, 
  moodColor 
}: { 
  label: string; 
  value: string; 
  isLight?: boolean;
  showMoodDot?: boolean;
  moodColor?: string;
}) {
  return (
    <div className={`${isLight ? 'bg-[#fff8f2]' : 'bg-[#faeee6]'} relative shrink-0 w-full`}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[8px] relative w-full px-[8px] py-[12px] py-[16px]">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#695046] font-['Crimson_Text:Regular',_sans-serif] text-[15.75px] leading-[0] not-italic text-left">
            {label}
          </div>
          {showMoodDot && moodColor ? (
            <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
              <div 
                className="rounded-[7px] shrink-0 size-[9px]" 
                style={{ backgroundColor: moodColor }}
              />
              <div className="relative shrink-0 text-[#302420] text-[15.75px] text-left text-nowrap font-['Crimson_Text:Regular',_sans-serif] leading-[0] not-italic [text-decoration-line:underline] [text-decoration-style:dotted] [text-underline-offset:10%]">
                {value}
              </div>
            </div>
          ) : (
            <div className="relative shrink-0 text-[#302420] text-nowrap font-['Crimson_Text:Regular',_sans-serif] text-[15.75px] leading-[0] not-italic [text-decoration-line:underline] [text-decoration-style:dotted] [text-underline-offset:10%]">
              {value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Navigation Buttons Component
function NavigationButtons({ onNavigate }: { onNavigate?: (direction: 'previous' | 'next' | 'random') => void }) {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-[11px] items-start justify-start p-0 relative shrink-0 w-full">
      {/* Previous Button */}
      <button 
        onClick={() => onNavigate?.('previous')}
        className="basis-0 bg-[#f2dfd3] grow min-h-px min-w-px relative rounded-[9.02px] shrink-0 transition-all duration-200 hover:bg-[#e8ddd5] active:scale-95"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-[9.02px] py-[11px] relative w-full">
            <div className="flex items-center justify-center relative shrink-0">
              <ChevronLeft className="w-4 h-4 text-[#695046]" />
            </div>
            <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#695046] text-[15.75px] text-left text-nowrap">
              Previous
            </div>
          </div>
        </div>
      </button>

      {/* Next Button */}
      <button 
        onClick={() => onNavigate?.('next')}
        className="basis-0 bg-[#f2dfd3] grow min-h-px min-w-px relative rounded-[9.02px] shrink-0 transition-all duration-200 hover:bg-[#e8ddd5] active:scale-95"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-[9.02px] py-[11px] relative w-full">
            <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#695046] text-[15.75px] text-left text-nowrap">
              Next
            </div>
            <ChevronRight className="w-4 h-4 text-[#695046]" />
          </div>
        </div>
      </button>

      {/* Random Button - Full Width */}
      <button 
        onClick={() => onNavigate?.('random')}
        className="bg-[#f2dfd3] box-border content-stretch flex flex-row gap-1 items-center justify-center px-[9.02px] py-[11px] relative rounded-[9.02px] shrink-0 w-full transition-all duration-200 hover:bg-[#e8ddd5] active:scale-95"
      >
        <Shuffle className="w-4 h-4 text-[#695046]" />
        <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#695046] text-[15.75px] text-left text-nowrap">
          Random
        </div>
      </button>
    </div>
  );
}

export function MobileBirdBottomSheet({ 
  isOpen, 
  onClose, 
  bird,
  onNavigate 
}: MobileBirdBottomSheetProps) {

  // Updated mood colors matching the CircularBirdCard
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

  const moodStyles = bird ? getMoodStyles(bird.mood) : { bgColor: '#8BB0B1' };

  return (
    <Drawer 
      open={isOpen}
      snapPoints={[0.5, 1]}
      direction="bottom"
      modal={false}
      fadeFromIndex={0}
    >
      <DrawerContent 
        className="min-h-[90vh] bg-[#faeee6] border-0 p-0 rounded-tl-[38px] rounded-tr-[28px] shadow-[0px_-16px_48px_-16px_rgba(180,150,130,0.5),0px_-4px_16px_-4px_rgba(180,150,130,0.1)]"
        style={{ fontFamily: 'Crimson Text, serif' }}
      >
        <DrawerHeader className="sr-only">
          <DrawerTitle>
            {bird?.species || 'Bird'} Details
          </DrawerTitle>
          <DrawerDescription>
            Literary quote and details for {bird?.species || 'selected bird'} {bird?.author ? `by ${bird.author}` : ''}
          </DrawerDescription>
        </DrawerHeader>
        
        <DrawerClose asChild>
          <Button variant="ghost" className="absolute right-4 top-4 z-10" onClick={onClose}>
            <X className="w-5 h-5 text-[#695046]" />
          </Button>
        </DrawerClose>
          <div className="h-auto box-border content-stretch flex flex-col gap-[25.25px] items-center justify-start py-[12px] px-[25.25px] relative overflow-y-auto px-[25px] pt-[12px] pr-[25px] pb-[24px] pl-[25px]">
            
            {bird ? (
              <>
                {/* Bird SVG */}
                <div className="h-[72.529px] relative shrink-0 w-[53.824px]">
                  {bird.imageUrl.includes('.svg') ? (
                    <SvgImage 
                      src={bird.imageUrl}
                      alt={bird.species}
                      className="w-full h-full transition-all duration-300"
                      style={{
                        color: getMoodColor(bird.mood)
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageWithFallback
                        src={bird.imageUrl}
                        alt={bird.species}
                        className="w-full h-full object-cover rounded-full"
                        style={{
                          border: `2px solid ${getMoodColor(bird.mood)}`,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Quote */}
                <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                  <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[normal] relative shrink-0 text-[#160e0c] text-[24px] text-center w-full">
                    "{bird.quote}"
                  </div>
                </div>

                {/* Audio Player */}
                <div className="box-border content-stretch flex flex-col gap-[12.5px] items-center justify-center p-0 relative shrink-0 w-full">
                  <AudioPlayer bird={bird} />
                </div>

                {/* Bird Details */}
                <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-[25.25px] relative shrink-0 w-full">
                  <DetailRow label="Species" value={bird.species} isLight={true} />
                  <DetailRow label="Author" value={bird.author} />
                  <DetailRow label="Work" value={bird.source} isLight={true} />
                  <DetailRow label="Year" value={bird.year?.toString() || 'Unknown'} />
                  <DetailRow label="Region" value={bird.region || 'Unknown'} isLight={true} />
                  <DetailRow 
                    label="Emotion" 
                    value={bird.mood} 
                    showMoodDot={true}
                    moodColor={getMoodColor(bird.mood)}
                  />
                </div>

                {/* Navigation Buttons */}
                <NavigationButtons onNavigate={onNavigate} />
              </>
            ) : (
              /* Loading/No Bird State */
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="animate-pulse">
                  <div className="h-[72.529px] w-[53.824px] bg-[#e8ddd5] rounded-lg"></div>
                </div>
                <div className="text-[#695046] text-center">
                  <p className="font-['Crimson_Text:Regular',_sans-serif]">Loading bird details...</p>
                </div>
              </div>
            )}

          </div>
      </DrawerContent>
    </Drawer>
  );
}