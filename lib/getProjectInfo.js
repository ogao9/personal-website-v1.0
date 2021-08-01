import { projectInfo } from "./data";

export function getProjectPaths(){

    const paths = projectInfo.map(project => (
        { params: {slug: project.slug} }
    ))

    return paths;
}

export function getProjectInfo(slug){
    //return the object
    const project = projectInfo.find(project => project.slug === slug)

    return project;
}