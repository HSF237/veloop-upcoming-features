import React, { useEffect } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { FeatureVisual } from './FeatureVisuals';

export const FeatureModal = ({ feature, onClose, onNotify, isNotified }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!feature) return null;

  const { title, badge, type, details } = feature;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className={styles.modalCloseBtn}
          onClick={onClose}
          aria-label="Close details"
        >
          ✕
        </button>

        {/* Modal Header Visual */}
        <div className={styles.modalVisualContainer}>
          <FeatureVisual type={type} />
        </div>

        {/* Modal Header Content */}
        <div className={styles.modalHeader}>
          <span className={styles.badge}>{badge}</span>
          <h2 id="modal-title" className={styles.modalTitle}>
            {title}
          </h2>
          <p className={styles.modalSubtitle}>{details?.subtitle}</p>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <p className={styles.modalDescription}>{details?.fullDescription}</p>

          {/* Highlights List */}
          {details?.highlights && (
            <div className={styles.highlightsContainer}>
              <h4 className={styles.highlightsHeading}>Key Feature Highlights</h4>
              <ul className={styles.highlightsList}>
                {details.highlights.map((item, index) => (
                  <li key={index} className={styles.highlightItem}>
                    <span className={styles.highlightCheck}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Release Status */}
          {details?.releasePhase && (
            <div className={styles.statusBox}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>{details.releasePhase}</span>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className={styles.modalFooter}>
          <button
            type="button"
            className={`${styles.ctaButton} ${isNotified ? styles.ctaNotified : ''}`}
            onClick={() => {
              onNotify(title);
            }}
          >
            {isNotified ? '✓ Notification Set' : 'Notify Me When Available'}
          </button>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
