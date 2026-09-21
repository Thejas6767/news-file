import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  Link as LinkIcon,
  Share2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// At the top of Article.jsx
import { MagneticButton, PerspectiveCard } from "../components/AnimationPrimitives";
const articles = {
  1: {
    category: "INDIA",
    title: "Stories from the ground, where every development begins",
    description:
      "Get the latest verified developments, reports and voices from across India.",
    time: "12 min ago",
    author: "NEWS FILE DESK",
    location: "India",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Stories from the ground provide a closer look at the developments, reports and voices emerging from India.",
      "Local developments continue to shape conversations across cities, towns and communities as events unfold.",
      "News File focuses on verified information and field reporting while clearly separating confirmed developments from claims and speculation.",
      "Further updates will follow as more information becomes available from the ground.",
    ],
  },
  2: {
    category: "INDIA",
    title: "The stories shaping India's next chapter",
    description:
      "National developments, politics and public affairs from across the country.",
    time: "28 min ago",
    author: "NEWS FILE INDIA DESK",
    location: "INDIA",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Developments from across India continue to shape the national conversation, with stories emerging from cities, states and communities.",
      "Politics, public affairs and developments across the country remain closely connected to the issues affecting everyday life.",
      "News File's India desk follows verified developments and provides context around the stories that matter to readers.",
      "Further details will be added as confirmed information becomes available.",
    ],
  },
  3: {
    category: "BUSINESS",
    title: "Markets, money and the forces changing business",
    description:
      "Business intelligence and economic developments that matter.",
    time: "41 min ago",
    author: "NEWS FILE BUSINESS DESK",
    location: "MUMBAI",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Markets and businesses continue to respond to changing economic conditions and developments across the country.",
      "Companies, investors and institutions are watching developments that could influence business activity and the wider economy.",
      "News File's business desk focuses on the information behind economic developments and provides context for readers.",
      "Further updates will depend on incoming information, market developments and confirmed announcements.",
    ],
  },
  4: {
    category: "POLITICS",
    title: "Inside the decisions shaping the country",
    description:
      "Political developments with context from the ground.",
    time: "1 hr ago",
    author: "NEWS FILE POLITICS DESK",
    location: "NEW DELHI",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Political decisions and developments continue to influence public discussions across India.",
      "Government decisions, political responses and developments from the ground remain important parts of the national conversation.",
      "News File's politics desk follows confirmed developments and provides context without presenting unverified claims as established facts.",
      "Further developments will be reported as verified information becomes available.",
    ],
  },
  5: {
    category: "INDIA",
    title: "Ground reports and developments from across India",
    description:
      "Ground reports and developments from across India.",
    time: "12 min ago",
    author: "NEWS FILE DESK",
    location: "INDIA",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "News File brings verified ground reports from across India, covering developments as they unfold.",
      "Reports from cities, towns and communities provide context around the developments being followed by readers.",
      "The newsroom focuses on verified information and responsible reporting.",
      "Further updates will be added as confirmed information becomes available.",
    ],
  },
  6: {
    category: "INDIA",
    title: "National developments you need to know today",
    description:
      "National developments you need to know today.",
    time: "24 min ago",
    author: "NEWS FILE INDIA DESK",
    location: "INDIA",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "National developments continue to shape conversations across India.",
      "Stories from different parts of the country provide a broader view of developments affecting communities and public life.",
      "News File follows confirmed information and reports developments with context.",
      "Further updates will follow as more verified information becomes available.",
    ],
  },
  7: {
    category: "POLITICS",
    title: "Political developments across the country",
    description:
      "Political developments across the country.",
    time: "37 min ago",
    author: "NEWS FILE POLITICS DESK",
    location: "NEW DELHI",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Political developments across the country continue to influence public discussions.",
      "Decisions, responses and developments from different parts of India remain an important part of the national conversation.",
      "News File follows confirmed developments and provides context around political stories.",
      "Further developments will be reported as verified information becomes available.",
    ],
  },
  8: {
    category: "BUSINESS",
    title: "Business and economic updates",
    description:
      "Business and economic updates.",
    time: "48 min ago",
    author: "NEWS FILE BUSINESS DESK",
    location: "INDIA",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Business and economic developments continue to influence companies, markets and communities across India.",
      "Businesses and investors continue to follow developments affecting economic activity.",
      "News File's business desk focuses on verified information and the context behind important economic developments.",
      "Further updates will follow as confirmed announcements and developments emerge.",
    ],
  },
  9: {
    category: "WORLD",
    title: "International developments and global affairs",
    description:
      "International developments and global affairs.",
    time: "1 hr ago",
    author: "NEWS FILE WORLD DESK",
    location: "GLOBAL",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "International developments continue to connect events across countries and regions.",
      "Global affairs can influence governments, markets and communities beyond national borders.",
      "News File follows international developments and focuses on verified information and clear context.",
      "Further updates will be reported as confirmed information becomes available.",
    ],
  },
};

