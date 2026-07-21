import { useState, useEffect } from 'react';


export const VideoCarousel = ({ videos }: { videos: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [videos]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {videos.map((src, idx) => (
        <video
          key={idx}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};
