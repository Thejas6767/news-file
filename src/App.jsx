import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/news" element={<AllNews />} />

        <Route path="/live" element={<LiveTV />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/article/:id" element={<Article />} />

        <Route path="/politics" element={<Politics />} />

        <Route path="/fact-check" element={<FactCheck />} />

        <Route path="/business" element={<Business />} />

        <Route path="/india" element={<India />} />

        <Route path="/world" element={<World />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;