import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import Intro from '../components/Intro'
import { getAboutData, urlFor } from '../lib/sanity';

export default function About({aboutData}) {
    return (
        <>
            <Meta title="About | Oliver Gao" />
            <Intro title="About Me" subtitle="An introduction" />

            <div className="grid place-items-center md:grid-flow-col md:auto-cols-fr md:place-items-start">
                <div className="max-w-md md:max-w-lg md:justify-self-end md:p-4 lg:px-8 mb-4 ">
                    <Image src={urlFor(aboutData.featuredImage).url()} alt="Oliver Featured Picture" width={512} height={512} className="rounded-lg" />
                </div>

                <section className="max-w-md md:max-w-xl md:p-4 lg:px-8 mb-4">
                    <h1 className="text-2xl font-bold mb-5">{aboutData.headline}</h1>
                    <p className="mb-5">{aboutData.interests}</p>
                    <p className="mb-5">{aboutData.funFacts}</p>

                    <p>Learn more about me on:</p>
                    <div className="ml-4">
                        <span>Gitub @<a href="https://github.com/ogao9" className="underline hover:opacity-80" target="_blank" rel="noreferrer">ogao9,</a></span>
                        <span> Resume <a href="/resume.pdf" className="underline hover:opacity-80" target="_blank" rel="noreferrer">Here,</a></span>
                        <span> or <Link href='/contact'><a className="underline hover:opacity-80">Contact Me</a></Link></span>
                    </div>
                </section>
            </div>

             
        </>
    );
}

export async function getStaticProps(){
    const aboutData = await getAboutData();

    return {
        props:{
            aboutData
        }
    }
}