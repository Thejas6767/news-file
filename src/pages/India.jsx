import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Map,
  Landmark,
  Users,
  Shield,
  Radio,
  Sparkles,
  Compass,
  Globe2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const indiaStories = [
  {
    number: "01",
    category: "NATIONAL",
    title: "The stories shaping India beyond the daily headlines",
    description:
      "Politics, policy, society and the people whose stories define the country.",
    readTime: "5 MIN READ",
  },
  {
    number: "02",
    category: "GOVERNANCE",
    title: "How decisions made in power corridors reach the ground",
    description:
      "Tracking policy decisions and their impact across communities and regions.",
    readTime: "4 MIN READ",
  },
  {
    number: "03",
    category: "SOCIETY",
    title: "India's changing cities, communities and everyday lives",
    description:
      "Ground reports exploring how a rapidly changing India is being experienced.",
    readTime: "6 MIN READ",
  },
  {
    number: "04",
    category: "DEVELOPMENT",
    title: "Infrastructure, technology and the next Indian decade",
    description:
      "The projects and ideas reshaping how India works, moves and grows.",
    readTime: "7 MIN READ",
  },
];

const desks = [
  {
    icon: Landmark,
    title: "GOVERNANCE",
    description: "Policy, administration and the decisions shaping the nation.",
    count: "42 DISPATCHES",
  },
  {
    icon: Users,
    title: "SOCIETY",
    description: "People, communities and the stories behind the statistics.",
    count: "58 DISPATCHES",
  },
  {
    icon: Shield,
    title: "SECURITY",
    description: "National security, defence and developments across India.",
    count: "19 DISPATCHES",
  },
  {
    icon: Map,
    title: "GROUND REPORTS",
    description: "Stories reported directly from cities, towns and districts.",
    count: "104 DISPATCHES",
  },
];

const editorialEase = [0.16, 1, 0.3, 1];

// Variants for staggered entrance
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: editorialEase,
    },
  },
};

