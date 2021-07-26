import Link from 'next/link'

export default function HomeNav() {
    return (
        <nav className="w-full flex justify-around home-nav">
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
        </nav>
    );
}
