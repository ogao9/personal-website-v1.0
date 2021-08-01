import Meta from "../../components/Meta";
import BlogHeader from "../../components/BlogHeader";
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../lib/sanityClient'
import { getPostData, getPostPaths } from "../../lib/sanity";

export default function SinglePost({postInfo}) {
    return (
        <>
            <Meta title={`Oliver's Blog | ${postInfo.title}`} />

            <div className="w-full lg:w-8/12 mx-auto ">
                <BlogHeader postInfo={postInfo} />
                <div className="prose max-w-full">
                    <BlockContent
                        blocks={postInfo.body}
                        imageOptions={{ w: 320, h: 240, fit: "max" }}
                        {...sanityClient.config()}
                    />
                </div>
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