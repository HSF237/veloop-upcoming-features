import React, { useState, useRef, useCallback, useMemo } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { UpcomingFeatureCard } from './UpcomingFeatureCard';
import { FeatureModal } from './FeatureModal';
import { upcomingFeaturesData } from './upcomingFeatures.data';
import ScrollProgressRail from './ScrollProgressRail';
import { audioEngine } from './AudioEngine';

const CATEGORIES = [
  { id: 'all', label: 'All Features', icon: '✦' },
  { id: 'battle', label: 'Battle & Games', icon: '⚔️' },
  { id: 'progress', label: 'Progress & Perks', icon: '🏆' },
  { id: 'collectible', label: 'Collectibles', icon: '🃏' },
  { id: 'surprise', label: 'Surprises & Chests', icon: '🎁' },
];

export const UpcomingFeaturesSection = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [notifiedFeatures, setNotifiedFeatures] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const cardRefs = useRef([]);

  const setCardRef = useCallback((el, index) => {
    cardRefs.current[index] = el;
  }, []);

  const handleNotify = (title) => {
    setNotifiedFeatures((prev) => ({ ...prev, [title]: true }));
    audioEngine.playChime();
    setToastMessage(`✨ You will be notified the instant ${title} drops!`);
    setTimeout(() => setToastMessage(null), 3800);
  };

  const handleKnowMore = (feature) => {
    audioEngine.playClick();
    setActiveModalFeature(feature);
  };

  const handleCloseModal = () => {
    audioEngine.playClick();
    setActiveModalFeature(null);
  };

  const handleCategoryChange = (catId) => {
    audioEngine.playModeSwitch();
    setActiveCategory(catId);
  };

  const filteredFeatures = useMemo(() => {
    return upcomingFeaturesData.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' ||
        item.category === activeCategory ||
        (activeCategory === 'surprise' && (item.category === 'surprise' || item.category === 'mystery'));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.details?.highlights?.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className={styles.mainWrapper} aria-labelledby="upcoming-features-heading">
      {/* Subtle Living Background Mesh */}
      <div className={styles.backgroundMesh} aria-hidden="true" />
      <div className={styles.glowingGridLines} aria-hidden="true" />

      {/* Ambient Floating Sparks */}
      <div className={styles.particlesContainer} aria-hidden="true">
        <span className={`${styles.ambientDot} ${styles.dot1}`} />
        <span className={`${styles.ambientDot} ${styles.dot2}`} />
        <span className={`${styles.ambientDot} ${styles.dot3}`} />
        <span className={`${styles.ambientDot} ${styles.dot4}`} />
        <span className={`${styles.ambientDot} ${styles.dot5}`} />
      </div>

      <div className={styles.container}>
        {/* Section Header with Hero Excitement Meter */}
        <header className={styles.sectionHeader}>
          <div className={styles.heroLeft}>
            <h2 id="upcoming-features-heading" className={styles.headingTitle}>
              Upcoming Features <span className={styles.sparkleTitleIcon}>✨</span>
            </h2>
            <p className={styles.headingSubTitle}>
              More ways to earn are coming 🚀
            </p>
            <p className={styles.headingSubtitle}>
              Discover the next generation of rewards, challenges, and experiences coming to <strong>VELOOP Rewards</strong>.
            </p>
          </div>

          <div className={styles.excitementMeterBox}>
            <div className={styles.excitementHeader}>
              <span className={styles.usersIcon}>👥</span>
              <div className={styles.excitementTextGroup}>
                <span className={styles.usersCount}>84,920</span>
                <span className={styles.usersLabel}>Users anticipating launch</span>
              </div>
              <span className={styles.excitementPercent}>84%</span>
            </div>
            <div className={styles.meterProgressBar}>
              <div className={styles.meterProgressFill} style={{ width: '84%' }} />
            </div>
            <span className={styles.meterFooterLabel}>Community Excitement Meter</span>
          </div>
        </header>

        {/* Filter Controls Bar */}
        <div className={styles.controlsBar}>
          <div className={styles.categoryTabs} role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`${styles.filterTab} ${activeCategory === cat.id ? styles.filterTabActive : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span className={styles.tabIcon}>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search upcoming features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Features Count */}
        <div className={styles.resultsMeta}>
          Showing <span>{filteredFeatures.length}</span> of {upcomingFeaturesData.length} upcoming features
        </div>

        {/* Grid System */}
        {filteredFeatures.length > 0 ? (
          <div className={styles.featuresGrid}>
            {filteredFeatures.map((item, idx) => (
              <UpcomingFeatureCard
                key={item.id}
                data={item}
                index={idx}
                onNotify={handleNotify}
                onKnowMore={handleKnowMore}
                cardRef={(el) => setCardRef(el, idx)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.noResultsBox}>
            <div className={styles.noResultsIcon}>🔍</div>
            <h3>No features match your search</h3>
            <p>Try clearing your search query or selecting a different category tab.</p>
            <button
              type="button"
              className={styles.resetFiltersBtn}
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Notice Summary Banner */}
        <div className={styles.bottomBanner}>
          <div className={styles.bannerLeft}>
            <div className={styles.bellCircle}>🔔</div>
            <div className={styles.bannerTextGroup}>
              <h4 className={styles.bannerTitle}>Be the first to experience these features!</h4>
              <p className={styles.bannerSubtitle}>Turn on notifications so you never miss an update.</p>
            </div>
          </div>
          <button
            type="button"
            className={styles.notifyMeMainBtn}
            onClick={() => handleNotify("Upcoming Features")}
          >
            <span>Notify Me</span>
            <span>🔔</span>
          </button>
        </div>
      </div>

      {/* Mobile Scroll Progress Rail */}
      <ScrollProgressRail cardRefs={cardRefs} featuresData={filteredFeatures} />

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

