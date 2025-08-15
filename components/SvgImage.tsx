import React from 'react';

interface SvgImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  fallback?: React.ReactNode;
}

export function SvgImage({ src, alt, className, style, onClick, fallback }: SvgImageProps) {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // If there's an error and we have a fallback, show it
  if (hasError && fallback) {
    return <div className={className} style={style} onClick={onClick}>{fallback}</div>;
  }

  return (
    <div 
      className={`svg-bird-container ${className || ''}`}
      style={style}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin opacity-50" />
        </div>
      )}
      <div 
        className="w-full h-full breathing-bird"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'currentColor',
          WebkitMask: `url(${src}) center/contain no-repeat`,
          mask: `url(${src}) center/contain no-repeat`,
          transformOrigin: 'center center'
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
      {/* Fallback regular img for browsers that don't support mask */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain fallback-img"
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}