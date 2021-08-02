import Link from "next/link";
import Meta from "../../components/Meta";
import Intro from '../../components/Intro'
import BlogHomeStrip from '../../components/BlogHomeStrip'
import {getAllPosts} from "../../lib/sanity";

export default function BlogHome({ postsInfo }) {
    return (
        <>
            <Meta title="Blog | Oliver Gao" />
            <Intro
                title="Welcome to the Blog!"
                subtitle="A small collection of my thoughts and ideas"
            />

            <section className="lg:w-8/12 mx-auto">
                <div>
                    {postsInfo.map((obj, idx) => (
                        <Link href={`/blog/${obj.slug}`} key={idx}>
                            <a><BlogHomeStrip postInfo={obj}/></a>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export async function getStaticProps(){
    const data = await getAllPosts();

    return {
        props: {
            postsInfo: data,
        },
    };
}
