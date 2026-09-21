import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="about-page relative overflow-hidden">
      <Navbar />

      <main>
        {/* =========================================
            ABOUT HERO
        ========================================= */}
        <section className="about-hero relative overflow-hidden">
          {/* Ambient Motion Background Blur */}
          <motion.div
            className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl opacity-40"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="about-hero-inner relative z-10">
            <motion.div
              className="about-hero-label"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              ABOUT NEWS FILE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Journalism
              <br />
              <strong>from the ground.</strong>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: "easeOut",
              }}
            >
              News File is built around verified reporting, regional voices
              and independent journalism from across India.
            </motion.p>
          </div>
        </section>

        {/* =========================================
            OUR MISSION
        ========================================= */}
        <section className="about-mission py-20">
          <div className="about-section-grid">
            <motion.div
              className="about-section-heading"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span>01 — OUR MISSION</span>

              <h2>
                Different languages.
                <br />
                <strong>One standard of truth.</strong>
              </h2>
            </motion.div>

            <motion.div
              className="about-section-copy"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <p>
                News File focuses on reporting that starts where stories are
                actually happening.
              </p>

              <p>
                Our approach brings together field reporting, regional updates
                and independent fact-checking to provide context beyond the
                headline.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            VALUES
        ========================================= */}
        <section className="about-values py-20">
          <div className="about-values-header">
            <span>02 — WHAT WE STAND FOR</span>

            <h2>
              Reporting with
              <br />
              <strong>purpose.</strong>
            </h2>
          </div>

          <motion.div
            className="about-values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="about-value-card" variants={cardVariants}>
              <ShieldCheck size={30} />
              <h3>Verification</h3>
              <p>
                Facts and developments are approached with verification and
                responsible sourcing.
              </p>
            </motion.div>

            <motion.div className="about-value-card" variants={cardVariants}>
              <Globe2 size={30} />
              <h3>Regional Voices</h3>
              <p>
                Stories from across India are connected with the wider national
                conversation.
              </p>
            </motion.div>

            <motion.div className="about-value-card" variants={cardVariants}>
              <Radio size={30} />
              <h3>Real-Time Reporting</h3>
              <p>
                Live broadcasts and field updates keep audiences connected to
                developing stories.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================
            LANGUAGES
        ========================================= */}
        <section className="about-languages py-20">
          <div className="about-languages-inner">
            <span>03 — OUR REACH</span>

            <h2>
              One newsroom.
              <br />
              <strong>Multiple languages.</strong>
            </h2>

            <motion.div
              className="about-language-list"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {["ENGLISH", "हिन्दी", "ಕನ್ನಡ"].map((lang, index) => (
                <motion.span
                  key={lang}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block cursor-default"
                >
                  {lang}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            CTA
        ========================================= */}
        <section className="about-cta py-24">
          <motion.div
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <span>NEWS FILE</span>

            <h2>
              Stay connected
              <br />
              to the story.
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6"
            >
              <Link to="/news" className="about-cta-button flex items-center gap-2">
                Explore all news
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;