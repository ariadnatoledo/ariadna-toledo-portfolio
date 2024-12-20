import { FunctionComponent } from "react"
import { IProject } from "../../type"

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({ project: { name, description, image_path, deployed_url, GitHub_url, category, key_techs } }) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default ProjectCard
