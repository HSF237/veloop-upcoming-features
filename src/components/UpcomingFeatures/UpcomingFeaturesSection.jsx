import React, { useState } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { UpcomingFeatureCard } from './UpcomingFeatureCard';
import { FeatureModal } from './FeatureModal';
import { upcomingFeaturesData } from './upcomingFeatures.data';

export const UpcomingFeaturesSection = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [notifiedFeatures, setNotifiedFeatures] = useState({});
  const [communityCount, setCommunityCount] = useState(14280);

  const handleNotify = (title) => {
    if (!notifiedFeatures[title]) {
      setCommunityCount((prev) => prev + 1);
    }
    setNotifiedFeatures((prev) => ({ ...prev, [title]: true }));
    setToastMessage(`✨ Priority Access Set! You will get notified the instant ${title} drops.`);
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

      {/* Floating Sparkle Particles Network Canvas Overlay */}
      <div className={styles.particlesContainer} aria-hidden="true">
        <span className={`${styles.ambientDot} ${styles.dot1}`} />
        <span className={`${styles.ambientDot} ${styles.dot2}`} />
        <span className={`${styles.ambientDot} ${styles.dot3}`} />
        <span className={`${styles.ambientDot} ${styles.dot4}`} />
        <span className={`${styles.ambientDot} ${styles.dot5}`} />
      </div>

      <div className={styles.container}>
        {/* Live Subscribed Community Counter Pill */}
        <div className={styles.communityPill}>
          <span className={styles.livePulseDot} />
          <span className={styles.communityCountText}>
            🔥 <strong>{communityCount.toLocaleString()}</strong> Community Members Subscribed for Early Access
          </span>
        </div>

        {/* Section Header */}
        <header className={styles.sectionHeader}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.sparkleIcon}>✦</span>
            <span>COMING SOON</span>
            <span className={styles.sparkleIcon}>✦</span>
          </div>
          <h2 id="upcoming-features-heading" className={styles.headingTitle}>
            More Ways to Earn <span className={styles.titleHighlight}>ARE COMING</span>
          </h2>
          <p className={styles.headingSubtitle}>
            Discover the next generation of rewards, challenges, and experiences coming to <strong>VELOOP Rewards</strong>.
          </p>
        </header>

        {/* Responsive Grid System (4 top / 3 bottom layout on Desktop) */}
        <div className={styles.featuresGrid}>
          {upcomingFeaturesData.map((item, idx) => (
            <UpcomingFeatureCard
              key={item.id}
              data={item}
              index={idx}
              onNotify={handleNotify}
              onKnowMore={handleKnowMore}
            />
          ))}
        </div>

        {/* Bottom Notice Summary Banner */}
        <div className={styles.bottomBanner}>
          <div className={styles.bannerLeft}>
            <span className={styles.bannerIcon}>🎁</span>
            <span>
              These features are currently under development and will be available soon. <strong>Stay tuned for exciting updates!</strong>
            </span>
          </div>
          <div className={styles.bannerDivider} />
          <div className={styles.bannerRight}>
            <span className={styles.bannerBrand}>VELOOP</span>
            <span className={styles.bannerSubBrand}>REWARDS</span>
            <span className={styles.bannerTrophy}>🏆</span>
          </div>
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
