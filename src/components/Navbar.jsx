import { FaHeartPulse } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa6";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <FaHeartPulse className="logo-icon" />

          <div className="logo-content">
            <h2>GNM Quiz</h2>
            <span>Nursing Practice</span>
          </div>
        </div>

        <button
          className="header-action"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <FaPalette />
        </button>

      </div>
    </header>
  );
}

export default Navbar;