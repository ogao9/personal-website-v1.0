import Image from 'next/image'
import Meta from '../components/Meta'
import Intro from '../components/Intro'
import { getAboutData, urlFor } from '../lib/sanity';

export default function about({aboutData}) {
    return (
        <>
            <Meta title="About | Oliver Gao" />
            <Intro title="About Me" subtitle="An introduction" />

            <div className="w-full lg:flex justify-center p-4">
                <div className="flex-1 flex justify-center overflow-hidden rounded-lg">
                    <Image src={urlFor(aboutData.featuredImage).url()} alt="Oliver Featured Picture" width={400} height={400} />
                </div>
                <div className="flex-1 flex justify-center px-2">
                    <section>
                        <h1 className="text-2xl font-bold mb-4">{aboutData.headline}</h1>
                        <p className="mb-4">{aboutData.interests}</p>
                        <p>{aboutData.funFacts}</p>
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