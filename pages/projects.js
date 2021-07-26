import Meta from '../components/Meta'
import Intro from '../components/Intro';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../lib/db';

export default function projects({projectData}) {
    return (
        <>
            <Meta title="Projects | Oliver Gao" />
            <Intro
                title="Projects"
                subtitle="A collection of the projects I've worked on"
            />
            <ProjectCardGrid data={projectData}/>
        </>
    );
}

function ProjectCardGrid({data}){
    return(
        <div className="project-card-container grid place-items-center">
            {
                data.map((project, idx)=>(
                    <ProjectCard key={idx} projectInfo={project}/> 
                ))
            }
        </div>
    )
}

export async function getStaticProps(){
    const projectData = await getProjects();

    return{
        props:{
            projectData
        }
    }
}