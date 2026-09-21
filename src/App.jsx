import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import PageTransition from "./components/PageTransition";

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
   ANIMATED ROUTES
========================================= */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/news"
          element={
            <PageTransition>
              <AllNews />
            </PageTransition>
          }
        />

        <Route
          path="/live"
          element={
            <PageTransition>
              <LiveTV />
            </PageTransition>
          }
        />

        <Route
          path="/search"
          element={
            <PageTransition>
              <SearchPage />
            </PageTransition>
          }
        />

        <Route
          path="/article/:id"
          element={
            <PageTransition>
              <Article />
            </PageTransition>
          }
        />

        <Route
          path="/politics"
          element={
            <PageTransition>
              <Politics />
            </PageTransition>
          }
        />

        <Route
          path="/fact-check"
          element={
            <PageTransition>
              <FactCheck />
            </PageTransition>
          }
        />

        <Route
          path="/business"
          element={
            <PageTransition>
              <Business />
            </PageTransition>
          }
        />

        <Route
          path="/india"
          element={
            <PageTransition>
              <India />
            </PageTransition>
          }
        />

        <Route
          path="/world"
          element={
            <PageTransition>
              <World />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}


/* =========================================
   APP
========================================= */

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;