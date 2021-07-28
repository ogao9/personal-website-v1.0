import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export default function Footer() { 

    return (
        <footer className="w-full bg-gray-50 shadow-inner">
            <div className="w-full lg:w-9/12 mx-auto p-5 flex flex-col items-center">
                <nav className=" w-80 lg:w-96 flex justify-between mb-2 footer-nav">
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
                    <Link href="/contact">
                        <a>Contact Me</a>
                    </Link>
                </nav>

                <div className="flex justify-center">
                    <Link href="/">
                        <a className="p-4">&copy; 2021 <FontAwesomeIcon icon={faCircle} className="inline w-5 text-yellow-500"/>liver Gao</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
