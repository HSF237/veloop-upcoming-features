import React, { useState, useEffect } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { UpcomingFeatureCard } from './UpcomingFeatureCard';
import { FeatureModal } from './FeatureModal';
import { upcomingFeaturesData } from './upcomingFeatures.data';

export const UpcomingFeaturesSection = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [notifiedFeatures, setNotifiedFeatures] = useState({});

  // Real-time ticking countdown state
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 28, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = `${String(timeLeft.days).padStart(2, '0')}d : ${String(timeLeft.hours).padStart(2, '0')}h : ${String(timeLeft.minutes).padStart(2, '0')}m : ${String(timeLeft.seconds).padStart(2, '0')}s`;

  const handleNotify = (title) => {
    setNotifiedFeatures((prev) => ({ ...prev, [title]: true }));
    setToastMessage(`✨ Notification set! You will get priority access when ${title} launches.`);
    setTimeout(() => setToastMessage(null), 3800);
  };

  const handleKnowMore = (feature) => {
    setActiveModalFeature(feature);
  };

  const handleCloseModal = () => {
    setActiveModalFeature(null);
  };

  return (
    <section className={styles.mainWrapper} aria-labelledby="upcoming-features-heading">
      {/* Background radial gradient mesh & dynamic ambient light */}
      <div className={styles.backgroundMesh} aria-hidden="true" />
      <div className={styles.glowingGridLines} aria-hidden="true" />

      <div className={styles.container}>
        {/* Live Feature Drop Ticking Countdown Banner */}
        <div className={styles.countdownBanner}>
          <span className={styles.countdownPulse} />
          <span className={styles.countdownLabel}>NEXT PLATFORM FEATURE DROP IN:</span>
          <span className={styles.countdownTime}>{formattedTime}</span>
        </div>

        {/* Section Header */}
        <header className={styles.sectionHeader}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.sparkleIcon}>✨</span>
            <span>VELOOP REWARDS ROADMAP</span>
          </div>
          <h2 id="upcoming-features-heading" className={styles.headingTitle}>
            More Ways to Earn Are Coming
          </h2>
          <p className={styles.headingSubtitle}>
            Discover the next generation of rewards, team competitions, and gamified earning experiences coming soon to VELOOP Rewards.
          </p>
        </header>

        {/* Responsive Grid System (4 top / 3 bottom layout on Desktop) */}
        <div className={styles.featuresGrid}>
          {upcomingFeaturesData.map((item) => (
            <UpcomingFeatureCard
              key={item.id}
              data={item}
              onNotify={handleNotify}
              onKnowMore={handleKnowMore}
            />
          ))}
        </div>
      </div>

      {/* Feature Details Modal */}
      {activeModalFeature && (
        <FeatureModal
          feature={activeModalFeature}
          onClose={handleCloseModal}
          onNotify={handleNotify}
          isNotified={!!notifiedFeatures[activeModalFeature.title]}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toastNotification} role="status" aria-live="polite">
          <span className={styles.toastDot} aria-hidden="true" />
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default UpcomingFeaturesSection;
