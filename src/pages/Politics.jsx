import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  ChevronDown,
} from "lucide-react";

import Navbar from "../components/Navbar";
import { politicsStories } from "../data/newsData";

function Politics() {
  return (
    <div className="page">

      <Navbar />

      <main>

        {/* =====================================
            POLITICS HERO
        ===================================== */}

        <section className="politics-hero">

          <div className="politics-hero-inner">

            <motion.div
              className="politics-hero-label"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span />
              POLITICS DESK
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Power.
              <br />
              <span>Politics.</span>
              <br />
              People.
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
            >
              Political developments, decisions and voices
              shaping India — reported from the ground.
            </motion.p>

          </div>


          <motion.div
            className="politics-hero-number"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            04
          </motion.div>


          <motion.div
            className="politics-scroll"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <span>EXPLORE STORIES</span>
            <ChevronDown size={16} />
          </motion.div>

        </section>


        {/* =====================================
            FEATURED POLITICS
        ===================================== */}

        <section className="politics-featured">

          <motion.div
            className="politics-featured-image"
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
            }}
          >

            <img
              src={politicsStories[0].image}
              alt={politicsStories[0].title}
            />

            <div className="politics-featured-overlay" />

            <span className="featured-tag">
              TOP STORY
            </span>

          </motion.div>


          <motion.div
            className="politics-featured-content"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span className="story-category">
              POLITICS
            </span>

            <div className="story-time">
              <Clock3 size={12} />
              {politicsStories[0].time}
            </div>

            <h2>
              {politicsStories[0].title}
            </h2>

            <p>
              {politicsStories[0].description}
            </p>

            <button className="read-report-button">
              Read full report
              <ArrowUpRight size={18} />
            </button>

          </motion.div>

        </section>


        {/* =====================================
            LATEST POLITICS
        ===================================== */}

        <section className="politics-latest">

          <motion.div
            className="politics-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <span>
              04 — LATEST POLITICS
            </span>

            <h2>
              The political
              <br />
              pulse.
            </h2>
          </motion.div>


          <div className="politics-story-grid">

            {politicsStories.slice(1).map(
              (story, index) => (

                <motion.article
                  className="politics-story-card"
                  key={story.id}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                >

                  <div className="politics-card-image">

                    <img
                      src={story.image}
                      alt={story.title}
                    />

                    <motion.div
                      className="politics-card-arrow"
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>

                  </div>


                  <div className="politics-card-content">

                    <div className="story-time">
                      <Clock3 size={11} />
                      {story.time}
                    </div>

                    <h3>
                      {story.title}
                    </h3>

                    <button>
                      Read report
                      <ArrowUpRight size={14} />
                    </button>

                  </div>

                </motion.article>

              )
            )}

          </div>

        </section>


        {/* =====================================
            POLITICAL ANALYSIS
        ===================================== */}

        <section className="analysis-section">

          <motion.div
            className="analysis-content"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <span>
              NEWS FILE ANALYSIS
            </span>

            <h2>
              Beyond the
              <br />
              headline.
            </h2>

            <p>
              Politics is more than what happens inside
              a chamber. We follow the decisions, the
              people and the consequences that reach
              communities on the ground.
            </p>

            <button>
              Explore analysis
              <ArrowUpRight size={17} />
            </button>

          </motion.div>


          <div className="analysis-mark">
            N/F
          </div>

        </section>

      </main>

    </div>
  );
}

export default Politics;