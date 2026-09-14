import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Play,
  Radio,
  Signal,
  Volume2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const schedule = [
  {
    time: "04:00 PM",
    title: "News File Live",
    description: "Top stories and breaking developments from across India.",
    live: true,
  },
  {
    time: "05:00 PM",
    title: "India Desk",
    description: "The latest reports, developments and ground updates.",
  },
  {
    time: "06:00 PM",
    title: "World Tonight",
    description: "International developments shaping the global conversation.",
  },
  {
    time: "07:00 PM",
    title: "Prime News",
    description: "The day's biggest stories brought together in one broadcast.",
  },
];

const liveStories = [
  {
    number: "01",
    category: "BREAKING",
    title: "Ground reports continue to develop across India",
    time: "LIVE NOW",
  },
  {
    number: "02",
    category: "POLITICS",
    title: "Political developments remain in focus",
    time: "UPDATED 4 MIN AGO",
  },
  {
    number: "03",
    category: "BUSINESS",
    title: "Markets respond to fresh economic signals",
    time: "UPDATED 11 MIN AGO",
  },
];

function LiveTV() {
  return (
    <div className="live-tv-page">
      <Navbar />

      {/* =========================================
          LIVE HERO
      ========================================= */}

      <section className="live-tv-hero">
        <div className="live-tv-grid" />

        <div className="live-tv-orbit live-tv-orbit-one" />
        <div className="live-tv-orbit live-tv-orbit-two" />

        <motion.div
          className="live-tv-hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="live-tv-eyebrow">
            <span className="live-tv-pulse" />
            NEWS FILE / BROADCAST
          </div>

          <h1>
            LIVE
            <span>TV.</span>
          </h1>

          <p>
            Watch News File's live newsroom for breaking stories, ground
            reports and verified developments as they happen.
          </p>

          <div className="live-tv-status">
            <Signal size={16} />
            LIVE SIGNAL ACTIVE
          </div>
        </motion.div>

        <div className="live-tv-number">03</div>

        <div className="live-tv-scroll">
          <span />
          SCROLL TO BROADCAST
        </div>
      </section>

      {/* =========================================
          PLAYER
      ========================================= */}

      <section className="live-tv-player-section">
        <div className="live-tv-section-label">
          <span>01</span>
          LIVE BROADCAST
        </div>

        <motion.div
          className="live-tv-player"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="live-tv-player-grid" />

          <div className="live-tv-player-top">
            <div className="live-tv-on-air">
              <span />
              ON AIR
            </div>

            <div className="live-tv-player-channel">
              NEWS FILE 01
            </div>
          </div>

          <div className="live-tv-player-center">
            <motion.button
              className="live-tv-play"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Play live broadcast"
            >
              <Play size={30} fill="currentColor" />
            </motion.button>

            <div className="live-tv-player-title">
              NEWS FILE
              <strong>LIVE</strong>
            </div>

            <p>
              Your live newsroom. Independent reporting. No noise.
            </p>
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
          <div>
            <div className="live-tv-section-label">
              <span>02</span>
              BROADCAST SCHEDULE
            </div>

            <h2>
              WHAT'S
              <br />
              <strong>ON AIR.</strong>
            </h2>
          </div>

          <div className="live-tv-date">
            <CalendarDays size={18} />
            TODAY
          </div>
        </div>

        <div className="live-tv-schedule-list">
          {schedule.map((item, index) => (
            <motion.div
              key={item.title}
              className={`live-tv-schedule-row ${
                item.live ? "active" : ""
              }`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="live-tv-time">
                {item.live && <span />}
                {item.time}
              </div>

              <div className="live-tv-program">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="live-tv-program-status">
                {item.live ? (
                  <>
                    <Radio size={15} />
                    LIVE
                  </>
                ) : (
                  "UP NEXT"
                )}
              </div>

              <ArrowUpRight size={19} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          LIVE DESK
      ========================================= */}

      <section className="live-tv-desk">
        <div className="live-tv-desk-header">
          <div className="live-tv-section-label">
            <span>03</span>
            LIVE DESK
          </div>

          <div className="live-tv-desk-status">
            <span />
            REPORTERS IN THE FIELD
          </div>
        </div>

        <div className="live-tv-story-grid">
          {liveStories.map((story, index) => (
            <motion.article
              key={story.number}
              className="live-tv-story-card"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
            >
              <div className="live-tv-story-top">
                <span>{story.number}</span>
                <span>{story.category}</span>
              </div>

              <div className="live-tv-story-line" />

              <h3>{story.title}</h3>

              <div className="live-tv-story-footer">
                <span>
                  <Clock3 size={13} />
                  {story.time}
                </span>

                <ArrowUpRight size={17} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="live-tv-closing">
        <div className="live-tv-closing-bg">
          LIVE
        </div>

        <div className="live-tv-closing-content">
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

          <Link
            to="/"
            className="live-tv-home-button"
          >
            BACK TO HOME
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LiveTV;