import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Filter,
  Flame,
  Search,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  "ALL",
  "POLITICS",
  "INDIA",
  "BUSINESS",
  "WORLD",
  "FACT CHECK",
];

const stories = [
  {
    id: 1,
    category: "INDIA",
    title: "Stories from the ground, where every development begins",
    description:
      "Get the latest verified developments, reports and voices from across Karnataka.",
    time: "12 MIN AGO",
  },
  {
    id: 2,
    category: "INDIA",
    title: "The stories shaping India's next chapter",
    description:
      "National developments, politics and public affairs from across the country.",
    time: "28 MIN AGO",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "Markets, money and the forces changing business",
    description:
      "Business intelligence and economic developments that matter.",
    time: "41 MIN AGO",
  },
  {
    id: 4,
    category: "POLITICS",
    title: "Inside the decisions shaping the country",
    description:
      "Political developments with context from the ground.",
    time: "1 HR AGO",
  },
];

/* =========================================
   3D STORY CARD
========================================= */

function StoryCard({ story, index }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      className="all-news-card"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.015,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="all-news-card-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <div className="all-news-card-top">
        <motion.span
          className="all-news-card-number"
          whileHover={{
            scale: 1.15,
            x: 4,
          }}
        >
          {String(index + 2).padStart(2, "0")}
        </motion.span>

        <motion.span
          className="all-news-category"
          whileHover={{
            x: 5,
          }}
        >
          {story.category}
        </motion.span>

        <motion.div
          whileHover={{
            rotate: 45,
            scale: 1.2,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <ArrowUpRight size={17} />
        </motion.div>
      </div>

      <motion.div
        className="all-news-card-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: index * 0.12 + 0.2,
        }}
      />

      <motion.h3
        initial={{
          opacity: 0,
          y: 15,
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
          delay: index * 0.12 + 0.25,
        }}
      >
        {story.title}
      </motion.h3>

      <motion.p
        initial={{
          opacity: 0,
          y: 12,
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
          delay: index * 0.12 + 0.35,
        }}
      >
        {story.description}
      </motion.p>

      <div className="all-news-card-footer">
        <span>
          <Clock3 size={13} />
          {story.time}
        </span>

        <motion.span
          whileHover={{
            letterSpacing: "0.18em",
          }}
        >
          NEWS FILE
        </motion.span>
      </div>

      <Link
        to={`/article/${story.id}`}
        className="all-news-card-link"
        aria-label={`Read ${story.title}`}
      >
        <span>READ STORY</span>

        <motion.span
          whileHover={{
            x: 5,
            y: -5,
          }}
        >
          <ArrowUpRight size={16} />
        </motion.span>
      </Link>
    </motion.article>
  );
}

/* =========================================
   ALL NEWS PAGE
========================================= */

