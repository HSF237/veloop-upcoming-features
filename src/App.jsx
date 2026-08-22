import { useState } from "react";
import "./App.css";

const features = [
  {
    id: "01",
    title: "Team Battle",
    status: "COMING SOON",
    type: "battle",
    description: "Team up, compete, and win epic rewards together.",
    metric: "24/50 Squad Progress",
    reward: "50,000 VEs Pool",
  },
  {
    id: "02",
    title: "Lucky Draw",
    status: "SOON",
    type: "draw",
    description: "Spin, win, and unlock amazing prizes.",
    metric: "3 Free Tickets",
    reward: "On Launch",
  },
  {
    id: "03",
    title: "Milestone Rewards",
    status: "LAUNCHING SOON",
    type: "milestone",
    description: "Reach milestones and unlock exclusive rewards.",
    metric: "Level 03 Unlocks",
    reward: "Legendary Chest",
  },
  {
    id: "04",
    title: "Collect Cards",
    status: "STAY TUNED",
    type: "cards",
    description: "Collect, upgrade, and build your card collection.",
    metric: "0 / 12 Collected",
    reward: "COMMON • RARE • LEGENDARY",
  },
  {
    id: "05",
    title: "Surprise Rewards",
    status: "UNDER DEVELOPMENT",
    type: "gift",
    description: "Something special could be waiting for you. Stay active!",
    metric: "Special Rewards",
    reward: "For You",
  },
  {
    id: "06",
    title: "Mystery Rewards",
    status: "COMING SOON",
    type: "mystery",
    description: "Complete eligible activities and discover what awaits you.",
    metric: "Enter Secret Code",
    reward: "???",
  },
  {
    id: "07",
    title: "Referral Milestone",
    status: "LAUNCHING SOON",
    type: "referral",
    description: "Grow your network and unlock exciting referral rewards.",
    metric: "1 Ref = 500 VEs",
    reward: "5 Refs = 3,000 VEs",
  },
];

function FeatureVisual({ type }) {
  const map = {
    battle: "/videos images/team battle.webm",
    draw: "/videos images/lucky.webm",
    milestone: "/videos images/milestone rewards.webm",
    cards: "/videos images/colelct cards.mp4",
    gift: "/videos images/gift box.webm",
    mystery: "/videos images/mystery rewads.webm",
    referral: "/videos images/milestone reqrds.webm"
  };

  const staticMap = {
    battle: "/assets/team_battle_3d.png",
    draw: "/assets/lucky_draw_tickets.jpg",
    milestone: "/assets/milestone_rewards_3d.png",
    cards: "/assets/collect_cards_3d.png",
    gift: "/assets/surprise_rewards_3d.png",
    mystery: "/assets/mystery_rewards_3d.png",
    referral: "/assets/referral_milestone_3d.png"
  };

  const videoUrl = map[type];
  const imageUrl = staticMap[type];

  // We add an error handler to fallback to image if the video fails to load (like team battle)
  return (
    <div className={`visual ${type}Visual`}>
      <video key={videoUrl} src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="visualCardImage"
        style={{ objectFit: 'contain', background: 'transparent' }}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <img key={videoUrl + "-img"} src={imageUrl} alt={`${type} 3D`} className="visualCardImage" style={{ display: "none" }} />
    </div>
  );
}

function FeatureCard({ feature, onOpen }) {
  return (
    <article
      className={`featureCard card-${feature.type}`}
      onClick={() => onOpen(feature)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onOpen(feature);
        }
      }}
    >
      <div className="cardTop">
        <span className="featureNumber">{feature.id}</span>
        <span className="statusBadge">{feature.status}</span>
      </div>

      <FeatureVisual type={feature.type} />

      <div className="cardContent">
        <h2>{feature.title}</h2>

        <p>{feature.description}</p>

        {feature.type === "battle" && (
          <div className="battleProgress">
            <div className="progressUsers">
              <span className="userDot red" />
              <span className="userDot blue" />
              <span className="userDot gold" />
              <span className="progressText">{feature.metric}</span>
            </div>

            <div className="progressTrack">
              <div className="progressFill battleFill" />
            </div>

            <div className="rewardPill goldPill">
              🏆 {feature.reward}
            </div>
          </div>
        )}

        {feature.type === "draw" && (
          <div className="drawReward">
            <span>🎟</span>
            <strong>{feature.metric}</strong>
            <small>{feature.reward}</small>
          </div>
        )}

        {feature.type === "milestone" && (
          <div className="milestoneInfo">
            <div className="stepPills">
              <span>01</span>
              <span>02</span>
              <span className="activeStep">03</span>
              <span>04</span>
              <span>05</span>
            </div>

            <div className="infoPill bluePill">
              🏆 {feature.metric}: {feature.reward}
            </div>
          </div>
        )}

        {feature.type === "cards" && (
          <div className="collectionInfo">
            <div className="collectionText">
              <strong>{feature.metric}</strong>
            </div>

            <div className="progressTrack">
              <div className="progressFill cardFill" />
            </div>

            <small>{feature.reward}</small>
          </div>
        )}

        {feature.type === "gift" && (
          <div className="giftReward">
            ✨ <strong>{feature.metric}</strong> {feature.reward}
          </div>
        )}

        {feature.type === "mystery" && (
          <div className="secretCode">
            <span>{feature.metric}</span>
            <b>→</b>
          </div>
        )}

        {feature.type === "referral" && (
          <div className="referralRewards">
            <span>👥 1 Ref = 500 VEs</span>
            <span>👥 5 Refs = 3,000 VEs</span>
          </div>
        )}
      </div>

      <button
        className="cardButton"
        onClick={(e) => {
          e.stopPropagation();
          onOpen(feature);
        }}
      >
        Explore Feature <span>→</span>
      </button>
    </article>
  );
}

