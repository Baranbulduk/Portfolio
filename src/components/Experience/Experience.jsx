import "./Experience.css";
import TitleYear from "./titleYear/titleYear";

function Experience() {
  return (
    <section className="work_education_experience">
      <h3 className="section_title">WORK EXPERIENCE</h3>
      <h3 className="section_title">EDUCATION</h3>
      <div className="section_container">
        <TitleYear title="Title" year="Year" />
      </div>
      <div className="section_container">
        <TitleYear title="Title" year="Year" />
        <TitleYear title="Title" year="Year" />
        <TitleYear title="Title" year="Year" />
        <TitleYear title="Title" year="Year" />
        <TitleYear title="Title" year="Year" />
      </div>
    </section>
  );
}

export default Experience;
