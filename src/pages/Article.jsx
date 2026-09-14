import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  Link as LinkIcon,
  Share2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const articles = {
  1: {
    category: "POLITICS",
    title:
      "Political developments continue to shape the national conversation",
    description:
      "The latest decisions, statements and developments from India's political landscape.",
    time: "8 min ago",
    author: "NEWS FILE DESK",
    location: "NEW DELHI",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Political developments continue to influence the national conversation as policymakers, political parties and citizens closely follow the latest developments.",
      "Across the country, new statements and decisions are shaping discussions around governance, public policy and the direction of India's political landscape.",
      "News File's reporting desk continues to follow developments as they emerge, focusing on verified information and clearly separating confirmed developments from claims and speculation.",
      "The coming days are expected to bring further developments as political stakeholders respond to the changing national environment.",
    ],
  },

  2: {
    category: "INDIA",
    title: "Major developments emerge from across the country",
    description:
      "A look at the stories making an impact across India's cities and states.",
    time: "16 min ago",
    author: "NEWS FILE INDIA DESK",
    location: "INDIA",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Important developments are emerging from cities and communities across India, with local events increasingly shaping the national news cycle.",
      "Authorities, residents and institutions are responding to developments across multiple regions while officials continue to release information.",
      "News File's India desk is tracking confirmed updates and working to provide context around the developments that matter most to readers.",
      "As more information becomes available, this report will continue to focus on verified details and direct developments.",
    ],
  },

  3: {
    category: "BUSINESS",
    title: "Markets watch fresh signals as economic activity shifts",
    description:
      "Businesses and investors assess the latest movement across the economy.",
    time: "24 min ago",
    author: "NEWS FILE BUSINESS DESK",
    location: "MUMBAI",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Businesses and investors are assessing fresh signals from across the economy as markets respond to changing expectations and new developments.",
      "Market participants are watching a range of indicators while companies and institutions assess how current conditions could influence economic activity.",
      "The News File business desk is tracking the developments while focusing on the underlying information behind market movements.",
      "Further updates will depend on incoming data, corporate developments and decisions from economic institutions.",
    ],
  },

  4: {
    category: "WORLD",
    title: "Global developments put international markets on alert",
    description:
      "International events continue to influence markets, governments and communities.",
    time: "31 min ago",
    author: "NEWS FILE WORLD DESK",
    location: "WORLD",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "International developments are drawing attention from governments, businesses and communities as events across regions continue to influence the global conversation.",
      "Markets are assessing the potential impact of geopolitical and economic developments while governments monitor the changing international environment.",
      "News File's World desk is following confirmed developments and providing context as information becomes available.",
      "The situation remains subject to change as officials and institutions release further information.",
    ],
  },

  5: {
    category: "FACT CHECK",
    title: "Viral claim circulating online gets a closer examination",
    description:
      "News File's verification desk examines the evidence behind a widely shared claim.",
    time: "43 min ago",
    author: "NEWS FILE VERIFICATION DESK",
    location: "NEWS FILE DESK",
    image:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "A widely circulated claim online has prompted questions about what is accurate, what is misleading and what can actually be verified.",
      "News File's verification desk examined the available evidence, including the context surrounding the claim and the information used to support it.",
      "Verification requires checking the original context rather than relying only on screenshots, captions or posts that may have been separated from their source.",
      "Readers are encouraged to check the evidence behind viral claims before sharing information further.",
    ],
  },

  6: {
    category: "INDIA",
    title: "Cities prepare for a new wave of infrastructure projects",
    description:
      "New plans focus on connectivity, urban development and public infrastructure.",
    time: "52 min ago",
    author: "NEWS FILE INDIA DESK",
    location: "INDIA",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=85",
    paragraphs: [
      "Cities are preparing for new infrastructure initiatives focused on connectivity, urban development and public facilities.",
      "The projects are expected to address changing requirements as urban populations and transportation needs continue to evolve.",
      "Officials and local institutions are examining implementation plans while communities assess how the projects could affect daily life.",
      "Further details are expected as individual projects move through planning and implementation stages.",
    ],
  },
};

const relatedStories = [
  {
    category: "INDIA",
    title: "Major developments emerge from across the country",
    id: 2,
  },
  {
    category: "BUSINESS",
    title: "Markets watch fresh signals as economic activity shifts",
    id: 3,
  },
  {
    category: "WORLD",
    title: "Global developments put international markets on alert",
    id: 4,
  },
];

function Article() {
  const { id } = useParams();

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
        // User cancelled sharing.
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
          <img src={article.image} alt={article.title} />

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

            <div className="article-sidebar-label">
              SHARE
            </div>

            <button
              type="button"
              onClick={handleShare}
              aria-label="Share article"
            >
              <Share2 size={18} />
            </button>

            <button
              type="button"
              onClick={handleShare}
              aria-label="Copy article link"
            >
              <LinkIcon size={18} />
            </button>

           <button
  type="button"
  onClick={handleShare}
  aria-label="Share"
>
  X
</button>

<button
  type="button"
  onClick={handleShare}
  aria-label="Share"
>
  f
</button>

<button
  type="button"
  onClick={handleShare}
  aria-label="Share"
>
  in
</button>

          </aside>


          <article className="article-content">

            <div className="article-kicker">
              NEWS FILE / REPORT
            </div>

            <p className="article-lead">
              {article.description}
            </p>

            {article.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
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
                }}
              >
                {paragraph}
              </motion.p>
            ))}


            <div className="article-verification">

              <div className="article-verification-mark">
                ✓
              </div>

              <div>
                <strong>
                  NEWS FILE / VERIFIED DESK
                </strong>

                <p>
                  Reporting is based on information available to the
                  newsroom at the time of publication.
                </p>
              </div>

            </div>

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
              }}
            >

              <div className="article-related-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="article-related-category">
                {story.category}
              </div>

              <h3>
                {story.title}
              </h3>

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

        <div className="article-closing-bg">
          REPORT
        </div>

        <div className="article-closing-content">

          <span>NEWS FILE</span>

          <h2>
            STAY
            <br />
            <strong>INFORMED.</strong>
          </h2>

          <p>
            Follow the stories that shape India and the world.
          </p>

          <Link to="/news" className="article-home-button">
            EXPLORE ALL NEWS
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Article;