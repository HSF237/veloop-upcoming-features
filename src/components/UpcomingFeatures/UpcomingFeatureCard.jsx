import React, { useState, useRef } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { FeatureVisual } from './FeatureVisuals';

export const UpcomingFeatureCard = ({ data, index, onNotify, onKnowMore }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [notified, setNotified] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle 3D tilt calculation (max 6deg)
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    const posX = (x / rect.width) * 100;
    const posY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setSpotlight({ x: posX, y: posY, opacity: 1 });
  };

  const handleMouseEnter = () => setIsHovered(true);
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
    if (onNotify) onNotify(data.title);
  };

  // Staggered cascade entrance delay (100ms, 160ms, 220ms, 280ms, 340ms, 400ms, 460ms)
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
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${isHovered ? '-8px' : '0px'})`
      }}
    >
      {/* Interactive Cursor Spotlight Radial Glow */}
      <div
        className={styles.mouseSpotlight}
        style={{
          background: `radial-gradient(350px circle at ${spotlight.x}% ${spotlight.y}%, rgba(212, 175, 55, 0.16), transparent 70%)`,
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

        {/* CTA Button Row with Sliding Arrow */}
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
        </div>
      </div>
    </article>
  );
};

export default UpcomingFeatureCard;
