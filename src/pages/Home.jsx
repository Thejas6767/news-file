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
import Footer from "../components/Footer";

import {
  KineticHeadline,
  MagneticButton,
  PerspectiveCard,
} from "../components/AnimationPrimitives";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app relative overflow-hidden">
      <Navbar />

      <main>
        {/* =========================================
            HERO SECTION
        ========================================= */}
        <section className="hero relative overflow-hidden">
          {/* Animated Ambient Light Orbs */}
          <motion.div
            className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl opacity-50"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-40"
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

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
          <div className="hero-content relative z-10 max-w-4xl w-full px-4 sm:px-6">
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
                delay: 0.3,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <span className="hero-live-dot" />
              BREAKING: Ground dispatches updated
            </motion.div>

            {/* Kinetic Text Animation Wrapper */}
            <div className="hero-headline-wrapper my-4">
              <KineticHeadline
                text="Different languages. One standard of truth."
                className="hero-headline-kinetic text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-red-600"
              />
            </div>

            <motion.p
              className="hero-description max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed mb-8"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              Verified real-time journalism from across India.
              Unfiltered field reporting and independent fact-checks
              in English, Hindi, and Kannada.
            </motion.p>

            <motion.div
              className="hero-actions flex flex-wrap items-center gap-4"
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
                ease: "easeOut",
              }}
            >
              {/* Magnetic Interactive Primary Button */}
              <MagneticButton
                className="hero-primary-button"
                onClick={() => navigate("/live")}
              >
                <span>Watch Live TV</span>
                <span className="button-icon">
                  <Play size={16} fill="currentColor" />
                </span>
              </MagneticButton>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link to="/news" className="hero-secondary-button flex items-center gap-1">
                  Explore News
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* =========================================
              LIVE STATUS CARD (3D Perspective Tilt)
          ========================================= */}
          <PerspectiveCard
            className="hero-live-card cursor-pointer"
            onClick={() => navigate("/live")}
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
              <span>National Evening Dispatch</span>
              <ArrowUpRight size={17} />
            </div>
          </PerspectiveCard>

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
              delay: 1.6,
              duration: 0.8,
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
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={17} />
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================
            LATEST NEWS & LIVE TV
        ========================================= */}
        <LatestNews />
        <LiveTV />

        {/* =========================================
            OUR METHODOLOGY
        ========================================= */}
        <section className="methodology-section relative overflow-hidden py-24">
          <div className="methodology-inner container mx-auto px-4">
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <span className="section-eyebrow">OUR METHODOLOGY</span>
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
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

        <Footer />
      </main>
    </div>
  );
}

// Fixed missing default export causing the Vite module loading error
export default Home;