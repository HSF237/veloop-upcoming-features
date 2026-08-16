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
                'radial-gradient(circle, rgba(239,68,68,0.35) 0%, rgba(59,130,246,0.35) 100%)',
            }}
          />
          <svg viewBox="0 0 200 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="redShieldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff8787" />
                <stop offset="40%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
              <linearGradient id="blueShieldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="40%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="goldBorderGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#785a12" />
              </linearGradient>
              <linearGradient id="swordBladeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="vsTextGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#fde047" floodOpacity="0.85" />
              </filter>
              <filter id="shieldShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.7" />
              </filter>
            </defs>

            {/* Battle Stage Base Platform */}
            <ellipse cx="100" cy="112" rx="75" ry="12" fill="#12162a" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" />
            <ellipse cx="100" cy="112" rx="55" ry="8" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" />

            {/* Background Crossed Laser Swords */}
            <g filter="url(#shieldShadow)">
              <path d="M28,22 L172,108" stroke="url(#swordBladeGrad)" strokeWidth="5" strokeLinecap="round" />
              <path d="M22,18 L34,26" stroke="url(#goldBorderGrad)" strokeWidth="5" />
              <circle cx="19" cy="15" r="4.5" fill="#d4af37" />

              <path d="M172,22 L28,108" stroke="url(#swordBladeGrad)" strokeWidth="5" strokeLinecap="round" />
              <path d="M178,18 L166,26" stroke="url(#goldBorderGrad)" strokeWidth="5" />
              <circle cx="181" cy="15" r="4.5" fill="#d4af37" />
            </g>

            {/* Electric Spark Particles */}
            <circle cx="85" cy="35" r="2.5" fill="#38bdf8" className={styles.sparkParticle} />
            <circle cx="115" cy="92" r="3" fill="#fde047" className={styles.sparkParticleAlt} />

            {/* Left Red Team 3D Shield */}
            <g className={styles.leftFighter} filter="url(#shieldShadow)">
              <path
                d="M52,28 C52,28 74,22 84,28 C84,58 81,86 52,102 C23,86 20,58 20,28 C30,22 52,28 52,28 Z"
                fill="url(#redShieldGrad)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="3"
              />
              <path d="M43,44 L47,38 L52,43 L57,38 L61,44 Z" fill="#fde047" stroke="#9a7b1c" strokeWidth="0.8" />
              <circle cx="52" cy="56" r="9" fill="#ffffff" opacity="0.95" />
              <path d="M39,74 C39,64 65,64 65,74 Z" fill="#ffffff" opacity="0.95" />
            </g>

            {/* Right Blue Team 3D Shield */}
            <g className={styles.rightFighter} filter="url(#shieldShadow)">
              <path
                d="M148,28 C148,28 170,22 180,28 C180,58 177,86 148,102 C119,86 116,58 116,28 C126,22 148,28 148,28 Z"
                fill="url(#blueShieldGrad)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="3"
              />
              <path d="M139,44 L143,38 L148,43 L153,38 L157,44 Z" fill="#fde047" stroke="#9a7b1c" strokeWidth="0.8" />
              <circle cx="148" cy="56" r="9" fill="#ffffff" opacity="0.95" />
              <path d="M135,74 C135,64 161,64 161,74 Z" fill="#ffffff" opacity="0.95" />
            </g>

            {/* Center 3D Gold VS Medallion */}
            <g className={styles.vsBadge} filter="url(#goldGlow)">
              <circle cx="100" cy="65" r="26" fill="none" stroke="#fde047" strokeWidth="1.5" className={styles.pulseRing} />
              <circle cx="100" cy="65" r="22" fill="#0f1326" stroke="url(#goldBorderGrad)" strokeWidth="3.5" />
              <circle cx="100" cy="65" r="17" fill="url(#goldBorderGrad)" opacity="0.3" />
              <text
                x="100"
                y="72"
                textAnchor="middle"
                fill="url(#vsTextGrad)"
                fontWeight="900"
                fontSize="18"
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
                'radial-gradient(circle, rgba(212,175,55,0.38) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="wheelRim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff2a8" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#694e0e" />
              </linearGradient>
              <filter id="wheelShadow">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.7" />
              </filter>
            </defs>

            {/* 3D Casino Pedestal Base */}
            <g className={styles.wheelStand}>
              <polygon points="80,72 58,118 102,118" fill="#161b30" stroke="#2d375d" strokeWidth="2" />
              <ellipse cx="80" cy="118" rx="38" ry="9" fill="#0c0f1c" stroke="url(#wheelRim)" strokeWidth="2" />
            </g>

            {/* Continuous 360-Degree Axle Spinning Wheel */}
            <g className={styles.spinningWheel} filter="url(#wheelShadow)">
              {/* Outer Double Rim */}
              <circle cx="80" cy="58" r="47" fill="#121629" stroke="url(#wheelRim)" strokeWidth="5" />
              <circle cx="80" cy="58" r="43" fill="none" stroke="#ffe082" strokeWidth="1" opacity="0.4" />

              {/* 8 Multi-colored Reward Wedges */}
              <path d="M80,58 L80,11 A47,47 0 0,1 113.2,24.8 Z" fill="#d4af37" opacity="0.95" />
              <path d="M80,58 L113.2,24.8 A47,47 0 0,1 127,58 Z" fill="#2563eb" opacity="0.9" />
              <path d="M80,58 L127,58 A47,47 0 0,1 113.2,91.2 Z" fill="#dc2626" opacity="0.9" />
              <path d="M80,58 L113.2,91.2 A47,47 0 0,1 80,105 Z" fill="#10b981" opacity="0.9" />
              <path d="M80,58 L80,105 A47,47 0 0,1 46.8,91.2 Z" fill="#9333ea" opacity="0.9" />
              <path d="M80,58 L46.8,91.2 A47,47 0 0,1 33,58 Z" fill="#f59e0b" opacity="0.9" />
              <path d="M80,58 L33,58 A47,47 0 0,1 46.8,24.8 Z" fill="#06b6d4" opacity="0.9" />
              <path d="M80,58 L46.8,24.8 A47,47 0 0,1 80,11 Z" fill="#e11d48" opacity="0.95" />

              {/* Outer Pulsing LED Gemstones */}
              <circle cx="80" cy="15" r="2.5" fill="#ffffff" className={styles.ledDot} />
              <circle cx="110" cy="27" r="2.5" fill="#ffffff" className={styles.ledDotAlt} />
              <circle cx="123" cy="58" r="2.5" fill="#ffffff" className={styles.ledDot} />
              <circle cx="110" cy="89" r="2.5" fill="#ffffff" className={styles.ledDotAlt} />
              <circle cx="80" cy="101" r="2.5" fill="#ffffff" className={styles.ledDot} />
              <circle cx="50" cy="89" r="2.5" fill="#ffffff" className={styles.ledDotAlt} />
              <circle cx="37" cy="58" r="2.5" fill="#ffffff" className={styles.ledDot} />
              <circle cx="50" cy="27" r="2.5" fill="#ffffff" className={styles.ledDotAlt} />

              {/* Center Metallic Hub */}
              <circle cx="80" cy="58" r="13" fill="url(#wheelRim)" />
              <circle cx="80" cy="58" r="7" fill="#0f1326" />
              <circle cx="80" cy="58" r="3" fill="#ffe082" />
            </g>

            {/* Top Pointer Arrow */}
            <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.8))">
              <polygon points="80,22 71,4 89,4" fill="#fde047" stroke="#8a670a" strokeWidth="1.5" />
              <circle cx="80" cy="8" r="3.5" fill="#ffffff" />
            </g>

            {/* Floating Gold Coins */}
            <g className={styles.floatingCoinLeft}>
              <circle cx="26" cy="30" r="6" fill="#fde047" stroke="#b48909" strokeWidth="1.2" />
              <text x="26" y="32.5" textAnchor="middle" fontSize="7" fontWeight="900" fill="#854d0e">$</text>
            </g>
            <g className={styles.floatingCoinRight}>
              <circle cx="134" cy="90" r="5" fill="#fde047" stroke="#b48909" strokeWidth="1.2" />
              <text x="134" y="92.2" textAnchor="middle" fontSize="6" fontWeight="900" fill="#854d0e">$</text>
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
                'radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 70%)',
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
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#fde047" floodOpacity="0.9" />
              </filter>
            </defs>

            {/* 3D Mountain Peak Base Shadow */}
            <polygon points="15,115 150,38 175,115" fill="#111628" opacity="0.6" />

            {/* Base Dark Track */}
            <path
              d="M28,100 Q68,102 90,62 T152,38"
              fill="none"
              stroke="#1a233d"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Animated Laser Pulse Line */}
            <path
              d="M28,100 Q68,102 90,62 T152,38"
              fill="none"
              stroke="url(#pathGlow)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="9 5"
              className={styles.animatedPath}
            />

            {/* Milestone Node L10 */}
            <g transform="translate(28, 100)">
              <circle cx="0" cy="0" r="11" fill="#161b30" stroke="#60a5fa" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4.5" fill="#60a5fa" />
            </g>

            {/* Milestone Node L50 */}
            <g transform="translate(90, 62)">
              <circle cx="0" cy="0" r="13" fill="#161b30" stroke="#d4af37" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="5.5" fill="#fde047" />
            </g>

            {/* Apex 3D Trophy Star with Concentric Halo Rings */}
            <g className={styles.glowingStar} filter="url(#starGlow)">
              <circle cx="152" cy="38" r="22" fill="none" stroke="#fde047" strokeWidth="1" strokeDasharray="5 3" className={styles.haloRing} />
              <circle cx="152" cy="38" r="17" fill="#151a2e" stroke="#fde047" strokeWidth="2.8" />
              <polygon
                points="152,25 155,33 164,34 157,41 159,49 152,45 145,49 147,41 140,34 149,33"
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
                'radial-gradient(circle, rgba(168,85,247,0.38) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="goldCardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#253059" />
                <stop offset="100%" stopColor="#0d1120" />
              </linearGradient>
              <linearGradient id="cardRim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <filter id="cardGlow">
                <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#38bdf8" floodOpacity="0.45" />
              </filter>
            </defs>

            {/* Back Card 1 (Sapphire) */}
            <rect
              x="20"
              y="26"
              width="60"
              height="84"
              rx="11"
              transform="rotate(-22 20 26)"
              fill="#161c33"
              stroke="#4338ca"
              strokeWidth="2.2"
              opacity="0.6"
            />

            {/* Middle Card 2 (Amethyst) */}
            <rect
              x="43"
              y="18"
              width="60"
              height="84"
              rx="11"
              transform="rotate(-7 43 18)"
              fill="#1d2547"
              stroke="#818cf8"
              strokeWidth="2.2"
              opacity="0.8"
            />

            {/* Front Shiny 3D Holographic Card */}
            <g className={styles.primaryCard} transform="rotate(10 85 20)" filter="url(#cardGlow)">
              <rect
                x="68"
                y="14"
                width="62"
                height="88"
                rx="11"
                fill="url(#goldCardGrad)"
                stroke="url(#cardRim)"
                strokeWidth="2.8"
              />
              {/* Inner Gem Crest */}
              <polygon points="99,32 114,53 99,74 84,53" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <polygon points="99,38 108,53 99,68 90,53" fill="url(#cardRim)" opacity="0.85" />
              {/* Shimmer Line Overlay */}
              <line x1="72" y1="18" x2="126" y2="96" stroke="#ffffff" strokeWidth="1.8" opacity="0.35" className={styles.shimmerLine} />
              <circle cx="78" cy="24" r="2.8" fill="#38bdf8" />
              <circle cx="120" cy="92" r="2.8" fill="#38bdf8" />
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
                'radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="goldRibbon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#8a6911" />
              </linearGradient>
              <filter id="giftShadow">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Portal Energy Ring Base */}
            <ellipse cx="80" cy="112" rx="44" ry="10" fill="#101426" stroke="#a855f7" strokeWidth="2" className={styles.portalRing} />

            {/* Floating Sparkles Bursting Out */}
            <circle cx="54" cy="26" r="3.5" fill="#fde047" opacity="0.95" className={styles.sparkleOne} />
            <circle cx="106" cy="20" r="4.5" fill="#fde047" opacity="0.95" className={styles.sparkleTwo} />

            {/* Main Box Body */}
            <g className={styles.boxGroup} filter="url(#giftShadow)">
              <rect x="38" y="54" width="84" height="56" rx="7" fill="#171f38" stroke="#2b365d" strokeWidth="2.2" />
              <rect x="73" y="54" width="14" height="56" fill="url(#goldRibbon)" />
              <rect x="38" y="73" width="84" height="13" fill="url(#goldRibbon)" />
            </g>

            {/* Box Lid & Bow */}
            <g className={styles.boxLid} filter="url(#giftShadow)">
              <rect x="32" y="44" width="96" height="15" rx="4" fill="#202947" stroke="url(#goldRibbon)" strokeWidth="1.8" />
              <rect x="73" y="44" width="14" height="15" fill="url(#goldRibbon)" />
              <ellipse cx="65" cy="36" rx="13" ry="8" fill="url(#goldRibbon)" transform="rotate(-20 65 36)" />
              <ellipse cx="95" cy="36" rx="13" ry="8" fill="url(#goldRibbon)" transform="rotate(20 95 36)" />
              <circle cx="80" cy="40" r="5.5" fill="#fde047" stroke="#8a6911" strokeWidth="1" />
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
                'radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="chestGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#785910" />
              </linearGradient>
              <filter id="chestGlow">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.65" />
              </filter>
            </defs>

            {/* Floating Mysterious Question Orb */}
            <g className={styles.mysteryOrb} filter="drop-shadow(0 0 12px rgba(253,224,71,0.9))">
              <circle cx="80" cy="24" r="13" fill="#0f1324" stroke="url(#chestGold)" strokeWidth="2.2" />
              <text x="80" y="29.5" textAnchor="middle" fill="#fde047" fontWeight="900" fontSize="16">
                ?
              </text>
            </g>

            {/* Chest Base */}
            <g filter="url(#chestGlow)">
              <path d="M38,56 L122,56 L116,104 L44,104 Z" fill="#171f38" stroke="#2b3760" strokeWidth="2.2" />
              <line x1="57" y1="56" x2="55" y2="104" stroke="url(#chestGold)" strokeWidth="4" />
              <line x1="103" y1="56" x2="105" y2="104" stroke="url(#chestGold)" strokeWidth="4" />

              {/* Keyhole Lock Plate */}
              <rect x="72" y="72" width="16" height="20" rx="3.5" fill="#0d101e" stroke="url(#chestGold)" strokeWidth="2" />
              <circle cx="80" cy="80" r="3" fill="#fde047" />
              <polygon points="78.5,80 81.5,80 82.5,88 77.5,88" fill="#fde047" />
            </g>

            {/* Chest Lid */}
            <g className={styles.chestLid} filter="url(#chestGlow)">
              <path d="M34,56 C34,30 126,30 126,56 Z" fill="#212a4a" stroke="url(#chestGold)" strokeWidth="3" />
              <circle cx="80" cy="58" r="7" fill="url(#chestGold)" />
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
                'radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="netGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>

            {/* Network Laser Connection Lines */}
            <g stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 3" className={styles.laserLine}>
              <line x1="80" y1="65" x2="40" y2="30" />
              <line x1="80" y1="65" x2="120" y2="30" />
              <line x1="80" y1="65" x2="36" y2="100" />
              <line x1="80" y1="65" x2="124" y2="100" />
            </g>

            {/* Clean Satellite Member Nodes without Filter Box Rectangles */}
            <g transform="translate(40, 30)" className={styles.satelliteNode}>
              <circle cx="0" cy="0" r="14" fill="rgba(56, 189, 248, 0.2)" />
              <circle cx="0" cy="0" r="11" fill="#161b30" stroke="#60a5fa" strokeWidth="2.2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(120, 30)" className={styles.satelliteNodeAlt}>
              <circle cx="0" cy="0" r="14" fill="rgba(56, 189, 248, 0.2)" />
              <circle cx="0" cy="0" r="11" fill="#161b30" stroke="#60a5fa" strokeWidth="2.2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(36, 100)" className={styles.satelliteNode}>
              <circle cx="0" cy="0" r="14" fill="rgba(56, 189, 248, 0.2)" />
              <circle cx="0" cy="0" r="11" fill="#161b30" stroke="#60a5fa" strokeWidth="2.2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(124, 100)" className={styles.satelliteNodeAlt}>
              <circle cx="0" cy="0" r="14" fill="rgba(56, 189, 248, 0.2)" />
              <circle cx="0" cy="0" r="11" fill="#161b30" stroke="#60a5fa" strokeWidth="2.2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            {/* Central Leader Node */}
            <g className={styles.centerNode} transform="translate(80, 65)">
              <circle cx="0" cy="0" r="24" fill="rgba(212, 175, 55, 0.22)" />
              <circle cx="0" cy="0" r="18" fill="#171e38" stroke="url(#netGold)" strokeWidth="3.2" />
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
