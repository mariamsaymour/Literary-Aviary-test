import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SvgImage } from './SvgImage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BirdData, CircleNode } from '../types/bird';

interface CircularBirdCardProps {
  circleNode: CircleNode;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: (birdId: number) => void;
  isShuffling?: boolean;
}

export function CircularBirdCard({ circleNode, isSelected, isDimmed, onSelect, isShuffling = false }: CircularBirdCardProps) {
  const { bird, x, y, radius } = circleNode;

  // Validate positioning values to prevent NaN errors
  const validX = typeof x === 'number' && !isNaN(x) && isFinite(x) ? x : 100;
  const validY = typeof y === 'number' && !isNaN(y) && isFinite(y) ? y : 100;
  const validRadius = typeof radius === 'number' && !isNaN(radius) && isFinite(radius) && radius > 0 ? radius : 50;

  // Generate consistent rotation for each bird based on its ID
  const rotation = useMemo(() => {
    const seed = bird.id * 2654435761;
    return ((seed % 2000) / 100) - 10; // Range: -10 to 10 degrees
  }, [bird.id]);

  // Generate consistent animation delay for shuffle effect
  const animationDelay = useMemo(() => {
    const seed = bird.id * 1664525 + 1013904223;
    return (seed % 200) / 1000; // Range: 0 to 0.2 seconds
  }, [bird.id]);

  const handleClick = () => {
    onSelect(bird.id);
  };

  const diameter = validRadius * 2;

  // Updated mood colors matching the new palette and names
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

  const moodColor = getMoodColor(bird.mood);

  const fallbackContent = (
    <div 
      className="w-full h-full rounded-full flex items-center justify-center text-white font-medium"
      style={{
        backgroundColor: moodColor,
        fontSize: validRadius > 60 ? '14px' : '10px'
      }}
    >
      {bird.species.charAt(0)}
    </div>
  );

  return (
    <motion.div 
      className={`absolute circle-node cursor-pointer ${isShuffling ? 'bird-shuffling' : ''}`}
      style={{ 
        left: `${validX - validRadius}px`,
        top: `${validY - validRadius}px`,
        width: `${diameter}px`,
        height: `${diameter}px`,
      }}
      animate={{
        left: validX - validRadius,
        top: validY - validRadius,
        width: diameter,
        height: diameter,
        scale: isSelected ? 1.15 : 1,
        opacity: isDimmed ? 0.4 : 1, // Just reduce opacity, no greyscale
      }}
      transition={{ 
        duration: 0.6,
        delay: animationDelay,
        ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier for natural bird flight
        type: "tween"
      }}
      onClick={handleClick}
      whileHover={!isDimmed ? { scale: isSelected ? 1.18 : 1.05 } : {}}
    >
      <div 
        className={`relative w-full h-full mood-${bird.mood}`}
        style={{ 
          borderRadius: '50%',
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center',
          backgroundColor: 'transparent',
        }}
      >

        {/* Main Bird Image */}
        <div 
          className="w-full h-full flex items-center justify-center relative z-10"
          style={{
            transform: 'scale(1.4)',
            padding: '10%'
          }}
        >
          {bird.imageUrl.includes('.svg') ? (
            <SvgImage
              src={bird.imageUrl}
              alt={bird.species}
              className="w-full h-full transition-all duration-300"
              fallback={fallbackContent}
              style={{
                // Let CSS mood filters handle the coloring
                color: moodColor // Fallback for any CSS inheritance
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ImageWithFallback
                src={bird.imageUrl}
                alt={bird.species}
                className="w-full h-full object-cover rounded-full"
                style={{
                  border: `2px solid ${moodColor}`,
                  filter: `sepia(0.3) hue-rotate(10deg) saturate(1.1) brightness(${isSelected ? 1.1 : isDimmed ? 0.8 : 1})`
                }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}