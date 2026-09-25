import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="news-footer">
      <div className="news-footer-inner">
        {/* BRAND */}
        <div className="news-footer-brand">
          {/* STACKED LOGO BADGE */}
          <div
            className="footer-logo-badge"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              width: "fit-content",
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: "1",
              marginBottom: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#e11d48", // Vibrant Red
                color: "#ffffff",
                padding: "8px 18px",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              NEWS
            </div>
            <div
              style={{
                backgroundColor: "#00a8e8", // Vivid Blue
                color: "#ffffff",
                padding: "8px 18px",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              FILE
            </div>
          </div>

          <p>
            Verified ground reporting.
            <br />
            Independent journalism from across India.
          </p>
        </div>

        {/* FOOTER LINKS */}
        <div className="news-footer-links">
          <div className="news-footer-column">
            <span>EXPLORE</span>

            <Link to="/">Home</Link>

            <Link to="/news">All News</Link>

            <Link to="/live">Live TV & Video</Link>

            <Link to="/about">About Us</Link>

            <Link to="/contact">Contact & Submissions</Link>
          </div>

          {/* NEWSROOM */}
          <div className="news-footer-column">
            <span>NEWSROOM</span>

            <a href="mailto:newsroom@newsfileindia.com">
              newsroom@newsfileindia.com
            </a>

            <p>New Delhi, India</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="news-footer-bottom">
        <span>© 2026 News File. All rights reserved.</span>

        <span>Verified. Independent. Grounded.</span>
      </div>
    </footer>
  );
}

export default Footer;