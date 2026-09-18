import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Filter,
  Flame,
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
  },
  {
    id: 2,
    category: "INDIA",
    title: "The stories shaping India's next chapter",
    description:
      "National developments, politics and public affairs from across the country.",
    time: "28 MIN AGO",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "Markets, money and the forces changing business",
    description:
      "Business intelligence and economic developments that matter.",
    time: "41 MIN AGO",
  },
  {
    id: 4,
    category: "POLITICS",
    title: "Inside the decisions shaping the country",
    description:
      "Political developments with context from the ground.",
    time: "1 HR AGO",
  },
];

function AllNews() {
  const [activeCategory, setActiveCategory] = useState("ALL");

const filteredStories =
  activeCategory === "ALL"
    ? stories
    : stories.filter((story) => story.category === activeCategory);
  return (
    <div className="all-news-page">
      <Navbar />

      {/* HERO */}
      <section className="all-news-hero">
        <div className="all-news-hero-bg" />

        <motion.div
          className="all-news-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="all-news-eyebrow">
            <Flame size={17} />
            NEWS FILE / NEWSROOM
          </div>

          <h1>
            ALL
            <span>NEWS.</span>
          </h1>

          <p>
            Every important story. One newsroom. Independent reporting across
            India and the world.
          </p>
        </motion.div>

        <div className="all-news-number">08</div>

        <motion.div
          className="all-news-live"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span />
          LIVE NEWSROOM
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="all-news-filter-section">
        <div className="all-news-filter-top">
          <div className="all-news-section-label">
            <span>01</span>
            NEWSROOM
          </div>

          <div className="all-news-count">
            <TrendingUp size={15} />
            24 STORIES TODAY
          </div>
        </div>

        <div className="all-news-filters">
          {categories.map((category) => (
  <button
    key={category}
    className={activeCategory === category ? "active" : ""}
    onClick={() => setActiveCategory(category)}
  >
    {category}
  </button>
))}

          <button className="filter-button">
            <Filter size={15} />
            FILTER
          </button>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="all-news-featured-section">
        <div className="all-news-section-label">
          <span>02</span>
          TOP STORY
        </div>

        <motion.article
          className="all-news-featured"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="all-news-featured-visual">
            <div className="all-news-featured-grid" />

            <div className="all-news-featured-mark">
              NF
            </div>

            <div className="all-news-featured-label">
              DEVELOPING STORY
            </div>
          </div>

          <div className="all-news-featured-copy">
            <div className="all-news-category">
             {filteredStories[0]?.category}
            </div>

            <h2>{filteredStories[0]?.title}</h2>

            <p>{filteredStories[0]?.description}</p>

            <div className="all-news-story-meta">
              <span>
                <Clock3 size={14} />
                {filteredStories[0]?.time}
              </span>
            </div>

            <Link
              to={`/article/${filteredStories[0]?.id}`}
              className="all-news-read"
            >
              READ STORY
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.article>
      </section>

      {/* LATEST STORIES */}
      <section className="all-news-grid-section">
        <div className="all-news-grid-heading">
          <div className="all-news-section-label">
            <span>03</span>
            LATEST STORIES
          </div>

          <div className="all-news-search">
            <Search size={16} />
            SEARCH NEWS
          </div>
        </div>

        <div className="all-news-grid">
         {filteredStories.slice(1).map((story, index) => (
            <motion.article
              key={story.id}
              className="all-news-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{ y: -7 }}
            >
              <div className="all-news-card-top">
                <span className="all-news-card-number">
                  {String(index + 2).padStart(2, "0")}
                </span>

                <span className="all-news-category">
                  {story.category}
                </span>

                <ArrowUpRight size={17} />
              </div>

              <div className="all-news-card-line" />

              <h3>{story.title}</h3>

              <p>{story.description}</p>

              <div className="all-news-card-footer">
                <span>
                  <Clock3 size={13} />
                  {story.time}
                </span>

                <span>NEWS FILE</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="all-news-closing">
        <div className="all-news-closing-bg">
          NEWS
        </div>

        <div className="all-news-closing-content">
          <span>STAY INFORMED</span>

          <h2>
            THE STORY
            <br />
            <strong>NEVER STOPS.</strong>
          </h2>

          <p>
            Follow the stories that matter with News File's independent
            newsroom.
          </p>

          <Link
            to="/"
            className="all-news-home-button"
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

export default AllNews;