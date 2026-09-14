import { motion } from "framer-motion";
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
    category: "POLITICS",
    title:
      "Political developments continue to shape the national conversation",
    description:
      "The latest decisions, statements and developments from India's political landscape.",
    time: "8 min ago",
    featured: true,
  },
  {
    id: 2,
    category: "INDIA",
    title: "Major developments emerge from across the country",
    description:
      "A look at the stories making an impact across India's cities and states.",
    time: "16 min ago",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "Markets watch fresh signals as economic activity shifts",
    description:
      "Businesses and investors assess the latest movement across the economy.",
    time: "24 min ago",
  },
  {
    id: 4,
    category: "WORLD",
    title: "Global developments put international markets on alert",
    description:
      "International events continue to influence markets, governments and communities.",
    time: "31 min ago",
  },
  {
    id: 5,
    category: "INDIA",
    title: "Cities prepare for a new wave of infrastructure projects",
    description:
      "New plans focus on connectivity, urban development and public infrastructure.",
    time: "43 min ago",
  },
  {
    id: 6,
    category: "POLITICS",
    title: "Opposition and government face new questions",
    description:
      "Political parties respond to the latest developments and public concerns.",
    time: "52 min ago",
  },
  {
    id: 7,
    category: "FACT CHECK",
    title: "Viral claim circulating online gets a closer examination",
    description:
      "News File's verification desk examines the evidence behind a widely shared claim.",
    time: "1 hr ago",
  },
  {
    id: 8,
    category: "BUSINESS",
    title: "Technology companies prepare for another competitive phase",
    description:
      "The technology sector continues to evolve as companies rethink strategy and growth.",
    time: "1 hr ago",
  },
  {
    id: 9,
    category: "WORLD",
    title: "Diplomatic discussions continue across major regions",
    description:
      "Leaders and officials continue talks on issues affecting global stability.",
    time: "2 hrs ago",
  },
];

function AllNews() {
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
          {categories.map((category, index) => (
            <button
              key={category}
              className={index === 0 ? "active" : ""}
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
              {stories[0].category}
            </div>

            <h2>{stories[0].title}</h2>

            <p>{stories[0].description}</p>

            <div className="all-news-story-meta">
              <span>
                <Clock3 size={14} />
                {stories[0].time}
              </span>
            </div>

           <Link
  to={`/article/${stories[0].id}`}
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
          {stories.slice(1).map((story, index) => (
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
    </div>
  );
}

export default AllNews;