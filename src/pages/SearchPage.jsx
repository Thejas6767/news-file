import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  featuredNews,
  latestNews,
} from "../data/newsData";

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
    description:
      story.title,
    time: story.time,
  })),
];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

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
        story.category === activeFilter;

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

      {/* HERO */}
      <section className="search-page-hero">
        <div className="search-page-grid" />

        <motion.div
          className="search-page-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="search-page-eyebrow">
            NEWS FILE / DISCOVERY
          </div>

          <h1>
            FIND
            <span>NEWS.</span>
          </h1>

          <p>
            Search the News File newsroom for stories, topics and verified
            reports.
          </p>
        </motion.div>

        <div className="search-page-number">09</div>
      </section>

      {/* SEARCH FORM */}
      <section className="search-page-form-section">
        <div className="search-page-section-label">
          <span>01</span>
          SEARCH NEWSROOM
        </div>

        <div className="search-page-form">
          <Search size={25} />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            placeholder="Search stories, topics, locations..."
            aria-label="Search News File"
          />

          <button
            type="button"
            onClick={() => setSearchTerm(searchTerm.trim())}
          >
            SEARCH
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* FILTERS */}
        <div className="search-page-filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={
                activeFilter === filter ? "active" : ""
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}

          <button
            type="button"
            className="filter-button"
            onClick={() => {
              setSearchTerm("");
              setActiveFilter("ALL");
            }}
          >
            <SlidersHorizontal size={15} />
            RESET
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section className="search-results-section">
        <div className="search-results-header">
          <div className="search-page-section-label">
            <span>02</span>
            SEARCH RESULTS
          </div>

          <div className="search-results-count">
            {filteredResults.length}{" "}
            {filteredResults.length === 1
              ? "STORY"
              : "STORIES"}{" "}
            FOUND
          </div>
        </div>

        {/* SEARCH STATUS */}
        {(searchTerm || activeFilter !== "ALL") && (
          <motion.div
            className="search-active-status"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
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

        {/* RESULT LIST */}
        {filteredResults.length > 0 ? (
          <div className="search-results-list">
            {filteredResults.map((story, index) => (
              <motion.article
                key={story.id}
                className="search-result-card"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ x: 8 }}
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

                <ArrowUpRight
                  className="search-result-arrow"
                  size={22}
                />
              </motion.article>
            ))}
          </div>
        ) : (
          /* NO RESULTS */
          <motion.div
            className="search-no-results"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <Search size={40} />

            <h2>NO STORIES FOUND.</h2>

            <p>
              We couldn't find any stories matching your search.
              Try another keyword or reset the filters.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("ALL");
              }}
            >
              CLEAR SEARCH
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        )}
      </section>

      {/* CLOSING SECTION */}
      <section className="search-page-closing">
        <div className="search-page-closing-bg">
          FIND
        </div>

        <div className="search-page-closing-content">
          <span>NEWS FILE</span>

          <h2>
            EVERY STORY.
            <br />
            <strong>ONE SEARCH.</strong>
          </h2>

          <p>
            Explore the newsroom and discover the stories that matter.
          </p>

          <Link
            to="/"
            className="search-page-home-button"
          >
            BACK TO HOME
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SearchPage;