const relatedStories = [
  {
    category: "INDIA",
    title: "The stories shaping India's next chapter",
    id: 2,
  },
  {
    category: "BUSINESS",
    title: "Markets, money and the forces changing business",
    id: 3,
  },
  {
    category: "POLITICS",
    title: "Inside the decisions shaping the country",
    id: 4,
  },
];

function Article() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const article = articles[id] || articles[1];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Article link copied.");
      } catch {
        alert("Unable to copy article link.");
      }
    }
  };

  return (
    <div className="article-page">
      <Navbar />

      {/* ARTICLE HERO */}
      <section className="article-hero">
        <div className="article-hero-image">
          <motion.img
            src={article.image}
            alt={article.title}
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="article-image-overlay" />
        </div>

        <div className="article-hero-content">
          <motion.div
            className="article-back"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/news">
              <ArrowLeft size={17} />
              BACK TO ALL NEWS
            </Link>
          </motion.div>

          <motion.div
            className="article-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {article.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
          >
            {article.title}
          </motion.h1>

          <motion.p
            className="article-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            {article.description}
          </motion.p>

          <motion.div
            className="article-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <span>
              <Clock3 size={15} />
              {article.time}
            </span>

            <span>{article.location}</span>

            <span>{article.author}</span>
          </motion.div>
        </div>

        <div className="article-number">
          {String(id || 1).padStart(2, "0")}
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="article-body-section">
        <div className="article-layout">
          <aside className="article-sidebar">
            <div className="article-sidebar-label">SHARE</div>

            <motion.button
              type="button"
              onClick={handleShare}
              aria-label="Share article"
              whileHover={{ scale: 1.15, color: "#d71920" }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 size={18} />
            </motion.button>

            <motion.button
              type="button"
              onClick={handleShare}
              aria-label="Copy article link"
              whileHover={{ scale: 1.15, color: "#d71920" }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkIcon size={18} />
            </motion.button>

            <motion.button
              type="button"
              onClick={handleShare}
              aria-label="Share on X"
              whileHover={{ scale: 1.15, color: "#d71920" }}
              whileTap={{ scale: 0.9 }}
            >
              X
            </motion.button>

            <motion.button
              type="button"
              onClick={handleShare}
              aria-label="Share on Facebook"
              whileHover={{ scale: 1.15, color: "#d71920" }}
              whileTap={{ scale: 0.9 }}
            >
              f
            </motion.button>

            <motion.button
              type="button"
              onClick={handleShare}
              aria-label="Share on LinkedIn"
              whileHover={{ scale: 1.15, color: "#d71920" }}
              whileTap={{ scale: 0.9 }}
            >
              in
            </motion.button>
          </aside>

          <article className="article-content">
            <div className="article-kicker">NEWS FILE / REPORT</div>

            <motion.p
              className="article-lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {article.description}
            </motion.p>

            {article.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              className="article-verification"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="article-verification-mark">✓</div>

              <div>
                <strong>NEWS FILE / VERIFIED DESK</strong>
                <p>
                  Reporting is based on information available to the newsroom
                  at the time of publication.
                </p>
              </div>
            </motion.div>
          </article>
        </div>
      </section>

      {/* RELATED STORIES */}
      <section className="article-related">
        <div className="article-related-header">
          <div className="article-section-label">
            <span>03</span>
            RELATED STORIES
          </div>

          <span className="article-related-line" />
        </div>

        <div className="article-related-grid">
          {relatedStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="article-related-card"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <div className="article-related-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="article-related-category">
                {story.category}
              </div>

              <h3>{story.title}</h3>

              <Link to={`/article/${story.id}`}>
                READ STORY
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="article-closing">
        <div className="article-closing-bg">REPORT</div>

        <div className="article-closing-content">
          <span>NEWS FILE</span>

          <h2>
            STAY
            <br />
            <strong>INFORMED.</strong>
          </h2>

          <p>Follow the stories that shape India and the world.</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/news" className="article-home-button">
              EXPLORE ALL NEWS
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Article;