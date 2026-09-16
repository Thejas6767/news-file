import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Radio,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import LatestNews from "../components/LatestNews";
import LiveTV from "../components/LiveTV";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">

      <Navbar />

      <main>

        {/* =========================================
            HERO SECTION
        ========================================= */}

        <section className="hero">

          {/* Background image */}

          <motion.div
            className="hero-background"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Dark overlay */}

          <div className="hero-overlay" />


          {/* Hero content */}

          <div className="hero-content">

            <motion.div
              className="hero-kicker"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
            >

              <span className="hero-live-dot" />

              BREAKING: Ground dispatches updated

            </motion.div>


            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              Different languages.
              <br />

              <span>One standard of truth.</span>

            </motion.h1>


            <motion.p
              className="hero-description"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
            >

              Verified real-time journalism from across India.
              Unfiltered field reporting and independent fact-checks
              in English, Hindi, and Kannada.

            </motion.p>


            <motion.div
              className="hero-actions"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.7,
              }}
            >

              <button
                className="hero-primary-button"
                onClick={() => navigate("/live")}
              >

                <span>
                  Watch Live TV
                </span>

                <span className="button-icon">
                  <Play size={16} fill="currentColor" />
                </span>

              </button>


              <Link
                to="/news"
                className="hero-secondary-button"
              >
                Explore News
                <ArrowUpRight size={17} />
              </Link>

            </motion.div>

          </div>


          {/* =========================================
              LIVE STATUS CARD
          ========================================= */}

          <motion.div
            className="hero-live-card"
            onClick={() => navigate("/live")}
            style={{ cursor: "pointer" }}
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
          >

            <div className="live-card-top">

              <div className="live-card-status">

                <span />

                STREAMING NOW

              </div>

              <Radio size={17} />

            </div>


            <div className="live-card-content">

              <p>24/7 BROADCAST</p>

              <h3>
                Live from
                <br />
                the field.
              </h3>

            </div>


            <div className="live-card-bottom">

              <span>
                National Evening Dispatch
              </span>

              <ArrowUpRight size={17} />

            </div>

          </motion.div>


          {/* =========================================
              SCROLL INDICATOR
          ========================================= */}

          <motion.div
            className="hero-scroll"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2,
            }}
          >

            <span>SCROLL TO EXPLORE</span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ChevronDown size={17} />
            </motion.div>

          </motion.div>

        </section>


        {/* =========================================
            LATEST NEWS
        ========================================= */}

        <LatestNews />


        {/* =========================================
            LIVE TV
        ========================================= */}

        <LiveTV />


        {/* =========================================
            OUR METHODOLOGY
        ========================================= */}

        <section className="methodology-section">

          <div className="methodology-inner">

            <motion.div
              className="methodology-heading"
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <span className="section-eyebrow">
                OUR METHODOLOGY
              </span>

              <h2>
                Unbiased regional
                <br />
                <strong>dispatches.</strong>
              </h2>

            </motion.div>


            <motion.div
              className="methodology-content"
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >

              <p>
                News File focuses on verified ground reporting,
                bringing regional developments and independent
                fact-checks together with context from the field.
              </p>

              <p>
                Our reporting process is built around verification,
                responsible journalism and clear sourcing, helping
                readers understand what is happening beyond the
                headlines.
              </p>

            </motion.div>

          </div>

        </section>


        {/* =========================================
            FOOTER
        ========================================= */}

        <footer className="news-footer">

          <div className="news-footer-inner">

            <div className="news-footer-brand">

              <h2>
                News File
              </h2>

              <p>
                Verified ground reporting.
                <br />
                Independent journalism from across India.
              </p>

            </div>


            <div className="news-footer-links">

              <div className="news-footer-column">

                <span>
                  SECTIONS
                </span>

                <Link to="/news">
                  All News
                </Link>

                <Link to="/live">
                  Live TV
                </Link>

                <Link to="/politics">
                  Politics
                </Link>

                <Link to="/business">
                  Business
                </Link>

                <Link to="/india">
                  India
                </Link>

                <Link to="/world">
                  World
                </Link>

                <Link to="/fact-check">
                  Fact Check
                </Link>

              </div>


              <div className="news-footer-column">

                <span>
                  NEWSROOM
                </span>

                <a href="mailto:newsroom@newsfileindia.com">
                  newsroom@newsfileindia.com
                </a>

                <p>
                  New Delhi, India
                </p>

              </div>

            </div>

          </div>


          <div className="news-footer-bottom">

            <span>
              © 2026 News File. All rights reserved.
            </span>

            <span>
              Verified. Independent. Grounded.
            </span>

          </div>

        </footer>

      </main>

    </div>
  );
}

export default Home;