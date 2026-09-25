import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Flame,
  Pause,
  Play,
  Radio,
  Signal,
  Volume2,
  VolumeX,
  Tv,
  Eye,
  Maximize2,
  Share2,
  Activity,
  Layers,
  Sparkles,
  Camera,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Multi-Angle Broadcast Feeds
const feeds = [
  {
    id: "feed-1",
    label: "CAM 01 - MAIN STUDIO",
    title: "Prime Time Desk & Live Debates",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1600&q=80",
    badge: "PRIMARY FEED",
  },
  {
    id: "feed-2",
    label: "CAM 02 - PARLIAMENT",
    title: "Vidhana Soudha & Central Hall Live",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    badge: "LEGISLATIVE",
  },
  {
    id: "feed-3",
    label: "CAM 03 - GROUND REPORT",
    title: "Southern Region Bureau Field Network",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    badge: "FIELD DISPATCH",
  },
];

const tickerItems = [
  "BREAKING: Special Economic Policy Session convenes in Parliament",
  "INFRASTRUCTURE: Southern High-Speed Corridor expansion approved",
  "FACT CHECK: Verifying social media claims on regional energy transition",
];

const liveStories = [
  {
    id: "/politics",
    number: "01",
    category: "POLITICS",
    title: "Indian Parliament & State Assembly updates",
    excerpt: "Key legislative bills, policy debates, and governance strategies live from the Vidhana Soudha and Parliament sessions.",
    time: "LIVE NOW",
    readTime: "3 MIN READ",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "/business",
    number: "02",
    category: "BUSINESS",
    title: "Regional energy transition & Green Power Grid",
    excerpt: "Green infrastructure expansion accelerates across Southern India with new power grid projects.",
    time: "10 MIN AGO",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "/fact-check",
    number: "03",
    category: "FACT CHECK",
    title: "Verifying viral claims: Media Manipulation Check",
    excerpt: "Deconstructing manipulated media and viral social dispatches with field investigation.",
    time: "25 MIN AGO",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  },
];

