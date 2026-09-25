import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock3, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { featuredNews, latestNews } from "../data/newsData";

// Deduplicate and enrich news dataset with unique composite keys
const results = Array.from(
  new Map(
    [...featuredNews, ...latestNews].map((story) => [
      story.id,
      {
        id: story.id,
        category: story.category,
        title: story.title,
        description: story.description || story.title,
        time: story.time,
        image: story.image,
      },
    ])
  ).values()
);

/* Custom Variants for Reveal Animations */
const heroTitleVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

const popularSearches = ["Elections", "Economy", "Technology", "Supreme Court", "Climate"];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isFocused, setIsFocused] = useState(false);

  const filters = [
    "ALL",
    "POLITICS",
    "INDIA",
    "BUSINESS",
    "WORLD",
    "FACT CHECK",
  ];

  const filteredResults = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return results.filter((story) => {
      const matchesCategory =
        activeFilter === "ALL" ||
        story.category.toUpperCase() === activeFilter.toUpperCase();

      const matchesSearch =
        query === "" ||
        story.title.toLowerCase().includes(query) ||
        story.description.toLowerCase().includes(query) ||
        story.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeFilter]);

  const handleClear = () => {
    setSearchTerm("");
    setActiveFilter("ALL");
  };

  return (
    <div className="search-page" style={{ overflowX: "hidden" }}>
      <Navbar />

      <main>
        {/* =========================================
            HERO SECTION
        ========================================= */}
        <section className="search-page-hero" style={{ padding: "90px 24px 40px 24px", position: "relative" }}>
          <div className="search-page-grid" />

          {/* Ambient Glowing Orbs */}
          <motion.div
            className="search-ambient-orb"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="search-page-content"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "left" }}
          >
            <motion.div
              className="search-page-eyebrow"
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 0.8 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "800", color: "#d71920" }}
            >
              <span className="eyebrow-dot" /> NEWS FILE / DISCOVERY
            </motion.div>

            <motion.h1 variants={heroTitleVariants} style={{ fontSize: "clamp(42px, 8vw, 84px)", fontWeight: "900", margin: "16px 0", lineHeight: "1" }}>
              FIND <span style={{ color: "#d71920" }}>NEWS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontSize: "18px", color: "#9ca3af", maxWidth: "560px" }}
            >
              Search the News File newsroom for stories, topics and verified reports across India.
            </motion.p>
          </motion.div>
        </section>

        {/* =========================================
            SEARCH FORM & FILTERS
        ========================================= */}
        <section className="search-page-form-section" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 60px 24px" }}>
          <div className="search-page-section-label" style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.2em", color: "#6b7280", marginBottom: "20px" }}>
            <span style={{ color: "#d71920", marginRight: "8px" }}>01</span>
            SEARCH NEWSROOM
          </div>

          {/* MAIN INPUT CONTAINER */}
          <motion.div
            className={`search-page-form ${isFocused ? "focused" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "#111215",
              border: isFocused ? "1px solid #d71920" : "1px solid #27272a",
              borderRadius: "16px",
              padding: "12px 20px",
              boxShadow: isFocused ? "0 0 30px rgba(215, 25, 32, 0.15)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            <motion.div
              animate={{ rotate: isFocused ? 90 : 0, scale: isFocused ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Search size={22} className="search-icon" style={{ color: isFocused ? "#d71920" : "#6b7280" }} />
            </motion.div>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              placeholder="Search stories, topics, locations..."
              aria-label="Search News File"
              style={{
                flex: 1,
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "500",
              }}
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer", padding: "4px" }}
              >
                <X size={18} />
              </button>
            )}

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSearchTerm(searchTerm.trim())}
              style={{
                backgroundColor: "#d71920",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                padding: "12px 24px",
                fontWeight: "800",
                fontSize: "13px",
                letterSpacing: "0.1em",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              SEARCH
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

          {/* QUICK SUGGESTED SEARCH TAGS */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <Sparkles size={13} color="#d71920" /> POPULAR:
            </span>
            {popularSearches.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSearchTerm(tag)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  color: "#9ca3af",
                  fontSize: "12px",
                  padding: "4px 12px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* CATEGORY FILTERS */}
          <motion.div
            className="search-page-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "28px", alignItems: "center" }}
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <motion.button
                  type="button"
                  key={filter}
                  className={`filter-chip ${isActive ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    position: "relative",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: isActive ? "1px solid #d71920" : "1px solid #27272a",
                    backgroundColor: isActive ? "#d71920" : "#111215",
                    color: isActive ? "#ffffff" : "#9ca3af",
                    fontWeight: "700",
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                  }}
                >
                  {filter}
                </motion.button>
              );
            })}

            <motion.button
              type="button"
              className="filter-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClear}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "transparent",
                border: "none",
                color: "#6b7280",
                fontSize: "12px",
                fontWeight: "800",
                cursor: "pointer",
                marginLeft: "auto",
              }}
            >
              <SlidersHorizontal size={14} />
              RESET
            </motion.button>
          </motion.div>
        </section>

        {/* =========================================
            RESULTS SECTION
        ========================================= */}
        <section className="search-results-section" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 100px 24px" }}>
          <div className="search-results-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", borderBottom: "1px solid #27272a", paddingBottom: "16px" }}>
            <div className="search-page-section-label" style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.2em", color: "#6b7280" }}>
              <span style={{ color: "#d71920", marginRight: "8px" }}>02</span>
              SEARCH RESULTS
            </div>

            <motion.div
              key={filteredResults.length}
              className="search-results-count"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: "13px", fontWeight: "800", color: "#9ca3af", letterSpacing: "0.1em" }}
            >
              {filteredResults.length}{" "}
              {filteredResults.length === 1 ? "STORY" : "STORIES"} FOUND
            </motion.div>
          </div>

          {/* ACTIVE STATUS INDICATOR */}
          <AnimatePresence>
            {(searchTerm || activeFilter !== "ALL") && (
              <motion.div
                className="search-active-status"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", gap: "16px", marginBottom: "24px", fontSize: "13px", color: "#9ca3af" }}
              >
                {searchTerm && (
                  <span>
                    SEARCH: <strong style={{ color: "#ffffff" }}>"{searchTerm}"</strong>
                  </span>
                )}

                {activeFilter !== "ALL" && (
                  <span>
                    CATEGORY: <strong style={{ color: "#d71920" }}>{activeFilter}</strong>
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* RESULTS LIST */}
          {filteredResults.length > 0 ? (
            <motion.div
              className="search-results-list"
              variants={cardListVariants}
              initial="hidden"
              animate="visible"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredResults.map((story, index) => (
                  <motion.article
                    key={story.id}
                    className="search-result-card"
                    variants={cardItemVariants}
                    layout
                    whileHover={{
                      x: 8,
                      borderColor: "rgba(215, 25, 32, 0.4)",
                      backgroundColor: "#16171d",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "24px",
                      backgroundColor: "#111215",
                      border: "1px solid #27272a",
                      borderRadius: "16px",
                      padding: "24px",
                      textAlign: "left",
                    }}
                  >
                    <div className="search-result-number" style={{ fontSize: "20px", fontWeight: "900", color: "#3f3f46" }}>
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="search-result-main" style={{ flex: 1 }}>
                      <div className="search-result-top" style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "8px" }}>
                        <span className="search-result-category" style={{ fontSize: "11px", fontWeight: "800", color: "#d71920", letterSpacing: "0.1em" }}>
                          {story.category}
                        </span>

                        <span className="search-result-time" style={{ fontSize: "12px", color: "#6b7280", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          <Clock3 size={12} />
                          {story.time}
                        </span>
                      </div>

                      <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: "0 0 8px 0", lineHeight: "1.3" }}>
                        {story.title}
                      </h2>

                      <p style={{ fontSize: "14px", color: "#9ca3af", margin: "0 0 16px 0", lineHeight: "1.5" }}>
                        {story.description}
                      </p>

                      <Link
                        to={`/article/${story.id}`}
                        className="search-result-read"
                        style={{
                          fontSize: "12px",
                          fontWeight: "800",
                          color: "#ffffff",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          letterSpacing: "0.1em",
                        }}
                      >
                        READ STORY
                        <ArrowUpRight size={15} color="#d71920" />
                      </Link>
                    </div>

                    <motion.div
                      className="arrow-wrapper"
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      style={{ color: "#6b7280" }}
                    >
                      <ArrowUpRight size={24} />
                    </motion.div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* NO RESULTS EMPTY STATE */
            <motion.div
              className="search-no-results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                backgroundColor: "#111215",
                border: "1px dashed #27272a",
                borderRadius: "20px",
                padding: "60px 24px",
                textAlign: "center",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                style={{ display: "inline-block", color: "#d71920", marginBottom: "16px" }}
              >
                <Search size={44} className="no-results-icon" />
              </motion.div>

              <h2 style={{ fontSize: "24px", fontWeight: "900", color: "#ffffff", margin: "0 0 8px 0" }}>NO STORIES FOUND.</h2>

              <p style={{ fontSize: "15px", color: "#6b7280", maxWidth: "420px", margin: "0 auto 24px auto" }}>
                We couldn't find any news stories matching your criteria. Try adjusting your query or resetting filters.
              </p>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClear}
                style={{
                  backgroundColor: "#d71920",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  fontWeight: "800",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                CLEAR SEARCH
                <ArrowUpRight size={16} />
              </motion.button>
            </motion.div>
          )}
        </section>

        {/* =========================================
            CLOSING BANNER
        ========================================= */}
        <section className="search-page-closing" style={{ padding: "80px 24px", backgroundColor: "#0b0b0c", borderTop: "1px solid #1f2023", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <motion.div
            className="search-page-closing-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.2em", color: "#d71920", display: "block", marginBottom: "12px" }}>
              NEWS FILE ARCHIVE
            </span>

            <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#ffffff", margin: "0 0 16px 0", lineHeight: "1.1" }}>
              EVERY STORY.
              <br />
              <strong style={{ color: "#d71920" }}>ONE SEARCH.</strong>
            </h2>

            <p style={{ color: "#9ca3af", margin: "0 0 32px 0", fontSize: "16px" }}>Explore the newsroom and discover the stories that matter.</p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
              <Link
                to="/"
                className="search-page-home-button"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#111215",
                  fontWeight: "800",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                BACK TO HOME
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SearchPage;