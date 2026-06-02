import { Link } from "react-router-dom";

import nurseImage from "../assets/images/nurse.png";
import quizData from "../data";

import "../styles/home.css";

function Home() {
  const subjects = Object.values(quizData);
  const totalSubjects = subjects.length;
  const totalSets = subjects.reduce((sum, subject) => sum + Object.keys(subject.sets).length, 0);
  const totalQuestions = subjects.reduce(
    (sum, subject) =>
      sum + Object.values(subject.sets).reduce((setSum, setQuestions) => setSum + setQuestions.length, 0),
    0
  );

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
          <h3>{totalSubjects}</h3>
          <p>Subjects</p>
        </div>

        <div className="stat-card">
          <h3>{totalSets}</h3>
          <p>Sets</p>
        </div>

        <div className="stat-card">
          <h3>{totalQuestions}</h3>
          <p>Questions</p>
        </div>

      </div>

    </section>
  );
}

export default Home;
