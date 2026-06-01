import { useTheme } from "../context/ThemeContext";

import "../styles/profile.css";

function Profile() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          US
        </div>

        <h2>User</h2>

        <p>GNM Quiz Learner</p>
      </div>

      <div className="profile-section">
        <h3>App Settings</h3>

        <div className="setting-row">
          <span>Pink Theme</span>

          <button
            className={`theme-btn pink-btn ${
              theme === "pink" ? "active-theme" : ""
            }`}
            onClick={() => setTheme("pink")}
          >
            {theme === "pink"
              ? "Applied"
              : "Apply"}
          </button>
        </div>

        <div className="setting-row">
          <span>Blue Theme</span>

          <button
            className={`theme-btn blue-btn ${
              theme === "blue" ? "active-theme" : ""
            }`}
            onClick={() => setTheme("blue")}
          >
            {theme === "blue"
              ? "Applied"
              : "Apply"}
          </button>
        </div>

        <div className="setting-row version-row">
          <span>Version</span>

          <strong>v1.0.0</strong>
        </div>
      </div>
    </div>
  );
}

export default Profile;
