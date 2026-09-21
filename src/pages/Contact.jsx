import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Custom Magnetic Tilt Card Sub-Component
function TiltCard({ children, href, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const CardWrapper = href ? motion.a : motion.div;

  return (
    <CardWrapper
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </CardWrapper>
  );
}

function Contact() {
  // Kinetic Character Split Helpers
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -80 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineOne = "Have a story?";
  const lineTwo = "Tell us.";

  return (
    <div className="contact-page" style={{ overflowX: "hidden" }}>
      <Navbar />

      <main>
        {/* =========================================
            CONTACT HERO
        ========================================= */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <motion.span
              className="contact-label"
              initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              CONTACT & SUBMISSIONS
            </motion.span>

            {/* Kinetic Letter Reveal */}
            <motion.h1
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              style={{ perspective: 1000 }}
            >
              <span style={{ display: "inline-block" }}>
                {lineOne.split("").map((char, index) => (
                  <motion.span
                    key={`l1-${index}`}
                    variants={letterVariants}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <br />
              <strong style={{ display: "inline-block" }}>
                {lineTwo.split("").map((char, index) => (
                  <motion.span
                    key={`l2-${index}`}
                    variants={letterVariants}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </strong>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              News tips, story submissions and newsroom enquiries can be
              directed to the News File team.
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
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              whileInView={{
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            >
              <span>NEWSROOM</span>

              <h2>
                Connect with
                <br />
                <strong>News File.</strong>
              </h2>

              <p>
                Whether you have a news tip, a story idea, or a submission for
                our newsroom, reach out using the details below.
              </p>
            </motion.div>

            <div className="contact-details">
              <TiltCard
                href="mailto:newsroom@newsfileindia.com"
                className="contact-detail-card"
              >
                <Mail size={25} />
                <div>
                  <span>EMAIL</span>
                  <h3>newsroom@newsfileindia.com</h3>
                </div>
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowUpRight size={19} />
                </motion.div>
              </TiltCard>

              <TiltCard className="contact-detail-card">
                <MapPin size={25} />
                <div>
                  <span>NEWSROOM</span>
                  <h3>New Delhi, India</h3>
                </div>
              </TiltCard>
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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>STORY SUBMISSIONS</span>
              <h2>
                What to
                <br />
                <strong>include.</strong>
              </h2>
            </motion.div>

            <motion.div
              className="submission-list"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="submission-item"
                variants={listItemVariants}
                whileHover={{ x: 12, backgroundColor: "rgba(0,0,0,0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <span>01</span>
                <p>
                  A clear description of the story or development you want to
                  bring to our attention.
                </p>
              </motion.div>

              <motion.div
                className="submission-item"
                variants={listItemVariants}
                whileHover={{ x: 12, backgroundColor: "rgba(0,0,0,0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <span>02</span>
                <p>
                  Relevant details, documents, photographs or other supporting
                  information where available.
                </p>
              </motion.div>

              <motion.div
                className="submission-item"
                variants={listItemVariants}
                whileHover={{ x: 12, backgroundColor: "rgba(0,0,0,0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <span>03</span>
                <p>
                  Your contact information so the newsroom can follow up when
                  necessary.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            CTA WITH RADIAL PULSE
        ========================================= */}
        <section className="contact-cta">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <motion.div
                style={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: "50%",
                  border: "2px solid #d71920",
                  pointerEvents: "none",
                }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <Send size={30} />
            </div>

            <h2>
              Ready to share
              <br />
              the story?
            </h2>

            <motion.a
              href="mailto:newsroom@newsfileindia.com"
              className="contact-cta-button"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 35px rgba(215,25,32,0.3)" }}
              whileTap={{ scale: 0.96 }}
            >
              Contact the newsroom
              <motion.span
                animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </motion.a>
          </motion.div>
        </section>

        {/* =========================================
            BACK TO NEWS
        ========================================= */}
        <div className="contact-back">
          <motion.div whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/news">
              Explore all news
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;