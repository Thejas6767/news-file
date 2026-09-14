import { motion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";

function CategorySection({
  number,
  category,
  description,
  stories,
  layout = "standard",
}) {
  return (
    <section className={`category-section category-${layout}`}>

      {/* HEADER */}

      <motion.div
        className="category-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >

        <div className="category-title-wrap">

          <span className="category-number">
            {number}
          </span>

          <div>
            <span className="section-eyebrow">
              EDITORIAL DESK
            </span>

            <h2>
              {category}
            </h2>
          </div>

        </div>

        <p>
          {description}
        </p>

      </motion.div>


      {/* STORIES */}

      <div className="category-stories">

        {stories.map((story, index) => (

          <motion.article
            key={story.id}
            className={`category-story story-${index}`}
            initial={{
              opacity: 0,
              y: 50,
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

            <div className="category-image">

              <img
                src={story.image}
                alt={story.title}
              />

              <div className="category-image-overlay" />

              <span className="category-story-label">
                {category}
              </span>

              <motion.div
                className="category-story-arrow"
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                }}
              >
                <ArrowUpRight size={19} />
              </motion.div>

            </div>


            <div className="category-story-content">

              <div className="category-story-meta">

                <span>
                  <Clock3 size={11} />
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

              <span className="category-read">
                Read report
                <ArrowUpRight size={14} />
              </span>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default CategorySection;