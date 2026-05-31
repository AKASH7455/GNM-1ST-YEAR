import { NavLink } from "react-router-dom";
import "../styles/bottomNav.css";

import {
  FaHouse,
  FaBookOpen,
  FaChartLine,
  FaCircleUser
} from "react-icons/fa6";

function BottomNav() {
  return (
    <div className="bottom-nav">

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bottom-link active-bottom"
            : "bottom-link"
        }
      >
        <FaHouse />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/subjects"
        className={({ isActive }) =>
          isActive
            ? "bottom-link active-bottom"
            : "bottom-link"
        }
      >
        <FaBookOpen />
        <span>Subjects</span>
      </NavLink>

      <NavLink
        to="/progress"
        className={({ isActive }) =>
          isActive
            ? "bottom-link active-bottom"
            : "bottom-link"
        }
      >
        <FaChartLine />
        <span>Progress</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "bottom-link active-bottom"
            : "bottom-link"
        }
      >
        <FaCircleUser />
        <span>Profile</span>
      </NavLink>

    </div>
  );
}

export default BottomNav;