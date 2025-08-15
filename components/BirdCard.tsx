import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BirdData } from '../types/bird';
import { getGenreStyles } from './utils/genreColors';

interface BirdCardProps {
  bird: BirdData;
}

export function BirdCard({ bird }: BirdCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    playBirdCall();
  };

  const playBirdCall = async () => {
    if (audioRef.current) {
      try {
        setIsPlaying(true);
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        // Fallback: create a simple beep sound using Web Audio API
        createMockBirdCall();
      }
    } else {
      createMockBirdCall();
    }
  };

  const createMockBirdCall = () => {
    // Create a simple audio tone as a mock bird call
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different frequencies for different birds
    const frequencies: { [key: string]: number } = {
      'Raven': 200,
      'Mockingbird': 800,
      'Albatross': 300,
      'Nightingale': 1000,
      'Owl': 250,
      'Swan': 400,
      'Phoenix': 600,
      'Crow': 180,
      'Lark': 1200,
      'Robin': 900,
      'Sparrow': 1100,
      'Eagle': 350
    };
    
    oscillator.frequency.setValueAtTime(frequencies[bird.species] || 500, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.5);
    
    oscillator.onended = () => {
      setIsPlaying(false);
    };
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const stopAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const genreStyles = getGenreStyles(bird.genre);

  return (
    <div className="perspective-1000 h-80" style={genreStyles}>
      <audio
        ref={audioRef}
        src={bird.audioUrl}
        onEnded={handleAudioEnd}
        preload="none"
      />
      
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d genre-card"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={handleClick}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <Card 
          className="absolute inset-0 backface-hidden border-2"
          style={{ 
            borderColor: 'var(--genre-accent)',
            backgroundColor: 'var(--genre-secondary)'
          }}
        >
          <CardContent className="p-0 h-full">
            <div className="relative h-full overflow-hidden rounded-lg">
              <ImageWithFallback
                src={bird.imageUrl}
                alt={bird.species}
                className="w-full h-full object-cover"
              />
              
              {/* Genre badge */}
              <div className="absolute top-2 left-2">
                <Badge 
                  variant="secondary"
                  className="text-xs"
                  style={{
                    backgroundColor: 'var(--genre-accent)',
                    color: 'var(--genre-text)',
                    border: '1px solid var(--genre-primary)'
                  }}
                >
                  {bird.genre}
                </Badge>
              </div>
              
              {/* Audio control button */}
              <div className="absolute top-2 right-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                  onClick={stopAudio}
                  disabled={!isPlaying}
                >
                  {isPlaying ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>
              </div>
              
              <div 
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background: `linear-gradient(to top, var(--genre-primary), transparent)`
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">{bird.species}</h3>
                    <p className="text-white/80 text-sm">Click to hear call &amp; reveal quote</p>
                  </div>
                  {isPlaying && (
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-3 bg-white/80 animate-pulse"></div>
                      <div className="w-1 h-2 bg-white/80 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-4 bg-white/80 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-2 bg-white/80 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card 
          className="absolute inset-0 backface-hidden border-2"
          style={{ 
            transform: "rotateY(180deg)",
            borderColor: 'var(--genre-accent)',
            backgroundColor: 'var(--genre-secondary)',
            color: 'var(--genre-text)'
          }}
        >
          <CardContent className="p-6 h-full flex flex-col justify-center text-center">
            <div className="mb-4">
              <Badge 
                variant="outline"
                className="mb-3"
                style={{
                  borderColor: 'var(--genre-primary)',
                  color: 'var(--genre-primary)',
                  backgroundColor: 'transparent'
                }}
              >
                {bird.genre}
              </Badge>
            </div>
            <blockquote 
              className="text-sm italic mb-4 leading-relaxed"
              style={{ color: 'var(--genre-text)' }}
            >
              "{bird.quote}"
            </blockquote>
            <div className="mt-auto">
              <p 
                className="font-medium text-sm mb-1"
                style={{ color: 'var(--genre-primary)' }}
              >
                {bird.author}
              </p>
              <p 
                className="text-xs opacity-80"
                style={{ color: 'var(--genre-text)' }}
              >
                {bird.source} ({bird.year})
              </p>
            </div>
            <div className="mt-4">
              <p 
                className="text-xs opacity-70"
                style={{ color: 'var(--genre-text)' }}
              >
                Click to see {bird.species}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}