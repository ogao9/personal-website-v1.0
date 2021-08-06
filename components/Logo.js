import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <a className="text-lg flex items-center">
                <span className="text-4xl text-yellow-600">O</span>liver Gao
            </a>
        </Link>
    );
}