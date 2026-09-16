import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="news-footer">

      <div className="news-footer-inner">

        {/* BRAND */}

        <div className="news-footer-brand">

          <h2>
            News File
          </h2>

          <p>
            Verified ground reporting.
            <br />
            Independent journalism from across India.
          </p>

        </div>


        {/* FOOTER LINKS */}

        <div className="news-footer-links">

          <div className="news-footer-column">

            <span>
              SECTIONS
            </span>

            <Link to="/news">
              All News
            </Link>

            <Link to="/live">
              Live TV
            </Link>

            <Link to="/politics">
              Politics
            </Link>

            <Link to="/business">
              Business
            </Link>

            <Link to="/india">
              India
            </Link>

            <Link to="/world">
              World
            </Link>

            <Link to="/fact-check">
              Fact Check
            </Link>

          </div>


          {/* NEWSROOM */}

          <div className="news-footer-column">

            <span>
              NEWSROOM
            </span>

            <a href="mailto:newsroom@newsfileindia.com">
              newsroom@newsfileindia.com
            </a>

            <p>
              New Delhi, India
            </p>

          </div>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="news-footer-bottom">

        <span>
          © 2026 News File. All rights reserved.
        </span>

        <span>
          Verified. Independent. Grounded.
        </span>

      </div>

    </footer>
  );
}

export default Footer;