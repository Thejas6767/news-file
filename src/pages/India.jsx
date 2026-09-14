import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Map,
  Landmark,
  Users,
  Shield,
  Radio,
} from "lucide-react";

import Navbar from "../components/Navbar";

const indiaStories = [
  {
    number: "01",
    category: "NATIONAL",
    title: "The stories shaping India beyond the daily headlines",
    description:
      "Politics, policy, society and the people whose stories define the country.",
  },
  {
    number: "02",
    category: "GOVERNANCE",
    title: "How decisions made in power corridors reach the ground",
    description:
      "Tracking policy decisions and their impact across communities and regions.",
  },
  {
    number: "03",
    category: "SOCIETY",
    title: "India's changing cities, communities and everyday lives",
    description:
      "Ground reports exploring how a rapidly changing India is being experienced.",
  },
  {
    number: "04",
    category: "DEVELOPMENT",
    title: "Infrastructure, technology and the next Indian decade",
    description:
      "The projects and ideas reshaping how India works, moves and grows.",
  },
];

const desks = [
  {
    icon: Landmark,
    title: "GOVERNANCE",
    description: "Policy, administration and the decisions shaping the nation.",
  },
  {
    icon: Users,
    title: "SOCIETY",
    description: "People, communities and the stories behind the statistics.",
  },
  {
    icon: Shield,
    title: "SECURITY",
    description: "National security, defence and developments across India.",
  },
  {
    icon: Map,
    title: "GROUND REPORTS",
    description: "Stories reported directly from cities, towns and districts.",
  },
];

function India() {
  return (
    <>
      <Navbar />

      <main className="india-page">

        {/* HERO */}

        <section className="india-hero">
          <div className="india-map-pattern"></div>

          <div className="india-hero-orbit"></div>

          <motion.div
            className="india-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="india-eyebrow">
              <Radio size={15} />
              NEWS FILE NATIONAL BUREAU
            </div>

            <h1>
              One country.
              <br />
              <span>Many stories.</span>
            </h1>

            <p>
              From the capital to the smallest district, News File follows the
              people, decisions and events shaping India.
            </p>

            <div className="india-hero-meta">
              <span>28 STATES</span>
              <span>•</span>
              <span>8 UNION TERRITORIES</span>
              <span>•</span>
              <span>ONE NEWSROOM</span>
            </div>
          </motion.div>

          <motion.div
            className="india-hero-mark"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            INDIA
          </motion.div>

          <div className="india-page-number">05</div>
        </section>

        {/* NATIONAL SNAPSHOT */}

        <section className="india-snapshot">

          <div className="desk-label">
            <span>01</span>
            NATIONAL SNAPSHOT
          </div>

          <div className="snapshot-grid">

            <motion.div
              className="snapshot-main"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="snapshot-image">
                <div className="snapshot-overlay"></div>

                <span>GROUND REPORT</span>

                <strong>INDIA</strong>
              </div>
            </motion.div>

            <motion.div
              className="snapshot-copy"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="story-meta">
                <span>NATIONAL</span>
                <span>NEWS FILE</span>
              </div>

              <h2>
                The country is bigger
                <br />
                than the <em>headline.</em>
              </h2>

              <p>
                India's national story is being written across thousands of
                places at the same time.
              </p>

              <p>
                Our national desk connects those stories — bringing together
                politics, governance, society, security and development from
                across the country.
              </p>

              <button className="india-read-button">
                READ NATIONAL REPORT
                <ArrowUpRight size={18} />
              </button>
            </motion.div>

          </div>
        </section>

        {/* STORIES */}

        <section className="india-stories">

          <div className="india-heading">
            <div>
              <div className="desk-label">
                <span>02</span>
                INDIA REPORTS
              </div>

              <h2>
                Beyond the
                <br />
                <em>capital.</em>
              </h2>
            </div>

            <p>
              National stories reported with context, verification and a
              ground-level perspective.
            </p>
          </div>

          <div className="india-story-grid">

            {indiaStories.map((story, index) => (
              <motion.article
                className="india-story-card"
                key={story.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="india-story-top">
                  <span>{story.number}</span>
                  <span>{story.category}</span>
                </div>

                <h3>{story.title}</h3>

                <p>{story.description}</p>

                <button>
                  READ REPORT
                  <ArrowUpRight size={17} />
                </button>

                <div className="india-card-line"></div>
              </motion.article>
            ))}

          </div>
        </section>

        {/* DESKS */}

        <section className="india-desks">

          <div className="desk-label">
            <span>03</span>
            NATIONAL DESKS
          </div>

          <h2>
            India,
            <br />
            <em>reported.</em>
          </h2>

          <div className="india-desk-grid">

            {desks.map((desk, index) => {
              const Icon = desk.icon;

              return (
                <motion.div
                  className="india-desk-card"
                  key={desk.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="india-desk-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <span>0{index + 1}</span>

                  <h3>{desk.title}</h3>

                  <p>{desk.description}</p>

                  <ArrowUpRight className="india-desk-arrow" size={20} />
                </motion.div>
              );
            })}

          </div>
        </section>

        {/* CLOSING */}

        <section className="india-closing">

          <div className="india-closing-bg">
            INDIA
          </div>

          <motion.div
            className="india-closing-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>NEWS FILE / NATIONAL BUREAU</span>

            <h2>
              Every region
              <br />
              has a story.
            </h2>

            <p>
              We go beyond the obvious to find the stories that matter.
            </p>

            <button>
              EXPLORE ALL INDIA NEWS
              <ArrowUpRight size={18} />
            </button>
          </motion.div>

        </section>

      </main>
    </>
  );
}

export default India;