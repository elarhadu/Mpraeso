import { useState, useRef } from 'react';
import { Hero } from '../components/Hero';
import { HeroTabs } from '../components/HeroTabs';
import { About } from '../components/About';
import { SubTowns } from '../components/SubTowns';
import { News } from '../components/News';
import { Tourism } from '../components/Tourism';
import { Projects } from '../components/Projects';
import { Events } from '../components/Events';
import { Churches } from '../components/Churches';
import { Diaspora } from '../components/Diaspora';
import { Gallery } from '../components/Gallery';
import { VideosTravelSection } from '../components/VideosTravelSection';
import { X } from 'lucide-react';
import heroBgVideo from '../../assests/mpraeso_view_day.mp4';
import nightVideo from '../../assests/mpraeso_view_night.mp4';

const tourVideos = [heroBgVideo, nightVideo];

export function HomePage() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const playerRef = useRef<HTMLVideoElement>(null);

  const openPlayer = () => {
    setVideoIndex(0);
    setShowPlayer(true);
  };

  const closePlayer = () => {
    setShowPlayer(false);
    setVideoIndex(0);
  };

  const handleVideoMetadata = () => {
    if (playerRef.current) playerRef.current.currentTime = 7;
  };

  const handleVideoEnd = () => {
    if (videoIndex < tourVideos.length - 1) {
      setVideoIndex(videoIndex + 1);
    } else {
      closePlayer();
    }
  };

  return (
    <>
      <Hero />
      <HeroTabs onVideoOpen={openPlayer} />
      <About />
      <SubTowns />
      <News />
      <Tourism />
      <Projects />
      <Events />
      <Churches />
      <Diaspora />
      <Gallery />
      <VideosTravelSection />

      {/* Full-screen video player */}
      {showPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <button
            onClick={closePlayer}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
          >
            <X size={24} />
          </button>
          <div className="absolute left-1/2 top-4 z-10 flex -translate-x-1/2 gap-2">
            {tourVideos.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-10 rounded-full transition-all ${i === videoIndex ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
          <video
            key={videoIndex}
            ref={playerRef}
            autoPlay
            playsInline
            onLoadedMetadata={handleVideoMetadata}
            onEnded={handleVideoEnd}
            className="h-full w-full object-cover"
            src={tourVideos[videoIndex]}
          />
        </div>
      )}
    </>
  );
}