function India() {
  const [activeStory, setActiveStory] = useState(null);
  const [hoveredDesk, setHoveredDesk] = useState(null);

  // Smooth scroll depth parallax effect for watermark text
  const { scrollYProgress } = useScroll();
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div style={{ backgroundColor: "#060608", color: "#f3f4f6", fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
      {/* Mobile & Component Responsive CSS Rules */}
      <style>{`
        .india-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .india-desk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .hero-title {
          font-size: clamp(2.8rem, 7vw, 5.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 20px 0;
        }
        .snapshot-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .snapshot-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .india-padding-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>

      <Navbar />

      <main style={{ paddingTop: "100px", position: "relative" }}>
        
        {/* HERO SECTION */}
        <section
          className="india-padding-section"
          style={{
            position: "relative",
            padding: "80px 24px 60px 24px",
            maxWidth: "1280px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Ambient Glows */}
          <div
            style={{
              position: "absolute",
              top: "-5%",
              right: "10%",
              width: "450px",
              height: "450px",
              background: "radial-gradient(circle, rgba(215, 25, 32, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              filter: "blur(100px)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}
          >
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "20px",
                background: "rgba(215, 25, 32, 0.12)",
                border: "1px solid rgba(215, 25, 32, 0.3)",
                color: "#ef4444",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "1.5px",
              }}
            >
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-flex" }}
              >
                <Radio size={14} />
              </motion.div>
              NEWS FILE NATIONAL BUREAU
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              One country. <br />
              <motion.span
                style={{
                  color: "#d71920",
                  backgroundImage: "linear-gradient(90deg, #d71920, #f87171)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Many stories.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                color: "#a1a1aa",
                lineHeight: "1.6",
                maxWidth: "680px",
                margin: "0 0 28px 0",
              }}
            >
              From the capital to the smallest district, News File follows the
              people, decisions, and events shaping India.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                fontSize: "11px",
                fontWeight: "800",
                color: "#71717a",
                letterSpacing: "2px",
              }}
            >
              <span>28 STATES</span>
              <span style={{ color: "#ef4444" }}>•</span>
              <span>8 UNION TERRITORIES</span>
              <span style={{ color: "#ef4444" }}>•</span>
              <span>ONE NEWSROOM</span>
            </motion.div>
          </motion.div>

          {/* Background Text Overlay */}
          <motion.div
            style={{
              position: "absolute",
              right: "-5%",
              bottom: "-10%",
              fontSize: "clamp(6rem, 20vw, 18rem)",
              fontWeight: "900",
              color: "rgba(255, 255, 255, 0.03)",
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-5px",
              x: watermarkX,
            }}
          >
            INDIA
          </motion.div>
        </section>

        {/* NATIONAL SNAPSHOT SECTION */}
        <section
          className="india-padding-section"
          style={{
            maxWidth: "1280px",
            margin: "60px auto",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "#0c0c10",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "clamp(24px, 5vw, 48px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              style={{
                color: "#ef4444",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "2px",
                marginBottom: "32px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Compass size={14} />
              01 — NATIONAL SNAPSHOT
            </motion.div>

            <div className="snapshot-layout">
              {/* Media Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: editorialEase }}
                whileHover="hover"
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  minHeight: "320px",
                  background: "linear-gradient(135deg, #181820 0%, #09090d 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "24px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    background: "rgba(215, 25, 32, 0.2)",
                    color: "#ef4444",
                    fontSize: "10px",
                    fontWeight: "800",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    letterSpacing: "1px",
                  }}
                >
                  GROUND REPORT
                </div>

                <motion.div
                  variants={{
                    hover: { y: -4 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span style={{ fontSize: "12px", color: "#a1a1aa", letterSpacing: "1.5px", fontWeight: "700" }}>COVERAGE DESK</span>
                  <h3 style={{ fontSize: "2rem", fontWeight: "900", margin: "4px 0 0 0", color: "#ffffff" }}>
                    BEYOND METROS
                  </h3>
                </motion.div>

                {/* Subtle Image Hover Light */}
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at center, rgba(215, 25, 32, 0.2) 0%, transparent 70%)",
                    opacity: 0,
                  }}
                  variants={{
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Text Block */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeUp}
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: "900",
                    margin: "0 0 16px 0",
                    lineHeight: "1.15",
                  }}
                >
                  The country is bigger <br />
                  <span style={{ color: "#ef4444", fontStyle: "italic" }}>than the headline.</span>
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  style={{ color: "#a1a1aa", fontSize: "15px", lineHeight: "1.7", margin: "0 0 16px 0" }}
                >
                  India's national story is being written across thousands of places at the same time.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  style={{ color: "#71717a", fontSize: "14px", lineHeight: "1.6", margin: "0 0 28px 0" }}
                >
                  Our national desk connects those stories — bringing together politics, governance, society, security, and development from across the country.
                </motion.p>

                <motion.button
                  variants={fadeUp}
                  whileHover={{ x: 6, backgroundColor: "#ef4444" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "#d71920",
                    color: "#ffffff",
                    border: "none",
                    padding: "12px 24px",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "1px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  READ NATIONAL REPORT
                  <ArrowUpRight size={16} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STORIES SECTION */}
        <section
          className="india-padding-section"
          style={{
            maxWidth: "1280px",
            margin: "80px auto",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ marginBottom: "40px" }}
          >
            <motion.div
              variants={fadeUp}
              style={{
                color: "#ef4444",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              02 — INDIA REPORTS
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", margin: 0 }}
            >
              Beyond the <span style={{ color: "#ef4444", fontStyle: "italic" }}>capital.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="india-grid-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {indiaStories.map((story) => (
              <motion.article
                key={story.number}
                variants={fadeUp}
                onHoverStart={() => setActiveStory(story.number)}
                onHoverEnd={() => setActiveStory(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: editorialEase }}
                style={{
                  background: "rgba(18, 18, 24, 0.5)",
                  backdropFilter: "blur(12px)",
                  border: activeStory === story.number ? "1px solid rgba(239, 68, 68, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "border 0.3s ease",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "900", color: "#ef4444", letterSpacing: "1px" }}>{story.number}</span>
                    <span style={{ fontSize: "10px", fontWeight: "800", background: "rgba(255,255,255,0.06)", padding: "4px 8px", borderRadius: "4px", color: "#a1a1aa" }}>
                      {story.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", lineHeight: "1.4", margin: "0 0 12px 0" }}>
                    {story.title}
                  </h3>

                  <p style={{ fontSize: "13px", color: "#a1a1aa", lineHeight: "1.6", margin: "0 0 24px 0" }}>
                    {story.description}
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "#71717a", letterSpacing: "1px" }}>{story.readTime}</span>
                  <motion.div
                    animate={{ x: activeStory === story.number ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", alignItems: "center", gap: "4px", color: "#ef4444", fontSize: "12px", fontWeight: "800" }}
                  >
                    READ
                    <ArrowUpRight size={15} />
                  </motion.div>
                </div>

                {/* Animated Bottom Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeStory === story.number ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: editorialEase }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #d71920, #f87171)",
                    transformOrigin: "left",
                  }}
                />
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* DESKS SECTION */}
        <section
          className="india-padding-section"
          style={{
            maxWidth: "1280px",
            margin: "80px auto",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ marginBottom: "40px" }}
          >
            <motion.div
              variants={fadeUp}
              style={{
                color: "#ef4444",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              03 — NATIONAL DESKS
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", margin: 0 }}
            >
              India, <span style={{ color: "#ef4444", fontStyle: "italic" }}>reported.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="india-desk-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {desks.map((desk, index) => {
              const Icon = desk.icon;

              return (
                <motion.div
                  key={desk.title}
                  variants={fadeUp}
                  onHoverStart={() => setHoveredDesk(desk.title)}
                  onHoverEnd={() => setHoveredDesk(null)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: editorialEase }}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "16px",
                    padding: "24px",
                    boxSizing: "border-box",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "220px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                      <motion.div
                        animate={{ rotate: hoveredDesk === desk.title ? 10 : 0, scale: hoveredDesk === desk.title ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          background: "rgba(215, 25, 32, 0.15)",
                          border: "1px solid rgba(215, 25, 32, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ef4444",
                        }}
                      >
                        <Icon size={22} />
                      </motion.div>
                      <span style={{ fontSize: "12px", fontWeight: "800", color: "#71717a" }}>0{index + 1}</span>
                    </div>

                    <h3 style={{ fontSize: "16px", fontWeight: "800", margin: "0 0 8px 0", color: "#ffffff", letterSpacing: "0.5px" }}>
                      {desk.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5", margin: 0 }}>
                      {desk.description}
                    </p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "10px", fontWeight: "800", color: "#ef4444", letterSpacing: "1px" }}>{desk.count}</span>
                    <ArrowUpRight size={18} color={hoveredDesk === desk.title ? "#ef4444" : "#71717a"} style={{ transition: "color 0.2s" }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* CLOSING SECTION */}
        <section
          className="india-padding-section"
          style={{
            maxWidth: "1280px",
            margin: "80px auto 60px auto",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #121218 0%, #060608 100%)",
              borderRadius: "24px",
              padding: "clamp(32px, 6vw, 56px) clamp(24px, 5vw, 48px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ position: "relative", zIndex: 2, maxWidth: "600px" }}
            >
              <motion.span
                variants={fadeUp}
                style={{ color: "#ef4444", fontSize: "11px", fontWeight: "800", letterSpacing: "2px" }}
              >
                NEWS FILE / NATIONAL BUREAU
              </motion.span>

              <motion.h2
                variants={fadeUp}
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: "900", margin: "12px 0 16px 0", lineHeight: "1.1" }}
              >
                Every region <br />
                <span style={{ color: "#ef4444" }}>has a story.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                style={{ color: "#a1a1aa", fontSize: "15px", margin: "0 0 28px 0", lineHeight: "1.6" }}
              >
                We go beyond the obvious to find the stories that matter.
              </motion.p>

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#d71920",
                  color: "#ffffff",
                  border: "none",
                  padding: "14px 28px",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  boxShadow: "0 10px 20px -5px rgba(215, 25, 32, 0.4)",
                  transition: "all 0.2s ease",
                }}
              >
                EXPLORE ALL INDIA NEWS
                <ArrowUpRight size={18} />
              </motion.button>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default India;