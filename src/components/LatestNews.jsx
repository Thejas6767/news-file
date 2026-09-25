import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Clock3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredNews } from "../data/newsData";

/* =========================================================
   1. KINETIC CARD WRAPPER WITH MAGNET TILT & SHADOW ELEVATION
========================================================= */
function NewsCard({ children }) {
  const cardRef = useRef(null);

  // Smooth mouse coordinates for 3D perspective
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
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
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        backgroundColor: "#ffffff",
        border: "2px solid #e2e8f0",
        borderRadius: "16px",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", justifyContent: "space-between" }}>
        {children}
      </div>
    </motion.div>
  );
}

/* =========================================================
   2. MAIN 2x2 COMPONENT WITH ADVANCED ANIMATIONS
========================================================= */
export default function LatestNews() {
  const gridStories = featuredNews.slice(0, 4);

  return (
    <section style={{ padding: "48px 24px", maxWidth: "1152px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
      
      {/* SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <motion.div
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <Sparkles size={16} color="#dc2626" />
            </motion.div>
            <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#dc2626", fontWeight: "800" }}>
              TOP STORIES TODAY
            </span>
          </div>

          <h2 style={{ fontSize: "36px", fontWeight: "900", margin: "0", color: "#0f172a", lineHeight: "1.2" }}>
            The stories <br />
            <span style={{ color: "#dc2626" }}>that matter.</span>
          </h2>
        </div>

        {/* MAGNETIC EXPLORE BUTTON */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            to="/news"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "12px",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              textDecoration: "none"
            }}
          >
            <span>View all news</span>
            <motion.div
              animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowUpRight size={15} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* 2x2 CARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        {gridStories.map((story, index) => (
          <motion.div 
            key={story.id} 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", minWidth: "0" }}
          >
            <NewsCard>
              
              {/* IMAGE CONTAINER WITH CONTINUOUS PAN & SHEEN SWEEP */}
              <motion.div
                initial="initial"
                whileHover="hover"
                style={{
                  height: "220px",
                  maxHeight: "220px",
                  width: "100%",
                  backgroundColor: "#f1f5f9",
                  borderBottom: "1px solid #e2e8f0",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <motion.img
                  src={story.image}
                  alt={story.title}
                  variants={{
                    initial: { scale: 1, y: 0 },
                    hover: { scale: 1.12, y: -5 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block"
                  }}
                />

                {/* LIGHT SHEEN SWEEP ON HOVER */}
                <motion.div
                  variants={{
                    initial: { x: "-100%" },
                    hover: { x: "100%" }
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                    pointerEvents: "none"
                  }}
                />

                {/* GLOWING PULSE CATEGORY BADGE */}
                <motion.span
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(220, 38, 38, 0.4)",
                      "0 0 0 8px rgba(220, 38, 38, 0)",
                      "0 0 0 0px rgba(220, 38, 38, 0)"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: "900",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "4px 8px",
                    borderRadius: "4px"
                  }}
                >
                  {story.category}
                </motion.span>
              </motion.div>

              {/* CARD CONTENT AREA */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1, backgroundColor: "#ffffff" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "#94a3b8", marginBottom: "8px" }}>
                    <Clock3 size={13} color="#dc2626" />
                    <span>{story.time}</span>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", margin: "0 0 8px 0", lineHeight: "1.3" }}>
                    {story.title}
                  </h3>

                  {story.description && (
                    <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 16px 0", lineHeight: "1.5" }}>
                      {story.description}
                    </p>
                  )}
                </div>

                {/* FOOTER LINK WITH HOVER FLUIDITY */}
                <div style={{ paddingTop: "12px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <motion.div 
                    whileHover={{ x: 6 }} 
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    <Link
                      to={`/article/${story.id}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", color: "#dc2626", textDecoration: "none" }}
                    >
                      <span>Read story</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </motion.div>

                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#94a3b8", fontWeight: "600" }}>
                    CARD #{index + 1}
                  </span>
                </div>
              </div>

            </NewsCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}