import React, { useState } from "react";
import "./FetchData.css";

function FetchData() {
  const URL = "https://api.github.com/users/baranbulduk/repos";

  const [data, setData] = useState([]);

  useState(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <section className="projects-container">
      {data.map((repo) => (
        <article  key={repo.id}>
          <a href={repo.html_url}>
            <img
              className="project_image"
              src={repo.owner.avatar_url}
              alt="project_image"
            />
            <h3>{repo.name}</h3>
          </a>
        </article>
      ))}
    </section>

    /*TEST
    <section>
      {data.map((repo) => (
        <article key={repo.id}>
          <a href={repo.html_url}>
            <img src={require(`../../assests/${repo.name}.png`)} alt={`Bild för ${repo.name}`} />
            <h3>{repo.name}</h3>
          </a>
        </article>
      ))}
    </section>*/
  );
}

export default FetchData;
