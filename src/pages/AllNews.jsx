import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Search,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  "ALL",
  "POLITICS",
  "INDIA",
  "BUSINESS",
  "WORLD",
  "FACT CHECK",
];

const stories = [
  {
    id: 1,
    category: "INDIA",
    title: "Stories from the ground, where every development begins",
    description:
      "Get the latest verified developments, reports and voices from across Karnataka.",
    time: "12 MIN AGO",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 2,
    category: "INDIA",
    title: "The stories shaping India's next chapter",
    description:
      "National developments, politics and public affairs from across the country.",
    time: "28 MIN AGO",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "Markets, money and the forces changing business",
    description:
      "Business intelligence and economic developments that matter.",
    time: "41 MIN AGO",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 4,
    category: "POLITICS",
    title: "Inside the decisions shaping the country",
    description:
      "Political developments with context from the ground.",
    time: "1 HR AGO",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=85",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2200&q=85";

/* =========================================
   3D STORY CARD
========================================= */

function StoryCard({ story, index }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 180,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      className="all-news-card"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,

        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.94) 100%), url(" +
          story.image +
          ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.015 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="all-news-card-glow" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} />

      <div className="all-news-card-top">
        <motion.span className="all-news-card-number" whileHover={{ scale: 1.15, x: 4 }}>
          {String(index + 2).padStart(2, "0")}
        </motion.span>
        <motion.span className="all-news-category" whileHover={{ x: 5 }}>
          {story.category}
        </motion.span>
        <motion.div whileHover={{ rotate: 45, scale: 1.2 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
          <ArrowUpRight size={17} />
        </motion.div>
      </div>

      <motion.div
        className="all-news-card-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: index * 0.12 + 0.2 }}
      />

      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.25 }}
      >
        {story.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.35 }}
      >
        {story.description}
      </motion.p>

      <div className="all-news-card-footer">
        <span>
          <Clock3 size={13} />
          {story.time}
        </span>
        <motion.span whileHover={{ letterSpacing: "0.18em" }}>NEWS FILE</motion.span>
      </div>

      <Link to={`/article/${story.id}`} className="all-news-card-link" aria-label={`Read ${story.title}`}>
        <span>READ STORY</span>
        <motion.span whileHover={{ x: 5, y: -5 }}>
          <ArrowUpRight size={16} />
        </motion.span>
      </Link>
    </motion.article>
  );
}

/* =========================================
   ALL NEWS PAGE
========================================= */

