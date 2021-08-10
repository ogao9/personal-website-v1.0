import Meta from '../../components/Meta'
import Intro from '../../components/Intro';
import ProjectCardGrid from '../../components/ProjectCardGrid'
import { getAllProjects } from '../../lib/sanity';
import { useState } from 'react';

export default function Projects({projectData}) {
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
            
            <div className="w-full flex justify-center my-6">
                <button className="font-semibold text-black-text bg-primary hover:bg-yellow-300 px-4 py-2" onClick={() => setMore(!showMore)}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </>
    );
}

export async function getStaticProps(){
    const projectData = await getAllProjects();

    return{
        props:{
            projectData
        }
    }
}