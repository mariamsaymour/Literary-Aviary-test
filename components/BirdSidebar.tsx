import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { SvgImage } from './SvgImage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BirdData } from '../types/bird';
import { getMoodStyles } from './utils/genreColors';

interface BirdSidebarProps {
  bird: BirdData | null;
  onClose: () => void;
}

export function BirdSidebar({ bird, onClose }: BirdSidebarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playBirdCall = async () => {
    if (!bird) return;
    
    if (audioRef.current) {
      try {
        setIsPlaying(true);
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        createMockBirdCall();
      }
    } else {
      createMockBirdCall();
    }
  };

  const createMockBirdCall = () => {
    if (!bird) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      const frequencies: { [key: string]: number } = {
        'Raven': 200, 'Mockingbird': 800, 'Albatross': 300, 'Nightingale': 1000,
        'Owl': 250, 'Swan': 400, 'Crow': 180, 'Lark': 1200, 'Robin': 900, 
        'Sparrow': 1100, 'Eagle': 350, 'Dove': 700, 'Peacock': 450, 'Hawk': 380,
        'Falcon': 420, 'Goose': 320, 'Rooster': 280, 'Hoopoe': 600, 'Parrot': 750,
        'Bulbul': 950, 'Kite': 340, 'Swallow': 850, 'Magpie': 500, 'Wren': 1300
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
    } catch (error) {
      console.warn('Audio context not available:', error);
      setIsPlaying(false);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  if (!bird) return null;

  const moodStyles = getMoodStyles(bird.mood);

  return (
    <AnimatePresence>
      <motion.div
        key="sidebar"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-96 bg-background/95 backdrop-blur-lg border-l shadow-2xl z-50 overflow-y-auto"
        style={moodStyles}
      >
        <audio
          ref={audioRef}
          src={bird.audioUrl}
          onEnded={handleAudioEnd}
          preload="none"
        />

        {/* Header */}
        <div 
          className="sticky top-0 p-6 border-b"
          style={{
            backgroundColor: `color-mix(in srgb, var(--mood-secondary) 90%, var(--mood-primary) 10%)`,
            borderColor: 'var(--mood-accent)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 
              className="text-xl font-medium"
              style={{ color: 'var(--mood-primary)' }}
            >
              {bird.species}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Large Bird Image */}
          <div className="flex justify-center mb-4">
            <div 
              className="w-32 h-32 flex items-center justify-center"
              style={{
                transform: `rotate(${Math.random() * 20 - 10}deg)` // Random rotation between -10 and 10 degrees
              }}
            >
              {bird.imageUrl.includes('.svg') ? (
                <SvgImage
                  src={bird.imageUrl}
                  alt={bird.species}
                  className="w-full h-full"
                  style={{ color: 'var(--mood-primary)' }}
                />
              ) : (
                <ImageWithFallback
                  src={bird.imageUrl}
                  alt={bird.species}
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    border: `3px solid var(--mood-primary)`,
                  }}
                />
              )}
            </div>
          </div>

          {/* Audio Controls */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={isPlaying ? stopAudio : playBirdCall}
              className="flex items-center gap-2"
              style={{
                borderColor: 'var(--mood-primary)',
                color: 'var(--mood-primary)'
              }}
            >
              {isPlaying ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  Stop Call
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  Play Bird Call
                </>
              )}
            </Button>
          </div>

          {/* Audio Visualization */}
          {isPlaying && (
            <div className="flex justify-center mt-3">
              <div className="flex items-center gap-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 20 + 10}px`,
                      backgroundColor: 'var(--mood-primary)',
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '0.8s'
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quote */}
          <div>
            <h3 
              className="text-sm font-medium mb-3 uppercase tracking-wide"
              style={{ color: 'var(--mood-primary)' }}
            >
              Literary Quote
            </h3>
            <blockquote 
              className="text-lg italic leading-relaxed"
              style={{ color: 'var(--mood-text)' }}
            >
              "{bird.quote}"
            </blockquote>
          </div>

          {/* Author & Source */}
          <div className="space-y-3">
            <div>
              <h4 
                className="text-sm font-medium mb-1 uppercase tracking-wide"
                style={{ color: 'var(--mood-primary)' }}
              >
                Author
              </h4>
              <p 
                className="text-base"
                style={{ color: 'var(--mood-text)' }}
              >
                {bird.author}
              </p>
            </div>

            <div>
              <h4 
                className="text-sm font-medium mb-1 uppercase tracking-wide"
                style={{ color: 'var(--mood-primary)' }}
              >
                Work
              </h4>
              <p 
                className="text-base"
                style={{ color: 'var(--mood-text)' }}
              >
                {bird.source} ({bird.year})
              </p>
            </div>

            {bird.region && (
              <div>
                <h4 
                  className="text-sm font-medium mb-1 uppercase tracking-wide"
                  style={{ color: 'var(--mood-primary)' }}
                >
                  Region
                </h4>
                <p 
                  className="text-base"
                  style={{ color: 'var(--mood-text)' }}
                >
                  {bird.region}
                </p>
              </div>
            )}
          </div>

          {/* Bird Details */}
          <div 
            className="p-4 rounded-lg"
            style={{
              backgroundColor: `color-mix(in srgb, var(--mood-secondary) 95%, var(--mood-primary) 5%)`
            }}
          >
            <h4 
              className="text-sm font-medium mb-3 uppercase tracking-wide"
              style={{ color: 'var(--mood-primary)' }}
            >
              Bird Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Body Length:</span>
                <span 
                  className="font-medium"
                  style={{ color: 'var(--mood-primary)' }}
                >
                  {bird.wingspan} cm
                </span>
              </div>
              <div className="flex justify-between">
                <span>Quote Emotion:</span>
                <span 
                  className="font-medium capitalize"
                  style={{ color: 'var(--mood-primary)' }}
                >
                  {bird.mood}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}