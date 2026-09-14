import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Search,
  X,
  Radio,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    "Home",
    "All News",
    "Live TV",
    "Politics",
    "Business",
    "India",
    "World",
    "Fact Check",
  ];

  const routes = {
    Home: "/",
    "All News": "/news",
    "Live TV": "/live",
    Politics: "/politics",
    Business: "/business",
    India: "/india",
    World: "/world",
    "Fact Check": "/fact-check",
  };

  const handleMenuNavigation = (item) => {
    setMenuOpen(false);

    if (routes[item]) {
      navigate(routes[item]);
    }
  };

  return (
    <>
      {/* =========================================
          TOP NEWS STRIP
      ========================================= */}

      <div className="top-strip">
        <div className="top-strip-inner">

          <div className="top-live">
            <span className="live-dot"></span>
            LIVE
          </div>

          <div className="top-message">
            Breaking News • Ground Reports • Verified Dispatches
          </div>

          <div className="top-links">
            <span>English</span>
            <span>हिन्दी</span>
          </div>

        </div>
      </div>


      {/* =========================================
          MAIN NAVBAR
      ========================================= */}

      <motion.header
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* MENU */}

        <motion.button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Open menu"
        >
          <Menu size={23} strokeWidth={2} />
        </motion.button>


        {/* LOGO */}

        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <motion.div
            className="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
          >
            NEWS<span>FILE</span>
          </motion.div>
        </Link>


        {/* RIGHT ACTIONS */}

        <div className="navbar-right">

          <motion.button
            className="live-button"
            onClick={() => navigate("/live")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(215,25,32,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="live-pulse">
              <Radio size={15} />
            </span>

            LIVE TV
          </motion.button>


          <motion.button
            className="search-button"
            onClick={() => setSearchOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Search"
          >
            <Search size={21} />
          </motion.button>

        </div>

      </motion.header>


      {/* =========================================
          CATEGORY NAVIGATION
      ========================================= */}

      <motion.nav
        className="category-nav"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.5,
        }}
      >

        <div className="category-nav-inner">

          {navItems.map((item, index) => {

            return (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5 + index * 0.05,
                }}
              >

                <Link
                  to={routes[item]}
                  className="category-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>

              </motion.div>
            );

          })}

        </div>

      </motion.nav>


      {/* =========================================
          BREAKING NEWS BAR
      ========================================= */}

      <div className="breaking-bar">

        <div className="breaking-label">
          <span className="breaking-dot"></span>
          BREAKING
        </div>

        <div className="breaking-track">

          <motion.div
            className="breaking-content"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            <span>
              Ground dispatches updated across India
            </span>

            <i>◆</i>

            <span>
              News File delivers verified field reporting
            </span>

            <i>◆</i>

            <span>
              Watch News File Live TV
            </span>

            <i>◆</i>

            <span>
              Ground dispatches updated across India
            </span>

            <i>◆</i>

            <span>
              News File delivers verified field reporting
            </span>

            <i>◆</i>

          </motion.div>

        </div>

      </div>


      {/* =========================================
          SIDE MENU
      ========================================= */}

      <AnimatePresence>

        {menuOpen && (

          <>

            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />


            <motion.aside
              className="side-menu"
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="side-menu-header">

                <div className="side-logo">
                  NEWS<span>FILE</span>
                </div>

                <button
                  className="close-menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={24} />
                </button>

              </div>


              <div className="side-menu-links">

                {navItems.map((item, index) => (

                  <motion.button
                    type="button"
                    key={item}
                    className="side-menu-link"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                    }}
                    onClick={() => handleMenuNavigation(item)}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item}

                    <ChevronRight size={18} />

                  </motion.button>

                ))}

              </div>


              <div className="side-menu-footer">

                <p>
                  VERIFIED GROUND REPORTING.
                </p>

                <p>
                  UNBIASED DISPATCH.
                </p>

              </div>

            </motion.aside>

          </>

        )}

      </AnimatePresence>


      {/* =========================================
          SEARCH OVERLAY
      ========================================= */}

      <AnimatePresence>

        {searchOpen && (

          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="search-container"
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 30,
                opacity: 0,
              }}
            >

              <button
                className="search-close"
                onClick={() => setSearchOpen(false)}
              >
                <X size={26} />
              </button>

              <p>SEARCH NEWS FILE</p>

              <div className="search-input-wrapper">

                <input
                  autoFocus
                  type="text"
                  placeholder="Search stories, topics, locations..."
                />

                <Search size={25} />

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default Navbar;