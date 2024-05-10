import "./Experience.css";
import TitleYear from "./titleYear/titleYear";

function Experience() {
  return (
    <section className="work_education_experience">
      <div className="section_container">
        <h3 className="section_title">WORK EXPERIENCE</h3>
        <div className="title-year_container">
        
        <TitleYear title="Title" year="Year" /></div>
      </div>
      <div className="section_container">
        <h3 className="section_title">EDUCATION</h3><div className="title-year_container">
        <TitleYear title="Frontend Developer" year="Folkuniversitet | Sep 2023 - June 2025 " />
        <TitleYear title="Title" year="Year" />
        <TitleYear title="Title" year="Year" />
        <TitleYear title="Title" year="Year" />
        <TitleYear title="Title" year="Year" /></div>
      </div>
    </section>
  );
}

export default Experience;
