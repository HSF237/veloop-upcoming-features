import React, { useState, useEffect, useRef } from 'react';
import styles from './UpcomingFeatureCard.module.css';

export const FeatureMedia = ({ type, videoUrl, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Viewport-aware playback
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current || !videoUrl) return;

    if (isVisible) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay prevented or failed:", err);
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [isVisible, videoUrl]);

  // Determine ambient glow color based on type to match FeatureVisuals.jsx
  let glowColor = 'transparent';
  if (type === 'team-battle') glowColor = 'radial-gradient(circle, rgba(239,68,68,0.35) 0%, rgba(59,130,246,0.35) 100%)';
  else if (type === 'lucky-draw') glowColor = 'radial-gradient(circle, rgba(212,175,55,0.38) 0%, transparent 70%)';
  else if (type === 'milestone-rewards') glowColor = 'radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 70%)';
  else if (type === 'collectible-cards') glowColor = 'radial-gradient(circle, rgba(168,85,247,0.38) 0%, transparent 70%)';
  else if (type === 'surprise-gift') glowColor = 'radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)';
  else if (type === 'mystery-chest') glowColor = 'radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 70%)';
  else if (type === 'referral-network') glowColor = 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 70%)';

  return (
    <div ref={containerRef} className={styles.visualWrapper} style={{ width: '100%', height: '100%' }}>
      <div
        className={styles.ambientGlow}
        style={{ background: glowColor }}
      />
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          className={styles.visualImage}
          style={{ objectFit: 'contain', background: 'transparent' }}
          aria-label={title || "Feature Animation"}
        />
      ) : (
        <div style={{ color: 'rgba(255,255,255,0.5)', padding: '10px', fontSize: '0.8rem', textAlign: 'center' }}>
          Video missing
        </div>
      )}
    </div>
  );
};

export default FeatureMedia;
