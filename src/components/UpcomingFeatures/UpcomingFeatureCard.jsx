import React, { useState, useRef, useEffect } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { FeatureMedia } from './FeatureMedia';
import { audioEngine } from './AudioEngine';

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
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
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
      x: ((y - rect.height / 2) / (rect.height / 2)) * -5,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 5,
    });
    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    audioEngine.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setSpotlight({ x: 50, y: 50, opacity: 0 });
  };

  const handleCardClick = () => {
    audioEngine.playClick();
    if (onKnowMore) onKnowMore(data);
  };

  const handleCtaClick = (e) => {
    e.stopPropagation();
    audioEngine.playClick();
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 90,
      y: (Math.random() - 0.5) * 60 - 30,
      scale: Math.random() * 0.8 + 0.4,
    }));
    setBurstParticles(newParticles);
    setTimeout(() => {
      setBurstParticles([]);
      if (onKnowMore) onKnowMore(data);
    }, 180);
  };

  return (
    <div
      ref={outerRef}
      className={`${styles.cardOuter} ${isVisible ? styles.cardRevealVisible : styles.cardRevealHidden}`}
      style={{
        '--accent': accent,
        '--accent-20': accent + '33',
        '--accent-40': accent + '66',
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <article
        ref={setRefs}
        className={`${styles.cardContainer} ${isHovered ? styles.cardContainerHovered : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        tabIndex={0}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className={styles.cardGlossSheen} />
        <div className={styles.topEdgeLight} style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* Dynamic Cursor Spotlight */}
        <div
          className={styles.mouseSpotlight}
          style={{
            background: `radial-gradient(320px circle at ${spotlight.x}% ${spotlight.y}%, ${accent}22, transparent 70%)`,
            opacity: spotlight.opacity,
          }}
        />

        <div className={styles.cardInner}>
          {/* Header Row */}
          <div className={styles.cardHeader}>
            <span className={styles.numberBadge} style={{ borderColor: accent + '44', color: accent }}>
              {data.number}
            </span>
            <span className={styles.badge}>{data.badge}</span>
          </div>

          {/* 3D Visual */}
          <div className={styles.visualContainer} aria-hidden="true">
            <FeatureMedia type={data.type} videoUrl={data.videoUrl} title={data.title} />
          </div>

          {/* Content */}
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{data.title}</h3>
            <p className={styles.cardDescription}>{data.description}</p>

            {/* Feature Metric Display */}
            {data.type === 'team-battle' && (
              <div className={styles.metricWrapper}>
                <div className={styles.squadProgressRow}>
                  <div className={styles.avatarGroup}>
                    <span className={styles.avatarDot} style={{ background: '#ef4444' }} />
                    <span className={styles.avatarDot} style={{ background: '#3b82f6' }} />
                    <span className={styles.avatarDot} style={{ background: '#d4af37' }} />
                  </div>
                  <span className={styles.metricText}>
                    <strong>{data.squadCurrent}/{data.squadTotal}</strong> Squad Progress
                  </span>
                </div>
                <div className={styles.miniProgressBar}>
                  <div className={styles.miniProgressFill} style={{ width: `${(data.squadCurrent / data.squadTotal) * 100}%`, background: accent }} />
                </div>
                <div className={styles.rewardTagPill}>
                  <span>🏆</span>
                  <span>{data.squadReward}</span>
                </div>
              </div>
            )}

            {data.type === 'lucky-draw' && (
              <div className={styles.metricWrapper}>
                <div className={styles.ticketPillBox}>
                  <span className={styles.pillIcon}>🎟️</span>
                  <span className={styles.pillMainText}>{data.ticketText}</span>
                  <span className={styles.pillSubText}>{data.ticketSub}</span>
                </div>
              </div>
            )}

            {data.type === 'milestone-rewards' && (
              <div className={styles.metricWrapper}>
                <div className={styles.stepperRow}>
                  {[1, 2, 3, 4, 5].map((step) => (
                    <span
                      key={step}
                      className={`${styles.stepNode} ${step === data.milestoneCurrent ? styles.activeStepNode : ''}`}
                    >
                      0{step}
                    </span>
                  ))}
                </div>
                <div className={styles.rewardUnlockPill}>
                  <span>👑</span>
                  <span>{data.milestoneUnlock}: <strong>{data.milestoneReward}</strong></span>
                </div>
              </div>
            )}

            {data.type === 'collectible-cards' && (
              <div className={styles.metricWrapper}>
                <div className={styles.collectionMetaRow}>
                  <span className={styles.collectionCountText}>
                    <strong>{data.collectedCount} / {data.collectedTotal}</strong> Collected
                  </span>
                </div>
                <div className={styles.miniProgressBar}>
                  <div className={styles.miniProgressFill} style={{ width: '15%', background: accent }} />
                </div>
              </div>
            )}

            {data.type === 'surprise-gift' && (
              <div className={styles.metricWrapper}>
                <div className={styles.tagArrowBox}>
                  <span>🎁 {data.tagTitle}</span>
                  <span className={styles.tagSubHighlight}>{data.tagSub} ›</span>
                </div>
              </div>
            )}

            {data.type === 'mystery-chest' && (
              <div className={styles.metricWrapper}>
                <div className={styles.secretInputDemo}>
                  <input type="text" readOnly placeholder={data.placeholderCode} className={styles.demoCodeInput} />
                  <span className={styles.codeArrow}>›</span>
                </div>
              </div>
            )}

            {data.type === 'referral-network' && (
              <div className={styles.metricWrapper}>
                <div className={styles.referralTiersRow}>
                  <span className={styles.refPill}>{data.tier1}</span>
                  <span className={styles.refPill}>{data.tier2}</span>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className={styles.cardFooter}>
            <button
              type="button"
              className={styles.stayTunedBtn}
              onClick={handleCtaClick}
              aria-label={`Preview ${data.title}`}
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
                      boxShadow: `0 0 6px ${accent}`,
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

