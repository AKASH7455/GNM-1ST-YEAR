import SubjectCard from "../components/SubjectCard";
import subjects from "../data/subjects";

function Subjects() {
  return (
    <div className="subjects-page">

      <h1>
        All Subjects
      </h1>

      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
        />
      ))}

    </div>
  );
}

export default Subjects;