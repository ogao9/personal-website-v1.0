import { urlFor } from "../lib/sanity"

export default function BlogHomeStrip({postInfo}){
    return(
        <div className="w-full flex justify-between items-center mb-8">
            <div>
                <h1 className="text-2xl font-bold">{postInfo.title}</h1>
                <h3>{postInfo.excerpt}</h3>
                <div className="flex text-sm text-gray-700 mt-2">
                    <p className="">{postInfo.publishedAt} &middot;</p>
                    <p>&nbsp; Reading Time &middot;</p>
                    <p>&nbsp; Tag</p>
                </div>
            </div>

            <div className="w-28 h-20">
                <img
                    src={urlFor(postInfo.coverImage).url()}
                    alt="Blog Cover Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}