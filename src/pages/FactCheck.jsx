import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { Check, ShieldCheck, Search, FileCheck2, AlertTriangle, ArrowUpRight, CheckCircle2 } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const factChecks = [
  {
    id: "01",
    verdict: "FALSE",
    title: "Viral claim about a government announcement spreads online",
    description:
      "Our verification desk traced the original information and compared it with official records.",
    category: "SOCIAL MEDIA",
    date: "TODAY",
    score: 18,
  },
  {
    id: "02",
    verdict: "TRUE",
    title: "Original report confirms details circulating online",
    description:
      "Multiple primary sources support the central claim after independent verification.",
    category: "PUBLIC CLAIM",
    date: "YESTERDAY",
    score: 91,
  },
  {
    id: "03",
    verdict: "MISLEADING",
    title: "Old photograph shared as a recent event",
    description:
      "The image is authentic, but the context attached to it is incorrect.",
    category: "VIRAL IMAGE",
    date: "2 DAYS AGO",
    score: 46,
  },
];

const verificationSteps = [
  {
    number: "01",
    icon: Search,
    title: "We investigate",
    text: "Our journalists identify the original claim, source, and underlying context across digital networks.",
    badge: "STEP 1: DISCOVERY",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "We verify",
    text: "Information is cross-examined against primary documents, official data, and trusted domain experts.",
    badge: "STEP 2: CROSS-CHECK",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "We publish",
    text: "Only after multi-layered verification do we release the evidence score and final verdict to the public.",
    badge: "STEP 3: VERDICT",
  },
];

// Advanced Animation Variants
const customSpring = { type: "spring", stiffness: 350, damping: 25 };

