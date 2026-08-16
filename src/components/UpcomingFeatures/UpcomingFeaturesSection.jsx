import React, { useState } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { UpcomingFeatureCard } from './UpcomingFeatureCard';
import { upcomingFeaturesData } from './upcomingFeatures.data';

export const UpcomingFeaturesSection = () => {
  const [toastMessage, setToastMessage] = useState(null);

  const handleNotify = (title) => {
    setToastMessage(`We're working on something exciting! Stay tuned for the launch of ${title}.`);
    setTimeout(() => setToastMessage(null), 3800);
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
            />
          ))}
        </div>
      </div>

      {/* Toast Notification (per Page 14-15 specification) */}
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
