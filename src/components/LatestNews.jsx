import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { featuredNews } from "../data/newsData";

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
  TOP STORIES TODAY
</span>

<h2>
  The stories
  <br />
  that matter.
</h2>

        </div>


      <Link
  to="/news"
  className="view-all-button"
>
  View all news
  <ArrowUpRight size={17} />
</Link>

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

             <Link
  to={`/article/${story.id}`}
  className="read-story"
>
  Read story
  <ArrowUpRight size={14} />
</Link>

            </div>

          </motion.article>

        ))}

      </div>
 </section>
  );
}

export default LatestNews;