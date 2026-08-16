import React, { useState, useRef, useEffect } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { FeatureVisual } from './FeatureVisuals';

export const UpcomingFeatureCard = ({ data, index, onNotify, onKnowMore, cardRef: externalCardRef }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [burstParticles, setBurstParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const outerRef = useRef(null);
  const internalRef = useRef(null);

  const accent = data.accent || '#d4af37';

  const setRefs = (el) => {
    internalRef.current = el;
    if (externalCardRef) externalCardRef(el);
  };

  // Scroll-triggered reveal
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!internalRef.current) return;
    const rect = internalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotation({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -7,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 7,
    });
    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
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
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 50 - 25,
      scale: Math.random() * 0.8 + 0.4,
    }));
    setBurstParticles(newParticles);
    setTimeout(() => setBurstParticles([]), 800);
  };

  return (
    <div
      ref={outerRef}
      className={`${styles.cardOuter} ${isVisible ? styles.cardRevealVisible : styles.cardRevealHidden}`}
      style={{
        '--accent': accent,
        '--accent-20': accent + '33',
        '--accent-40': accent + '66',
        transitionDelay: `${index * 80}ms`,
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Animated border glow layer */}
      <div className={styles.borderGlow} />

      <article
        ref={setRefs}
        className={`${styles.cardContainer} ${isHovered ? styles.cardContainerHovered : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleKnowMoreClick}
        tabIndex={0}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className={styles.noiseOverlay} />
        <div className={styles.cardGlossSheen} />
        <div className={styles.topEdgeLight} style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* Dynamic Cursor Spotlight */}
        <div
          className={styles.mouseSpotlight}
          style={{
            background: `radial-gradient(350px circle at ${spotlight.x}% ${spotlight.y}%, ${accent}33, transparent 70%)`,
            opacity: spotlight.opacity,
          }}
        />

        <div className={styles.cardInner}>
          {/* Header Row */}
          <div className={styles.cardHeader}>
            <span className={styles.numberBadge} style={{ borderColor: accent + '55', color: accent }}>
              {data.number}
            </span>
            <span className={styles.badge}>{data.badge}</span>
          </div>

          {/* 3D Visual */}
          <div className={styles.visualContainer} aria-hidden="true">
            <FeatureVisual type={data.type} />
          </div>

          {/* Content */}
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{data.title}</h3>
            <p className={styles.cardDescription}>{data.description}</p>
          </div>

          {/* CTA */}
          <div className={styles.cardFooter}>
            <button
              type="button"
              className={styles.stayTunedBtn}
              onClick={handleCtaClick}
              aria-label={`Stay Tuned for ${data.title}`}
              style={{ '--btn-accent': accent }}
            >
              <span>Stay Tuned</span>
              <span className={styles.ctaArrow}>→</span>
            </button>

            {burstParticles.length > 0 && (
              <div className={styles.particleBurstBox}>
                {burstParticles.map((p) => (
                  <span
                    key={p.id}
                    className={styles.burstSparkle}
                    style={{
                      transform: `translate(${p.x}px, ${p.y}px) scale(${p.scale})`,
                      background: accent,
                      boxShadow: `0 0 8px ${accent}`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default UpcomingFeatureCard;
