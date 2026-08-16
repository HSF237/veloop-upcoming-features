import React, { useState, useRef } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { FeatureVisual } from './FeatureVisuals';

export const UpcomingFeatureCard = ({ data, onNotify, onKnowMore }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
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
    
    // Smooth 3D tilt calculation
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleNotifyClick = (e) => {
    e.stopPropagation();
    setNotified(true);
    if (onNotify) onNotify(data.title);
  };

  const handleKnowMoreClick = (e) => {
    e.stopPropagation();
    if (onKnowMore) onKnowMore(data, notified);
  };

  return (
    <article
      ref={cardRef}
      className={styles.cardContainer}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleKnowMoreClick}
      tabIndex={0}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${isHovered ? '-6px' : '0px'})`
      }}
    >
      <div className={styles.cardInner}>
        {/* Top Header Row with Badge & Info Button */}
        <div className={styles.cardHeader}>
          <span className={styles.badge}>{data.badge}</span>
          <button
            type="button"
            className={styles.infoBadgeBtn}
            onClick={handleKnowMoreClick}
            aria-label={`View detailed info about ${data.title}`}
            title="Know More"
          >
            ⓘ Info
          </button>
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

        {/* Action Buttons Row */}
        <div className={styles.cardFooter}>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={handleKnowMoreClick}
            aria-label={`Know more about ${data.title}`}
          >
            Know More
          </button>
          <button
            type="button"
            className={`${styles.ctaButton} ${notified ? styles.ctaNotified : ''}`}
            onClick={handleNotifyClick}
            aria-label={`Notify me when ${data.title} becomes available`}
          >
            {notified ? '✓ Set' : 'Notify Me'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default UpcomingFeatureCard;
