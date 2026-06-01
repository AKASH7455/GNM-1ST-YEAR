import { useParams } from "react-router-dom";

import subjects from "../data/subjects";

import SetCard from "../components/SetCard";

import "../styles/sets.css";

function Sets() {
  const { subjectId } = useParams();

  const subject = subjects.find(
    (item) => item.id === subjectId
  );

  if (!subject) {
    return (
      <div className="sets-page">
        <h2>Subject Not Found</h2>
      </div>
    );
  }

  const sets = Array.from(
    { length: subject.totalSets || 0 },
    (_, index) => index + 1
  );

  return (
    <div className="sets-page">

      <div className="sets-header">
        <h1>Select Quiz Set</h1>

        <p>
          {subject.name}
        </p>
      </div>

      <div className="sets-grid">
        {sets.map((setNumber) => (
          <SetCard
            key={setNumber}
            setNumber={setNumber}
            subjectId={subjectId}
          />
        ))}
      </div>

    </div>
  );
}

export default Sets;
