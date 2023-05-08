import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ signOut, isAuth }) {
  if (isAuth) {
    return (
      <div className="nav_container">
        <header>
          <h4 className="nav_title">Gitmunny</h4>

          <nav>
            <ul className="nav_links">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <a href="#" className="cta">
                  <button onClick={signOut} className="navbtn">
                    Logout
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  } else {
    return (
      <div className="nav_container">
        <header>
          <h4 className="nav_title">Gitmunny</h4>
        </header>
      </div>
    );
  }
}
