import React, { useState, useEffect, useRef } from 'react';
import styles from './ScrollProgressRail.module.css';

const FEATURE_ICONS = ['⚔️', '🎰', '🏆', '🃏', '🎁', '🔒', '👥'];

const ScrollProgressRail = ({ cardRefs, featuresData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fillPercent, setFillPercent] = useState(0);
  const railRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRefs.current || cardRefs.current.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let closestDist = Infinity;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      setActiveIndex(closestIdx);

      // Calculate fill percentage based on scroll progress through all cards
      const firstCard = cardRefs.current[0];
      const lastCard = cardRefs.current[cardRefs.current.length - 1];
      if (firstCard && lastCard) {
        const firstTop = firstCard.getBoundingClientRect().top + window.scrollY;
        const lastBottom = lastCard.getBoundingClientRect().bottom + window.scrollY;
        const totalRange = lastBottom - firstTop - window.innerHeight;
        const scrolled = window.scrollY - firstTop + window.innerHeight * 0.5;
        const pct = Math.max(0, Math.min(100, (scrolled / totalRange) * 100));
        setFillPercent(pct);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardRefs]);

  const handleDotClick = (index) => {
    if (cardRefs.current && cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const totalDots = featuresData.length;

  return (
    <nav className={styles.railContainer} ref={railRef} aria-label="Feature scroll progress">
      {/* Background Track Line */}
      <div className={styles.trackLine}>
        <div
          className={styles.trackFill}
          style={{ height: `${fillPercent}%` }}
        />
      </div>

      {/* Trophy Climber Icon */}
      <div
        className={styles.trophyClimber}
        style={{
          top: `calc(${(activeIndex / Math.max(totalDots - 1, 1)) * 100}% - 10px)`,
        }}
      >
        <span className={styles.trophyIcon}>🏆</span>
        <div className={styles.trophyGlowRing} />
      </div>

      {/* Dot Nodes */}
      {featuresData.map((feature, idx) => {
        const isActive = idx === activeIndex;
        const isPassed = idx < activeIndex;
        return (
          <button
            key={feature.id}
            className={`${styles.dotNode} ${isActive ? styles.dotActive : ''} ${isPassed ? styles.dotPassed : ''}`}
            style={{
              top: `${(idx / Math.max(totalDots - 1, 1)) * 100}%`,
            }}
            onClick={() => handleDotClick(idx)}
            aria-label={`Scroll to ${feature.title}`}
            aria-current={isActive ? 'step' : undefined}
          >
            <span className={styles.dotEmoji}>{FEATURE_ICONS[idx]}</span>
            {isActive && <span className={styles.pulseRing} />}
            {isActive && (
              <span className={styles.dotLabel}>{feature.title}</span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default ScrollProgressRail;