function AllNews() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const contentRef = useRef(null);

  const filteredStories =
    activeCategory === "ALL"
      ? stories
      : stories.filter((story) => story.category === activeCategory);

  const handleHeroMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth) * 100,
      y: (clientY / innerHeight) * 100,
    });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (contentRef.current) {
      const offset = 80;
      const elementPosition = contentRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="all-news-page">
      <Navbar />

      {/* =====================================
          CINEMATIC HERO
      ===================================== */}

      <section
        className="all-news-hero"
        onMouseMove={handleHeroMouseMove}
        style={{
          position: "relative",
          minHeight: "85vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          padding: "112px 32px 48px 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.95) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(220, 38, 38, 0.35), transparent 80%)`,
            transition: "background 0.2s ease-out",
          }}
        />

        {/* TOP META BAR */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "24px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(220, 38, 38, 0.15)",
              border: "1px solid rgba(220, 38, 38, 0.3)",
              color: "#ef4444",
              fontSize: "12px",
              fontFamily: "monospace",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            <span style={{ position: "relative", display: "flex", height: "8px", width: "8px" }}>
              <motion.span
                animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#ef4444" }}
              />
              <span style={{ position: "relative", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#dc2626" }} />
            </span>
            LIVE NEWSROOM • UPDATED 2 MIN AGO
          </motion.div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "12px",
              fontFamily: "monospace",
              color: "#a3a3a3",
              letterSpacing: "1px",
            }}
          >
            <span>VOL. 08</span>
            <span>•</span>
            <span>INDEPENDENT JOURNALISM</span>
          </div>
        </div>

        {/* HERO MAIN TITLE & CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            margin: "auto 0",
            padding: "48px 0",
            maxWidth: "1024px",
          }}
        >
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                fontWeight: "900",
                letterSpacing: "-2px",
                margin: 0,
                lineHeight: "0.95",
                textTransform: "uppercase",
              }}
            >
              ALL{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                NEWS.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              marginTop: "24px",
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              color: "#d4d4d4",
              maxWidth: "640px",
              fontWeight: "300",
              lineHeight: "1.6",
            }}
          >
            Unfiltered reporting, real-time context, and ground stories across India and the globe.
          </motion.p>

          {/* QUICK CATEGORY CHIPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              marginTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                style={{
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  border: activeCategory === cat ? "1px solid #dc2626" : "1px solid #262626",
                  backgroundColor: activeCategory === cat ? "#dc2626" : "rgba(23, 23, 23, 0.7)",
                  color: activeCategory === cat ? "#ffffff" : "#a3a3a3",
                  boxShadow: activeCategory === cat ? "0 10px 15px -3px rgba(220, 38, 38, 0.3)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM BREAKING TICKER */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "16px",
            fontSize: "12px",
            fontFamily: "monospace",
            color: "#a3a3a3",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <TrendingUp size={14} color="#ef4444" />
            <span style={{ color: "#ffffff", fontWeight: "700", letterSpacing: "1px" }}>BREAKING:</span>
            <span>Key economic indicators updated for Q3 with major shifts in tech sector...</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#ef4444",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            <span>REAL STORIES. REAL TIME.</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </section>

      {/* =====================================
          FEATURED STORY (SCROLL TARGET)
      ===================================== */}
      <section className="all-news-featured-section" ref={contentRef} style={{ paddingTop: '64px' }}>
        <motion.div
          className="all-news-section-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>01</span>
          TOP STORY
        </motion.div>

        {filteredStories.length > 0 ? (
          <motion.article
            className="all-news-featured"
            initial={{ opacity: 0, y: 100, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="all-news-featured-visual"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%), url(" +
                  filteredStories[0]?.image +
                  ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="all-news-featured-grid"
                animate={{ backgroundPosition: ["0px 0px", "60px 60px", "0px 0px"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="all-news-featured-mark"
                animate={{ rotate: [0, 3, 0, -3, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                NF
              </motion.div>

              <motion.div
                className="all-news-featured-label"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                DEVELOPING STORY
              </motion.div>
            </motion.div>

            <motion.div
              className="all-news-featured-copy"
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="all-news-category" whileHover={{ x: 6 }}>
                {filteredStories[0]?.category}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.8 }}
              >
                {filteredStories[0]?.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                {filteredStories[0]?.description}
              </motion.p>

              <div className="all-news-story-meta">
                <span>
                  <Clock3 size={14} />
                  {filteredStories[0]?.time}
                </span>
              </div>

              <motion.div whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to={`/article/${filteredStories[0]?.id}`} className="all-news-read">
                  READ STORY
                  <motion.span whileHover={{ rotate: 45, scale: 1.15 }}>
                    <ArrowUpRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.article>
        ) : (
          <motion.div
            className="all-news-empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            NO STORIES AVAILABLE IN THIS CATEGORY
          </motion.div>
        )}
      </section>

      {/* =====================================
          LATEST STORIES GRID
      ===================================== */}

      <section className="all-news-grid-section">
        <div className="all-news-grid-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.div
            className="all-news-section-label"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>02</span>
            LATEST STORIES
          </motion.div>

          
        </div>

        <div className="all-news-grid">
          {filteredStories.slice(1).map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>

        {/* BACK TO HOME BUTTON (MOVED TO BOTTOM RIGHT) */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#dc2626",
                color: "#ffffff",
                padding: "10px 18px",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1px",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
            >
              BACK TO HOME
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AllNews;