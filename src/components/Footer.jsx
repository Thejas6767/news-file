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
    EXPLORE
  </span>

  <Link to="/">
    Home
  </Link>

  <Link to="/news">
    All News
  </Link>

  <Link to="/live">
    Live TV & Video
  </Link>

  <Link to="/about">
    About Us
  </Link>

  <Link to="/contact">
    Contact & Submissions
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