function AllNews() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredStories =
    activeCategory === "ALL"
      ? stories
      : stories.filter(
          (story) => story.category === activeCategory
        );

  /* HERO PARALLAX */

  const heroX = useMotionValue(0);
  const heroY = useMotionValue(0);

  const smoothHeroX = useSpring(heroX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothHeroY = useSpring(heroY, {
    stiffness: 80,
    damping: 20,
  });

  const handleHeroMouseMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    heroX.set(x * 25);
    heroY.set(y * 25);
  };

  const resetHero = () => {
    heroX.set(0);
    heroY.set(0);
  };

  return (
    <div
      className="all-news-page"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={resetHero}
    >
      <Navbar />

      {/* =====================================
          HERO
      ===================================== */}

      <section className="all-news-hero">
        <motion.div
          className="all-news-hero-bg"
          style={{
            x: smoothHeroX,
            y: smoothHeroY,
          }}
        />

        {/* Cinematic light */}
        <motion.div
          className="all-news-hero-light"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating grid */}
        <motion.div
          className="all-news-hero-grid"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="all-news-hero-content"
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="all-news-eyebrow"
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
          >
            <Flame size={17} />

            <span>
              NEWS FILE / NEWSROOM
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            ALL
            <motion.span
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
              }}
              transition={{
                delay: 0.65,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              NEWS.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          >
            Every important story. One newsroom.
            Independent reporting across India and
            the world.
          </motion.p>
        </motion.div>

        {/* Giant number */}
        <motion.div
          className="all-news-number"
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.span
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            08
          </motion.span>
        </motion.div>

        {/* Live indicator */}
        <motion.div
          className="all-news-live"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />

          LIVE NEWSROOM
        </motion.div>
      </section>

      {/* =====================================
          FILTERS
      ===================================== */}

      <section className="all-news-filter-section">
        <motion.div
          className="all-news-filter-top"
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
          transition={{
            duration: 0.8,
          }}
        >
          <div className="all-news-section-label">
            <motion.span
              whileHover={{
                scale: 1.2,
              }}
            >
              01
            </motion.span>

            NEWSROOM
          </div>

          <div className="all-news-count">
            <TrendingUp size={15} />

            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              24 STORIES TODAY
            </motion.span>
          </div>
        </motion.div>

        <div className="all-news-filters">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
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
              }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
              }}
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.94,
              }}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="activeNewsCategory"
                  className="filter-active-bg"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span>
                {category}
              </span>
            </motion.button>
          ))}

          <motion.button
            className="filter-button"
            whileHover={{
              y: -4,
              rotate: -1,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <Filter size={15} />
            FILTER
          </motion.button>
        </div>
      </section>

      {/* =====================================
          FEATURED STORY
      ===================================== */}

      <section className="all-news-featured-section">
        <motion.div
          className="all-news-section-label"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span>02</span>
          TOP STORY
        </motion.div>

        {filteredStories.length > 0 ? (
          <motion.article
            className="all-news-featured"
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="all-news-featured-visual"
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <motion.div
                className="all-news-featured-grid"
                animate={{
                  backgroundPosition: [
                    "0px 0px",
                    "60px 60px",
                    "0px 0px",
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="all-news-featured-mark"
                animate={{
                  rotate: [0, 3, 0, -3, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                NF
              </motion.div>

              <motion.div
                className="all-news-featured-label"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5,
                }}
              >
                DEVELOPING STORY
              </motion.div>
            </motion.div>

            <motion.div
              className="all-news-featured-copy"
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                className="all-news-category"
                whileHover={{
                  x: 6,
                }}
              >
                {filteredStories[0]?.category}
              </motion.div>

              <motion.h2
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
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
              >
                {filteredStories[0]?.title}
              </motion.h2>

              <motion.p
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
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                }}
              >
                {filteredStories[0]?.description}
              </motion.p>

              <div className="all-news-story-meta">
                <span>
                  <Clock3 size={14} />
                  {filteredStories[0]?.time}
                </span>
              </div>

              <motion.div
                whileHover={{
                  x: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Link
                  to={`/article/${filteredStories[0]?.id}`}
                  className="all-news-read"
                >
                  READ STORY

                  <motion.span
                    whileHover={{
                      rotate: 45,
                      scale: 1.15,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.article>
        ) : (
          <motion.div
            className="all-news-empty"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            NO STORIES AVAILABLE
          </motion.div>
        )}
      </section>

      {/* =====================================
          LATEST STORIES
      ===================================== */}

      <section className="all-news-grid-section">
        <div className="all-news-grid-heading">
          <motion.div
            className="all-news-section-label"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span>03</span>
            LATEST STORIES
          </motion.div>

          <motion.div
            className="all-news-search"
            whileHover={{
              x: 5,
            }}
          >
            <Search size={16} />
            SEARCH NEWS
          </motion.div>
        </div>

        <div className="all-news-grid">
          {filteredStories
            .slice(1)
            .map((story, index) => (
              <StoryCard
                key={story.id}
                story={story}
                index={index}
              />
            ))}
        </div>
      </section>

      {/* =====================================
          CLOSING
      ===================================== */}

      <section className="all-news-closing">
        <motion.div
          className="all-news-closing-bg"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          NEWS
        </motion.div>

        <motion.div
          className="all-news-closing-content"
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.span
            initial={{
              opacity: 0,
              letterSpacing: "0.5em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.18em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          >
            STAY INFORMED
          </motion.span>

          <h2>
            THE STORY
            <br />

            <motion.strong
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0 0% 0 0)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >
              NEVER STOPS.
            </motion.strong>
          </h2>

          <p>
            Follow the stories that matter with News
            File's independent newsroom.
          </p>

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              to="/"
              className="all-news-home-button"
            >
              BACK TO HOME

              <motion.span
                whileHover={{
                  x: 5,
                  y: -5,
                }}
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default AllNews;