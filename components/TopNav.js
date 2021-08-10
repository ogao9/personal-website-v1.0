import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function TopNav() {
    const {theme, setTheme} = useTheme();
    const router = useRouter();

    return (
        <div className="w-full shadow bg-primary text-black-text dark:bg-black-surface dark:text-white-text">
            <WideNavBar router={router} theme={theme} setTheme={setTheme} />
            <MobileNavDropdown router={router} theme={theme} setTheme={setTheme}  />
        </div>
    );
}


function WideNavBar({router, theme, setTheme}){
    return(
        <nav className="hidden md:flex w-full mx-auto lg:w-10/12 items-center justify-between px-4 py-1">
            <div className="flex-15">
                <Link href='/'>
                    <a><Logo/></a>
                </Link>
            </div>

            <div className="flex-40 flex items-center justify-start"> 
                <Link href="/">
                    <a className={`top-nav-link ${router.pathname === '/' ? "activeLink" : "" }`}>
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a className={`top-nav-link ${router.pathname === '/about' ? "activeLink" : "" }`}>
                        About
                    </a>
                </Link>
                <Link href="/projects">
                    <a className={`top-nav-link ${router.pathname.startsWith('/projects') ? "activeLink" : "" }`}>
                        Projects
                    </a>
                </Link>
                <Link href="/blog">
                    <a className={`top-nav-link ${router.pathname.startsWith('/blog') ? "activeLink" : "" }`}>
                        Blog
                    </a>
                </Link>
            </div>

            <div className="flex-40 flex justify-end items-center">
                <button
                    className="p-2"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="w-5" />
                </button>
            </div>
        </nav>
    )
}

function MobileNavDropdown({router, theme, setTheme}){
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
          setMenuOpen(!menuOpen);
        }
    }, [router.asPath]);

    return (
        <nav className="md:hidden">
            <div className="flex justify-between px-4">
                <div className="flex items-center">
                    <Link href='/'>
                        <a><Logo/></a>
                    </Link>
                </div>

                <div className="flex justify-end items-center">
                    <button className="p-4" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="w-5" /> 
                    </button>
                    <button className="p-2 ml-2" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={faBars} className="w-5" />
                    </button>
                </div>
            </div>

            {menuOpen &&
                <div>
                    <Link href="/">
                        <a className="mobile-link">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="mobile-link">About</a>
                    </Link>
                    <Link href="/projects">
                        <a className="mobile-link">Projects</a>
                    </Link>
                    <Link href="/blog">
                        <a className="mobile-link">Blog</a>
                    </Link>
                    <Link href="/contact">
                        <a className="mobile-link">Contact Me</a>
                    </Link>
                </div>
            }
        </nav>
    );
}