function Modal({ feature, onClose }) {
  if (!feature) return null;

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className="featureModal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="closeButton" onClick={onClose}>
          ×
        </button>

        <div className="modalNumber">{feature.id}</div>

        <FeatureVisual type={feature.type} />

        <span className="modalStatus">{feature.status}</span>

        <h2>{feature.title}</h2>

        <p>{feature.description}</p>

        <div className="modalHighlight">
          <span>Upcoming experience</span>
          <strong>{feature.metric}</strong>
          <small>{feature.reward}</small>
        </div>

        <button
          className="notifyButton"
          onClick={() => {
            alert(`You're on the list for ${feature.title}!`);
          }}
        >
          <img src="/assets/notify_bell_3d.png" alt="Bell" className="btnBellIcon" /> Notify Me
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFeatures = features.filter(f => 
    f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="topBar">
        <div className="brand">
          <div className="brandMark">
            <img src="/assets/veloop_logo.png" alt="VELOOP Logo" className="brandLogoImg" />
          </div>

          <div>
            <strong>VELOOP</strong>
            <span>REWARDS</span>
          </div>
        </div>

        <div className="searchBox">
          <span>⌕</span>
          <input placeholder="Search rewards, features..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <kbd>⌘ K</kbd>
        </div>

        <div className="walletStats">
          <div className="walletBadge">
            <span className="currencyIcon gold">V</span>
            <strong>1,860 VEs</strong>
            <button>+</button>
          </div>

          <div className="walletBadge">
            <span className="currencyIcon silver">S</span>
            <strong>1,240 SVEs</strong>
            <button>+</button>
          </div>

          <div className="notification">♧<b>12</b></div>

          <div className="avatar">H</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroCopy">
            <h1>
              Upcoming Features <img src="/assets/sparkles_graphic_3d.png" alt="Golden Stars" className="titleSparklesGraphic" />
            </h1>

            <h3>More ways to earn are coming</h3>

            <p>
              Discover the next generation of rewards, challenges,
              and experiences coming to VELOOP Rewards.
            </p>

            <div className="rocketTrail">
              <div className="rocket">
                <video src="/videos images/rocket.webm" autoPlay muted loop playsInline className="rocketImg" style={{ objectFit: "contain", background: "transparent" }} />
                
              </div>
            </div>
          </div>

          <div className="anticipation">
            <div className="anticipationTop">
              <div className="communityIcon">♟</div>

              <div>
                <strong>84,920</strong>
                <span>Users anticipating launch</span>
              </div>

              <b>84%</b>
            </div>

            <div className="anticipationBar">
              <div />
            </div>

            <small>Community Excitement Meter</small>
          </div>
        </section>

        <section className="featuresSection">
          <div className="featureGrid">
            {filteredFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                onOpen={setSelectedFeature}
              />
            ))}
          </div>
        </section>

        <section className="notificationCTA">
          <div className="notificationOrb">
            <img src="/assets/notify_bell_3d.png" alt="Notification Bell" className="ctaBellIcon" />
          </div>

          <div>
            <h2>Be the first to experience these features!</h2>
            <p>
              Turn on notifications so you never miss an update.
            </p>
          </div>

          <button
            className="ctaNotifyBtn"
            onClick={() =>
              alert("Notifications enabled for VELOOP Rewards!")
            }
          >
            <img src="/assets/notify_bell_3d.png" alt="Bell" className="btnBellIcon" /> Notify Me
          </button>
        </section>
      </main>

      <Modal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </div>
  );
}
