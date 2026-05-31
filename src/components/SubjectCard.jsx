import { Link } from "react-router-dom";

import {
  FaBrain,
  FaChevronRight
} from "react-icons/fa6";

function SubjectCard({ subject }) {
  return (
    <Link
      to={`/sets/${subject.id}`}
      className="subject-card"
    >
      <div className="subject-card-left">

        <div className="subject-icon">
          <FaBrain />
        </div>

        <div className="subject-content">

          <h3 className="subject-name">
            {subject.name}
          </h3>

          <p className="subject-info">
            {subject.totalSets} Quiz Sets Available
          </p>

        </div>

      </div>

      <div className="subject-card-right">
        <FaChevronRight />
      </div>
    </Link>
  );
}

export default SubjectCard;