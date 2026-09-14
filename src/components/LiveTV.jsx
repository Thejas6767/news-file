import { motion } from "framer-motion";
import {
  Play,
  Radio,
  Volume2,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";

function LiveTV() {
  return (
    <section className="live-section">

      {/* SECTION HEADER */}

      <motion.div
        className="live-section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="section-eyebrow light">
            03 — NEWS FILE LIVE
          </span>

          <h2>
            Live from
            <br />
            the field.
          </h2>
        </div>

        <div className="live-heading-status">
          <span className="live-status-dot" />
          LIVE BROADCAST
        </div>
      </motion.div>


      {/* VIDEO AREA */}

      <motion.div
        className="live-player"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <div className="live-player-background" />

        <div className="live-player-overlay" />


        {/* TOP BAR */}

        <div className="player-top">

          <div className="player-live">
            <span />
            LIVE
          </div>

          <span className="player-channel">
            NEWS FILE
          </span>

        </div>


        {/* CENTER PLAY */}

        <motion.button
          className="big-play"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Play
            size={30}
            fill="currentColor"
          />
        </motion.button>


        {/* PLAYER INFORMATION */}

        <div className="player-info">

          <div>

            <span className="player-eyebrow">
              NOW STREAMING
            </span>

            <h3>
              National Evening
              <br />
              Dispatch
            </h3>

          </div>

          <div className="player-meta">
            <span>
              <Radio size={13} />
              LIVE
            </span>

            <span>
              HD
            </span>
          </div>

        </div>


        {/* PLAYER CONTROLS */}

        <div className="player-controls">

          <div className="player-progress">
            <div className="player-progress-fill" />
          </div>

          <div className="player-control-row">

            <div>
              <button>
                <Play
                  size={16}
                  fill="currentColor"
                />
              </button>

              <button>
                <Volume2 size={17} />
              </button>
            </div>

            <button>
              <Maximize2 size={17} />
            </button>

          </div>

        </div>

      </motion.div>


      {/* BELOW PLAYER */}

      <div className="live-bottom">

        <div className="live-description">

          <span>ON AIR</span>

          <p>
            Follow verified reports, field interviews
            and the latest developments from across India.
          </p>

        </div>


        <motion.button
          className="live-watch-button"
          whileHover={{
            x: 5,
          }}
        >
          Watch full broadcast

          <ArrowUpRight size={18} />

        </motion.button>

      </div>

    </section>
  );
}

export default LiveTV;