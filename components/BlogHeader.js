import { urlFor } from "../lib/sanity"

export default function BlogHeader({postInfo}){
    return(
        <div className="mt-8">
            <h1 className="text-3xl font-bold">{postInfo.title}</h1>
            <p className="mb-2">{postInfo.excerpt}</p>

            <div className="flex flex-row mb-4">
                <img
                    src={urlFor(postInfo.authorImage).width(50).height(50).url()}
                    alt="Blog Cover Image"
                    className="rounded-full"
                />
                <div className="ml-4">
                    <p>Oliver Gao</p>
                    <p>{postInfo.publishedAt}</p>
                </div>
            </div>
            
            <img src={urlFor(postInfo.coverImage).url()} alt="Blog Post Cover"/>
        </div>
    )
}