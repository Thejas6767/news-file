import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Radio,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
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

              VERIFIED GROUND REPORTING

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

<button
  className="hero-secondary-button"
  onClick={() => navigate("/news")}
>

                Explore News

                <ArrowUpRight size={17} />

              </button>

            </motion.div>

          </div>


          {/* =========================================
              LIVE STATUS CARD
          ========================================= */}

          <motion.div
            className="hero-live-card"
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

<LatestNews />
<LiveTV />

      </main>

    </div>
  );
}

export default Home;