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

      {/* GLOBAL COVERAGE */}
      <section className="world-featured">
        <div className="world-section-label">
          <span>02</span>
          GLOBAL COVERAGE
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
              WORLD
            </div>

            <h2>
              Stories beyond
              <br />
              <strong>borders.</strong>
            </h2>

            <p>
              Follow international developments, global affairs and stories
              connecting India with the wider world.
            </p>

            <div className="world-story-details">
              <span>
                <MapPin size={14} />
                GLOBAL
              </span>

              <span>
                <Clock3 size={14} />
                WORLD DESK
              </span>
            </div>

            <Link to="/news" className="world-read-button">
              EXPLORE ALL NEWS
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.article>
      </section>

      {/* WORLD DESK */}
      <section className="world-latest">
        <div className="world-latest-heading">
          <div className="world-section-label">
            <span>03</span>
            WORLD DESK
          </div>

          <div className="world-live-indicator">
            <span />
            NEWSROOM
          </div>
        </div>

        <div className="world-story-grid">
          <motion.article
            className="world-story-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <div className="world-story-top">
              <span className="world-story-number">
                01
              </span>

              <span className="world-story-category">
                WORLD
              </span>

              <ArrowUpRight size={18} />
            </div>

            <div className="world-card-line" />

            <h3>
              International coverage from the News File newsroom.
            </h3>

            <p>
              Explore the latest newsroom coverage and follow stories that
              connect developments across India and the world.
            </p>

            <div className="world-story-footer">
              <span>
                <MapPin size={13} />
                GLOBAL
              </span>

              <span>
                <Clock3 size={13} />
                NEWS DESK
              </span>
            </div>
          </motion.article>

          <motion.article
            className="world-story-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            whileHover={{ y: -8 }}
          >
            <div className="world-story-top">
              <span className="world-story-number">
                02
              </span>

              <span className="world-story-category">
                NEWS FILE
              </span>

              <ArrowUpRight size={18} />
            </div>

            <div className="world-card-line" />

            <h3>
              Verified reporting with context beyond the headline.
            </h3>

            <p>
              Return to the main newsroom to explore the stories currently
              available across News File.
            </p>

            <div className="world-story-footer">
              <span>
                <MapPin size={13} />
                INDIA
              </span>

              <span>
                <Clock3 size={13} />
                NEWSROOM
              </span>
            </div>
          </motion.article>
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

          <Link to="/news" className="world-back-home">
            EXPLORE NEWS FILE
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default World;