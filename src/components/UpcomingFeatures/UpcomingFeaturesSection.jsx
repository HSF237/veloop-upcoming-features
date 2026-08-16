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
    setToastMessage(`We're working on something exciting! You will be notified as soon as ${title} launches.`);
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
      {/* Background radial gradient mesh */}
      <div className={styles.backgroundMesh} aria-hidden="true" />

      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.sectionHeader}>
          <h2 id="upcoming-features-heading" className={styles.headingTitle}>
            More Ways to Earn Are Coming
          </h2>
          <p className={styles.headingSubtitle}>
            Discover the next generation of rewards, team competitions, and gamified earning experiences coming soon to VELOOP Rewards.
          </p>
        </header>

        {/* Responsive Grid System */}
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
