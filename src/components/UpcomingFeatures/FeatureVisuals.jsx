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
                'radial-gradient(circle, rgba(239,68,68,0.22) 0%, rgba(59,130,246,0.22) 100%)',
            }}
          />
          <svg viewBox="0 0 200 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="redShieldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
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
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="vsTextGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#fde047" floodOpacity="0.6" />
              </filter>
              <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Background Symmetrical Crossed Swords */}
            <g filter="url(#shieldShadow)" stroke="#475569" strokeWidth="1">
              {/* Sword 1: Top-Left to Bottom-Right */}
              <path d="M35,28 L165,102" stroke="url(#swordBladeGrad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M30,24 L40,32" stroke="url(#goldBorderGrad)" strokeWidth="4" />
              <circle cx="28" cy="22" r="3.5" fill="#d4af37" />

              {/* Sword 2: Top-Right to Bottom-Left */}
              <path d="M165,28 L35,102" stroke="url(#swordBladeGrad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M170,24 L160,32" stroke="url(#goldBorderGrad)" strokeWidth="4" />
              <circle cx="172" cy="22" r="3.5" fill="#d4af37" />
            </g>

            {/* Left Red Team Shield (Centered at x=52, y=65) */}
            <g className={styles.leftFighter} filter="url(#shieldShadow)">
              {/* Outer Shield Body */}
              <path
                d="M52,32 C52,32 72,26 82,32 C82,58 79,82 52,98 C25,82 22,58 22,32 C32,26 52,32 52,32 Z"
                fill="url(#redShieldGrad)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="2.5"
              />

              {/* Inner Crown Emblem */}
              <path
                d="M44,48 L47,43 L52,47 L57,43 L60,48 Z"
                fill="#fde047"
                stroke="#9a7b1c"
                strokeWidth="0.8"
              />

              {/* Inner Avatar Silhouette */}
              <circle cx="52" cy="58" r="7.5" fill="#ffffff" opacity="0.9" />
              <path d="M41,74 C41,66 63,66 63,74 Z" fill="#ffffff" opacity="0.9" />
            </g>

            {/* Right Blue Team Shield (Centered at x=148, y=65) */}
            <g className={styles.rightFighter} filter="url(#shieldShadow)">
              {/* Outer Shield Body */}
              <path
                d="M148,32 C148,32 168,26 178,32 C178,58 175,82 148,98 C121,82 118,58 118,32 C128,26 148,32 148,32 Z"
                fill="url(#blueShieldGrad)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="2.5"
              />

              {/* Inner Crown Emblem */}
              <path
                d="M140,48 L143,43 L148,47 L153,43 L156,48 Z"
                fill="#fde047"
                stroke="#9a7b1c"
                strokeWidth="0.8"
              />

              {/* Inner Avatar Silhouette */}
              <circle cx="148" cy="58" r="7.5" fill="#ffffff" opacity="0.9" />
              <path d="M137,74 C137,66 159,66 159,74 Z" fill="#ffffff" opacity="0.9" />
            </g>

            {/* Center 3D Gold VS Emblem */}
            <g className={styles.vsBadge} filter="url(#goldGlow)">
              <circle cx="100" cy="65" r="21" fill="#11162a" stroke="url(#goldBorderGrad)" strokeWidth="3" />
              <circle cx="100" cy="65" r="17" fill="url(#goldBorderGrad)" opacity="0.25" />
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
                'radial-gradient(circle, rgba(212,175,55,0.28) 0%, transparent 70%)',
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
                <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Pedestal Base */}
            <g className={styles.wheelStand}>
              <polygon points="80,72 62,118 98,118" fill="#1a2035" stroke="#2e385f" strokeWidth="2" />
              <ellipse cx="80" cy="118" rx="34" ry="7" fill="#0f1322" stroke="url(#wheelRim)" strokeWidth="1.5" />
            </g>

            {/* Spinning Wheel Body */}
            <g className={styles.spinningWheel} style={{ transformOrigin: '80px 58px' }} filter="url(#wheelShadow)">
              {/* Outer Rim */}
              <circle cx="80" cy="58" r="46" fill="#14182b" stroke="url(#wheelRim)" strokeWidth="4" />
              <circle cx="80" cy="58" r="43" fill="none" stroke="#ffe082" strokeWidth="1" opacity="0.4" />

              {/* Colorful Wheel Slices */}
              <path d="M80,58 L80,12 A46,46 0 0,1 126,58 Z" fill="#d4af37" opacity="0.85" />
              <path d="M80,58 L126,58 A46,46 0 0,1 80,104 Z" fill="#1d264a" />
              <path d="M80,58 L80,104 A46,46 0 0,1 34,58 Z" fill="#3b82f6" opacity="0.75" />
              <path d="M80,58 L34,58 A46,46 0 0,1 80,12 Z" fill="#dc2626" opacity="0.75" />

              {/* Peg Dots around Rim */}
              <circle cx="80" cy="16" r="2" fill="#fff" />
              <circle cx="122" cy="58" r="2" fill="#fff" />
              <circle cx="80" cy="100" r="2" fill="#fff" />
              <circle cx="38" cy="58" r="2" fill="#fff" />

              {/* Center Metallic Hub */}
              <circle cx="80" cy="58" r="12" fill="url(#wheelRim)" />
              <circle cx="80" cy="58" r="6" fill="#121627" />
              <circle cx="80" cy="58" r="2" fill="#ffe082" />
            </g>

            {/* Top Pointer Arrow */}
            <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))">
              <polygon points="80,18 73,4 87,4" fill="#fde047" stroke="#9a7b1c" strokeWidth="1" />
              <circle cx="80" cy="7" r="2.5" fill="#ffffff" />
            </g>

            {/* Floating Gold Coins */}
            <circle cx="32" cy="30" r="5" fill="#fde047" stroke="#b48909" strokeWidth="1" opacity="0.8" />
            <circle cx="130" cy="90" r="4" fill="#fde047" stroke="#b48909" strokeWidth="1" opacity="0.8" />
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
                'radial-gradient(circle, rgba(96,165,250,0.25) 0%, transparent 70%)',
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
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#fde047" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Base Path Line */}
            <path
              d="M30,98 Q70,100 90,62 T150,40"
              fill="none"
              stroke="#1e2942"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Glowing Track Line */}
            <path
              d="M30,98 Q70,100 90,62 T150,40"
              fill="none"
              stroke="url(#pathGlow)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="6 4"
              className={styles.animatedPath}
            />

            {/* Milestone Step 1 - Node */}
            <g transform="translate(30, 98)">
              <circle cx="0" cy="0" r="10" fill="#1b223a" stroke="#60a5fa" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#60a5fa" />
            </g>

            {/* Milestone Step 2 - Node */}
            <g transform="translate(90, 62)">
              <circle cx="0" cy="0" r="12" fill="#1b223a" stroke="#d4af37" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="5" fill="#fde047" />
            </g>

            {/* Top Apex Trophy / Milestone Star */}
            <g className={styles.glowingStar} filter="url(#starGlow)">
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
                'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="goldCardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e2645" />
                <stop offset="100%" stopColor="#0f1424" />
              </linearGradient>
              <linearGradient id="cardRim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <filter id="cardGlow">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#38bdf8" floodOpacity="0.35" />
              </filter>
            </defs>

            {/* Back Card 1 */}
            <rect
              x="24"
              y="30"
              width="58"
              height="80"
              rx="10"
              transform="rotate(-18 24 30)"
              fill="#181e36"
              stroke="#4338ca"
              strokeWidth="2"
              opacity="0.6"
            />

            {/* Middle Card 2 */}
            <rect
              x="45"
              y="22"
              width="58"
              height="80"
              rx="10"
              transform="rotate(-5 45 22)"
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
              <polygon points="98,40 106,54 98,68 90,54" fill="url(#cardRim)" opacity="0.75" />
              {/* Corner Star Details */}
              <circle cx="78" cy="26" r="2" fill="#38bdf8" />
              <circle cx="118" cy="92" r="2" fill="#38bdf8" />
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
                'radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)',
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
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Floating Coins Bursting Out */}
            <circle cx="60" cy="30" r="4" fill="#fde047" stroke="#b48909" strokeWidth="1" opacity="0.9" />
            <circle cx="100" cy="24" r="5" fill="#fde047" stroke="#b48909" strokeWidth="1" opacity="0.9" />

            {/* Main Box Body */}
            <g className={styles.boxGroup} filter="url(#giftShadow)">
              <rect x="40" y="56" width="80" height="54" rx="6" fill="#182038" stroke="#2c375e" strokeWidth="2" />
              {/* Vertical Gold Ribbon */}
              <rect x="73" y="56" width="14" height="54" fill="url(#goldRibbon)" />
              {/* Horizontal Gold Ribbon */}
              <rect x="40" y="74" width="80" height="12" fill="url(#goldRibbon)" />
            </g>

            {/* Box Lid & Bow */}
            <g className={styles.boxLid} filter="url(#giftShadow)">
              <rect x="34" y="46" width="92" height="14" rx="4" fill="#222b4a" stroke="url(#goldRibbon)" strokeWidth="1.5" />
              <rect x="73" y="46" width="14" height="14" fill="url(#goldRibbon)" />

              {/* Ribbon Bow */}
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
                'radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 70%)',
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
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Floating Mysterious Question Orb */}
            <g transform="translate(80, 28)" filter="drop-shadow(0 0 8px rgba(253,224,71,0.7))">
              <circle cx="0" cy="0" r="11" fill="#111628" stroke="url(#chestGold)" strokeWidth="2" />
              <text x="0" y="5" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="14">
                ?
              </text>
            </g>

            {/* Chest Base */}
            <g filter="url(#chestGlow)">
              <path d="M40,58 L120,58 L114,104 L46,104 Z" fill="#18203a" stroke="#2e3a65" strokeWidth="2" />
              {/* Metallic Straps */}
              <line x1="58" y1="58" x2="56" y2="104" stroke="url(#chestGold)" strokeWidth="3" />
              <line x1="102" y1="58" x2="104" y2="104" stroke="url(#chestGold)" strokeWidth="3" />

              {/* Keyhole Lock Plate */}
              <rect x="73" y="74" width="14" height="18" rx="3" fill="#111526" stroke="url(#chestGold)" strokeWidth="1.5" />
              <circle cx="80" cy="81" r="2.5" fill="#fde047" />
              <polygon points="79,81 81,81 82,88 78,88" fill="#fde047" />
            </g>

            {/* Chest Lid */}
            <g className={styles.chestLid} filter="url(#chestGlow)">
              <path d="M36,58 C36,34 124,34 124,58 Z" fill="#232d4e" stroke="url(#chestGold)" strokeWidth="2.5" />
              <circle cx="80" cy="60" r="6" fill="url(#chestGold)" />
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
                'radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)',
            }}
          />
          <svg viewBox="0 0 160 130" className={styles.svgGraphic}>
            <defs>
              <linearGradient id="netGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
              <filter id="nodeGlow">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#38bdf8" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Network Laser Connection Lines */}
            <g stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 3" opacity="0.65">
              <line x1="80" y1="65" x2="42" y2="32" />
              <line x1="80" y1="65" x2="118" y2="32" />
              <line x1="80" y1="65" x2="38" y2="98" />
              <line x1="80" y1="65" x2="122" y2="98" />
            </g>

            {/* Satellite Member Nodes */}
            <g transform="translate(42, 32)" filter="url(#nodeGlow)">
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(118, 32)" filter="url(#nodeGlow)">
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(38, 98)" filter="url(#nodeGlow)">
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            <g transform="translate(122, 98)" filter="url(#nodeGlow)">
              <circle cx="0" cy="0" r="11" fill="#18203a" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3.5" fill="#60a5fa" />
              <path d="M-5,6 C-5,1 5,1 5,6" fill="#60a5fa" />
            </g>

            {/* Central Leader Node */}
            <g className={styles.centerNode} transform="translate(80, 65)">
              <circle cx="0" cy="0" r="18" fill="#1b2446" stroke="url(#netGold)" strokeWidth="3" filter="drop-shadow(0 0 10px rgba(212,175,55,0.6))" />
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
