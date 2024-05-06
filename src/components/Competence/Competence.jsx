import "./Competence.css";

function Competence({ image, title, experience }) {
  return (
      <article className="competence">
        <img className="competence_logo" src={image} alt="logo" />
        <h3>{title}</h3>
        <p>{experience} year/s experience</p>
      </article>
  );
}

export default Competence;
