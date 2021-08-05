import ProjectCard from "./ProjectCard"

export default function ProjectCardGrid({projectInfo}){
    return(
        <section className="project-card-container grid place-items-center">
            {
                projectInfo.map((project, idx)=>(
                    <ProjectCard key={idx} projectInfo={project}/> 
                ))
            }
        </section>
    )
}