import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { urlFor } from '../lib/sanity'

export default function ProjectCard({projectInfo}) {
    const [hover, setHover] = useState(false);

    return (
        <article className="project-card-grid shadow-md rounded">
            <div
                className="mb-2 overflow-hidden relative"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img
                    src={urlFor(projectInfo.image).url()}
                    alt="Project Cover Photo"
                    className="w-100 h-100 object-cover"
                />
                {hover && <ImageOverlay projectInfo={projectInfo}/>}
            </div>

            <div className="mb-1 px-3">
                <h2 className="text-2xl font-bold">{projectInfo.name}</h2>
                <p className="leading-snug">{projectInfo.excerpt}</p>
            </div>

            <div className="flex px-3">
                {projectInfo.technologies.map((item, idx) => (
                    <Tag title={item} key={idx} />
                ))}
            </div>

            <div className="w-full flex flex-row justify-between items-center px-3">
                <a href={`/projects/${projectInfo.slug}`}>
                    <button className="p-2 mt-1 font-bold text-md bg-gray-200 rounded hover:bg-gray-300">Read More</button>
                </a>
                <div>
                    <a href={projectInfo.link} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-6 inline"/>
                    </a>
                    <a href={projectInfo.github} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="w-6 ml-3 inline" />
                    </a>
                </div>
            </div>
        </article>
    );
}


function ImageOverlay({projectInfo}){
    return (
        <div className="w-100 h-100 inset-0 absolute bg-gray-900 opacity-90 flex items-center justify-around text-white text-center">
            <a href={`/projects/${projectInfo.slug}`} className="grid place-items-center">
                <FontAwesomeIcon icon={faInfoCircle} className="w-6" />
                <p>The Details</p>
            </a>
            <a href={projectInfo.link} className="grid place-items-center" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-6" />
                <p>Live Demo</p>
            </a>
        </div>
    );
}


function Tag({title}){
    const colorMap = { "React" : "bg-pink-300", "CSS":"bg-blue-300", "HTML":"bg-yellow-500", "D3.js":"bg-yellow-500", "MongoDB": "bg-green-300"}
    const color = colorMap[title] ? colorMap[title] : "bg-blue-300"

    return(
        <div className={`rounded-xl px-2 mr-1 ${color}`}>
            {title}
        </div>
    )
}


