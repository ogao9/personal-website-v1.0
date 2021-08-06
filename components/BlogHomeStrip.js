import { urlFor } from "../lib/sanity"
import {prettyDate, getReadingTime} from '../lib/utlities'

export default function BlogHomeStrip({postInfo}){

    return(
        <div className="w-full flex justify-between items-center mb-8">
            <div className="flex-initial">
                <h1 className="text-lg sm:text-2xl font-bold">{postInfo.title}</h1>
                <h3 className="text-sm sm:text-base">{postInfo.excerpt}</h3>
                <div className="flex text-xs sm:text-sm text-gray-700 dark:text-gray-50 mt-2">
                    <p className="">{prettyDate(postInfo.publishedAt)} &middot;&nbsp;</p>
                    <p>{getReadingTime(postInfo.body)} &middot;&nbsp;</p>
                    <p className="bg-gray-200 text-gray-700 rounded-xl px-1 sm:px-2">{postInfo.category}</p>
                </div>
            </div>

            <div className="flex-shrink-0 w-20 sm:w-28 h-20 p-1">
                <img
                    src={urlFor(postInfo.coverImage).url()}
                    alt="Blog Cover Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

