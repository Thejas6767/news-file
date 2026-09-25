import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send, Clock, Lock, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Custom Magnetic Tilt Card Sub-Component
function TiltCard({ children, href, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
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

  const CardWrapper = href ? motion.a : motion.div;

  return (
    <CardWrapper
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </CardWrapper>
  );
}

// Helper component to split text into words while keeping character animations intact without breaking words mid-string
function AnimatedText({ text, variants, style, className }) {
  const words = text.split(" ");

  return (
    <span style={{ display: "inline-block", wordBreak: "keep-all", ...style }} className={className}>
      {words.map((word, wIdx) => (
        <span key={wIdx} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: wIdx < words.length - 1 ? "0.28em" : 0 }}>
          {word.split("").map((char, cIdx) => (
            <motion.span
              key={`${wIdx}-${cIdx}`}
              variants={variants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

function Contact() {
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -80 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  return (
    <div className="contact-page" style={{ overflowX: "hidden" }}>
      <Navbar />

      <main>
        {/* =========================================
            CONTACT HERO
        ========================================= */}
        <section className="contact-hero" style={{ padding: "100px 24px 60px 24px" }}>
          <div
            className="contact-hero-inner"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "48px",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            {/* LEFT COLUMN: HERO TEXT */}
            <div>
              <motion.span
                className="contact-label"
                initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: "left", display: "inline-block" }}
              >
                CONTACT & SUBMISSIONS
              </motion.span>

              {/* Kinetic Letter Reveal with Word-Wrap Fix */}
              <motion.h1
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
                style={{ perspective: 1000, textAlign: "left", margin: "16px 0" }}
              >
                <AnimatedText text="Have a story?" variants={letterVariants} />
                <br />
                <AnimatedText text="Tell us." variants={letterVariants} style={{ color: "#d71920" }} />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.55 }}
                style={{ textAlign: "left", margin: 0, maxWidth: "520px" }}
              >
                News tips, story submissions and newsroom enquiries can be
                directed to the News File team.
              </motion.p>
            </div>

            {/* RIGHT COLUMN: TILT CARDS */}
            <div className="contact-details" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <TiltCard
                href="mailto:newsroom@newsfileindia.com"
                className="contact-detail-card"
              >
                <Mail size={25} />
                <div>
                  <span>EMAIL</span>
                  <h3>newsroom@newsfileindia.com</h3>
                </div>
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowUpRight size={19} />
                </motion.div>
              </TiltCard>

              <TiltCard className="contact-detail-card">
                <MapPin size={25} />
                <div>
                  <span>NEWSROOM</span>
                  <h3>New Delhi, India</h3>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* =========================================
            SUBMISSION GUIDELINES (BALANCED TWO-COLUMN)
        ========================================= */}
        <section className="submission-section" style={{ padding: "100px 24px", backgroundColor: "#f9fafb" }}>
          <div
            className="submission-inner"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* LEFT COLUMN: EDITORIAL PROMISE & BADGE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: "left", position: "sticky", top: "120px" }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "0.2em",
                  color: "#d71920",
                  display: "block",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Story Submissions
              </span>
              <h2 style={{ fontSize: "44px", fontWeight: "900", lineHeight: "1.08", color: "#111827", margin: "0 0 20px 0" }}>
                What to
                <br />
                <strong style={{ color: "#d71920" }}>include.</strong>
              </h2>
              <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: "1.6", maxWidth: "420px", margin: "0 0 32px 0" }}>
                We review every tip thoroughly. Please follow these guidelines to help our investigative desk evaluate your submission efficiently.
              </p>

              {/* EDITORIAL GUARANTEE CARD */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* LIVE STATUS PILL */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ position: "relative", display: "flex", width: "10px", height: "10px" }}>
                    <motion.span
                      animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        backgroundColor: "#10b981",
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#059669",
                      }}
                    />
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.12em", color: "#059669" }}>
                    CONFIDENTIAL & ENCRYPTED
                  </span>
                </div>

                {/* GUARANTEE ITEMS */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "1px solid #f3f4f6", paddingTop: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#d71920", flexShrink: 0 }}>
                      <Lock size={18} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "800", color: "#111827" }}>Source Protection</h4>
                      <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#6b7280" }}>Anonymity guaranteed upon request.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#d71920", flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "800", color: "#111827" }}>24-48h Desk Review</h4>
                      <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#6b7280" }}>Urgent leads prioritized immediately.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#d71920", flexShrink: 0 }}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "800", color: "#111827" }}>Independent Fact-Check</h4>
                      <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#6b7280" }}>Rigorous editorial verification.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: SUBMISSION STEPS */}
            <motion.div
              className="submission-list"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* STEP 1 */}
              <TiltCard>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "28px 32px",
                    border: "1px solid #f3f4f6",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <span
                      style={{
                        backgroundColor: "#fef2f2",
                        color: "#d71920",
                        fontWeight: "900",
                        fontSize: "13px",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        border: "1px solid rgba(215,25,32,0.15)",
                      }}
                    >
                      01
                    </span>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800", color: "#111827" }}>
                      Pitch Summary
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                    A clear description of the story or development you want to bring to our attention.
                  </p>
                </div>
              </TiltCard>

              {/* STEP 2 */}
              <TiltCard>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "28px 32px",
                    border: "1px solid #f3f4f6",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <span
                      style={{
                        backgroundColor: "#fef2f2",
                        color: "#d71920",
                        fontWeight: "900",
                        fontSize: "13px",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        border: "1px solid rgba(215,25,32,0.15)",
                      }}
                    >
                      02
                    </span>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800", color: "#111827" }}>
                      Evidence & Media
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                    Relevant details, documents, photographs, or supporting information where available.
                  </p>
                </div>
              </TiltCard>

              {/* STEP 3 */}
              <TiltCard>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "28px 32px",
                    border: "1px solid #f3f4f6",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <span
                      style={{
                        backgroundColor: "#fef2f2",
                        color: "#d71920",
                        fontWeight: "900",
                        fontSize: "13px",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        border: "1px solid rgba(215,25,32,0.15)",
                      }}
                    >
                      03
                    </span>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800", color: "#111827" }}>
                      Contact Info
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                    Your contact details so the newsroom team can follow up when necessary.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            CTA CARD SECTION (VISUALLY SEPARATED)
        ========================================= */}
        <section style={{ padding: "80px 24px 60px 24px", backgroundColor: "#0b0b0c" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              style={{
                backgroundColor: "#131417",
                borderRadius: "24px",
                padding: "60px 32px",
                textAlign: "center",
                border: "1px solid #23252a",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                maxWidth: "800px",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(215, 25, 32, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  color: "#d71920",
                }}
              >
                <Send size={24} />
              </div>

              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "900",
                  color: "#ffffff",
                  margin: "0 0 24px 0",
                  lineHeight: "1.2",
                }}
              >
                Ready to share the story?
              </h2>

              <a
                href="mailto:newsroom@newsfileindia.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#d71920",
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "15px",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
              >
                Contact the newsroom
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;