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
                <div className="max-w-md md:max-w-lg md:justify-self-end md:p-4 lg:px-8 mb-4">
                    <Image src={urlFor(aboutData.featuredImage).url()} alt="Oliver Featured Picture" width={512} height={512} className="rounded-lg" />
                </div>

                <section className="max-w-md md:max-w-xl text-md md:p-4 lg:px-8 pb-4">
                    <h1 className="text-2xl font-bold mb-5">{aboutData.headline}</h1>
                    <p className="mb-5">{aboutData.interests}</p>
                    <p className="mb-5">{aboutData.funFacts}</p>

                    <p>Learn more about me on:</p>
                    <div className="ml-4">
                        <div className="md:inline">
                            &nbsp;Gitub @<a href="https://github.com/ogao9" className="learn-more" target="_blank" rel="noreferrer">ogao9</a>,
                        </div>
                        <div className="md:inline">
                            &nbsp;<a href="/resume.pdf" target="_blank" rel="noreferrer">Resume <span className="learn-more">Here</span></a>,
                        </div>
                        <div className="md:inline">
                            &nbsp;or <Link href='/contact'><a className="learn-more">Contact Me</a></Link>
                        </div>
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