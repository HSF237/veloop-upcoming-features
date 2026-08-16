import React, { useState, useEffect } from 'react';
import styles from './HoloDeckStage.module.css';
import { FeatureVisual } from './FeatureVisuals';
import { audioEngine } from './AudioEngine';

export const HoloDeckStage = ({ features, onSelectFeature, onNotify }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = features[activeIndex];

  const handleNext = () => {
    audioEngine.playHover();
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    audioEngine.playHover();
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [features.length]);

  return (
    <div className={styles.stageWrapper}>
      {/* Dynamic Background Stage Glow */}
      <div
        className={styles.stageGlow}
        style={{
          background: `radial-gradient(ellipse at center, ${activeFeature.accent}33 0%, transparent 70%)`,
        }}
      />

      {/* Top Holographic Header Bar */}
      <div className={styles.stageHeaderInfo}>
        <div className={styles.stageBadge} style={{ borderColor: activeFeature.accent, color: activeFeature.accent }}>
          <span>CARD {activeFeature.number} OF 07</span>
        </div>
        <h3 className={styles.stageTitle}>{activeFeature.title}</h3>
        <p className={styles.stageSub}>{activeFeature.details?.subtitle || activeFeature.description}</p>
      </div>

      {/* 3D Holo Carousel Track */}
      <div className={styles.holoDeckContainer}>
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={handlePrev}
          aria-label="Previous Feature Card"
        >
          ‹
        </button>

        <div className={styles.cardsTrack}>
          {features.map((item, idx) => {
            const offset = idx - activeIndex;
            const absOffset = Math.abs(offset);

            // Compute 3D Transforms
            let transform = `translate3d(0, 0, -300px) rotateY(0deg) scale(0.6)`;
            let opacity = 0;
            let zIndex = 0;

            if (offset === 0) {
              // Active Center Card
              transform = `translate3d(0, 0, 0) rotateY(0deg) scale(1)`;
              opacity = 1;
              zIndex = 10;
            } else if (offset === -1) {
              // Left Card
              transform = `translate3d(-260px, 0, -140px) rotateY(32deg) scale(0.82)`;
              opacity = 0.7;
              zIndex = 5;
            } else if (offset === 1) {
              // Right Card
              transform = `translate3d(260px, 0, -140px) rotateY(-32deg) scale(0.82)`;
              opacity = 0.7;
              zIndex = 5;
            } else if (offset === -2) {
              transform = `translate3d(-460px, 0, -260px) rotateY(45deg) scale(0.68)`;
              opacity = 0.35;
              zIndex = 2;
            } else if (offset === 2) {
              transform = `translate3d(460px, 0, -260px) rotateY(-45deg) scale(0.68)`;
              opacity = 0.35;
              zIndex = 2;
            }

            return (
              <div
                key={item.id}
                className={`${styles.deckCard} ${offset === 0 ? styles.deckCardActive : ''}`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  '--card-accent': item.accent,
                }}
                onClick={() => {
                  if (offset !== 0) {
                    audioEngine.playHover();
                    setActiveIndex(idx);
                  } else if (onSelectFeature) {
                    audioEngine.playClick();
                    onSelectFeature(item);
                  }
                }}
              >
                {/* Neon Border */}
                <div className={styles.deckCardBorder} style={{ borderColor: item.accent }} />

                <div className={styles.deckCardInner}>
                  {/* Top Bar */}
                  <div className={styles.deckCardTop}>
                    <span className={styles.deckNum} style={{ color: item.accent }}>
                      {item.number}
                    </span>
                    <span className={styles.deckBadge}>{item.badge}</span>
                  </div>

                  {/* 3D Visual */}
                  <div className={styles.deckVisualBox}>
                    <FeatureVisual type={item.type} />
                  </div>

                  {/* Content */}
                  <div className={styles.deckContent}>
                    <h4 className={styles.deckCardTitle}>{item.title}</h4>
                    <p className={styles.deckCardDesc}>{item.description}</p>
                  </div>

                  {/* Action */}
                  <div className={styles.deckAction}>
                    <button
                      className={styles.deckCta}
                      style={{ background: `linear-gradient(135deg, ${item.accent}33, ${item.accent}11)`, borderColor: item.accent }}
                      onClick={(e) => {
                        e.stopPropagation();
                        audioEngine.playClick();
                        if (onSelectFeature) onSelectFeature(item);
                      }}
                    >
                      <span>Explore Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Reflection Floor Effect */}
                {offset === 0 && <div className={styles.cardReflection} />}
              </div>
            );
          })}
        </div>

        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={handleNext}
          aria-label="Next Feature Card"
        >
          ›
        </button>
      </div>

      {/* Holo Stage Floor Base */}
      <div className={styles.stageFloor}>
        <div className={styles.floorRing} style={{ borderColor: activeFeature.accent + '44' }} />
        <div className={styles.floorGrid} />
      </div>

      {/* Pagination Dot Nodes */}
      <div className={styles.paginationDots}>
        {features.map((f, idx) => (
          <button
            key={f.id}
            className={`${styles.pageDot} ${idx === activeIndex ? styles.pageDotActive : ''}`}
            style={{
              '--dot-accent': f.accent,
            }}
            onClick={() => {
              audioEngine.playHover();
              setActiveIndex(idx);
            }}
            aria-label={`Jump to ${f.title}`}
          >
            <span className={styles.dotNumber}>{f.number}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
