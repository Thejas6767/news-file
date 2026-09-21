import { useState } from "react";
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
import Footer from "../components/Footer";

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

// High-end Editorial Motion Curve
const editorialEase = [0.25, 1, 0.5, 1];

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: editorialEase,
    },
  },
};

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: editorialEase,
    },
  },
};

function India() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <>
      <Navbar />

      <main className="india-page" style={{ overflow: "hidden" }}>
        {/* HERO SECTION */}
        <section className="india-hero">
          <div className="india-map-pattern" />
          <div className="india-hero-orbit" />

          <motion.div
            className="india-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="india-eyebrow" variants={fadeUp}>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-flex" }}
              >
                <Radio size={15} />
              </motion.div>
              NEWS FILE NATIONAL BUREAU
            </motion.div>

            <motion.h1 variants={fadeUp}>
              One country.
              <br />
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1, delay: 0.5, ease: editorialEase }}
              >
                Many stories.
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              From the capital to the smallest district, News File follows the
              people, decisions and events shaping India.
            </motion.p>

            <motion.div className="india-hero-meta" variants={fadeUp}>
              <span>28 STATES</span>
              <span>•</span>
              <span>8 UNION TERRITORIES</span>
              <span>•</span>
              <span>ONE NEWSROOM</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="india-hero-mark"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 0.08, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: editorialEase }}
          >
            INDIA
          </motion.div>

          <motion.div
            className="india-page-number"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            05
          </motion.div>
        </section>

        {/* NATIONAL SNAPSHOT SECTION */}
        <section className="india-snapshot">
          <motion.div
            className="desk-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span>01</span>
            NATIONAL SNAPSHOT
          </motion.div>

          <div className="snapshot-grid">
            <motion.div
              className="snapshot-main"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleReveal}
              whileHover="hover"
            >
              <div className="snapshot-image" style={{ overflow: "hidden" }}>
                <motion.div
                  className="snapshot-overlay"
                  variants={{
                    hover: { scale: 1.05 },
                  }}
                  transition={{ duration: 0.8, ease: editorialEase }}
                />
                <span>GROUND REPORT</span>
                <strong>INDIA</strong>
              </div>
            </motion.div>

            <motion.div
              className="snapshot-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="story-meta" variants={fadeUp}>
                <span>NATIONAL</span>
                <span>NEWS FILE</span>
              </motion.div>

              <motion.h2 variants={fadeUp}>
                The country is bigger
                <br />
                than the <em>headline.</em>
              </motion.h2>

              <motion.p variants={fadeUp}>
                India's national story is being written across thousands of
                places at the same time.
              </motion.p>

              <motion.p variants={fadeUp}>
                Our national desk connects those stories — bringing together
                politics, governance, society, security and development from
                across the country.
              </motion.p>

              <motion.button
                className="india-read-button"
                variants={fadeUp}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: editorialEase }}
              >
                READ NATIONAL REPORT
                <ArrowUpRight size={18} />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* STORIES SECTION */}
        <section className="india-stories">
          <motion.div
            className="india-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div>
              <motion.div className="desk-label" variants={fadeUp}>
                <span>02</span>
                INDIA REPORTS
              </motion.div>

              <motion.h2 variants={fadeUp}>
                Beyond the
                <br />
                <em>capital.</em>
              </motion.h2>
            </div>

            <motion.p variants={fadeUp}>
              National stories reported with context, verification and a
              ground-level perspective.
            </motion.p>
          </motion.div>

          <motion.div
            className="india-story-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {indiaStories.map((story) => (
              <motion.article
                className="india-story-card"
                key={story.number}
                variants={fadeUp}
                onHoverStart={() => setActiveStory(story.number)}
                onHoverEnd={() => setActiveStory(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: editorialEase }}
                style={{ position: "relative" }}
              >
                <div className="india-story-top">
                  <span>{story.number}</span>
                  <span>{story.category}</span>
                </div>

                <h3>{story.title}</h3>
                <p>{story.description}</p>

                <motion.button
                  animate={{ x: activeStory === story.number ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  READ REPORT
                  <ArrowUpRight size={17} />
                </motion.button>

                {/* Animated Accent Line */}
                <motion.div
                  className="india-card-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeStory === story.number ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: editorialEase }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "currentColor",
                    transformOrigin: "left",
                  }}
                />
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* DESKS SECTION */}
        <section className="india-desks">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="desk-label" variants={fadeUp}>
              <span>03</span>
              NATIONAL DESKS
            </motion.div>

            <motion.h2 variants={fadeUp}>
              India,
              <br />
              <em>reported.</em>
            </motion.h2>
          </motion.div>

          <motion.div
            className="india-desk-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {desks.map((desk, index) => {
              const Icon = desk.icon;

              return (
                <motion.div
                  className="india-desk-card"
                  key={desk.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: editorialEase }}
                >
                  <motion.div
                    className="india-desk-icon"
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </motion.div>

                  <span>0{index + 1}</span>
                  <h3>{desk.title}</h3>
                  <p>{desk.description}</p>

                  <ArrowUpRight className="india-desk-arrow" size={20} />
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* CLOSING SECTION */}
        <section className="india-closing">
          <motion.div
            className="india-closing-bg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: editorialEase }}
          >
            INDIA
          </motion.div>

          <motion.div
            className="india-closing-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp}>NEWS FILE / NATIONAL BUREAU</motion.span>

            <motion.h2 variants={fadeUp}>
              Every region
              <br />
              has a story.
            </motion.h2>

            <motion.p variants={fadeUp}>
              We go beyond the obvious to find the stories that matter.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: editorialEase }}
            >
              EXPLORE ALL INDIA NEWS
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default India;