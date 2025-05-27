import React, { useEffect, useState } from "react";

const GroWiseInvestmentAnimation = ({ onFinish }) => {
  const [stage, setStage] = useState(0);
  const [coins, setCoins] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (stage < 6) {
      const timer = setTimeout(() => {
        setStage(stage + 1);
      }, 2500);
      return () => clearTimeout(timer);
    }

    if (stage === 6) {
      // Create golden sparkles
      const sparkleInterval = setInterval(() => {
        setSparkles(prev => [
          ...prev.slice(-15),
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 80 + 10,
            size: Math.random() * 6 + 3,
            duration: Math.random() * 2 + 1.5,
          }
        ]);
      }, 100);

      // Golden coins falling (representing profits)
      const coinInterval = setInterval(() => {
        setCoins(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            left: Math.random() * 70 + 15,
            delay: Math.random() * 0.5,
            size: Math.random() * 15 + 25,
            value: coinValues[Math.floor(Math.random() * coinValues.length)],
            rotation: Math.random() * 360,
          }
        ]);
      }, 150);

      const endAnimation = setTimeout(() => {
        clearInterval(coinInterval);
        clearInterval(sparkleInterval);
        setFadeOut(true);
        setTimeout(() => onFinish && onFinish(), 2500);
      }, 6000);

      return () => {
        clearInterval(coinInterval);
        clearInterval(sparkleInterval);
        clearTimeout(endAnimation);
      };
    }
  }, [stage, onFinish]);

  return (
    <div style={{ ...styles.container, opacity: fadeOut ? 0 : 1, transition: 'opacity 2.5s ease' }}>
      <style>{`
        @keyframes seedGlow {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px #ffd700); }
          50% { transform: scale(1.2); filter: drop-shadow(0 0 15px #ffd700); }
        }
        @keyframes growUp {
          0% { height: 0; opacity: 0; transform: scaleY(0); }
          100% { height: 100%; opacity: 1; transform: scaleY(1); }
        }
        @keyframes leafBloom {
          0% { transform: scale(0) rotate(-15deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.9; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes branchExtend {
          0% { stroke-dashoffset: 100; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes coinFall {
          0% { transform: translateY(-50px) rotate(0deg) scale(0); opacity: 0; }
          10% { transform: translateY(0px) rotate(36deg) scale(1); opacity: 1; }
          100% { transform: translateY(700px) rotate(720deg) scale(0.9); opacity: 0; }
        }
        @keyframes goldenSparkle {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
        @keyframes prosperitySway {
          0%, 100% { transform: rotate(-0.5deg) translateX(-1px); }
          25% { transform: rotate(0.8deg) translateX(1px); }
          50% { transform: rotate(-0.3deg) translateX(2px); }
          75% { transform: rotate(0.5deg) translateX(-1px); }
        }
        @keyframes moneyGlow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.6)) brightness(1); }
          50% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.9)) brightness(1.3); }
        }
        @keyframes textShine {
          0% { 
            background-position: -200px 0; 
            text-shadow: 0 0 10px rgba(0, 200, 0, 0.8);
          }
          100% { 
            background-position: 200px 0; 
            text-shadow: 0 0 20px rgba(0, 255, 0, 1);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* Background Elements */}
      <div style={styles.background}>
        {/* Floating dollar signs */}
        <div style={{ ...styles.floatingSymbol, top: '15%', left: '10%', animationDelay: '0s' }}>$</div>
        <div style={{ ...styles.floatingSymbol, top: '25%', right: '15%', animationDelay: '2s' }}>₹</div>
        <div style={{ ...styles.floatingSymbol, top: '35%', left: '20%', animationDelay: '4s' }}>€</div>
        <div style={{ ...styles.floatingSymbol, top: '20%', right: '25%', animationDelay: '6s' }}>£</div>
      </div>

      {/* Golden Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          style={{
            position: 'absolute',
            top: `${sparkle.y}%`,
            left: `${sparkle.x}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffd700 0%, #ffb300 100%)',
            animation: `goldenSparkle ${sparkle.duration}s ease-in-out forwards`,
            pointerEvents: 'none',
            zIndex: 25,
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)',
          }}
        />
      ))}

      <svg width="450" height="550" viewBox="0 0 225 275" style={{ zIndex: 15 }}>
        <defs>
          <radialGradient id="goldGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#ffb300" />
            <stop offset="100%" stopColor="#ff8f00" />
          </radialGradient>
          <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4caf50" />
            <stop offset="50%" stopColor="#66bb6a" />
            <stop offset="100%" stopColor="#4caf50" />
          </linearGradient>
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5d4037" />
            <stop offset="30%" stopColor="#6d4c41" />
            <stop offset="70%" stopColor="#8d6e63" />
            <stop offset="100%" stopColor="#5d4037" />
          </linearGradient>
          <radialGradient id="leafGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#8bc34a" />
            <stop offset="30%" stopColor="#7cb342" />
            <stop offset="70%" stopColor="#689f38" />
            <stop offset="100%" stopColor="#558b2f" />
          </radialGradient>
          <radialGradient id="leafHighlight" cx="20%" cy="20%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <radialGradient id="treeCanopy" cx="25%" cy="25%">
            <stop offset="0%" stopColor="#81c784" />
            <stop offset="20%" stopColor="#66bb6a" />
            <stop offset="60%" stopColor="#4caf50" />
            <stop offset="90%" stopColor="#388e3c" />
            <stop offset="100%" stopColor="#2e7d32" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Rich soil foundation */}
        <ellipse cx="112.5" cy="260" rx="75" ry="15" fill="#8d4e2a" />
        <ellipse cx="112.5" cy="255" rx="65" ry="12" fill="#a0522d" opacity="0.9" />
        <ellipse cx="112.5" cy="250" rx="55" ry="8" fill="#cd853f" opacity="0.8" />

        {/* Initial investment seed (golden coin) */}
        {stage === 0 && (
          <g>
            <circle cx="112.5" cy="245" r="8" fill="url(#goldGradient)" 
                    style={{ animation: "seedGlow 2s infinite" }} filter="url(#glow)" />
            <text x="112.5" y="248" textAnchor="middle" fontSize="8" fill="#8d6e63" fontWeight="bold">$</text>
          </g>
        )}

        {/* Stage 1: Simple seedling with two leaves */}
        {stage >= 1 && (
          <g>
            {/* Green stem */}
            <rect x="111" y="235" width="3" height="15" rx="1.5" fill="url(#stemGradient)" 
                  style={{ transformOrigin: "bottom", animation: "growUp 1.5s ease forwards" }} />
            
            {/* Left leaf - rounded and realistic */}
            <ellipse cx="100" cy="225" rx="15" ry="10" fill="url(#leafGradient)" 
                     transform="rotate(-30 100 225)"
                     style={{ animation: "leafBloom 1.5s ease-in 1s forwards", opacity: 0 }} />
            <ellipse cx="98" cy="223" rx="8" ry="5" fill="url(#leafHighlight)" 
                     transform="rotate(-30 98 223)"
                     style={{ animation: "leafBloom 1.5s ease-in 1s forwards", opacity: 0 }} />
            
            {/* Right leaf - rounded and realistic */}
            <ellipse cx="125" cy="225" rx="15" ry="10" fill="url(#leafGradient)" 
                     transform="rotate(30 125 225)"
                     style={{ animation: "leafBloom 1.5s ease-in 1.2s forwards", opacity: 0 }} />
            <ellipse cx="127" cy="223" rx="8" ry="5" fill="url(#leafHighlight)" 
                     transform="rotate(30 127 223)"
                     style={{ animation: "leafBloom 1.5s ease-in 1.2s forwards", opacity: 0 }} />
            
            {/* Tiny dollar signs on leaves */}
            <text x="100" y="228" textAnchor="middle" fontSize="6" fill="#ffd700" fontWeight="bold" 
                  style={{ animation: "leafBloom 1.5s ease-in 1.5s forwards", opacity: 0 }}>$</text>
            <text x="125" y="228" textAnchor="middle" fontSize="6" fill="#ffd700" fontWeight="bold" 
                  style={{ animation: "leafBloom 1.5s ease-in 1.7s forwards", opacity: 0 }}>$</text>
          </g>
        )}

        {/* Stage 2: Young sapling with more leaves */}
        {stage >= 2 && (
          <g>
            <rect x="109" y="200" width="7" height="35" rx="3.5" fill="url(#stemGradient)" 
                  style={{ transformOrigin: "bottom", animation: "growUp 2s ease forwards" }} />
            
            {/* Multiple pairs of leaves */}
            <ellipse cx="95" cy="210" rx="12" ry="8" fill="url(#leafGradient)" 
                     transform="rotate(-25 95 210)"
                     style={{ animation: "leafBloom 1.8s ease-in 1s forwards", opacity: 0 }} />
            <ellipse cx="130" cy="210" rx="12" ry="8" fill="url(#leafGradient)" 
                     transform="rotate(25 130 210)"
                     style={{ animation: "leafBloom 1.8s ease-in 1.2s forwards", opacity: 0 }} />
            <ellipse cx="90" cy="195" rx="10" ry="7" fill="url(#leafGradient)" 
                     transform="rotate(-35 90 195)"
                     style={{ animation: "leafBloom 1.8s ease-in 1.4s forwards", opacity: 0 }} />
            <ellipse cx="135" cy="195" rx="10" ry="7" fill="url(#leafGradient)" 
                     transform="rotate(35 135 195)"
                     style={{ animation: "leafBloom 1.8s ease-in 1.6s forwards", opacity: 0 }} />
          </g>
        )}

        {/* Stage 3: Young tree with trunk and branches */}
        {stage >= 3 && (
          <g style={{ animation: "prosperitySway 8s ease-in-out infinite" }}>
            {/* Brown trunk */}
            <rect x="102" y="130" width="21" height="70" rx="10.5" fill="url(#trunkGradient)" 
                  style={{ transformOrigin: "bottom", animation: "growUp 2.5s ease forwards" }} />
            
            {/* Main branches */}
            <path d="M112.5 140 Q95 135 80 125" stroke="url(#trunkGradient)" strokeWidth="8" fill="none" 
                  strokeLinecap="round" strokeDasharray="40" 
                  style={{ animation: "branchExtend 2s ease 1s forwards", strokeDashoffset: 40 }} />
            <path d="M112.5 140 Q130 135 145 125" stroke="url(#trunkGradient)" strokeWidth="8" fill="none" 
                  strokeLinecap="round" strokeDasharray="40" 
                  style={{ animation: "branchExtend 2s ease 1.3s forwards", strokeDashoffset: 40 }} />
            <path d="M112.5 155 Q90 150 70 140" stroke="url(#trunkGradient)" strokeWidth="6" fill="none" 
                  strokeLinecap="round" strokeDasharray="50" 
                  style={{ animation: "branchExtend 2s ease 1.6s forwards", strokeDashoffset: 50 }} />
            <path d="M112.5 155 Q135 150 155 140" stroke="url(#trunkGradient)" strokeWidth="6" fill="none" 
                  strokeLinecap="round" strokeDasharray="50" 
                  style={{ animation: "branchExtend 2s ease 1.9s forwards", strokeDashoffset: 50 }} />

            {/* Small canopy clusters */}
            <circle cx="80" cy="125" r="18" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2s ease-in 2.2s forwards", opacity: 0 }} />
            <circle cx="145" cy="125" r="18" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2s ease-in 2.4s forwards", opacity: 0 }} />
            <circle cx="70" cy="140" r="15" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2s ease-in 2.6s forwards", opacity: 0 }} />
            <circle cx="155" cy="140" r="15" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2s ease-in 2.8s forwards", opacity: 0 }} />
            <circle cx="112.5" cy="135" r="22" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2s ease-in 3s forwards", opacity: 0 }} />
          </g>
        )}

        {/* Stage 4+: Full mature tree like reference image */}
        {stage >= 4 && (
          <g style={{ animation: "prosperitySway 10s ease-in-out infinite" }}>
            {/* Thick trunk */}
            <rect x="95" y="80" width="35" height="120" rx="17.5" fill="url(#trunkGradient)" 
                  style={{ transformOrigin: "bottom", animation: "growUp 3s ease forwards" }} />
            
            {/* Major branches spreading outward */}
            <path d="M112.5 90 Q85 85 60 75 Q45 70 35 60" stroke="url(#trunkGradient)" strokeWidth="12" fill="none" 
                  strokeLinecap="round" strokeDasharray="80" 
                  style={{ animation: "branchExtend 2.5s ease 1s forwards", strokeDashoffset: 80 }} />
            <path d="M112.5 90 Q140 85 165 75 Q180 70 190 60" stroke="url(#trunkGradient)" strokeWidth="12" fill="none" 
                  strokeLinecap="round" strokeDasharray="80" 
                  style={{ animation: "branchExtend 2.5s ease 1.2s forwards", strokeDashoffset: 80 }} />
            <path d="M112.5 110 Q75 105 45 95 Q30 90 20 80" stroke="url(#trunkGradient)" strokeWidth="10" fill="none" 
                  strokeLinecap="round" strokeDasharray="90" 
                  style={{ animation: "branchExtend 2.5s ease 1.4s forwards", strokeDashoffset: 90 }} />
            <path d="M112.5 110 Q150 105 180 95 Q195 90 205 80" stroke="url(#trunkGradient)" strokeWidth="10" fill="none" 
                  strokeLinecap="round" strokeDasharray="90" 
                  style={{ animation: "branchExtend 2.5s ease 1.6s forwards", strokeDashoffset: 90 }} />

            {/* Full canopy - multiple overlapping circles for realistic tree shape */}
            <circle cx="112.5" cy="85" r="45" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2.5s ease-in 2s forwards", opacity: 0 }} />
            <circle cx="75" cy="70" r="35" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2.3s ease-in 2.2s forwards", opacity: 0 }} />
            <circle cx="150" cy="70" r="35" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2.3s ease-in 2.4s forwards", opacity: 0 }} />
            <circle cx="60" cy="95" r="28" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2.1s ease-in 2.6s forwards", opacity: 0 }} />
            <circle cx="165" cy="95" r="28" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2.1s ease-in 2.8s forwards", opacity: 0 }} />
            <circle cx="45" cy="75" r="25" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2s ease-in 3s forwards", opacity: 0 }} />
            <circle cx="180" cy="75" r="25" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2s ease-in 3.2s forwards", opacity: 0 }} />
            <circle cx="95" cy="55" r="30" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2.2s ease-in 3.4s forwards", opacity: 0 }} />
            <circle cx="130" cy="55" r="30" fill="url(#treeCanopy)" 
                    style={{ animation: "leafBloom 2.2s ease-in 3.6s forwards", opacity: 0 }} />
            
            {/* Money fruits scattered throughout the canopy */}
            <g style={{ animation: "moneyGlow 3s infinite" }}>
              {/* $100 bills */}
              <rect x="70" y="60" width="12" height="8" rx="2" fill="#228b22" stroke="#ffd700" strokeWidth="1" 
                    style={{ animation: "pulse 2s infinite 0.5s" }} />
              <text x="76" y="66" textAnchor="middle" fontSize="4" fill="#ffd700" fontWeight="bold">$100</text>
              
              <rect x="145" y="55" width="12" height="8" rx="2" fill="#228b22" stroke="#ffd700" strokeWidth="1" 
                    style={{ animation: "pulse 2s infinite 1s" }} />
              <text x="151" y="61" textAnchor="middle" fontSize="4" fill="#ffd700" fontWeight="bold">$100</text>

              {/* $500 bills */}
              <rect x="110" y="45" width="12" height="8" rx="2" fill="#800080" stroke="#ffd700" strokeWidth="1" 
                    style={{ animation: "pulse 2s infinite 1.5s" }} />
              <text x="116" y="51" textAnchor="middle" fontSize="4" fill="#ffd700" fontWeight="bold">$500</text>

              {/* Gold coins */}
              <circle cx="55" cy="80" r="6" fill="url(#goldGradient)" stroke="#ff8f00" strokeWidth="1" 
                      style={{ animation: "pulse 2s infinite 2s" }} filter="url(#glow)" />
              <text x="55" y="83" textAnchor="middle" fontSize="5" fill="#8d6e63" fontWeight="bold">$</text>

              <circle cx="170" cy="85" r="6" fill="url(#goldGradient)" stroke="#ff8f00" strokeWidth="1" 
                      style={{ animation: "pulse 2s infinite 2.5s" }} filter="url(#glow)" />
              <text x="170" y="88" textAnchor="middle" fontSize="5" fill="#8d6e63" fontWeight="bold">$</text>

              {/* Diamond at the top */}
              <polygon points="112.5,25 118,35 107,35" fill="#e1f5fe" stroke="#0277bd" strokeWidth="2"
                       style={{ animation: "pulse 2s infinite 3s" }} filter="url(#glow)" />
            </g>
          </g>
        )}
      </svg>

      {/* Falling money coins */}
      {coins.map(coin => (
        <div
          key={coin.id}
          style={{
            position: 'absolute',
            top: '180px',
            left: `${coin.left}%`,
            width: `${coin.size}px`,
            height: `${coin.size}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #ffd700, #ffb300)',
            animation: `coinFall 4s ${coin.delay}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            zIndex: 20,
            boxShadow: '0 4px 12px rgba(255, 215, 0, 0.6), inset 0 2px 6px rgba(255, 255, 255, 0.4)',
            border: '2px solid #ff8f00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: `${coin.size * 0.4}px`,
            fontWeight: 'bold',
            color: '#8d6e63',
          }}
        >
          {coin.value}
        </div>
      ))}

      {/* GroWise branded message */}
      <div style={styles.message}>
        {stage === 0 && <p style={styles.text}>Start your investment journey with GroWise 💰</p>}
        {stage === 1 && <p style={styles.text}>Year 1: Your money starts growing 📈</p>}
        {stage === 2 && <p style={styles.text}>Year 3: Compound interest building wealth 💎</p>}
        {stage === 3 && <p style={styles.text}>Year 5: Multiple income streams flourishing 🌟</p>}
        {stage === 4 && <p style={styles.text}>Year 10: Premium returns materializing! 🏆💰</p>}
        {stage === 5 && <p style={styles.text}>Wealth harvest time - Your investment pays off! 🎉</p>}
        {stage === 6 && <p style={styles.text}>Welcome to GroWise - Where Money Grows! 🌳💸</p>}
      </div>

      {/* GroWise branding */}
      <div style={styles.branding}>
        <span style={styles.brandName}>Gro</span><span style={styles.brandWise}>Wise</span>
        <div style={styles.tagline}>Smart Investments • Guaranteed Growth</div>
      </div>
    </div>
  );
};

const coinValues = ['$', '₹', '€', '£', '¥', '$', '$', '$']; // More dollar signs for US market

const styles = {
  container: {
    position: "relative",
    background: "linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: 5,
  },
  floatingSymbol: {
    position: "absolute",
    fontSize: "2rem",
    color: "rgba(255, 215, 0, 0.6)",
    fontWeight: "bold",
    animation: "float 6s ease-in-out infinite",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  message: {
    position: "absolute",
    bottom: "12%",
    fontSize: "1.4rem",
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    zIndex: 25,
    background: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
    padding: "15px 30px",
    borderRadius: "25px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    maxWidth: "80%",
  },
  text: {
    animation: "textShine 3s infinite linear",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
    backgroundSize: "200px 100%",
    backgroundRepeat: "no-repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    margin: 0,
    letterSpacing: "0.5px",
  },
  branding: {
    position: "absolute",
    bottom: "5%",
    textAlign: "center",
    zIndex: 25,
  },
  brandName: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#4caf50",
    textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
    letterSpacing: "2px",
  },
  brandWise: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#ffd700",
    textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
    letterSpacing: "2px",
  },
  tagline: {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
    marginTop: "5px",
    letterSpacing: "1px",
  },
};

export default GroWiseInvestmentAnimation;