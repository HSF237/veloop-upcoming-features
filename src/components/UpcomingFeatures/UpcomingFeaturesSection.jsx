import React, { useState } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { UpcomingFeatureCard } from './UpcomingFeatureCard';
import { FeatureModal } from './FeatureModal';
import { upcomingFeaturesData } from './upcomingFeatures.data';

export const UpcomingFeaturesSection = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [notifiedFeatures, setNotifiedFeatures] = useState({});

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

        {/* Bottom Notice Summary Banner matching design brief */}
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
