import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  Clock3,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const worldStories = [
  {
    id: 1,
    category: "EUROPE",
    title: "Global developments reshape the political landscape",
    description:
      "A closer look at the latest international developments and the decisions shaping the world beyond borders.",
    location: "Europe",
    time: "12 min ago",
    featured: true,
  },
  {
    id: 2,
    category: "ASIA",
    title: "Asia enters a new phase of economic cooperation",
    description:
      "Regional economies focus on trade, technology and stronger cross-border partnerships.",
    location: "Asia",
    time: "28 min ago",
  },
  {
    id: 3,
    category: "AMERICAS",
    title: "Markets react to major international developments",
    description:
      "Investors and policymakers assess the impact of fresh global announcements.",
    location: "Americas",
    time: "41 min ago",
  },
  {
    id: 4,
    category: "MIDDLE EAST",
    title: "Diplomatic efforts continue across the region",
    description:
      "International leaders intensify discussions as negotiations move forward.",
    location: "Middle East",
    time: "1 hr ago",
  },
  {
    id: 5,
    category: "AFRICA",
    title: "New initiatives target growth and infrastructure",
    description:
      "Governments and international organisations announce new development priorities.",
    location: "Africa",
    time: "2 hrs ago",
  },
  {
    id: 6,
    category: "WORLD",
    title: "Technology becomes central to global policy",
    description:
      "Countries rethink regulation, innovation and digital cooperation in a rapidly changing world.",
    location: "Global",
    time: "3 hrs ago",
  },
];

const regions = [
  "Europe",
  "Asia",
  "Americas",
  "Middle East",
  "Africa",
];

function World() {
  return (
    <div className="world-page">
      <Navbar />

      {/* HERO */}
      <section className="world-hero">
        <div className="world-grid-lines" />

        <motion.div
          className="world-orbit world-orbit-one"
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="world-orbit world-orbit-two"
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="world-hero-content">
          <motion.div
            className="world-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Globe2 size={18} />
            WORLD DESK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            THE
            <span>WORLD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            International stories, geopolitical shifts and global events —
            reported beyond borders.
          </motion.p>

          <motion.div
            className="world-hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>
              <MapPin size={15} />
              GLOBAL COVERAGE
            </span>

            <span>
              <Clock3 size={15} />
              UPDATED LIVE
            </span>
          </motion.div>
        </div>

        <div className="world-hero-number">07</div>

        <div className="world-hero-globe">
          <Globe2 size={360} strokeWidth={0.55} />
        </div>
      </section>

      {/* REGION STRIP */}
      <section className="world-regions">
        <div className="world-section-label">
          <span>01</span>
          REGIONS
        </div>

        <div className="world-region-list">
          {regions.map((region, index) => (
            <motion.div
              key={region}
              className="world-region-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>0{index + 1}</span>
              <strong>{region}</strong>
              <ArrowUpRight size={17} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="world-featured">
        <div className="world-section-label">
          <span>02</span>
          GLOBAL FOCUS
        </div>

        <motion.article
          className="world-featured-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="world-featured-visual">
            <div className="world-featured-glow" />

            <Globe2
              className="world-featured-icon"
              size={220}
              strokeWidth={0.5}
            />

            <div className="world-featured-stamp">
              GLOBAL
              <br />
              DESK
            </div>
          </div>

          <div className="world-featured-copy">
            <div className="world-story-category">
              {worldStories[0].category}
            </div>

            <h2>{worldStories[0].title}</h2>

            <p>{worldStories[0].description}</p>

            <div className="world-story-details">
              <span>
                <MapPin size={14} />
                {worldStories[0].location}
              </span>

              <span>
                <Clock3 size={14} />
                {worldStories[0].time}
              </span>
            </div>

            <Link to="/news" className="world-read-button">
              READ FULL STORY
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.article>
      </section>

      {/* LATEST WORLD NEWS */}
      <section className="world-latest">
        <div className="world-latest-heading">
          <div className="world-section-label">
            <span>03</span>
            LATEST FROM THE WORLD
          </div>

          <div className="world-live-indicator">
            <span />
            LIVE DESK
          </div>
        </div>

        <div className="world-story-grid">
          {worldStories.slice(1).map((story, index) => (
            <motion.article
              key={story.id}
              className="world-story-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="world-story-top">
                <span className="world-story-number">
                  0{index + 2}
                </span>

                <span className="world-story-category">
                  {story.category}
                </span>

                <ArrowUpRight size={18} />
              </div>

              <div className="world-card-line" />

              <h3>{story.title}</h3>

              <p>{story.description}</p>

              <div className="world-story-footer">
                <span>
                  <MapPin size={13} />
                  {story.location}
                </span>

                <span>
                  <Clock3 size={13} />
                  {story.time}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GLOBAL PULSE */}
      <section className="world-pulse">
        <div className="world-pulse-bg">
          <TrendingUp size={300} strokeWidth={0.35} />
        </div>

        <div className="world-pulse-content">
          <span>GLOBAL PULSE</span>

          <h2>
            THE WORLD
            <br />
            DOESN'T
            <strong> WAIT.</strong>
          </h2>

          <p>
            News moves across borders in seconds. Our global desk follows the
            story from the ground, connecting events, people and decisions
            that shape tomorrow.
          </p>

          <Link to="/" className="world-back-home">
            BACK TO NEWS FILE
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
    
  );
}

export default World;