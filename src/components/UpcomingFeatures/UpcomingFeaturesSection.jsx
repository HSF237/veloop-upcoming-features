import React, { useState, useMemo } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { UpcomingFeatureCard } from './UpcomingFeatureCard';
import { FeatureModal } from './FeatureModal';
import { upcomingFeaturesData, CATEGORIES } from './upcomingFeatures.data';

export const UpcomingFeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [notifiedFeatures, setNotifiedFeatures] = useState({});

  // Filter features by selected category and search input
  const filteredFeatures = useMemo(() => {
    return upcomingFeaturesData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleNotify = (title) => {
    setNotifiedFeatures((prev) => ({ ...prev, [title]: true }));
    setToastMessage(`✨ Notification set! You'll get priority access when ${title} launches.`);
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
        {/* Live Feature Drop Countdown Banner */}
        <div className={styles.countdownBanner}>
          <span className={styles.countdownPulse} />
          <span className={styles.countdownLabel}>NEXT PLATFORM FEATURE DROP IN:</span>
          <span className={styles.countdownTime}>03d : 14h : 28m : 42s</span>
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

        {/* Interactive Search & Filter Toolbar */}
        <div className={styles.toolbarContainer}>
          {/* Category Filter Pills */}
          <div className={styles.categoryTabs}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.tabButton} ${activeCategory === cat.id ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className={styles.tabIcon}>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search upcoming features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search upcoming features"
            />
            {searchQuery && (
              <button
                type="button"
                className={styles.clearSearchBtn}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Responsive Grid System */}
        {filteredFeatures.length > 0 ? (
          <div className={styles.featuresGrid}>
            {filteredFeatures.map((item) => (
              <UpcomingFeatureCard
                key={item.id}
                data={item}
                onNotify={handleNotify}
                onKnowMore={handleKnowMore}
              />
            ))}
          </div>
        ) : (
          <div className={styles.noResultsBox}>
            <span className={styles.noResultsIcon}>🔍</span>
            <h3>No features found matching "{searchQuery}"</h3>
            <p>Try searching for a different keyword or reset your category filter.</p>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
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
