import Intro from "../../components/Intro";
import Meta from "../../components/Meta";
import sanityClient from "../../lib/sanityClient";
import BlockContent from '@sanity/block-content-to-react'
import { getProjectPaths, getProjectData, urlFor } from "../../lib/sanity";

export default function SingleProjectDetails({projectDetails}) {
    return (
        <div>
            <Meta title={`Projects | ${projectDetails.name}`} />
            <Intro title={projectDetails.name} subtitle="The Details" />

            <div className="w-full lg:w-9/12 mx-auto">
                <img
                    src={urlFor(projectDetails.image).url()}
                    alt="project cover"
                    className="w-100 h-auto object-cover"
                />
            </div>

            <div className="w-full lg:w-9/12 mx-auto">
                <article className="prose max-w-full">
                    <BlockContent
                        blocks={projectDetails.body}
                        imageOptions={{ w: 320, h: 240, fit: "max" }}
                        {...sanityClient.config()}
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