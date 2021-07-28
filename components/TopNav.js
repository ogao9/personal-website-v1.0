import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function TopNav() {
    const [expand, setExpand] = useState(false);
    const router = useRouter();

    return (
        <div className="w-full shadow bg-gray-50">
            <nav className="w-full lg:w-9/12 mx-auto flex items-center justify-between py-1">
                <div className="hidden md:flex flex-40 items-center justify-start top-nav-links">
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? 'activeLink' : ""}>About</a>
                    </Link>
                    <Link href="/projects">
                        <a className={router.pathname === "/projects" ? 'activeLink' : ""}>Projects</a>
                    </Link>
                    <Link href="/play">
                        <a className={router.pathname === "/play" ? 'activeLink' : ""}>Play</a>
                    </Link>
                    <Link href="/blog">
                        <a className={router.pathname === "/blog" ? 'activeLink' : ""}>Blog</a>
                    </Link>
                </div>

                <div className="p-2 md:flex md:flex-20 md:justify-center">
                    <Link href="/">
                        <a className="text-lg flex items-center">
                            <FontAwesomeIcon icon={faCircle} className="w-7 text-yellow-500 inline"/>liver Gao
                        </a>
                    </Link>
                </div>

                <div className="hidden md:flex flex-40 justify-end items-center">
                    <a href="https://github.com/ogao9" target="_blank" rel="noreferrer" className="tooltip">
                        <FontAwesomeIcon icon={faGithub} className="w-5 mr-8"/>
                        <p className="text-sm font-semibold tooltiptext">My Github</p>
                    </a>
                    <Link href="/contact">
                        <a className="tooltip">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 "/>
                         <p className="text-sm font-semibold tooltiptext">Contact Me</p>

                        </a>
                    </Link>
                </div>

                <div className="md:hidden p-4">
                    <button onClick={() => setExpand(!expand)}>
                        <FontAwesomeIcon icon={faBars} className="w-5" />
                    </button>
                </div>
            </nav>
            {expand && <MobileNavDropdown />}
        </div>
    );
}


function MobileNavDropdown(){
    return (
        <nav className="md:hidden mobile-nav">
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
            <Link href="/play">
                <a>Play</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <a href="https://github.com/ogao9" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="w-5 inline"/> My Github
            </a>
            <Link href="/contact">
                <a><FontAwesomeIcon icon={faEnvelope} className="w-5 inline"/> Contact Me</a>
            </Link>
        </nav>
    );
}