const fadeInUpStagger = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Interactive 3D Tilt Card Wrapper Component
function TiltCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Interactive Meter Visual Component with Counter
function AnimatedScoreMeter({ score, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="meter-track"
      style={{
        overflow: "hidden",
        height: "6px",
        background: "#e2e8f0",
        borderRadius: "4px",
        width: "100%",
      }}
    >
      <motion.div
        className="meter-fill"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${score}%` } : { width: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
        style={{
          height: "100%",
          backgroundColor: color || "#d71920",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}

function FactCheck() {
  const [activeCard, setActiveCard] = useState(null);

  const getVerdictDetails = (verdict) => {
    switch (verdict) {
      case "TRUE":
        return {
          color: "#059669",
          bg: "#ecfdf5",
          border: "rgba(5, 150, 105, 0.25)",
        };
      case "FALSE":
        return {
          color: "#dc2626",
          bg: "#fef2f2",
          border: "rgba(220, 38, 38, 0.25)",
        };
      case "MISLEADING":
      default:
        return {
          color: "#d97706",
          bg: "#fffbeb",
          border: "rgba(217, 119, 6, 0.25)",
        };
    }
  };

  return (
    <>
      <Navbar />

      <main className="fact-page">
        {/* HERO SECTION */}

        <section className="fact-hero" style={{ perspective: 1000 }}>
          <div className="fact-hero-grid"></div>

          {/* Dynamic Floating Glow Layers */}
          <motion.div
            className="fact-glow-accent"
            animate={{
              scale: [1, 1.35, 1],
              rotate: [0, 90, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "-10%",
              right: "10%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(215,25,32,0.25) 0%, rgba(0,0,0,0) 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            className="fact-hero-content"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="fact-eyebrow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.span
                className="fact-live-dot"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.span>
              NEWS FILE VERIFICATION DESK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ display: "inline-block" }}
              >
                Truth
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.55 }}
                style={{ display: "inline-block" }}
              >
                needs evidence.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              We investigate the claims shaping public conversation and show
              you what the evidence actually says.
            </motion.p>

            <motion.div
              className="fact-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 0.9, duration: 0.5 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              SCROLL TO VERIFY
              <span></span>
            </motion.div>
          </motion.div>

          <motion.div
            className="fact-hero-number"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            04
          </motion.div>
        </section>

        {/* FEATURED VERDICT SECTION */}

        <section className="featured-fact" style={{ perspective: 1200 }}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>01</span>
            FEATURED VERIFICATION
          </motion.div>

          <div
            className="fact-feature-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              marginTop: "24px",
            }}
          >
            <TiltCard className="claim-panel-card">
              <motion.div
                className="claim-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{
                  borderColor: "rgba(215, 25, 32, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                }}
                style={{
                  transform: "translateZ(30px)",
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  borderRadius: "16px",
                  padding: "40px",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.06)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                <div className="claim-top">
                  <span>THE CLAIM</span>
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <AlertTriangle size={19} />
                  </motion.div>
                </div>

                <h2 style={{ margin: "28px 0" }}>
                  “A viral post claims that a major policy decision has already
                  been officially announced.”
                </h2>

                <div className="claim-source">
                  <span>CLAIM CIRCULATING ONLINE</span>
                  <span>●</span>
                  <span>VERIFICATION IN PROGRESS</span>
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard className="verdict-panel-card">
              <motion.div
                className="verdict-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                whileHover={{
                  borderColor: "rgba(215, 25, 32, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                }}
                style={{
                  transform: "translateZ(40px)",
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  borderRadius: "16px",
                  padding: "40px",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.06)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                <div className="verdict-label">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                  >
                    <Check size={18} />
                  </motion.div>
                  OUR VERDICT
                </div>

                <motion.div
                  className="verdict-word"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={customSpring}
                >
                  FALSE
                </motion.div>

                <p style={{ margin: "16px 0" }}>
                  The available evidence does not support the claim. The
                  information being circulated has been presented without the
                  necessary official context.
                </p>

                <div className="truth-meter">
                  <div className="meter-header">
                    <span>EVIDENCE SCORE</span>
                    <strong>18%</strong>
                  </div>

                  <AnimatedScoreMeter score={18} color="#dc2626" />

                  <div className="meter-scale">
                    <span>FALSE</span>
                    <span>UNCERTAIN</span>
                    <span>TRUE</span>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </section>

        {/* PROCESS SECTION WITH STAGGERED PIPELINE (REDESIGNED) */}

        <section
          className="verification-process"
          style={{
            background: "linear-gradient(180deg, #0f172a 0%, #090d16 100%)",
            borderRadius: "24px",
            padding: "80px 40px",
            margin: "80px 0",
            position: "relative",
            overflow: "hidden",
            color: "#ffffff",
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(215,25,32,0.15) 0%, rgba(0,0,0,0) 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            className="process-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpStagger}
            style={{ marginBottom: "50px" }}
          >
            <div
              className="section-label"
              style={{
                color: "#d71920",
                fontWeight: 700,
                letterSpacing: "0.1em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>02</span> OUR METHOD
            </div>

            <h2 style={{ fontSize: "2.8rem", color: "#ffffff", marginTop: "12px" }}>
              Every claim gets <em style={{ color: "#d71920", fontStyle: "italic" }}>tested.</em>
            </h2>
          </motion.div>

          <motion.div
            className="process-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerStagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              position: "relative",
            }}
          >
            {verificationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  className="process-card"
                  key={step.number}
                  variants={fadeInUpStagger}
                  whileHover={{
                    y: -10,
                    borderColor: "rgba(215, 25, 32, 0.7)",
                    boxShadow: "0 20px 40px rgba(215, 25, 32, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "20px",
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <motion.div
                      className="process-icon"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={customSpring}
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "14px",
                        background: "rgba(215, 25, 32, 0.15)",
                        border: "1px solid rgba(215, 25, 32, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#f87171",
                      }}
                    >
                      <Icon size={26} strokeWidth={2} />
                    </motion.div>

                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        color: "#d71920",
                        background: "rgba(215, 25, 32, 0.1)",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        border: "1px solid rgba(215, 25, 32, 0.2)",
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "12px",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.98rem",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {step.text}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "32px",
                      paddingTop: "20px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#64748b",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 size={16} color="#d71920" /> STANDARD PROTOCOL
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* LATEST FACT CHECKS SECTION */}

        <section className="latest-facts" style={{ padding: "80px 0" }}>
          <motion.div
            className="latest-facts-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUpStagger}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "40px",
            }}
          >
            <div>
              <div className="section-label">
                <span>03</span>
                LATEST FACT CHECKS
              </div>

              <h2 style={{ fontSize: "2.5rem", marginTop: "12px" }}>
                The verdict <em>desk.</em>
              </h2>
            </div>

            <p style={{ maxWidth: "340px", color: "#64748b" }}>
              Claims, images and statements checked by the News File
              verification team.
            </p>
          </motion.div>

          <motion.div
            className="fact-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerStagger}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {factChecks.map((fact) => {
              const details = getVerdictDetails(fact.verdict);

              return (
                <motion.article
                  key={fact.id}
                  variants={fadeInUpStagger}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 14px 35px -10px rgba(0, 0, 0, 0.08)",
                    borderColor: details.color,
                  }}
                  onHoverStart={() => setActiveCard(fact.id)}
                  onHoverEnd={() => setActiveCard(null)}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "16px",
                    padding: "32px",
                    display: "grid",
                    gridTemplateColumns: "60px 1fr 240px",
                    alignItems: "center",
                    gap: "24px",
                    boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <motion.div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: activeCard === fact.id ? details.color : "#94a3b8",
                      transition: "color 0.3s",
                    }}
                  >
                    {fact.id}
                  </motion.div>

                  <div className="fact-card-main">
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          background: "#f1f5f9",
                          color: "#475569",
                        }}
                      >
                        {fact.category}
                      </span>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#94a3b8",
                          fontWeight: 500,
                        }}
                      >
                        {fact.date}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: "#0f172a",
                        marginBottom: "8px",
                      }}
                    >
                      {fact.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#64748b",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {fact.description}
                    </p>

                    <motion.button
                      className="read-fact"
                      whileHover={{ x: 4 }}
                      style={{
                        background: "none",
                        border: "none",
                        color: details.color,
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: 0,
                        marginTop: "16px",
                      }}
                    >
                      READ VERIFICATION <ArrowUpRight size={16} />
                    </motion.button>
                  </div>

                  <div
                    style={{
                      background: details.bg,
                      border: `1px solid ${details.border}`,
                      borderRadius: "12px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: details.color,
                          letterSpacing: "0.05em",
                        }}
                      >
                        VERDICT
                      </span>
                      <strong
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 900,
                          color: details.color,
                        }}
                      >
                        {fact.verdict}
                      </strong>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.75rem",
                          color: "#64748b",
                          fontWeight: 600,
                        }}
                      >
                        <span>EVIDENCE SCORE</span>
                        <span>{fact.score}%</span>
                      </div>

                      <AnimatedScoreMeter score={fact.score} color={details.color} />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* CTA SECTION WITH SHIMMER & PULSE EFFECT */}

        <section className="fact-cta">
          <motion.div
            className="fact-cta-inner"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              SEE SOMETHING THAT NEEDS CHECKING?
            </motion.span>

            <h2>
              Send us
              <br />
              the claim.
            </h2>

            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 25px rgba(215, 25, 32, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={customSpring}
            >
              SUBMIT A CLAIM
            </motion.button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FactCheck;