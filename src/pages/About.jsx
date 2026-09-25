import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Radio,
  ShieldCheck,
  Building2,
  Users,
  Award,
  Zap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { label: "BUREAUS & DESKS", value: "24+", icon: Building2 },
  { label: "FIELD JOURNALISTS", value: "180+", icon: Users },
  { label: "LANGUAGES COVERED", value: "03", icon: Globe2 },
  { label: "MONTHLY REACH", value: "4.2M", icon: Zap },
];

const values = [
  {
    icon: ShieldCheck,
    tag: "01 / INTEGRITY",
    title: "Ground Verification",
    desc: "Every report is cross-verified on the ground before hit broadcast. No unverified viral reposts.",
  },
  {
    icon: MapPin,
    tag: "02 / LOCAL FOOTHOLD",
    title: "Hyper-Regional Focus",
    desc: "Connecting local dispatches from Karnataka and Southern bureaus directly to national headlines.",
  },
  {
    icon: Radio,
    tag: "03 / IMMERSIVE STREAM",
    title: "24/7 Unfiltered Dispatch",
    desc: "Direct field audio-visual feeds and live updates without sensationalism or editorial bias.",
  },
];

const languages = [
  { code: "EN", name: "ENGLISH", native: "English", tag: "National Edition" },
  { code: "KN", name: "KANNADA", native: "ಕನ್ನಡ", tag: "Karnataka Regional Desk" },
  { code: "HI", name: "HINDI", native: "हिन्दी", tag: "Central Bureau" },
];

