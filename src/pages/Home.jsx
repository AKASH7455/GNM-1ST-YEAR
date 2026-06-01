import { Link } from "react-router-dom";

import nurseImage from "../assets/images/nurse.png";

import "../styles/home.css";

function Home() {
  return (
    <section className="home">

      <div className="home-card">

        <div className="home-content">

          <p className="welcome-text">
            Welcome to
          </p>

          <h1>
            GNM Quiz App
          </h1>

          <p className="description">
            Test your knowledge and prepare
            for a better tomorrow.
          </p>

          <Link
            to="/subjects"
            className="start-btn"
          >
            Start Quiz
          </Link>

        </div>

        <img
          src={nurseImage}
          alt="Nurse"
          className="hero-image"
        />

      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h3>11</h3>
          <p>Subjects</p>
        </div>

        <div className="stat-card">
          <h3>55</h3>
          <p>Sets</p>
        </div>

        <div className="stat-card">
          <h3>275</h3>
          <p>Questions</p>
        </div>

      </div>

    </section>
  );
}

export default Home;
