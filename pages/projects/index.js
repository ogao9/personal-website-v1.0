import Meta from '../../components/Meta'
import Intro from '../../components/Intro';
import ProjectCard from '../../components/ProjectCard';
import { projectInfo } from '../../lib/data';

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
        <div className="project-card-container grid place-items-center">
            {
                projectData.map((project, idx)=>(
                    <ProjectCard key={idx} projectInfo={project}/> 
                ))
            }
        </div>
    )
}

export async function getStaticProps(){
    const projectData = projectInfo;

    return{
        props:{
            projectData
        }
    }
}