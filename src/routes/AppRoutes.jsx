import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import Sets from "../pages/Sets";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import ReviewAnswers from "../pages/ReviewAnswers";
import Progress from "../pages/Progress";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Subjects */}
      <Route
        path="/subjects"
        element={<Subjects />}
      />

      {/* Sets */}
      <Route
        path="/sets/:subjectId"
        element={<Sets />}
      />

      {/* Quiz */}
      <Route
        path="/quiz/:subjectId/:setId"
        element={<Quiz />}
      />

      {/* Result */}
      <Route
        path="/result"
        element={<Result />}
      />

      {/* Review Answers */}
      <Route
        path="/review"
        element={<ReviewAnswers />}
      />

      {/* Progress */}
      <Route
        path="/progress"
        element={<Progress />}
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={<Profile />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;