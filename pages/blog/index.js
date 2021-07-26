import Link from "next/link";
import Image from 'next/image'
import Meta from "../../components/Meta";
import Intro from '../../components/Intro'
import {getPostData} from "../../lib/getPostInfo";
import Plants from '../../public/images/plants-4-3.jpg'

export default function BlogHome({ postsInfo }) {
    return (
        <>
            <Meta title="Blog | Oliver Gao" />
            <Intro
                title="Welcome to the Blog!"
                subtitle="Thanks for reading my blog! Take it or leave it. They're just my ideas."
            />

            <div className="lg:w-8/12 mx-auto">
                <div>
                    {postsInfo.map((obj, idx) => (
                        <Link href={`/blog/${obj.slug}`} key={idx}>
                            <a>
                                <BlogHomeStrip postInfo={obj}/>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const postsInfo = getPostData(); //postsInfo is an object containing this: {slug, frontmatter}

    return {
        props: {
            postsInfo,
        },
    };
}

function BlogHomeStrip({postInfo}){
    return(
        <div className="flex flex-row justify-between items-center mb-8">
            <div>
                <h1 className="text-2xl font-bold">{postInfo.frontmatter.title}</h1>
                <h3>{postInfo.frontmatter.excerpt}</h3>
                <div className="flex text-sm text-gray-700 mt-2">
                    <p className="">{postInfo.frontmatter.date} &middot;</p>
                    <p>&nbsp; Reading Time &middot;</p>
                    <p>&nbsp; Pill Tag</p>
                </div>
            </div>

            <div className="flex-20">
                <Image src={Plants} alt="Blog Cover Image" width={100} height={75}/>
            </div>
        </div>
    )
}