import "./FetchData.css";
import React, { useState } from "react";

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
    <section className="projects_container">
      {data.map((repo) => (
        <article className="project_article" key={repo.id}>
          <a href={repo.html_url}>
            <img
              className="project_image"
              src={repo.owner.avatar_url}
              alt="project_image"
            />
            <h3 className="project_title">{repo.name}</h3>
          </a>
        </article>
      ))}
    </section>
  );
}

export default FetchData;
