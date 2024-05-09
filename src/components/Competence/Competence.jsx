import "./Competence.css";

function Competence({ image, title }) {
  return (
      <div className="competence">
        <img className="competence_logo" src={image} alt="logo" />
        <span className="competence_title">{title}</span>
      </div>
  );
}

export default Competence;
