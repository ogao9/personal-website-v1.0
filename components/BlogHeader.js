import { urlFor } from "../lib/sanity"
import { prettyDate } from "../lib/utlities"


export default function BlogHeader({postInfo}){
    return(
        <header className="mt-8">
            <h1 className="text-3xl font-bold">{postInfo.title}</h1>
            <p className="mb-2">{postInfo.excerpt}</p>

            <div className="flex mb-4">
                <img
                    src={urlFor(postInfo.authorImage).width(50).height(50).url()}
                    alt="Blog Author Profile"
                    className="rounded-full"
                />
                <div className="ml-4">
                    <p>Oliver Gao</p>
                    <p>{prettyDate(postInfo.publishedAt)}</p>
                </div>
            </div>
            
            <img src={urlFor(postInfo.coverImage).url()} alt="Blog Post Cover"/>
        </header>
    )
}