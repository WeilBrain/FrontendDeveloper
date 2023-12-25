import {ProjectCard} from "../components/project/ProjectCard.jsx";
import {project} from "../helpers/ProjectList.js";
export const Project = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {project.map((projects, index) => {
              return (
                <ProjectCard
                  title={projects.title}
                  img={projects.img}
                  index={index}
                  key={projects.title}
                />
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}