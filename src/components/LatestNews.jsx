import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import {
  featuredNews,
  latestNews,
} from "../data/newsData";

function LatestNews() {
  return (
    <section className="latest-section">

      {/* =====================================
          SECTION HEADER
      ===================================== */}

      <motion.div
        className="section-heading"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <div>

          <span className="section-eyebrow">
            02 — LATEST REPORTS
          </span>

          <h2>
            What's
            <br />
            happening now.
          </h2>

        </div>


        <button className="view-all-button">

          View all news

          <ArrowUpRight size={17} />

        </button>

      </motion.div>


      {/* =====================================
          FEATURED GRID
      ===================================== */}

      <div className="featured-grid">

        {featuredNews.map((story, index) => (

          <motion.article
            key={story.id}
            className={
              story.featured
                ? "news-card news-card-large"
                : "news-card"
            }
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
          >

            {/* IMAGE */}

            <div className="news-image">

              <img
                src={story.image}
                alt={story.title}
              />

              <div className="image-overlay" />

              <span className="news-category">
                {story.category}
              </span>

              <motion.div
                className="card-arrow"
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                }}
              >
                <ArrowUpRight size={19} />
              </motion.div>

            </div>


            {/* CONTENT */}

            <div className="news-card-content">

              <div className="news-meta">

                <span>
                  <Clock3 size={12} />
                  {story.time}
                </span>

              </div>

              <h3>
                {story.title}
              </h3>

              {story.description && (

                <p>
                  {story.description}
                </p>

              )}

              <div className="read-story">

                Read story

                <ArrowUpRight size={14} />

              </div>

            </div>

          </motion.article>

        ))}

      </div>


      {/* =====================================
          LATEST LIST
      ===================================== */}

      <motion.div
        className="latest-list"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >

        <div className="latest-list-header">
          Latest updates
        </div>

        {latestNews.map((story, index) => (

          <motion.article
            className="latest-row"
            key={story.id}
            whileHover={{
              x: 8,
            }}
          >

            <span className="latest-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="latest-category">
              {story.category}
            </span>

            <h3>
              {story.title}
            </h3>

            <span className="latest-time">
              {story.time}
            </span>

            <ArrowUpRight
              className="latest-arrow"
              size={18}
            />

          </motion.article>

        ))}

      </motion.div>

    </section>
  );
}

export default LatestNews;