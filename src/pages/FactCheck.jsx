import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Search,
  FileCheck2,
  AlertTriangle,
} from "lucide-react";

import Navbar from "../components/Navbar";

const factChecks = [
  {
    id: "01",
    verdict: "FALSE",
    title: "Viral claim about a government announcement spreads online",
    description:
      "Our verification desk traced the original information and compared it with official records.",
    category: "SOCIAL MEDIA",
    date: "TODAY",
    score: 18,
  },
  {
    id: "02",
    verdict: "TRUE",
    title: "Original report confirms details circulating online",
    description:
      "Multiple primary sources support the central claim after independent verification.",
    category: "PUBLIC CLAIM",
    date: "YESTERDAY",
    score: 91,
  },
  {
    id: "03",
    verdict: "MISLEADING",
    title: "Old photograph shared as a recent event",
    description:
      "The image is authentic, but the context attached to it is incorrect.",
    category: "VIRAL IMAGE",
    date: "2 DAYS AGO",
    score: 46,
  },
];

const verificationSteps = [
  {
    number: "01",
    icon: Search,
    title: "We investigate",
    text: "Our journalists identify the original claim, source and context.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "We verify",
    text: "Information is checked against primary documents and reliable sources.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "We publish",
    text: "Only after verification do we publish the evidence and verdict.",
  },
];

function FactCheck() {
  return (
    <>
      <Navbar />

      <main className="fact-page">
        {/* HERO */}

        <section className="fact-hero">
          <div className="fact-hero-grid"></div>

          <motion.div
            className="fact-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="fact-eyebrow">
              <span className="fact-live-dot"></span>
              NEWS FILE VERIFICATION DESK
            </div>

            <h1>
              Truth
              <br />
              <span>needs evidence.</span>
            </h1>

            <p>
              We investigate the claims shaping public conversation and show
              you what the evidence actually says.
            </p>

            <motion.div
              className="fact-scroll"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              SCROLL TO VERIFY
              <span></span>
            </motion.div>
          </motion.div>

          <motion.div
            className="fact-hero-number"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            04
          </motion.div>
        </section>

        {/* FEATURED VERDICT */}

        <section className="featured-fact">
          <div className="section-label">
            <span>01</span>
            FEATURED VERIFICATION
          </div>

          <div className="fact-feature-grid">
            <motion.div
              className="claim-panel"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="claim-top">
                <span>THE CLAIM</span>
                <AlertTriangle size={19} />
              </div>

              <h2>
                “A viral post claims that a major policy decision has already
                been officially announced.”
              </h2>

              <div className="claim-source">
                <span>CLAIM CIRCULATING ONLINE</span>
                <span>●</span>
                <span>VERIFICATION IN PROGRESS</span>
              </div>
            </motion.div>

            <motion.div
              className="verdict-panel"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="verdict-label">
                <Check size={18} />
                OUR VERDICT
              </div>

              <div className="verdict-word">FALSE</div>

              <p>
                The available evidence does not support the claim. The
                information being circulated has been presented without the
                necessary official context.
              </p>

              <div className="truth-meter">
                <div className="meter-header">
                  <span>EVIDENCE SCORE</span>
                  <strong>18%</strong>
                </div>

                <div className="meter-track">
                  <motion.div
                    className="meter-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: "18%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3,
                    }}
                  />
                </div>

                <div className="meter-scale">
                  <span>FALSE</span>
                  <span>UNCERTAIN</span>
                  <span>TRUE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="verification-process">
          <div className="process-heading">
            <div className="section-label">
              <span>02</span>
              OUR METHOD
            </div>

            <h2>
              Every claim
              <br />
              gets <em>tested.</em>
            </h2>
          </div>

          <div className="process-grid">
            {verificationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  className="process-card"
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                >
                  <div className="process-number">{step.number}</div>

                  <div className="process-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  <div className="process-line"></div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* LATEST FACT CHECKS */}

        <section className="latest-facts">
          <div className="latest-facts-header">
            <div>
              <div className="section-label">
                <span>03</span>
                LATEST FACT CHECKS
              </div>

              <h2>
                The verdict
                <br />
                <em>desk.</em>
              </h2>
            </div>

            <p>
              Claims, images and statements checked by the News File
              verification team.
            </p>
          </div>

          <div className="fact-list">
            {factChecks.map((fact, index) => (
              <motion.article
                className="fact-card"
                key={fact.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="fact-card-number">{fact.id}</div>

                <div className="fact-card-main">
                  <div className="fact-card-meta">
                    <span>{fact.category}</span>
                    <span>{fact.date}</span>
                  </div>

                  <h3>{fact.title}</h3>

                  <p>{fact.description}</p>

                  <button className="read-fact">
                    READ VERIFICATION
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <div
                  className={`fact-result ${
                    fact.verdict === "TRUE"
                      ? "result-true"
                      : fact.verdict === "FALSE"
                        ? "result-false"
                        : "result-misleading"
                  }`}
                >
                  <span>VERDICT</span>
                  <strong>{fact.verdict}</strong>

                  <div className="mini-score">
                    <div>
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${fact.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </div>

                    <small>{fact.score}%</small>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}

        <section className="fact-cta">
          <motion.div
            className="fact-cta-inner"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>SEE SOMETHING THAT NEEDS CHECKING?</span>

            <h2>
              Send us
              <br />
              the claim.
            </h2>

            <button>
              SUBMIT A CLAIM
              <ArrowUpRight size={19} />
            </button>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default FactCheck;