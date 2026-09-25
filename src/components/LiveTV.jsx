import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, Radio, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function LiveTV() {
  const containerRef = useRef(null);

  // Mouse tilt motion tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section style={{ padding: "64px 24px", maxWidth: "1152px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>

      {/* =====================================
          1. SECTION HEADER
      ===================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "32px",
          flexWrap: "wrap",
          gap: "16px"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <motion.div
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <Sparkles size={16} color="#dc2626" />
            </motion.div>
            <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#dc2626", fontWeight: "800" }}>
              24/7 BROADCAST
            </span>
          </div>

          <h2 style={{ fontSize: "36px", fontWeight: "900", margin: "0", color: "#0f172a", lineHeight: "1.2" }}>
            Live from <br />
            <span style={{ color: "#dc2626" }}>the field.</span>
          </h2>
        </div>

        {/* LIVE RADAR BEACON */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 16px",
          borderRadius: "9999px",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: "800",
          letterSpacing: "1px",
          textTransform: "uppercase"
        }}>
          <span style={{ position: "relative", display: "flex", height: "10px", width: "10px" }}>
            <motion.span
              animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#ef4444" }}
            />
            <span style={{ position: "relative", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#dc2626" }} />
          </span>
          LIVE BROADCAST
        </div>
      </motion.div>


      {/* =====================================
          2. VIDEO PLAYER DECK
      ===================================== */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#020617",
          border: "2px solid #1e293b",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          minHeight: "420px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "32px",
          boxSizing: "border-box"
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* CINEMATIC SCANLINE SWEEP EFFECT */}
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent, rgba(220, 38, 38, 0.08), transparent)",
            pointerEvents: "none",
            zIndex: 10
          }}
        />

        {/* DARK GRADIENT BACKDROP */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(15, 23, 42, 0.6) 0%, rgba(2, 6, 23, 0.95) 100%)", zIndex: 0, pointerEvents: "none" }} />

        {/* TOP BAR */}
        <div style={{ position: "relative", zIndex: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#dc2626", color: "#ffffff", fontSize: "10px", fontWeight: "900", letterSpacing: "1px", padding: "4px 12px", borderRadius: "6px" }}>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              style={{ height: "8px", width: "8px", borderRadius: "50%", backgroundColor: "#ffffff" }}
            />
            LIVE
          </div>

          <span style={{ fontSize: "12px", fontFamily: "monospace", fontWeight: "700", letterSpacing: "1px", color: "#cbd5e1", backgroundColor: "rgba(15, 23, 42, 0.8)", padding: "4px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            NEWS FILE
          </span>
        </div>

        {/* MAGNETIC CENTER PLAY BUTTON */}
        <div style={{ position: "relative", zIndex: 20, display: "flex", justifyContent: "center", alignItems: "center", margin: "auto 0" }}>
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            style={{ position: "relative" }}
          >
            {/* Glowing Ring */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ position: "absolute", inset: "-12px", borderRadius: "50%", backgroundColor: "rgba(220, 38, 38, 0.4)", filter: "blur(6px)", pointerEvents: "none" }}
            />

            <Link
              to="/live"
              aria-label="Open Live TV"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#dc2626",
                color: "#ffffff",
                boxShadow: "0 10px 25px rgba(220, 38, 38, 0.5)",
                border: "2px solid #f87171",
                textDecoration: "none"
              }}
            >
              <Play size={32} fill="currentColor" style={{ marginLeft: "4px" }} />
            </Link>
          </motion.div>
        </div>

        {/* PLAYER INFO */}
        <div style={{ position: "relative", zIndex: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span style={{ fontSize: "10px", fontFamily: "monospace", fontWeight: "700", letterSpacing: "2px", color: "#ef4444", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
              NOW STREAMING
            </span>

            <h3 style={{ fontSize: "28px", fontWeight: "900", color: "#ffffff", margin: 0, lineHeight: "1.2" }}>
              National Evening <br /> Dispatch
            </h3>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "4px", backgroundColor: "rgba(15, 23, 42, 0.8)", color: "#ffffff", fontSize: "12px", fontWeight: "800", border: "1px solid #334155" }}>
              <Radio size={13} color="#ef4444" />
              LIVE
            </span>
          </div>
        </div>
      </motion.div>


      {/* =====================================
          3. SECTION FOOTER
      ===================================== */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ padding: "2px 8px", borderRadius: "4px", backgroundColor: "#fee2e2", color: "#b91c1c", fontSize: "10px", fontWeight: "900", letterSpacing: "1px", textTransform: "uppercase" }}>
            ON AIR
          </span>

          <p style={{ margin: 0, color: "#64748b", fontSize: "13px", fontWeight: "500" }}>
            Follow verified reports, field interviews and the latest developments from across India.
          </p>
        </div>

        <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 350 }}>
          <Link
            to="/live"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "12px",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              textDecoration: "none"
            }}
          >
            <span>Watch full broadcast</span>
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

    </section>
  );
}