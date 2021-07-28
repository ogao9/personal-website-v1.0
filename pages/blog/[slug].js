import Meta from "../../components/Meta";
import BlogContent from "../../components/BlogContent";
import {getPostPaths, getSinglePostInfo} from "../../lib/getPostInfo";

export default function SinglePost({frontmatter, content}) {
    return (
        <>
            <Meta title={`Oliver's Blog | ${frontmatter.title}`} />
            <div className="grid place-items-center">
                <BlogContent frontmatter={frontmatter} content={content}/>
            </div>
        </>
    );
}

export async function getStaticPaths(){
    //we need to return an array of possible values for [slug]
    const paths = getPostPaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    //get data based on the slug by destructuring an object (which contains the params object passed from getStaticPaths)
    const postSlug = params.slug;
    const [content, frontmatter] = getSinglePostInfo(postSlug);

    return{
        props:{
            frontmatter,
            content
        }
    }
}