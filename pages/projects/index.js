import Meta from '../../components/Meta'
import Intro from '../../components/Intro';
import ProjectCard from '../../components/ProjectCard';
import { getAllProjects } from '../../lib/sanity';

export default function projects({projectData}) {
    return (
        <>
            <Meta title="Projects | Oliver Gao" />
            <Intro
                title="Projects"
                subtitle="A collection of the projects I've worked on"
            />
            <ProjectCardGrid projectData={projectData}/>
        </>
    );
}

function ProjectCardGrid({projectData}){
    return(
        <section className="project-card-container grid place-items-center">
            {
                projectData.map((project, idx)=>(
                    <ProjectCard key={idx} projectInfo={project}/> 
                ))
            }
        </section>
    )
}

export async function getStaticProps(){
    const projectData = await getAllProjects();

    return{
        props:{
            projectData
        }
    }
}