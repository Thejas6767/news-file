import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Play,
  Radio,
  Signal,
  Volume2,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const liveStories = [
  {
    number: "01",
    category: "POLITICS",
    title: "Karnataka assembly updates",
    time: "TOP STORY",
  },
  {
    number: "02",
    category: "BUSINESS",
    title: "Regional energy transition",
    time: "TOP STORY",
  },
  {
    number: "03",
    category: "FACT CHECK",
    title: "Verifying viral claims",
    time: "TOP STORY",
  },
];

/* Animation Variants */
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroTitleVariants = {
  hidden: { opacity: 0, scale: 0.9, letterSpacing: "-0.05em" },
  visible: {
    opacity: 1,
    scale: 1,
    letterSpacing: "0em",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const storyGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const storyCardVariants = {
  hidden: { opacity: 0, rotateX: 25, y: 40 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

function LiveTV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="live-tv-page" style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* =========================================
          LIVE HERO
      ========================================= */}
      <section className="live-tv-hero">
        <div className="live-tv-grid" />

        {/* Orbit animations */}
        <motion.div
          className="live-tv-orbit live-tv-orbit-one"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="live-tv-orbit live-tv-orbit-two"
          animate={{ rotate: -360, scale: [1, 0.95, 1] }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="live-tv-hero-content"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="live-tv-eyebrow" variants={heroItemVariants}>
            <motion.span
              className="live-tv-pulse"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            NEWS FILE / BROADCAST
          </motion.div>

          <motion.h1 variants={heroTitleVariants}>
            LIVE
            <span>TV.</span>
          </motion.h1>

          <motion.p variants={heroItemVariants}>
            Watch News File's live newsroom for breaking stories, ground
            reports and verified developments as they happen.
          </motion.p>

          <motion.div
            className="live-tv-status"
            variants={heroItemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Signal size={16} />
            </motion.div>
            LIVE SIGNAL ACTIVE
          </motion.div>
        </motion.div>

        <motion.div
          className="live-tv-number"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          03
        </motion.div>

        <motion.div
          className="live-tv-scroll"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          SCROLL TO BROADCAST
        </motion.div>
      </section>

      {/* =========================================
          PLAYER
      ========================================= */}
      <section className="live-tv-player-section">
        <motion.div
          className="live-tv-section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>01</span>
          LIVE BROADCAST
        </motion.div>

        <motion.div
          className="live-tv-player"
          initial={{ opacity: 0, perspective: 1000, rotateX: -15, y: 60 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="live-tv-player-grid" />

          <div className="live-tv-player-top">
            <motion.div
              className="live-tv-on-air"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span />
              ON AIR
            </motion.div>

            <div className="live-tv-player-channel">NEWS FILE 01</div>
          </div>

          <div className="live-tv-player-center">
            <motion.button
              className="live-tv-play"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 35px rgba(215, 25, 32, 0.6)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              aria-label="Play live broadcast"
            >
              <Play size={30} fill="currentColor" />
            </motion.button>

            <motion.div
              className="live-tv-player-title"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              NEWS FILE
              <strong>LIVE</strong>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your live newsroom. Independent reporting. No noise.
            </motion.p>
          </div>

          <div className="live-tv-player-bottom">
            <span>
              <Volume2 size={15} />
              AUDIO
            </span>

            <span>00:00 LIVE</span>

            <span>HD</span>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SCHEDULE
      ========================================= */}
      <section className="live-tv-schedule">
        <div className="live-tv-schedule-header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="live-tv-section-label">
              <span>02</span>
              NEWS FILE LIVE
            </div>

            <h2>
              LIVE
              <br />
              <strong>FROM THE FIELD.</strong>
            </h2>
          </motion.div>

          <motion.div
            className="live-tv-date"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Radio size={18} />
            24/7 BROADCAST
          </motion.div>
        </div>

        <div className="live-tv-schedule-list">
          <motion.div
            className="live-tv-schedule-row active"
            initial={{ opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ x: 8 }}
          >
            <div className="live-tv-time">
              <span />
              LIVE
            </div>

            <div className="live-tv-program">
              <h3>National Evening Dispatch</h3>
              <p>
                Continuous live broadcast with regional updates, state bureaus
                and prime-time debates.
              </p>
            </div>

            <div className="live-tv-program-status">
              <Radio size={15} />
              LIVE
            </div>

            <motion.div
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowUpRight size={19} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          LIVE DESK
      ========================================= */}
      <section className="live-tv-desk">
        <div className="live-tv-desk-header">
          <motion.div
            className="live-tv-section-label"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>03</span>
            TOP STORIES TODAY
          </motion.div>

          <div className="live-tv-desk-status">
            <span />
            NEWS FILE
          </div>
        </div>

        <motion.div
          className="live-tv-story-grid"
          variants={storyGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {liveStories.map((story) => (
            <motion.article
              key={story.number}
              className="live-tv-story-card"
              variants={storyCardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: "rgba(215, 25, 32, 0.6)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="live-tv-story-top">
                <span>{story.number}</span>
                <span>{story.category}</span>
              </div>

              <motion.div
                className="live-tv-story-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: "left" }}
              />

              <h3>{story.title}</h3>

              <div className="live-tv-story-footer">
                <span>
                  <Clock3 size={13} />
                  {story.time}
                </span>

                <motion.div whileHover={{ rotate: 45 }}>
                  <ArrowUpRight size={17} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* =========================================
          CLOSING
      ========================================= */}
      <section className="live-tv-closing">
        <motion.div
          className="live-tv-closing-bg"
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          LIVE
        </motion.div>

        <motion.div
          className="live-tv-closing-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>NEWS FILE BROADCAST</span>

          <h2>
            SEE IT.
            <br />
            <strong>AS IT HAPPENS.</strong>
          </h2>

          <p>
            Stay connected to the newsroom with live reporting from India and
            around the world.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <Link to="/" className="live-tv-home-button">
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

export default LiveTV;