function LiveTV() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeFeed, setActiveFeed] = useState(feeds[0]);
  const [viewerCount, setViewerCount] = useState(38420);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setViewerCount((prev) => prev + Math.floor(Math.random() * 15) - 7);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "#060608", color: "#f3f4f6", overflowX: "hidden", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* =========================================
          ULTRA-CINEMATIC HERO SECTION
      ========================================= */}
      <section style={{ position: "relative", paddingTop: "110px", paddingBottom: "40px", overflow: "hidden" }}>
        
        {/* Ambient Red Studio Glows */}
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse at center, rgba(215, 25, 32, 0.22) 0%, rgba(0, 0, 0, 0) 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(215, 25, 32, 0.12) 0%, rgba(0, 0, 0, 0) 70%)", filter: "blur(90px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          
          {/* TOP HEADER STATUS / TITLE */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ position: "relative", display: "flex", height: "10px", width: "10px" }}>
                  <span style={{ position: "absolute", display: "inline-flex", height: "100%", width: "100%", borderRadius: "50%", backgroundColor: "#ef4444", opacity: 0.75, animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
                  <span style={{ relative: "relative", display: "inline-flex", borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "#dc2626" }} />
                </span>
                <span style={{ color: "#ef4444", fontSize: "11px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase" }}>
                  DIRECT STUDIO FEED • ULTRA HD
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: "900", margin: 0, letterSpacing: "-1.5px", lineHeight: "1" }}>
                BROADCAST <span style={{ color: "#d71920" }}>CONSOLE</span>
              </h1>
            </div>

            {/* LIVE TELEMETRY & VIEWERS BAR */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(18, 18, 24, 0.8)", backdropFilter: "blur(12px)", padding: "10px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Eye size={16} color="#ef4444" />
                <span style={{ fontWeight: "800", fontSize: "13px", color: "#ffffff" }}>{viewerCount.toLocaleString()}</span>
                <span style={{ fontSize: "11px", color: "#71717a", fontWeight: "600" }}>LIVE WATCHERS</span>
              </div>
              <div style={{ width: "1px", height: "16px", backgroundColor: "rgba(255,255,255,0.15)" }} />
              
              {/* Audio Visualizer Waves */}
              <div style={{ display: "flex", alignItems: "center", gap: "3px", height: "16px" }}>
                {[60, 100, 40, 80, 50].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: isPlaying ? [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] : "20%" }}
                    transition={{ duration: 0.6 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: "3px", backgroundColor: isPlaying ? "#ef4444" : "#52525b", borderRadius: "2px" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* MAIN PLAYER CONSOLE GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "20px", alignItems: "start" }}>
            
            {/* SCREEN CONTAINER */}
            <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.12)", background: "#0a0a0f", boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.9)" }}>
              
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", maxHeight: "620px", overflow: "hidden" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFeed.id}
                    src={activeFeed.image}
                    alt={activeFeed.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: isPlaying ? 0.82 : 0.35, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: isPlaying ? "none" : "grayscale(90%)" }}
                  />
                </AnimatePresence>

                {/* Overlays: Top Bar */}
                <div style={{ position: "absolute", top: "16px", left: "16px", right: "16px", display: "flex", justifyContent: "space-between", zIndex: 10 }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span style={{ background: "#d71920", color: "#fff", fontWeight: "900", fontSize: "11px", padding: "5px 10px", borderRadius: "4px", letterSpacing: "1px" }}>
                      ● ON AIR
                    </span>
                    <span style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", color: "#fff", fontSize: "12px", fontWeight: "700", padding: "5px 12px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.15)" }}>
                      {activeFeed.label}
                    </span>
                  </div>

                  <span style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", color: "#22c55e", fontSize: "11px", fontWeight: "800", padding: "5px 10px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Signal size={12} /> 4K STREAM
                  </span>
                </div>

                {/* Big Floating Action Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "76px", height: "76px", borderRadius: "50%", backgroundColor: "rgba(215, 25, 32, 0.95)", border: "none", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.25s ease", zIndex: 10, boxShadow: "0 0 40px rgba(215, 25, 32, 0.7)" }}
                >
                  {isPlaying ? <Pause size={32} fill="#fff" /> : <Play size={32} fill="#fff" style={{ marginLeft: "4px" }} />}
                </button>

                {/* Lower Third Caption */}
                <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(0deg, rgba(6,6,8,0.95) 0%, rgba(6,6,8,0) 100%)", padding: "30px 20px 16px 20px", zIndex: 10 }}>
                  <div style={{ color: "#ef4444", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", marginBottom: "4px" }}>
                    CURRENTLY BROADCASTING
                  </div>
                  <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)", fontWeight: "800", margin: 0, color: "#ffffff" }}>
                    {activeFeed.title}
                  </h2>
                </div>
              </div>

              {/* Player Bottom Control Strip */}
              <div style={{ background: "#111116", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    style={{ background: "none", border: "none", color: "#a1a1aa", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "700" }}
                  >
                    {isMuted ? <VolumeX size={16} color="#ef4444" /> : <Volume2 size={16} />}
                    {isMuted ? "MUTED" : "AUDIO ON"}
                  </button>
                  <span style={{ fontSize: "12px", color: "#52525b" }}>|</span>
                  <span style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600" }}></span>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Share2 size={14} /> SHARE
                  </button>
                </div>
              </div>
            </div>

            {/* SIDEBAR: CAMERA / ANGLE SWITCHER */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ padding: "8px 4px", color: "#a1a1aa", fontSize: "12px", fontWeight: "800", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px" }}>
                <Camera size={14} color="#ef4444" /> SELECT CAMERA FEED
              </div>

              {feeds.map((feed) => {
                const isSelected = activeFeed.id === feed.id;
                return (
                  <motion.div
                    key={feed.id}
                    whileHover={{ x: 4 }}
                    onClick={() => setActiveFeed(feed)}
                    style={{
                      position: "relative",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      border: isSelected ? "2px solid #d71920" : "1px solid rgba(255,255,255,0.08)",
                      background: isSelected ? "rgba(215, 25, 32, 0.15)" : "#0f0f14",
                      padding: "12px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ width: "80px", height: "54px", borderRadius: "6px", overflow: "hidden", flexShrink: 0, position: "relative" }}>
                      <img src={feed.image} alt={feed.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      {isSelected && <div style={{ position: "absolute", inset: 0, background: "rgba(215, 25, 32, 0.3)" }} />}
                    </div>

                    <div style={{ overflow: "hidden" }}>
                      <span style={{ fontSize: "10px", fontWeight: "800", color: isSelected ? "#ef4444" : "#71717a", display: "block" }}>
                        {feed.badge}
                      </span>
                      <h4 style={{ margin: "2px 0 0 0", fontSize: "13px", fontWeight: "700", color: isSelected ? "#fff" : "#d4d4d8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {feed.label}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}

              {/* NEWSROOM TICKER BANNER */}
              <div style={{ marginTop: "8px", background: "rgba(215, 25, 32, 0.1)", border: "1px solid rgba(215, 25, 32, 0.3)", borderRadius: "12px", padding: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ef4444", fontSize: "11px", fontWeight: "800", marginBottom: "6px" }}>
                  <Flame size={14} /> BREAKING TICKER
                </div>
                <p style={{ margin: 0, fontSize: "12px", color: "#e4e4e7", lineHeight: "1.4" }}>
                  {tickerItems[0]}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          LIVE DESK / DISPATCHES
      ========================================= */}
      <section style={{ maxWidth: "1320px", margin: "40px auto 60px auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <span style={{ color: "#ef4444", fontSize: "12px", fontWeight: "800", letterSpacing: "1px" }}>FIELD DISPATCHES</span>
            <h3 style={{ fontSize: "1.8rem", fontWeight: "800", margin: "4px 0 0 0" }}>Top Stories Coverage</h3>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {liveStories.map((story) => (
            <motion.div key={story.id} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
              <Link
                to={story.id}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  background: "#0f0f14",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "160px" }}>
                  <img src={story.image} alt={story.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)", color: "#ef4444", fontSize: "10px", fontWeight: "800", padding: "4px 8px", borderRadius: "4px" }}>
                    {story.category}
                  </span>
                </div>

                <div style={{ padding: "18px" }}>
                  <h4 style={{ margin: "0 0 10px 0", fontSize: "16px", fontWeight: "700", lineHeight: "1.4" }}>{story.title}</h4>
                  <p style={{ margin: "0 0 16px 0", fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" }}>{story.excerpt}</p>
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#71717a", fontWeight: "600" }}>
                    <span>{story.time}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#ef4444" }}>
                      <span>FULL STORY</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          CLOSING CTA SECTION WITH BOTTOM RIGHT BUTTON
      ========================================= */}
      <section style={{ maxWidth: "1320px", margin: "40px auto 60px auto", padding: "0 24px" }}>
        <div style={{ background: "linear-gradient(135deg, #121218 0%, #060608 100%)", borderRadius: "20px", padding: "48px 36px", border: "1px solid rgba(255,255,255,0.1)", position: "relative", overflow: "hidden" }}>
          
          <div style={{ maxWidth: "600px" }}>
            <span style={{ color: "#ef4444", fontSize: "12px", fontWeight: "800", letterSpacing: "2px" }}>NEWS FILE BROADCAST</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", margin: "12px 0 16px 0", lineHeight: "1.1" }}>
              SEE IT. <br />
              <span style={{ color: "#ef4444" }}>AS IT HAPPENS.</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "15px", margin: 0, lineHeight: "1.6" }}>
              Stay connected to our newsroom with 24/7 unhindered live reporting from across India and around the globe.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#d71920",
                  color: "#ffffff",
                  padding: "12px 24px",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  boxShadow: "0 10px 20px -5px rgba(215, 25, 32, 0.4)",
                  transition: "all 0.2s ease",
                }}
              >
                BACK TO HOME
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LiveTV;