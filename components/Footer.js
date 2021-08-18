import Link from 'next/link'
import Logo from '../components/Logo'

export default function Footer() { 
    return (
        <footer className="w-full shadow-inner bg-black-surface text-white-text">
            <div className="flex flex-col items-center p-5">
                <nav className="w-80 flex justify-between mb-2">
                    <Link href="/about">
                        <a className="footer-link">About</a>
                    </Link>
                    <Link href="/projects">
                        <a className="footer-link">Projects</a>
                    </Link>
                    <Link href="/blog">
                        <a className="footer-link">Blog</a>
                    </Link>
                    <Link href="/contact">
                        <a className="footer-link">Contact Me</a>
                    </Link>
                </nav>

                <div className="flex justify-center">
                    <Link href="/">
                        <a className="p-4 flex items-center">
                            &copy; 2021&nbsp;<Logo/>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
