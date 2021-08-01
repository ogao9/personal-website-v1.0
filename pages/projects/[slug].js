import Intro from "../../components/Intro";
import Meta from "../../components/Meta";
import { getProjectPaths, getProjectInfo } from "../../lib/getProjectInfo";

export default function SingleProjectDetails({projectDetails}) {
    return (
        <div>
            <Meta title={`Projects | ${projectDetails.title}`} />
            <Intro title={projectDetails.title} subtitle="The Details" />

            <div className="w-full lg:w-9/12 mx-auto">
                <img
                    src={projectDetails.imageUrl}
                    alt="project cover"
                    className="w-100 h-auto object-cover"
                />
            </div>

            <div className="w-full lg:w-9/12 mx-auto">
                <div className="my-4">
                    <h1 className="text-2xl font-bold">What it does</h1>
                    <p>{projectDetails.details.introduction}</p>
                </div>
                <div className="my-4">
                    <h1 className="text-2xl font-bold">The Technical Stuff</h1>
                    <p>{projectDetails.details.technicalInfo}</p>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths(){
    const paths = getProjectPaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const projectSlug = context.params.slug;
    const projectDetails = getProjectInfo(projectSlug);

    return{
        props:{
            projectDetails
        }
    }
}