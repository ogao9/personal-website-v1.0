import Meta from "../../components/Meta";
import BlockContent from '@sanity/block-content-to-react'
import { getProjectPaths, getProjectData, urlFor } from "../../lib/sanity";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SingleProjectDetails({projectDetails}) {
    return (
        <div>
            <Meta title={`${projectDetails.name} | Oliver Gao`} />
            <header className="text-center mt-10 mb-6">
                <h1 className="text-3xl font-bold">{projectDetails.name}</h1>
                <p>The Details</p>
            </header>

            <section className="w-full lg:w-8/12 mx-auto flex justify-center font-semibold mb-6 text-md">
                {projectDetails.externalLink &&
                <a href={projectDetails.externalLink} className="grid place-items-center px-4 " target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-5" /> 
                    <p>Live Demo</p>
                </a>}

                {projectDetails.githubLink &&
                <a href={projectDetails.githubLink} className="grid place-items-center px-4" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="w-5" />
                    <p>Github</p>
                </a>}
            </section>

            <div className="w-full lg:w-8/12 mx-auto">
                <img
                    src={urlFor(projectDetails.image).url()}
                    alt="project cover"
                    className="w-100 h-auto object-cover"
                />
            </div>
            
            <div className="w-full lg:w-8/12 mx-auto">
                <article className="prose dark:prose-dark max-w-full">
                    <BlockContent
                        blocks={projectDetails.body}
                        imageOptions={{ w: 800, h: 450, fit: "max" }}
                    />
                </article>
            </div>
        </div>
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