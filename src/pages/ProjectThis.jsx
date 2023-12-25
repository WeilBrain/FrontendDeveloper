import {useParams} from "react-router-dom";
import {project} from '../helpers/ProjectList.js'
import {BtnGit} from "../components/UI/BtnGit/BtnGit.jsx";
export const ProjectThis = () => {
  const {id} = useParams()
  const projects = project[id]
  console.log(projects)
  return (
      <main className="section">
        <div className="container">
          <div className="project-details">

            <h1 className="title-1">{projects.title}</h1>

            <img src={projects.imgBig} alt="" className="project-details__cover"/>

            <div className="project-details__desc">
              <p>Skills: {projects.skills}</p>
            </div>

            <BtnGit link={projects.gitHubLink}/>

          </div>
        </div>
      </main>
  )
}