function About() {
  const [activeLang, setActiveLang] = useState(languages[0]);

  return (
    <div style={{ backgroundColor: "#060608", color: "#f3f4f6", overflowX: "hidden", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <main style={{ paddingTop: "100px" }}>
        {/* =========================================
            CINEMATIC EDITORIAL HERO
        ========================================= */}
        <section style={{ position: "relative", padding: "80px 24px 60px 24px", maxWidth: "1280px", margin: "0 auto" }}>
          
          {/* Background Ambient Lights */}
          <div style={{ position: "absolute", top: "10%", left: "20%", width: "500px", height: "300px", background: "radial-gradient(circle, rgba(215, 25, 32, 0.18) 0%, rgba(0, 0, 0, 0) 70%)", filter: "blur(90px)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "20px", background: "rgba(215, 25, 32, 0.12)", border: "1px solid rgba(215, 25, 32, 0.3)", color: "#ef4444", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px" }}
            >
              <Sparkles size={14} />
              THE NEWS FILE MANIFESTO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: "900", margin: "20px 0 24px 0", letterSpacing: "-1.5px", lineHeight: "1.05" }}
            >
              JOURNALISM <br />
              <span style={{ color: "#d71920" }}>FROM THE GROUND.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "#a1a1aa", lineHeight: "1.6", fontWeight: "400", margin: 0 }}
            >
              News File is an independent media platform dedicated to verified field reporting, regional clarity, and unbiased dispatches from across Karnataka and India.
            </motion.p>
          </div>

          {/* METRIC CARDS GRID */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "60px" }}
          >
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: "rgba(18, 18, 24, 0.6)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    padding: "24px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#71717a", letterSpacing: "1px" }}>{item.label}</span>
                    <Icon size={18} color="#ef4444" />
                  </div>
                  <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "#ffffff", letterSpacing: "-1px" }}>{item.value}</div>
                </div>
              );
            })}
          </motion.div>
        </section>

        {/* =========================================
            MISSION & CORE PILLARS
        ========================================= */}
        <section style={{ maxWidth: "1280px", margin: "60px auto", padding: "0 24px" }}>
          <div style={{ background: "#0c0c10", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", padding: "48px 36px" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
              <div>
                <span style={{ color: "#ef4444", fontSize: "12px", fontWeight: "800", letterSpacing: "2px" }}>01 — MISSION & TRUTH</span>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: "900", margin: "12px 0 20px 0", lineHeight: "1.1" }}>
                  Different languages. <br />
                  <span style={{ color: "#ef4444" }}>One standard of truth.</span>
                </h2>
                <p style={{ color: "#a1a1aa", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                  We don't aggregate press releases. News File operates on field-level verification, assigning reporters directly to policy debates, grassroots developments, and critical regional events.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 6 }}
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        borderRadius: "14px",
                        padding: "20px",
                        display: "flex",
                        gap: "16px",
                      }}
                    >
                      <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(215, 25, 32, 0.15)", border: "1px solid rgba(215, 25, 32, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={20} color="#ef4444" />
                      </div>
                      <div>
                        <span style={{ fontSize: "10px", fontWeight: "800", color: "#ef4444", letterSpacing: "1px" }}>{v.tag}</span>
                        <h4 style={{ margin: "2px 0 6px 0", fontSize: "16px", fontWeight: "800" }}>{v.title}</h4>
                        <p style={{ margin: 0, fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" }}>{v.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            MULTILINGUAL DESK REACH
        ========================================= */}
        <section style={{ maxWidth: "1280px", margin: "80px auto", padding: "0 24px" }}>
          <div style={{ textCenter: "center", marginBottom: "36px", textAlign: "center" }}>
            <span style={{ color: "#ef4444", fontSize: "12px", fontWeight: "800", letterSpacing: "2px" }}>02 — MULTILINGUAL NEWSROOM</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: "900", margin: "8px 0" }}>
              Reporting In Your Language
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "15px", margin: 0 }}>
              Select a language desk below to preview localized coverage.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "28px" }}>
            {languages.map((lang) => {
              const isSelected = activeLang.code === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => setActiveLang(lang)}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "30px",
                    border: isSelected ? "1px solid #d71920" : "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: isSelected ? "#d71920" : "rgba(255,255,255,0.03)",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "800",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{lang.native}</span>
                  <span style={{ opacity: 0.6, fontSize: "11px" }}>({lang.name})</span>
                </button>
              );
            })}
          </div>

          <div style={{ maxWidth: "600px", margin: "0 auto", background: "#0f0f14", padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
            <span style={{ background: "rgba(215, 25, 32, 0.2)", color: "#ef4444", fontSize: "10px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px" }}>
              {activeLang.tag}
            </span>
            <h3 style={{ margin: "12px 0 6px 0", fontSize: "20px", fontWeight: "800" }}>{activeLang.native} Regional Desk Active</h3>
            <p style={{ margin: 0, color: "#a1a1aa", fontSize: "13px" }}>
              Delivering verified ground reports, podcasts, and state dispatches natively in {activeLang.name}.
            </p>
          </div>
        </section>

        {/* =========================================
            CLOSING CTA SECTION
        ========================================= */}
        <section style={{ maxWidth: "1280px", margin: "80px auto 60px auto", padding: "0 24px" }}>
          <div style={{ background: "linear-gradient(135deg, #121218 0%, #060608 100%)", borderRadius: "24px", padding: "48px 36px", border: "1px solid rgba(255,255,255,0.1)", position: "relative", overflow: "hidden" }}>
            
            <div style={{ maxWidth: "600px" }}>
              <span style={{ color: "#ef4444", fontSize: "12px", fontWeight: "800", letterSpacing: "2px" }}>INDEPENDENT JOURNALISM</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", margin: "12px 0 16px 0", lineHeight: "1.1" }}>
                STAY CONNECTED <br />
                <span style={{ color: "#ef4444" }}>TO THE STORY.</span>
              </h2>
              <p style={{ color: "#a1a1aa", fontSize: "15px", margin: 0, lineHeight: "1.6" }}>
                Explore live audio-visual broadcasts, investigative long-reads, and daily breaking headlines from our newsroom.
              </p>
            </div>

            {/* BOTTOM RIGHT ALIGNED ACTION BUTTON */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/news"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "#d71920",
                    color: "#ffffff",
                    padding: "14px 28px",
                    fontSize: "13px",
                    fontWeight: "800",
                    letterSpacing: "1px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    boxShadow: "0 10px 20px -5px rgba(215, 25, 32, 0.4)",
                    transition: "all 0.2s ease",
                  }}
                >
                  EXPLORE ALL NEWS
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;