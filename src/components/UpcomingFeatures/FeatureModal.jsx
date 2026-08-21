import React, { useState, useEffect } from 'react';
import styles from './UpcomingFeatureCard.module.css';
import { FeatureVisual } from './FeatureVisuals';
import { audioEngine } from './AudioEngine';

export const FeatureModal = ({ feature, onClose, onNotify, isNotified }) => {
  const [emailInput, setEmailInput] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Interactive Demo States
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelPrize, setWheelPrize] = useState(null);

  const [cardFlipped, setCardFlipped] = useState(false);
  const [giftUnwrapped, setGiftUnwrapped] = useState(false);
  const [chestUnlocked, setChestUnlocked] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('alpha');
  const [milestoneLevel, setMilestoneLevel] = useState(50);
  const [referralCount, setReferralCount] = useState(12);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!feature) return null;

  const { title, badge, type, details, accent = '#d4af37' } = feature;

  // Spin Lucky Wheel Demo
  const handleSpinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWheelPrize(null);
    audioEngine.playSpin();

    const randomDegrees = 1440 + Math.floor(Math.random() * 360);
    setWheelRotation((prev) => prev + randomDegrees);

    setTimeout(() => {
      setIsSpinning(false);
      const prizes = ['$15 Instant Cashback', '2x Points Multiplier', '500 Bonus Points', 'VIP Golden Card', 'Mystery Voucher'];
      const won = prizes[Math.floor(Math.random() * prizes.length)];
      setWheelPrize(won);
      audioEngine.playChime();
    }, 2800);
  };

  // Flip Card Demo
  const handleFlipCard = () => {
    audioEngine.playFlip();
    setCardFlipped(!cardFlipped);
  };

  // Gift Unwrap Demo
  const handleUnwrapGift = () => {
    audioEngine.playChime();
    setGiftUnwrapped(true);
  };

  // Chest Unlock Demo
  const handleUnlockChest = () => {
    audioEngine.playChime();
    setChestUnlocked(true);
  };

  // Handle Email Notify Submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setEmailSubmitted(true);
    onNotify(title);
  };

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
        style={{ '--modal-accent': accent }}
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
          <span className={styles.badge} style={{ borderColor: accent + '55', color: accent }}>{badge}</span>
          <h2 id="modal-title" className={styles.modalTitle}>
            {title}
          </h2>
          <p className={styles.modalSubtitle}>{details?.subtitle}</p>
        </div>

        {/* INTERACTIVE DEMO PREVIEWS */}
        <div className={styles.demoSection}>
          <div className={styles.demoHeader}>
            <span className={styles.demoTag}>INTERACTIVE PREVIEW</span>
          </div>

          {/* 1. Lucky Draw Demo */}
          {type === 'lucky-draw' && (
            <div className={styles.wheelDemoBox}>
              <div className={styles.wheelWrapper}>
                <div
                  className={styles.wheelDisc}
                  style={{ transform: `rotate(${wheelRotation}deg)` }}
                >
                  <div className={styles.wheelSegment}>$15 CASH</div>
                  <div className={styles.wheelSegment}>2x PTS</div>
                  <div className={styles.wheelSegment}>500 XP</div>
                  <div className={styles.wheelSegment}>GOLD CARD</div>
                  <div className={styles.wheelSegment}>MYSTERY</div>
                </div>
                <div className={styles.wheelPointer}>▼</div>
              </div>
              <button
                type="button"
                className={styles.demoActionBtn}
                onClick={handleSpinWheel}
                disabled={isSpinning}
              >
                {isSpinning ? 'Spinning Wheel...' : '🎯 Spin Wheel Preview'}
              </button>
              {wheelPrize && (
                <div className={styles.demoResultBadge}>
                  🎉 You won: <strong>{wheelPrize}</strong>!
                </div>
              )}
            </div>
          )}

          {/* 2. Collect Cards Demo */}
          {type === 'collectible-cards' && (
            <div className={styles.cardDemoBox}>
              <div
                className={`${styles.flipCardInner} ${cardFlipped ? styles.flipped : ''}`}
                onClick={handleFlipCard}
              >
                <div className={styles.cardFront}>
                  <div className={styles.cardGraphicIcon}>🃏</div>
                  <span className={styles.cardNameTag}>VELOOP Diamond #04</span>
                  <span className={styles.cardHint}>Click to Flip Card 🔄</span>
                </div>
                <div className={styles.cardBack}>
                  <h4>DIAMOND HOLOGRAPHIC</h4>
                  <p>Set: Legendary Earning Suite</p>
                  <div className={styles.cardPerkPill}>+15% Permanent Bonus</div>
                </div>
              </div>
              <button type="button" className={styles.demoActionBtn} onClick={handleFlipCard}>
                🔄 {cardFlipped ? 'Show Front Art' : 'Flip to View Card Stats'}
              </button>
            </div>
          )}

          {/* 3. Surprise Rewards Demo */}
          {type === 'surprise-gift' && (
            <div className={styles.giftDemoBox}>
              {!giftUnwrapped ? (
                <button type="button" className={styles.giftBoxBtn} onClick={handleUnwrapGift}>
                  <span className={styles.giftEmoji}>🎁</span>
                  <span>Tap Gift Box to Unwrap</span>
                </button>
              ) : (
                <div className={styles.unwrappedBox}>
                  <span className={styles.unwrappedIcon}>🌟</span>
                  <h4>SURPRISE UNLOCKED!</h4>
                  <p>You received <strong>500 Bonus Points + 3x Multiplier Pass</strong></p>
                  <button type="button" className={styles.demoActionBtn} onClick={() => setGiftUnwrapped(false)}>
                    Reset Box
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 4. Mystery Rewards Chest Demo */}
          {type === 'mystery-chest' && (
            <div className={styles.chestDemoBox}>
              {!chestUnlocked ? (
                <button type="button" className={styles.chestUnlockBtn} onClick={handleUnlockChest}>
                  <span className={styles.chestIcon}>🔑</span>
                  <span>Insert Key & Unlock Chest</span>
                </button>
              ) : (
                <div className={styles.chestUnlockedContent}>
                  <span className={styles.chestSparkle}>👑</span>
                  <h4>CHEST UNLOCKED</h4>
                  <p>Revealed: <strong>Mythic Vault Trophy & $25 Voucher</strong></p>
                  <button type="button" className={styles.demoActionBtn} onClick={() => setChestUnlocked(false)}>
                    Lock Chest
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 5. Team Battle Squad Selector Demo */}
          {type === 'team-battle' && (
            <div className={styles.squadDemoBox}>
              <p className={styles.squadPrompt}>Choose a squad to preview leaderboards:</p>
              <div className={styles.squadToggleGroup}>
                <button
                  type="button"
                  className={`${styles.squadBtn} ${selectedTeam === 'alpha' ? styles.squadActive : ''}`}
                  onClick={() => {
                    audioEngine.playClick();
                    setSelectedTeam('alpha');
                  }}
                >
                  🛡️ Alpha Warriors (#1)
                </button>
                <button
                  type="button"
                  className={`${styles.squadBtn} ${selectedTeam === 'bravo' ? styles.squadActive : ''}`}
                  onClick={() => {
                    audioEngine.playClick();
                    setSelectedTeam('bravo');
                  }}
                >
                  ⚔️ Bravo Titans (#2)
                </button>
              </div>
              <div className={styles.squadStatsSummary}>
                {selectedTeam === 'alpha' ? (
                  <span>Squad Score: <strong>142,500 XP</strong> · 12 Active Teammates · 2.5x Split Multiplier</span>
                ) : (
                  <span>Squad Score: <strong>128,900 XP</strong> · 15 Active Teammates · 2.0x Split Multiplier</span>
                )}
              </div>
            </div>
          )}

          {/* 6. Milestone Level Slider Demo */}
          {type === 'milestone-rewards' && (
            <div className={styles.sliderDemoBox}>
              <div className={styles.levelLabelRow}>
                <span>Account Level: <strong>Level {milestoneLevel}</strong></span>
                <span className={styles.levelBadge}>
                  {milestoneLevel >= 100 ? '👑 VIP Mythic Tier' : milestoneLevel >= 50 ? '💎 Diamond Tier' : '⭐ Gold Tier'}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="10"
                value={milestoneLevel}
                onChange={(e) => {
                  audioEngine.playHover();
                  setMilestoneLevel(Number(e.target.value));
                }}
                className={styles.levelSlider}
              />
              <div className={styles.levelPerksRow}>
                Perk Unlocked: <strong>+{milestoneLevel}% Permanent Earning Boost & VIP Badge</strong>
              </div>
            </div>
          )}

          {/* 7. Referral Calculator Demo */}
          {type === 'referral-network' && (
            <div className={styles.referralDemoBox}>
              <div className={styles.calcRow}>
                <span>Invited Friends: <strong>{referralCount} Friends</strong></span>
                <div className={styles.counterBtns}>
                  <button type="button" onClick={() => setReferralCount((c) => Math.max(1, c - 1))}>-</button>
                  <button type="button" onClick={() => setReferralCount((c) => c + 1)}>+</button>
                </div>
              </div>
              <div className={styles.estimatedPayoutBox}>
                Estimated Monthly Milestone Reward: <strong>${referralCount * 12.5} USD + 1,200 XP</strong>
              </div>
            </div>
          )}
        </div>

        {/* Modal Body Description */}
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

        {/* Email Subscription Form */}
        <div className={styles.emailSubscribeSection}>
          <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
            <div className={styles.emailInputWrapper}>
              <span className={styles.emailIcon}>✉️</span>
              <input
                type="email"
                placeholder="Enter email for instant launch drop..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={styles.modalEmailInput}
              />
              <button type="submit" className={styles.emailSubmitBtn}>
                Get Early Access
              </button>
            </div>
            {emailSubmitted && (
              <div className={styles.emailSuccessMsg}>
                ✓ Email registered! We will notify you the second {title} launches.
              </div>
            )}
          </form>
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
            {isNotified ? '✓ Notification Active' : 'Notify Me When Available'}
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

