import React, { useState, useRef } from 'react';
import { DRONE_VIDEO_INFO } from '../data/siteContent';

export const DroneTour: React.FC = () => {
  const [activeTimestamp, setActiveTimestamp] = useState<string>(
    DRONE_VIDEO_INFO.timestamps[0]?.time || '0:05'
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleTimestampClick = (timeStr: string) => {
    setActiveTimestamp(timeStr);
    if (videoRef.current) {
      const parts = timeStr.split(':');
      if (parts.length === 2) {
        const seconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
        videoRef.current.currentTime = seconds;
        videoRef.current.play();
      }
    }
  };

  return (
    <section id="drone-tour" className="py-20 lg:py-28 bg-white border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="mb-8 lg:mb-10 text-left">
          <div className="w-10 h-px bg-[#9B6B4A] mb-4" />
          <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#2D2D2D] font-normal tracking-tight">
            Walk Through Our Facility
          </h2>
          <p className="text-base sm:text-lg text-[#6B6560] font-['DM_Sans',sans-serif] mt-2 max-w-2xl leading-relaxed">
            A virtual tour of our 30,000 m² manufacturing plant in Ambala.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="w-full aspect-video rounded-xl bg-[#F3F0EB] border border-[#E8E4DF] overflow-hidden relative shadow-xs">
          {DRONE_VIDEO_INFO.videoSrc ? (
            <video
              ref={videoRef}
              src={DRONE_VIDEO_INFO.videoSrc}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            /* Clean Minimal Placeholder when videoSrc is empty */
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(circle_at_top,rgba(196,154,124,0.10),transparent_40%),linear-gradient(180deg,#F8F5F0_0%,#F3F0EB_100%)]">
              <div className="w-16 h-16 rounded-full bg-white border border-[#E8E4DF] flex items-center justify-center text-[#9B6B4A] shadow-xs mb-4">
                <svg 
                  className="w-6 h-6 translate-x-0.5 fill-[#9B6B4A]" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
              </div>

              <p className="text-lg sm:text-xl font-medium text-[#2D2D2D] font-['DM_Sans',sans-serif]">
                Drone footage coming soon
              </p>

              <p className="text-xs text-[#6B6560] mt-2 max-w-md font-['DM_Sans',sans-serif] leading-relaxed">
                This area is reserved for a slow, cinematic plant tour once the footage is ready.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#6B6560] font-['DM_Sans',sans-serif]">
                <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E4DF]">Aerial plant pass</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E4DF]">Pouring area</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E4DF]">CNC shop floor</span>
              </div>
            </div>
          )}
        </div>

        {/* Timestamp Navigation */}
        <div className="mt-6 border-b border-[#E8E4DF] overflow-x-auto pb-1">
          <nav className="flex items-center gap-6 sm:gap-8 min-w-max pb-3" aria-label="Facility tour sections">
            {DRONE_VIDEO_INFO.timestamps.map((ts) => {
              const isActive = activeTimestamp === ts.time;
              return (
                <button
                  key={ts.time}
                  type="button"
                  onClick={() => handleTimestampClick(ts.time)}
                  className={`relative pb-1 text-sm sm:text-base font-['DM_Sans',sans-serif] transition-colors cursor-pointer text-left ${
                    isActive
                      ? 'text-[#2D2D2D] font-medium'
                      : 'text-[#6B6560] hover:text-[#2D2D2D]'
                  }`}
                >
                  <span>{ts.title}</span>
                  {isActive && (
                    <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#9B6B4A]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

      </div>
    </section>
  );
};
