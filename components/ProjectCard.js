import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { urlFor } from '../lib/sanity'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard({projectInfo}) {
    const router = useRouter()
    const [hover, setHover] = useState(false);

    return (
        <article className="project-card rounded border shadow-md hover:shadow-lg dark:bg-black-surface dark:border-black-surface">
            <section className="relative mb-3 overflow-hidden" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img
                    src={urlFor(projectInfo.image).url()}
                    alt="Project Cover Photo"
                    className="object-cover"
                />
                {hover && <ImageOverlay projectInfo={projectInfo}/>}
            </section>

            <section className="cursor-pointer mb-1 px-3" onClick={() => router.push(`/projects/${projectInfo.slug}`) }>
                <h2 className="text-2xl font-bold mb-1">{projectInfo.title}</h2>
                <p className="leading-snug">{projectInfo.excerpt}</p>
            </section>

            <section className="flex p-3">
                {projectInfo.technologies.map((item, idx) => (
                    <Tag title={item} key={idx} />
                ))}
            </section>
        </article>
    );
}

function ImageOverlay({projectInfo}){
    return (
        <div className="absolute inset-0 flex items-center justify-around bg-gray-900 text-white text-center opacity-90 ">
            <Link href={`/projects/${projectInfo.slug}`}> 
                <a className="grid place-items-center p-2">
                    <FontAwesomeIcon icon={faInfoCircle} className="w-6" />
                    <p>The Details</p>
                </a>
            </Link>

            {projectInfo.externalLink &&
            <a href={projectInfo.externalLink} className="grid place-items-center p-2" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-6" />
                <p>Live Example</p>
            </a>}
        </div>
    );
}


function Tag({ title }) {
    const colorMap = {
        React: "bg-pink-400",
        SQL: "bg-pink-300",
        CSS: "bg-blue-400",
        HTML: "bg-yellow-500",
        "D3.js": "bg-yellow-500",
        MongoDB: "bg-green-500",
        Python: "bg-yellow-300",
        JavaScript: "bg-yellow-300",
        Express: "bg-gray-400"
    };
    const color = colorMap[title] ? colorMap[title] : "bg-blue-300";

    return <div className={`rounded-xl text-black-text font-semibold px-2 mr-1 ${color}`}>{title}</div>;
}


