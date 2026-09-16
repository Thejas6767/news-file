import { motion } from "framer-motion";
import {
  ArrowUpRight,
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

function Business() {
  return (
    <>
      <Navbar />

      <main className="business-page">

        {/* HERO */}

        <section className="business-hero">
          <div className="business-grid"></div>

          <div className="business-glow"></div>

          <motion.div
            className="business-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="business-eyebrow">
              <TrendingUp size={15} />
              NEWS FILE BUSINESS DESK
            </div>

            <h1>
              Money.
              <br />
              <span>Markets. Meaning.</span>
            </h1>

            <p>
              Business journalism beyond the numbers — tracking the economy,
              companies, markets and the decisions shaping India's future.
            </p>

            <motion.div
              className="business-scroll"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              EXPLORE BUSINESS
              <span></span>
            </motion.div>
          </motion.div>

          <div className="business-hero-index">
            <span>05</span>
            BUSINESS
          </div>
        </section>

        {/* MARKET TICKER */}

        <section className="market-section">

          <div className="market-top">
            <div className="desk-label">
              <span>01</span>
              MARKET SNAPSHOT
            </div>

            <div className="market-status">
              <span></span>
              MARKET DATA
            </div>
          </div>

          <div className="market-grid">

            {marketData.map((item, index) => (
              <motion.div
                className="market-card"
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="market-card-name">
                  {item.name}
                </div>

                <div className="market-card-value">
                  {item.value}
                </div>

                <div className="market-card-bottom">
                  <span className="market-up">
                    {item.change}
                  </span>

                  <div className="market-bars">
                    {[20, 35, 25, 50, 42, 65, 58, 80].map(
                      (height, i) => (
                        <motion.i
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.4 + i * 0.05,
                            duration: 0.5,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* LEAD STORY */}

        <section className="business-lead">

          <div className="desk-label">
            <span>02</span>
            BUSINESS INTELLIGENCE
          </div>

          <div className="business-lead-grid">

            <motion.div
              className="business-lead-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="visual-grid"></div>

              <div className="visual-circle"></div>

              <div className="visual-label">
                <span>FIELD</span>
                <strong>REPORT</strong>
              </div>

              <div className="visual-data">
                <span>ECONOMIC SIGNAL</span>
                <strong>+08.2%</strong>
              </div>
            </motion.div>

            <motion.article
              className="business-lead-story"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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

              <button className="business-read">
                READ FULL REPORT
                <ArrowUpRight size={18} />
              </button>
            </motion.article>

          </div>
        </section>

        {/* STORIES */}

        <section className="business-stories">

          <div className="business-stories-heading">
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
          </div>

          <div className="business-story-list">

            {businessStories.map((story, index) => (
              <motion.article
                className="business-story"
                key={story.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ x: 8 }}
              >
                <div className="business-story-number">
                  {story.number}
                </div>

                <div className="business-story-content">

                  <div className="story-meta">
                    <span>{story.category}</span>
                    <span>NEWS FILE</span>
                  </div>

                  <h3>{story.title}</h3>

                  <p>{story.description}</p>

                  <button>
                    READ REPORT
                    <ArrowUpRight size={17} />
                  </button>

                </div>

                <div className="story-arrow">
                  <ArrowUpRight size={25} />
                </div>

              </motion.article>
            ))}

          </div>
        </section>

        {/* SECTORS */}

        <section className="business-sectors">

          <div className="desk-label">
            <span>04</span>
            BUSINESS DESK
          </div>

          <h2>
            Follow the
            <br />
            <em>signal.</em>
          </h2>

          <div className="sector-grid">

            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <motion.div
                  className="sector-card"
                  key={sector.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >
                  <div className="sector-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{sector.title}</h3>

                  <p>{sector.text}</p>

                  <ArrowUpRight className="sector-arrow" size={20} />
                </motion.div>
              );
            })}

          </div>
        </section>

        {/* CTA */}

        <section className="business-cta">

          <motion.div
            className="business-cta-inner"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>NEWS FILE BUSINESS</span>

            <h2>
              Understand
              <br />
              what moves.
            </h2>

            <button>
              EXPLORE ALL BUSINESS
              <ArrowUpRight size={18} />
            </button>
          </motion.div>

        </section>

      </main>
      <Footer />
    </>
  );
}

export default Business;