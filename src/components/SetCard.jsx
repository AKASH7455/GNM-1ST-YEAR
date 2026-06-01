import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

function SetCard({ setNumber, subjectId }) {
  return (
    <Link
      to={`/quiz/${subjectId}/set${setNumber}`}
      className="set-card"
    >
      <div>
        <h3>Set {setNumber}</h3>
        <p>Practice Quiz</p>
      </div>

      <span>
        <FaChevronRight />
      </span>
    </Link>
  );
}

export default SetCard;
