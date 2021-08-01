import Link from "next/link";
import Meta from "../../components/Meta";
import Intro from '../../components/Intro'
import {getPostData} from "../../lib/getPostInfo";

export default function BlogHome({ postsInfo }) {
    return (
        <>
            <Meta title="Blog | Oliver Gao" />
            <Intro
                title="Welcome to the Blog!"
                subtitle="A small collection of my thoughts and ideas"
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
        <div className="w-full flex justify-between items-center mb-8">
            <div>
                <h1 className="text-2xl font-bold">{postInfo.frontmatter.title}</h1>
                <h3>{postInfo.frontmatter.excerpt}</h3>
                <div className="flex text-sm text-gray-700 mt-2">
                    <p className="">{postInfo.frontmatter.date} &middot;</p>
                    <p>&nbsp; Reading Time &middot;</p>
                    <p>&nbsp; Tag</p>
                </div>
            </div>

            <div className="w-28 h-20">
                <img src={postInfo.frontmatter.cover_image} alt="Blog Cover Image" className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}