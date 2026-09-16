import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about-page">

      <Navbar />

      <main>

        {/* =========================================
            ABOUT HERO
        ========================================= */}

        <section className="about-hero">

          <div className="about-hero-inner">

            <motion.div
              className="about-hero-label"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              ABOUT NEWS FILE
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
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
              }}
            >
              News File is built around verified reporting,
              regional voices and independent journalism
              from across India.
            </motion.p>

          </div>

        </section>


        {/* =========================================
            OUR MISSION
        ========================================= */}

        <section className="about-mission">

          <div className="about-section-grid">

            <motion.div
              className="about-section-heading"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{ duration: 0.8 }}
            >
              <span>
                01 — OUR MISSION
              </span>

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
              }}
            >

              <p>
                News File focuses on reporting that starts
                where stories are actually happening.
              </p>

              <p>
                Our approach brings together field reporting,
                regional updates and independent fact-checking
                to provide context beyond the headline.
              </p>

            </motion.div>

          </div>

        </section>


        {/* =========================================
            VALUES
        ========================================= */}

        <section className="about-values">

          <div className="about-values-header">

            <span>
              02 — WHAT WE STAND FOR
            </span>

            <h2>
              Reporting with
              <br />
              <strong>purpose.</strong>
            </h2>

          </div>


          <div className="about-values-grid">

            <motion.div
              className="about-value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.6 }}
            >

              <ShieldCheck size={30} />

              <h3>
                Verification
              </h3>

              <p>
                Facts and developments are approached
                with verification and responsible sourcing.
              </p>

            </motion.div>


            <motion.div
              className="about-value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >

              <Globe2 size={30} />

              <h3>
                Regional Voices
              </h3>

              <p>
                Stories from across India are connected
                with the wider national conversation.
              </p>

            </motion.div>


            <motion.div
              className="about-value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >

              <Radio size={30} />

              <h3>
                Real-Time Reporting
              </h3>

              <p>
                Live broadcasts and field updates keep
                audiences connected to developing stories.
              </p>

            </motion.div>

          </div>

        </section>


        {/* =========================================
            LANGUAGES
        ========================================= */}

        <section className="about-languages">

          <div className="about-languages-inner">

            <span>
              03 — OUR REACH
            </span>

            <h2>
              One newsroom.
              <br />
              <strong>Multiple languages.</strong>
            </h2>

            <div className="about-language-list">

              <span>ENGLISH</span>
              <span>हिन्दी</span>
              <span>ಕನ್ನಡ</span>

            </div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="about-cta">

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
            }}
          >

            <span>
              NEWS FILE
            </span>

            <h2>
              Stay connected
              <br />
              to the story.
            </h2>

            <Link
              to="/news"
              className="about-cta-button"
            >
              Explore all news
              <ArrowUpRight size={18} />
            </Link>

          </motion.div>

        </section>

      </main>
 <Footer />
    </div>
  );
}

export default About;