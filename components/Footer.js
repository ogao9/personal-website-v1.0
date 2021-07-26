import Link from 'next/link'
import { useAuth } from "../lib/auth"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    const auth = useAuth();

    const handleSecret = ()=>{
        console.log("auth.user", auth.user)
        auth.signinWithGoogle();
    }

    return (
        <footer className="w-full bg-gray-50">
            <div className="w-full lg:w-9/12 mx-auto p-5 flex flex-col items-center">
                <div className=" w-80 lg:w-96 flex justify-between mb-2">
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
                </div>

                <div className="flex justify-center">
                    <Link href="/">
                        <a className="p-4">&copy; 2021 <FontAwesomeIcon icon={faCircle} className="inline w-5 text-yellow-500"/>liver Gao</a>
                    </Link>
                </div>

                <button onClick={handleSecret} className="mt-2 cursor-default">
                    <FontAwesomeIcon icon={faUserSecret} className="w-4"/>
                </button>
            </div>
        </footer>
    )
}
