import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock3, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { featuredNews, latestNews } from "../data/newsData";

const results = [
  ...featuredNews.map((story) => ({
    id: story.id,
    category: story.category,
    title: story.title,
    description: story.description,
    time: story.time,
  })),

  ...latestNews.map((story) => ({
    id: story.id,
    category: story.category,
    title: story.title,
    description: story.title,
    time: story.time,
  })),
];

/* Custom Variants for Rare Reveal Animations */
const heroTitleVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

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
        activeFilter === "ALL" || story.category === activeFilter;

      const matchesSearch =
        query === "" ||
        story.title.toLowerCase().includes(query) ||
        story.description.toLowerCase().includes(query) ||
        story.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeFilter]);

  return (
    <div className="search-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="search-page-hero">
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
        >
          <motion.div
            className="search-page-eyebrow"
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-dot" /> NEWS FILE / DISCOVERY
          </motion.div>

          <motion.h1 variants={heroTitleVariants}>
            FIND
            <span>NEWS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Search the News File newsroom for stories, topics and verified
            reports.
          </motion.p>
        </motion.div>

        <motion.div
          className="search-page-number"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          09
        </motion.div>
      </section>

      {/* SEARCH FORM & FILTERS */}
      <section className="search-page-form-section">
        <div className="search-page-section-label">
          <span>01</span>
          SEARCH NEWSROOM
        </div>

        <motion.div
          className={`search-page-form ${isFocused ? "focused" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            animate={{ rotate: isFocused ? 90 : 0, scale: isFocused ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Search size={22} className="search-icon" />
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
          />

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSearchTerm(searchTerm.trim())}
          >
            SEARCH
            <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>

        {/* FILTERS WITH LAYOUT ANIMATION */}
        <motion.div
          className="search-page-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
              >
                {filter}
                {isActive && (
                  <motion.div
                    className="active-pill-bg"
                    layoutId="activeFilterPill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            );
          })}

          <motion.button
            type="button"
            className="filter-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSearchTerm("");
              setActiveFilter("ALL");
            }}
          >
            <SlidersHorizontal size={15} />
            RESET
          </motion.button>
        </motion.div>
      </section>

      {/* RESULTS SECTION */}
      <section className="search-results-section">
        <div className="search-results-header">
          <div className="search-page-section-label">
            <span>02</span>
            SEARCH RESULTS
          </div>

          <motion.div
            key={filteredResults.length}
            className="search-results-count"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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
            >
              {searchTerm && (
                <span>
                  SEARCH: <strong>"{searchTerm}"</strong>
                </span>
              )}

              {activeFilter !== "ALL" && (
                <span>
                  CATEGORY: <strong>{activeFilter}</strong>
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
          >
            <AnimatePresence mode="popLayout">
              {filteredResults.map((story, index) => (
                <motion.article
                  key={story.id}
                  className="search-result-card"
                  variants={cardItemVariants}
                  layout
                  whileHover={{
                    x: 12,
                    borderColor: "rgba(215, 25, 32, 0.5)",
                    backgroundColor: "#16161a",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="search-result-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="search-result-main">
                    <div className="search-result-top">
                      <span className="search-result-category">
                        {story.category}
                      </span>

                      <span className="search-result-time">
                        <Clock3 size={13} />
                        {story.time}
                      </span>
                    </div>

                    <h2>{story.title}</h2>

                    <p>{story.description}</p>

                    <Link
                      to={`/article/${story.id}`}
                      className="search-result-read"
                    >
                      READ STORY
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>

                  <motion.div
                    className="arrow-wrapper"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                  >
                    <ArrowUpRight
                      className="search-result-arrow"
                      size={22}
                    />
                  </motion.div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* NO RESULTS EMPTY STATE */
          <motion.div
            className="search-no-results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Search size={44} className="no-results-icon" />
            </motion.div>

            <h2>NO STORIES FOUND.</h2>

            <p>
              We couldn't find any stories matching your search. Try another
              keyword or reset the filters.
            </p>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("ALL");
              }}
            >
              CLEAR SEARCH
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* CLOSING BANNER */}
      <section className="search-page-closing">
        <motion.div
          className="search-page-closing-bg"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          FIND
        </motion.div>

        <motion.div
          className="search-page-closing-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>NEWS FILE</span>

          <h2>
            EVERY STORY.
            <br />
            <strong>ONE SEARCH.</strong>
          </h2>

          <p>Explore the newsroom and discover the stories that matter.</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="search-page-home-button">
              BACK TO HOME
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default SearchPage;