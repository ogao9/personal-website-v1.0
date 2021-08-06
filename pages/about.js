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
                <div className="max-w-md mb-4 md:px-8 md:justify-self-end">
                    <Image src={urlFor(aboutData.featuredImage).url()} alt="Oliver Featured Picture" width={448} height={448} />
                </div>

                <section className="max-w-md md:px-8 md:max-w-lg mb-4">
                    <h1 className="text-2xl font-bold mb-5">{aboutData.headline}</h1>
                    <p className="mb-5">{aboutData.interests}</p>
                    <p className="mb-5">{aboutData.funFacts}</p>
                    <p>Learn more about me on:</p>
                    <p>
                        Gitub <a href="https://github.com/ogao9" className="border-b-2 border-black" target="_blank" rel="noreferrer">@ogao9</a> or 
                        Resume <a href={`${aboutData.resumeURL}`} className="border-b-2 border-black" target="_blank" rel="noreferrer">Here</a> or&nbsp;
                        <Link href='/contact'><a className="border-b-2 border-black">Contact Me</a></Link>
                    </p>
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