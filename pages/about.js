import Image from 'next/image'
import Meta from '../components/Meta'
import Intro from '../components/Intro'
import { getAboutData, urlFor } from '../lib/sanity';

export default function About({aboutData}) {
    return (
        <>
            <Meta title="About | Oliver Gao" />
            <Intro title="About Me" subtitle="An introduction" />

            <div className="max-w-md mx-auto md:max-w-none md:flex justify-center p-4 ">
                <div className="flex-1 flex justify-center overflow-hidden px-4 mb-4">
                    <Image src={urlFor(aboutData.featuredImage).url()} alt="Oliver Featured Picture" width={400} height={400} />
                </div>
                <div className="flex-1 flex justify-center px-4">
                    <section>
                        <h1 className="text-3xl font-bold mb-5">{aboutData.headline}</h1>
                        <p className="mb-5">{aboutData.interests}</p>
                        <p className="mb-5">{aboutData.funFacts}</p>
                        <p>Learn more about me on:&nbsp;
                            <span className="block md:inline">
                                Gitub <a href="https://github.com/ogao9" className="border-b-2 border-black" target="_blank" rel="noreferrer">@ogao9</a> or 
                                Resume <a href={`${aboutData.resumeURL}`} className="border-b-2 border-black" target="_blank" rel="noreferrer">Here</a>
                            </span>
                        </p>
                    </section>
                </div>
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