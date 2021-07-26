import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard({projectInfo}) {
    const technologies = ["React", "CSS", "HTML"];

    return (
        <div className="project-card-grid shadow-md rounded">
            <div className="mb-2 overflow-hidden">
                <img src={projectInfo.imageUrl} alt="Project Cover Photo" className="w-100 h-100 object-cover" />
            </div>

            <div className="mb-1 px-3">
                <h2 className="text-2xl font-bold">{projectInfo.title}</h2>
                <p className="leading-snug">{projectInfo.description}</p>
            </div>

            <div className="flex px-3">
                {technologies.map((item, idx) => (
                    <Tag title={item} key={idx} />
                ))}
            </div>

            <div className="w-full flex flex-row justify-between items-center px-3">
                <a href="#">
                    <button className="py-2 mt-1 font-bold text-md">Read More</button>
                </a>
                <div>
                    <a href={projectInfo.link} target="_blank" rel="noreferrer"> 
                        <button>
                            <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                className="w-6 mr-2"
                            />
                        </button>
                    </a>
                    <a href={projectInfo.github} target="_blank" rel="noreferrer">
                        <button>
                            <FontAwesomeIcon icon={faGithub} className="w-6" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

function Tag({title}){
    const colorMap = { "React" : "bg-pink-300", "CSS":"bg-blue-300", "HTML":"bg-yellow-500"}
    const color = colorMap[title] ? colorMap[title] : "bg-blue-300"

    return(
        <div className={`rounded-xl px-2 mr-1 ${color}`}>
            {title}
        </div>
    )
}

{/* <Image
                    src={projectInfo.imageUrl}
                    alt="project cover photo"
                    layout="fill"
                    objectFit
                /> */}