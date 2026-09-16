import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="contact-page">

      <Navbar />

      <main>

        {/* =========================================
            CONTACT HERO
        ========================================= */}

        <section className="contact-hero">

          <div className="contact-hero-inner">

            <motion.span
              className="contact-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              CONTACT & SUBMISSIONS
            </motion.span>


            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
            >
              Have a story?
              <br />
              <strong>Tell us.</strong>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
            >
              News tips, story submissions and newsroom
              enquiries can be directed to the News File team.
            </motion.p>

          </div>

        </section>


        {/* =========================================
            CONTACT INFORMATION
        ========================================= */}

        <section className="contact-information">

          <div className="contact-grid">

            <motion.div
              className="contact-intro"
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

              <span>
                NEWSROOM
              </span>

              <h2>
                Connect with
                <br />
                <strong>News File.</strong>
              </h2>

              <p>
                Whether you have a news tip, a story idea,
                or a submission for our newsroom, reach out
                using the details below.
              </p>

            </motion.div>


            <div className="contact-details">

              <motion.a
                href="mailto:newsroom@newsfileindia.com"
                className="contact-detail-card"
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
                  duration: 0.6,
                }}
              >

                <Mail size={25} />

                <div>
                  <span>
                    EMAIL
                  </span>

                  <h3>
                    newsroom@newsfileindia.com
                  </h3>
                </div>

                <ArrowUpRight size={19} />

              </motion.a>


              <motion.div
                className="contact-detail-card"
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
                  duration: 0.6,
                  delay: 0.1,
                }}
              >

                <MapPin size={25} />

                <div>
                  <span>
                    NEWSROOM
                  </span>

                  <h3>
                    New Delhi, India
                  </h3>
                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =========================================
            SUBMISSION GUIDELINES
        ========================================= */}

        <section className="submission-section">

          <div className="submission-inner">

            <motion.div
              className="submission-heading"
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
                duration: 0.7,
              }}
            >

              <span>
                STORY SUBMISSIONS
              </span>

              <h2>
                What to
                <br />
                <strong>include.</strong>
              </h2>

            </motion.div>


            <motion.div
              className="submission-list"
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
                duration: 0.7,
                delay: 0.15,
              }}
            >

              <div className="submission-item">
                <span>01</span>
                <p>
                  A clear description of the story or
                  development you want to bring to our
                  attention.
                </p>
              </div>

              <div className="submission-item">
                <span>02</span>
                <p>
                  Relevant details, documents, photographs
                  or other supporting information where
                  available.
                </p>
              </div>

              <div className="submission-item">
                <span>03</span>
                <p>
                  Your contact information so the newsroom
                  can follow up when necessary.
                </p>
              </div>

            </motion.div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="contact-cta">

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

            <Send size={30} />

            <h2>
              Ready to share
              <br />
              the story?
            </h2>

            <a
              href="mailto:newsroom@newsfileindia.com"
              className="contact-cta-button"
            >
              Contact the newsroom
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </section>


        {/* =========================================
            BACK TO NEWS
        ========================================= */}

        <div className="contact-back">

          <Link to="/news">
            Explore all news
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </main>
 <Footer />
    </div>
  );
}

export default Contact;