import Meta from "../../components/Meta";
import BlogHeader from "../../components/BlogHeader";
import BlockContent from '@sanity/block-content-to-react'
import { getPostData, getPostPaths } from "../../lib/sanity";

export default function SinglePost({postInfo}) {
    return (
        <>
            <Meta title={`Oliver's Blog | ${postInfo.title}`} />

            <div className="w-full sm:w-8/12 lg:w-7/12 mx-auto ">
                <BlogHeader postInfo={postInfo} />
                
                <article className="prose prose-lg dark:prose-dark max-w-full">
                    <BlockContent
                        blocks={postInfo.body}
                        imageOptions={{ w: 480, h: 360, fit: "max" }}
                    />
                </article>
            </div>
        </>
    );
}

export async function getStaticPaths(){
    const paths = await getPostPaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const postSlug = context.params.slug;
    const data = await getPostData(postSlug);

    return{
        props:{
            postInfo: data,
        }
    }
}