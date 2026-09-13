import { Menu, Search, Radio } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <Menu size={24} />
        </button>
      </div>

      <div className="logo">
        NEWS<span>FILE</span>
      </div>

      <div className="navbar-right">
        <button className="live-button">
          <Radio size={17} />
          LIVE
        </button>

        <button className="search-button">
          <Search size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;