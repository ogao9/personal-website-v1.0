import Meta from "../../components/Meta";
import BlockContent from '@sanity/block-content-to-react'
import { getProjectPaths, getProjectData, urlFor } from "../../lib/sanity";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Intro from "../../components/Intro";

export default function SingleProjectDetails({projectDetails}) {
    return (
        <>
            <Meta title={`${projectDetails.title} | Oliver Gao`} />
            <Intro title={projectDetails.title} subtitle="Description, Technologies Used, and Features"/>

            <div className="w-full lg:w-8/12 mx-auto">
                <img
                    src={urlFor(projectDetails.image).url()}
                    alt="project cover"
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="w-full lg:w-8/12 mx-auto pb-8">
                <article className="prose prose-lg dark:prose-dark max-w-full">
                    <BlockContent
                        blocks={projectDetails.body}
                        imageOptions={{ w: 800, h: 450, fit: "max" }}
                    />
                </article>
            </div>
        </>
    );
}

export async function getStaticPaths(){
    const paths = await getProjectPaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const projectSlug = context.params.slug;
    const projectDetails = await getProjectData(projectSlug);

    return{
        props:{
            projectDetails
        }
    }
}

const externalInfo = () =>{
    return(
        <section className="w-full lg:w-8/12 mx-auto flex justify-center mb-4">
            {projectDetails.externalLink &&
                <a href={projectDetails.externalLink} className="grid place-items-center pr-4" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-5" /> 
                    <p>Live Example</p>
                </a>}

            {projectDetails.githubLink &&
                <a href={projectDetails.githubLink} className="grid place-items-center px-4" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="w-5" />
                    <p>Github</p>
                </a>}
        </section>
    )
}