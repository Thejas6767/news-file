import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Building2,
  IndianRupee,
  Globe2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const marketData = [
  { name: "NIFTY 50", value: "25,458.40", change: "+0.82%" },
  { name: "SENSEX", value: "83,216.14", change: "+0.74%" },
  { name: "BANK NIFTY", value: "57,942.80", change: "+0.61%" },
  { name: "USD / INR", value: "87.18", change: "+0.12%" },
];

const businessStories = [
  {
    category: "ECONOMY",
    title: "India's growth story enters a new phase as businesses adapt to a changing economy",
    description:
      "From infrastructure and manufacturing to consumer demand, the forces reshaping India's economic landscape.",
    number: "01",
  },
  {
    category: "MARKETS",
    title: "Investors watch earnings, global signals and domestic demand",
    description:
      "Markets remain focused on corporate performance and the signals emerging from the wider economy.",
    number: "02",
  },
  {
    category: "COMPANIES",
    title: "Indian companies accelerate their next wave of expansion",
    description:
      "Businesses across sectors are reassessing investment, technology and long-term growth strategies.",
    number: "03",
  },
];

const sectors = [
  {
    icon: Building2,
    title: "COMPANIES",
    text: "Corporate moves, leadership changes and business strategy.",
  },
  {
    icon: BarChart3,
    title: "MARKETS",
    text: "Stocks, indices and the signals moving investor sentiment.",
  },
  {
    icon: IndianRupee,
    title: "ECONOMY",
    text: "Policy, inflation, growth and the real economy.",
  },
  {
    icon: Globe2,
    title: "GLOBAL",
    text: "International developments shaping India's businesses.",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Business() {
  return (
    <>
      <Navbar />

      <main className="business-page">

        {/* HERO SECTION */}

        <section className="business-hero">
          <div className="business-grid"></div>

          <motion.div
            className="business-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          <div className="business-hero-content">
            <motion.div
              className="business-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TrendingUp size={15} />
              NEWS FILE BUSINESS DESK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Money.
              <br />
              <span>Markets. Meaning.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Business journalism beyond the numbers — tracking the economy,
              companies, markets and the decisions shaping India's future.
            </motion.p>

            <motion.div
              className="business-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{
                opacity: { delay: 0.7, duration: 0.5 },
                y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              EXPLORE BUSINESS
              <span></span>
            </motion.div>
          </div>

          <motion.div
            className="business-hero-index"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span>05</span>
            BUSINESS
          </motion.div>
        </section>

        {/* MARKET SNAPSHOT */}

        <section className="market-section">
          <motion.div
            className="market-top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="desk-label">
              <span>01</span>
              MARKET SNAPSHOT
            </div>

            <div className="market-status">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              MARKET DATA
            </div>
          </motion.div>

          <motion.div
            className="market-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {marketData.map((item) => (
              <motion.div
                className="market-card"
                key={item.name}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(215, 25, 32, 0.4)",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="market-card-name">{item.name}</div>

                <div className="market-card-value">{item.value}</div>

                <div className="market-card-bottom">
                  <span className="market-up">{item.change}</span>

                  <div className="market-bars">
                    {[20, 35, 25, 50, 42, 65, 58, 80].map((height, i) => (
                      <motion.i
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + i * 0.04,
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* LEAD STORY / BUSINESS INTELLIGENCE */}

        <section className="business-lead">
          <motion.div
            className="desk-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span>02</span>
            BUSINESS INTELLIGENCE
          </motion.div>

          <div className="business-lead-grid">
            <motion.div
              className="business-lead-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="visual-grid"></div>

              <motion.div
                className="visual-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              <div className="visual-label">
                <span>FIELD</span>
                <strong>REPORT</strong>
              </div>

              <motion.div
                className="visual-data"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span>ECONOMIC SIGNAL</span>
                <strong>+08.2%</strong>
              </motion.div>
            </motion.div>

            <motion.article
              className="business-lead-story"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="story-meta">
                <span>ECONOMY</span>
                <span>08 MIN READ</span>
              </div>

              <h2>
                The numbers tell a story.
                <br />
                <em>The ground tells the rest.</em>
              </h2>

              <p>
                Economic indicators can reveal where a country is heading,
                but understanding what those numbers mean requires looking
                beyond the spreadsheet.
              </p>

              <p>
                Our business desk follows the people, companies and decisions
                behind the data — connecting market movements with the
                everyday economy.
              </p>

              <motion.button
                className="business-read"
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                READ FULL REPORT
              </motion.button>
            </motion.article>
          </div>
        </section>

        {/* LATEST BUSINESS STORIES */}

        <section className="business-stories">
          <motion.div
            className="business-stories-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <div className="desk-label">
                <span>03</span>
                LATEST BUSINESS
              </div>

              <h2>
                What moves
                <br />
                <em>India.</em>
              </h2>
            </div>

            <p>
              The companies, markets and economic developments that deserve
              your attention.
            </p>
          </motion.div>

          <motion.div
            className="business-story-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {businessStories.map((story) => (
              <motion.article
                className="business-story"
                key={story.number}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="business-story-number">{story.number}</div>

                <div className="business-story-content">
                  <div className="story-meta">
                    <span>{story.category}</span>
                    <span>NEWS FILE</span>
                  </div>

                  <h3>{story.title}</h3>

                  <p>{story.description}</p>

                  <button>
                    READ REPORT
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* SECTORS */}

        <section className="business-sectors">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="desk-label">
              <span>04</span>
              BUSINESS DESK
            </div>

            <h2>
              Follow the
              <br />
              <em>signal.</em>
            </h2>
          </motion.div>

          <motion.div
            className="sector-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <motion.div
                  className="sector-card"
                  key={sector.title}
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    borderColor: "rgba(215, 25, 32, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="sector-icon"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={23} />
                  </motion.div>

                  <h3>{sector.title}</h3>

                  <p>{sector.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* CTA SECTION */}

        <section className="business-cta">
          <motion.div
            className="business-cta-inner"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>NEWS FILE BUSINESS</span>

            <h2>
              Understand
              <br />
              what moves.
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              EXPLORE ALL BUSINESS
            </motion.button>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default Business;