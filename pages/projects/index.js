import Meta from '../../components/Meta'
import Intro from '../../components/Intro';
import ProjectCard from '../../components/ProjectCard';
import { getAllProjects } from '../../lib/sanity';
import { useState } from 'react';

export default function projects({projectData}) {
    const [showMore, setMore] = useState(false);
    const projectInfo = showMore ? projectData : projectData.slice(0,3);

    return (
        <>
            <Meta title="Projects | Oliver Gao" />
            <Intro
                title="Projects"
                subtitle="A collection of the projects I've worked on"
            />
            <ProjectCardGrid projectInfo={projectInfo} />
            <div className="w-full grid place-items-center">
                <button className="p-4 bg-gray-200" onClick={() => setMore(!showMore)}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </>
    );
}

function ProjectCardGrid({projectInfo}){
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

export async function getStaticProps(){
    const projectData = await getAllProjects();

    return{
        props:{
            projectData
        }
    }
}