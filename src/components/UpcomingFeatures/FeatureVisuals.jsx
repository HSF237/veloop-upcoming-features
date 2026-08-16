import React from 'react';
import styles from './UpcomingFeatureCard.module.css';

export const FeatureVisual = ({ type }) => {
  switch (type) {
    case 'team-battle':
      return (
        <div className={`${styles.visualWrapper} ${styles.teamBattleVisual}`}>
          <div
            className={styles.ambientGlow}
            style={{
              background:
                'radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(59,130,246,0.3) 100%)',
            }}
          />
          <svg viewBox="0 0 200 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="redShieldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
              <linearGradient id="blueShieldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="goldBorderGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#8a6d1c" />
              </linearGradient>
              <linearGradient id="swordBladeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="vsTextGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#fde047" floodOpacity="0.8" />
              </filter>
              <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Background Symmetrical Crossed Swords */}
            <g filter="url(#shieldShadow)">
              <path d="M32,26 L168,104" stroke="url(#swordBladeGrad)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M28,22 L38,30" stroke="url(#goldBorderGrad)" strokeWidth="4.5" />
              <circle cx="25" cy="19" r="4" fill="#d4af37" />

              <path d="M168,26 L32,104" stroke="url(#swordBladeGrad)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M172,22 L162,30" stroke="url(#goldBorderGrad)" strokeWidth="4.5" />
              <circle cx="175" cy="19" r="4" fill="#d4af37" />
            </g>

            {/* Spark Energy Particles */}
            <circle cx="90" cy="40" r="2" fill="#38bdf8" className={styles.sparkParticle} />
            <circle cx="110" cy="90" r="2.5" fill="#fde047" className={styles.sparkParticleAlt} />

            {/* Left Red Team Shield */}
            <g className={styles.leftFighter} filter="url(#shieldShadow)">
              <path
                d="M52,30 C52,30 72,24 82,30 C82,58 79,84 52,100 C25,84 22,58 22,30 C32,24 52,30 52,30 Z"
                fill="url(#redShieldGrad)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="2.8"
              />
              <path d="M44,46 L47,41 L52,45 L57,41 L60,46 Z" fill="#fde047" stroke="#9a7b1c" strokeWidth="0.8" />
              <circle cx="52" cy="56" r="8" fill="#ffffff" opacity="0.9" />
              <path d="M40,73 C40,64 64,64 64,73 Z" fill="#ffffff" opacity="0.9" />
            </g>

            {/* Right Blue Team Shield */}
            <g className={styles.rightFighter} filter="url(#shieldShadow)">
              <path
                d="M148,30 C148,30 168,24 178,30 C178,58 175,84 148,100 C121,84 118,58 118,30 C128,24 148,30 148,30 Z"
                fill="url(#blueShieldGrad)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="2.8"
              />
              <path d="M140,46 L143,41 L148,45 L153,41 L156,46 Z" fill="#fde047" stroke="#9a7b1c" strokeWidth="0.8" />
              <circle cx="148" cy="56" r="8" fill="#ffffff" opacity="0.9" />
              <path d="M136,73 C136,64 160,64 160,73 Z" fill="#ffffff" opacity="0.9" />
            </g>

            {/* Center 3D Gold VS Medallion with Pulse Shockwave */}
            <g className={styles.vsBadge} filter="url(#goldGlow)">
              <circle cx="100" cy="65" r="25" fill="none" stroke="#fde047" strokeWidth="1" className={styles.pulseRing} />
              <circle cx="100" cy="65" r="21" fill="#11162a" stroke="url(#goldBorderGrad)" strokeWidth="3" />
              <circle cx="100" cy="65" r="17" fill="url(#goldBorderGrad)" opacity="0.3" />
              <text
                x="100"
                y="72"
                textAnchor="middle"
                fill="url(#vsTextGrad)"
                fontWeight="900"
                fontSize="17"
                fontStyle="italic"
                fontFamily="system-ui, sans-serif"
                letterSpacing="1px"
              >
                VS
              </text>
            </g>
          </svg>
        </div>
      );

    case 'lucky-draw':
      return (
        <div className={`${styles.visualWrapper} ${styles.luckyDrawVisual}`}>
          <div
            className={styles.ambientGlow}
            style={{
              background:
                'radial-gradient(circle, rgba(212,175,55,0.32) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="wheelRim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#785a12" />
              </linearGradient>
              <filter id="wheelShadow">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.65" />
              </filter>
            </defs>

            {/* Pedestal Stand */}
            <g className={styles.wheelStand}>
              <polygon points="80,72 60,118 100,118" fill="#182038" stroke="#2e385f" strokeWidth="2" />
              <ellipse cx="80" cy="118" rx="36" ry="8" fill="#0f1322" stroke="url(#wheelRim)" strokeWidth="1.8" />
            </g>

            {/* Continuous Spinning Wheel */}
            <g className={styles.spinningWheel} style={{ transformOrigin: '80px 58px' }} filter="url(#wheelShadow)">
              <circle cx="80" cy="58" r="46" fill="#14182b" stroke="url(#wheelRim)" strokeWidth="4.5" />
              <circle cx="80" cy="58" r="43" fill="none" stroke="#ffe082" strokeWidth="1" opacity="0.4" />

              {/* 6 Multi-colored Reward Wedges */}
              <path d="M80,58 L80,12 A46,46 0 0,1 119.8,35 Z" fill="#d4af37" opacity="0.9" />
              <path d="M80,58 L119.8,35 A46,46 0 0,1 119.8,81 Z" fill="#2563eb" opacity="0.85" />
              <path d="M80,58 L119.8,81 A46,46 0 0,1 80,104 Z" fill="#dc2626" opacity="0.85" />
              <path d="M80,58 L80,104 A46,46 0 0,1 40.2,81 Z" fill="#10b981" opacity="0.85" />
              <path d="M80,58 L40.2,81 A46,46 0 0,1 40.2,35 Z" fill="#9333ea" opacity="0.85" />
              <path d="M80,58 L40.2,35 A46,46 0 0,1 80,12 Z" fill="#f59e0b" opacity="0.85" />

              {/* Outer LED Light Dots */}
              <circle cx="80" cy="16" r="2.5" fill="#fff" className={styles.ledDot} />
              <circle cx="116" cy="37" r="2.5" fill="#fff" className={styles.ledDotAlt} />
              <circle cx="116" cy="79" r="2.5" fill="#fff" className={styles.ledDot} />
              <circle cx="80" cy="100" r="2.5" fill="#fff" className={styles.ledDotAlt} />
              <circle cx="44" cy="79" r="2.5" fill="#fff" className={styles.ledDot} />
              <circle cx="44" cy="37" r="2.5" fill="#fff" className={styles.ledDotAlt} />

              {/* Center Metallic Hub */}
              <circle cx="80" cy="58" r="12" fill="url(#wheelRim)" />
              <circle cx="80" cy="58" r="6" fill="#121627" />
              <circle cx="80" cy="58" r="2" fill="#ffe082" />
            </g>

            {/* Top Pointer Arrow */}
            <g filter="drop-shadow(0 3px 5px rgba(0,0,0,0.7))">
              <polygon points="80,20 72,4 88,4" fill="#fde047" stroke="#9a7b1c" strokeWidth="1.2" />
              <circle cx="80" cy="8" r="3" fill="#ffffff" />
            </g>

            {/* Floating Gold Coins */}
            <g className={styles.floatingCoinLeft}>
              <circle cx="28" cy="32" r="5.5" fill="#fde047" stroke="#b48909" strokeWidth="1" />
              <text x="28" y="34.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#854d0e">$</text>
            </g>
            <g className={styles.floatingCoinRight}>
              <circle cx="132" cy="88" r="4.5" fill="#fde047" stroke="#b48909" strokeWidth="1" />
              <text x="132" y="90" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#854d0e">$</text>
            </g>
          </svg>
        </div>
      );

    case 'milestone-rewards':
      return (
        <div className={`${styles.visualWrapper} ${styles.milestoneVisual}`}>
          <div
            className={styles.ambientGlow}
            style={{
              background:
                'radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 180 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="pathGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#fde047" />
              </linearGradient>
              <filter id="starGlow">
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#fde047" floodOpacity="0.85" />
              </filter>
            </defs>

            {/* Base Dark Track */}
            <path
              d="M30,98 Q70,100 90,62 T150,40"
              fill="none"
              stroke="#1b2440"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Animated Laser Pulse Line */}
            <path
              d="M30,98 Q70,100 90,62 T150,40"
              fill="none"
              stroke="url(#pathGlow)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="8 5"
              className={styles.animatedPath}
            />

            {/* Milestone Step 1 - Node L10 */}
            <g transform="translate(30, 98)">
              <circle cx="0" cy="0" r="10" fill="#1b223a" stroke="#60a5fa" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#60a5fa" />
            </g>

            {/* Milestone Step 2 - Node L50 */}
            <g transform="translate(90, 62)">
              <circle cx="0" cy="0" r="12" fill="#1b223a" stroke="#d4af37" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="5" fill="#fde047" />
            </g>

            {/* Apex 3D Trophy Star with Halo Ring */}
            <g className={styles.glowingStar} filter="url(#starGlow)">
              <circle cx="150" cy="40" r="19" fill="none" stroke="#fde047" strokeWidth="1" strokeDasharray="4 2" className={styles.haloRing} />
              <circle cx="150" cy="40" r="16" fill="#1b2038" stroke="#fde047" strokeWidth="2.5" />
              <polygon
                points="150,28 153,36 161,37 155,43 157,51 150,47 143,51 145,43 139,37 147,36"
                fill="#fde047"
              />
            </g>
          </svg>
        </div>
      );

    case 'collectible-cards':
      return (
        <div className={`${styles.visualWrapper} ${styles.cardsVisual}`}>
          <div
            className={styles.ambientGlow}
            style={{
              background:
                'radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="goldCardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#222b4e" />
                <stop offset="100%" stopColor="#0f1424" />
              </linearGradient>
              <linearGradient id="cardRim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <filter id="cardGlow">
                <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#38bdf8" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Back Card 1 (Sapphire) */}
            <rect
              x="22"
              y="28"
              width="58"
              height="80"
              rx="10"
              transform="rotate(-20 22 28)"
              fill="#181e36"
              stroke="#4338ca"
              strokeWidth="2"
              opacity="0.6"
            />

            {/* Middle Card 2 (Amethyst) */}
            <rect
              x="44"
              y="20"
              width="58"
              height="80"
              rx="10"
              transform="rotate(-6 44 20)"
              fill="#1e2648"
              stroke="#818cf8"
              strokeWidth="2"
              opacity="0.8"
            />

            {/* Front Shiny Holographic Card */}
            <g className={styles.primaryCard} transform="rotate(10 85 20)" filter="url(#cardGlow)">
              <rect
                x="68"
                y="16"
                width="60"
                height="86"
                rx="10"
                fill="url(#goldCardGrad)"
                stroke="url(#cardRim)"
                strokeWidth="2.5"
              />
              {/* Inner Gem Crest */}
              <polygon points="98,34 112,54 98,74 84,54" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <polygon points="98,40 106,54 98,68 90,54" fill="url(#cardRim)" opacity="0.8" />
              {/* Shimmer Line Overlay */}
              <line x1="72" y1="20" x2="124" y2="94" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" className={styles.shimmerLine} />
              <circle cx="78" cy="26" r="2.5" fill="#38bdf8" />
              <circle cx="118" cy="92" r="2.5" fill="#38bdf8" />
            </g>
          </svg>
        </div>
      );

    case 'surprise-gift':
      return (
        <div className={`${styles.visualWrapper} ${styles.giftVisual}`}>
          <div
            className={styles.ambientGlow}
            style={{
              background:
                'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="goldRibbon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#997a15" />
              </linearGradient>
              <filter id="giftShadow">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.55" />
              </filter>
            </defs>

            {/* Portal Energy Ring Base */}
            <ellipse cx="80" cy="112" rx="42" ry="9" fill="#12162a" stroke="#a855f7" strokeWidth="2" className={styles.portalRing} />

            {/* Floating Sparkles Bursting Out */}
            <circle cx="55" cy="28" r="3.5" fill="#fde047" opacity="0.9" className={styles.sparkleOne} />
            <circle cx="105" cy="22" r="4.5" fill="#fde047" opacity="0.9" className={styles.sparkleTwo} />

            {/* Main Box Body */}
            <g className={styles.boxGroup} filter="url(#giftShadow)">
              <rect x="40" y="56" width="80" height="54" rx="6" fill="#182038" stroke="#2c375e" strokeWidth="2" />
              <rect x="73" y="56" width="14" height="54" fill="url(#goldRibbon)" />
              <rect x="40" y="74" width="80" height="12" fill="url(#goldRibbon)" />
            </g>

            {/* Box Lid & Bow */}
            <g className={styles.boxLid} filter="url(#giftShadow)">
              <rect x="34" y="46" width="92" height="14" rx="4" fill="#222b4a" stroke="url(#goldRibbon)" strokeWidth="1.5" />
              <rect x="73" y="46" width="14" height="14" fill="url(#goldRibbon)" />
              <ellipse cx="66" cy="38" rx="12" ry="7" fill="url(#goldRibbon)" transform="rotate(-20 66 38)" />
              <ellipse cx="94" cy="38" rx="12" ry="7" fill="url(#goldRibbon)" transform="rotate(20 94 38)" />
              <circle cx="80" cy="42" r="5" fill="#fde047" stroke="#997a15" strokeWidth="1" />
            </g>
          </svg>
        </div>
      );

    case 'mystery-chest':
      return (
        <div className={`${styles.visualWrapper} ${styles.chestVisual}`}>
          <div
            className={styles.ambientGlow}
            style={{
              background:
                'radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="chestGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#8a6b18" />
              </linearGradient>
              <filter id="chestGlow">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Floating Mysterious Question Orb */}
            <g className={styles.mysteryOrb} filter="drop-shadow(0 0 10px rgba(253,224,71,0.85))">
              <circle cx="80" cy="26" r="12" fill="#111628" stroke="url(#chestGold)" strokeWidth="2" />
              <text x="80" y="31" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="15">
                ?
              </text>
            </g>

            {/* Chest Base */}
            <g filter="url(#chestGlow)">
              <path d="M40,58 L120,58 L114,104 L46,104 Z" fill="#18203a" stroke="#2e3a65" strokeWidth="2" />
              <line x1="58" y1="58" x2="56" y2="104" stroke="url(#chestGold)" strokeWidth="3.5" />
              <line x1="102" y1="58" x2="104" y2="104" stroke="url(#chestGold)" strokeWidth="3.5" />

              {/* Keyhole Lock Plate */}
              <rect x="73" y="74" width="14" height="18" rx="3" fill="#111526" stroke="url(#chestGold)" strokeWidth="1.8" />
              <circle cx="80" cy="81" r="2.5" fill="#fde047" />
              <polygon points="79,81 81,81 82,88 78,88" fill="#fde047" />
            </g>

            {/* Chest Lid */}
            <g className={styles.chestLid} filter="url(#chestGlow)">
              <path d="M36,58 C36,34 124,34 124,58 Z" fill="#232d4e" stroke="url(#chestGold)" strokeWidth="2.8" />
              <circle cx="80" cy="60" r="6.5" fill="url(#chestGold)" />
            </g>
          </svg>
        </div>
      );

    case 'referral-network':
      return (
        <div className={`${styles.visualWrapper} ${styles.networkVisual}`}>
          <div
            className={styles.ambientGlow}
            style={{
              background:
                'radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="netGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
              <filter id="nodeGlow">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.75" />
              </filter>
            </defs>

            {/* Network Laser Connection Lines */}
            <g stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 3" className={styles.laserLine}>
              <line x1="80" y1="65" x2="40" y2="30" />
              <line x1="80" y1="65" x2="120" y2="30" />
              <line x1="80" y1="65" x2="36" y2="100" />
              <line x1="80" y1="65" x2="124" y2="100" />
            </g>

            {/* Satellite Member Nodes */}
            <g transform="translate(40, 30)" filter="url(#nodeGlow)" className={styles.satelliteNode}>
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(120, 30)" filter="url(#nodeGlow)" className={styles.satelliteNodeAlt}>
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(36, 100)" filter="url(#nodeGlow)" className={styles.satelliteNode}>
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(124, 100)" filter="url(#nodeGlow)" className={styles.satelliteNodeAlt}>
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            {/* Central Leader Node */}
            <g className={styles.centerNode} transform="translate(80, 65)">
              <circle cx="0" cy="0" r="19" fill="#1b2446" stroke="url(#netGold)" strokeWidth="3" filter="drop-shadow(0 0 12px rgba(212,175,55,0.7))" />
              <circle cx="0" cy="-4" r="5" fill="#fde047" />
              <path d="M-8,8 C-8,1 8,1 8,8" fill="#fde047" />
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};

export default FeatureVisual;
