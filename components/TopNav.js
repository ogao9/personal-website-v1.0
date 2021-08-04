import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function TopNav() {
    const [expand, setExpand] = useState(false);
    const router = useRouter();
    const {theme, setTheme} = useTheme();

    return (
        <div className="w-full shadow bg-yellow-400 text-black dark:bg-gray-800 dark:text-gray-50">
            <div className="w-full lg:w-9/12 mx-auto flex items-center justify-between py-1">
                <nav className="hidden md:flex flex-40 items-center justify-start top-nav-links">
                    <Link href="/">
                        <a className={router.pathname === "/" ? 'activeLink' : ""}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? 'activeLink' : ""}>About</a>
                    </Link>
                    <Link href="/projects">
                        <a className={router.pathname === "/projects" ? 'activeLink' : ""}>Projects</a>
                    </Link>
                    <Link href="/blog">
                        <a className={router.pathname === "/blog" ? 'activeLink' : ""}>Blog</a>
                    </Link>
                </nav>

                <div className="p-2 md:flex md:flex-20 md:justify-center">
                    <Link href="/">
                        <a className="text-lg flex items-center">
                            <FontAwesomeIcon icon={faCircle} className="w-7 text-yellow-600 inline"/>liver Gao
                        </a>
                    </Link>
                </div>

                <div className="hidden md:flex flex-40 justify-end items-center">
                    <button className="p-2" onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>
                        <FontAwesomeIcon icon={faMoon} className="w-5" />
                    </button>
                </div>

                <div className="md:hidden p-4">
                    <button onClick={() => setExpand(!expand)}>
                        <FontAwesomeIcon icon={faBars} className="w-5" />
                    </button>
                </div>
            </div>
            {expand && <MobileNavDropdown />}
        </div>
    );
}


function MobileNavDropdown(){
    return (
        <nav className="md:hidden mobile-nav">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/contact">
                <a>Contact Me</a>
            </Link>
            <button>
                <FontAwesomeIcon icon={faMoon} className="w-5 inline"/> Toggle Theme
            </button>
        </nav>
    );
}

