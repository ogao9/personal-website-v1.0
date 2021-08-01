import Image from 'next/image'
import Meta from '../components/Meta'
import Intro from '../components/Intro'
import { aboutInfo } from '../lib/data'

export default function about({data}) {
    return (
        <>
            <Meta title="About | Oliver Gao" />
            <Intro title="About Me" subtitle="An introduction" />

            <div className="w-full lg:flex justify-center p-4">
                <div className="flex-1 flex justify-center overflow-hidden rounded-lg">
                    <Image
                        src={data.image}
                        alt="Oliver Running"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="flex-1 flex justify-center px-2">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{data.headline}</h1>
                        <p className="mb-4">{data.interests}</p>
                        <p>{data.forfun}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export function getStaticProps(){
    const data = aboutInfo;

    return {
        props:{
            data
        }
    }
}