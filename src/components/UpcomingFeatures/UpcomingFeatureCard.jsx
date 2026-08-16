import React, { useState, useRef } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { FeatureVisual } from './FeatureVisuals';

// Pure Web Audio API synthesized chime sound for ultra-premium tactile feedback
const playChime = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {
    // Silent fallback if audio context is restricted
  }
};

export const UpcomingFeatureCard = ({ data, index, onNotify, onKnowMore }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [notified, setNotified] = useState(false);
  const [burstParticles, setBurstParticles] = useState([]);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D tilt calculation (max 7deg)
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    const posX = (x / rect.width) * 100;
    const posY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setSpotlight({ x: posX, y: posY, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playChime();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setSpotlight({ x: 50, y: 50, opacity: 0 });
  };

  const handleKnowMoreClick = (e) => {
    e.stopPropagation();
    if (onKnowMore) onKnowMore(data);
  };

  const handleCtaClick = (e) => {
    e.stopPropagation();
    setNotified(true);
    playChime();

    // Trigger visual gold sparkle particle burst around button
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 40 - 20,
      scale: Math.random() * 0.8 + 0.4,
    }));
    setBurstParticles(newParticles);
    setTimeout(() => setBurstParticles([]), 800);

    if (onNotify) onNotify(data.title);
  };

  const animationDelay = `${100 + index * 60}ms`;

  return (
    <article
      ref={cardRef}
      className={`${styles.cardContainer} ${isHovered ? styles.cardContainerHovered : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleKnowMoreClick}
      tabIndex={0}
      style={{
        animationDelay,
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${isHovered ? '-9px' : '0px'})`
      }}
    >
      {/* High-Gloss Diagonal Sheen Reflection */}
      <div className={styles.cardGlossSheen} />

      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className={styles.mouseSpotlight}
        style={{
          background: `radial-gradient(350px circle at ${spotlight.x}% ${spotlight.y}%, rgba(212, 175, 55, 0.22), transparent 70%)`,
          opacity: spotlight.opacity,
        }}
      />

      <div className={styles.cardInner}>
        {/* Top Header Row with Number Badge & Status Badge */}
        <div className={styles.cardHeader}>
          <span className={styles.numberBadge}>{data.number}</span>
          <span className={styles.badge}>{data.badge}</span>
        </div>

        {/* Dynamic 3D Illustrated Section */}
        <div className={styles.visualContainer} aria-hidden="true">
          <FeatureVisual type={data.type} />
        </div>

        {/* Descriptive Content */}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{data.title}</h3>
          <p className={styles.cardDescription}>{data.description}</p>
        </div>

        {/* CTA Button Row with Sliding Arrow & Particle Burst */}
        <div className={styles.cardFooter}>
          <button
            type="button"
            className={`${styles.stayTunedBtn} ${notified ? styles.stayTunedNotified : ''}`}
            onClick={handleCtaClick}
            aria-label={`${data.cta} for ${data.title}`}
          >
            <span>{notified ? '✓ Subscribed' : 'Stay Tuned'}</span>
            <span className={styles.ctaArrow}>→</span>
          </button>

          {/* Gold Sparkle Burst Container */}
          {burstParticles.length > 0 && (
            <div className={styles.particleBurstBox}>
              {burstParticles.map((p) => (
                <span
                  key={p.id}
                  className={styles.burstSparkle}
                  style={{
                    transform: `translate(${p.x}px, ${p.y}px) scale(${p.scale})`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default UpcomingFeatureCard;
