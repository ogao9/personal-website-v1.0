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
                <div className="max-w-md md:max-w-lg md:justify-self-end md:px-8 mb-4 ">
                    <Image src={urlFor(aboutData.featuredImage).url()} alt="Oliver Featured Picture" width={512} height={512} className="rounded-lg" />
                </div>

                <section className="max-w-md md:max-w-xl md:px-8 mb-4">
                    <h1 className="text-2xl font-bold mb-5">{aboutData.headline}</h1>
                    <p className="mb-5">{aboutData.interests}</p>
                    <p className="mb-5">{aboutData.funFacts}</p>

                    <p>Learn more about me on:</p>
                        <p className="ml-6">Gitub @<a href="https://github.com/ogao9" className="underline hover:font-semibold" target="_blank" rel="noreferrer">ogao9</a></p>
                        <p className="ml-6">Resume <a href="/OliverGao-Resume.pdf" className="underline hover:font-semibold" target="_blank" rel="noreferrer">Here</a></p>
                        <p className="ml-6">or <Link href='/contact'><a className="underline hover:font-semibold">Contact Me</a></Link></p>
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