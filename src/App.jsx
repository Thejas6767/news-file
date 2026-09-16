import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import AllNews from "./pages/AllNews";
import LiveTV from "./pages/LiveTV";
import SearchPage from "./pages/SearchPage";
import Article from "./pages/Article";
import Politics from "./pages/Politics";
import FactCheck from "./pages/FactCheck";
import Business from "./pages/Business";
import India from "./pages/India";
import World from "./pages/World";
import About from "./pages/About";
import Contact from "./pages/Contact";


/* =========================================
   SCROLL TO TOP
========================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}


/* =========================================
   APP
========================================= */

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/news"
          element={<AllNews />}
        />

        <Route
          path="/live"
          element={<LiveTV />}
        />

        <Route
          path="/search"
          element={<SearchPage />}
        />

        <Route
          path="/article/:id"
          element={<Article />}
        />

        <Route
          path="/politics"
          element={<Politics />}
        />

        <Route
          path="/fact-check"
          element={<FactCheck />}
        />

        <Route
          path="/business"
          element={<Business />}
        />

        <Route
          path="/india"
          element={<India />}
        />

        <Route
          path="/world"
          element={<World />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;