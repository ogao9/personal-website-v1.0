import Image from 'next/image'
import Meta from '../components/Meta'
import Intro from '../components/Intro'
import OliverRunning from '../public/images/oliver-running.jpg'

export default function about() {
    return (
        <>
            <Meta title="About | Oliver Gao" />
            <Intro title="About Me" subtitle="Who am I?" />

            <div className="w-full lg:flex justify-center">
                <div className="flex-50 flex justify-center overflow-hidden">
                    <Image
                        src={OliverRunning}
                        alt="Oliver Running"
                        width={400}
                        height={536}
                    />
                </div>
                <div className="flex-50 px-6">
                    <h1 className="text-2xl font-bold mb-4">
                        Hello! I'm Oliver. I'm a sophomore at the University of Michigan
                        studying Data Science.
                    </h1>
                    <p className="mb-4">
                        I enjoy making things that I can visually see and interact with,
                        like websites and data visualizations. More career interest stuff
                        here...
                    </p>
                    <p>Some other things I enjoy: running, nba basketball, fruit</p>
                </div>
            </div>
        </>
    );
}
