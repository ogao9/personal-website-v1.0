import Image from 'next/image'
import marked from 'marked'
import OliverProfile from '../public/images/oliver-profile.jpg'

export default function BlogContent({frontmatter, content}) {
    return (
        <div className="w-full pt-8 lg:w-9/12 lg:pt-16">
            <div>
                <BlogHeader frontmatter={frontmatter}/>
                <BlogMeat content={content}/>
            </div>
        </div>
    );
}

function BlogHeader({frontmatter}){
    return(
        <div className="mb-2">
            <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
            <p className="mb-2">{frontmatter.excerpt}</p>

            <div className="flex flex-row mb-4">
                <Image src={OliverProfile} alt="Oliver profile pic" width={50} height={50} className="rounded-full"/>
                <div className="ml-4">
                    <p>Oliver Gao</p>
                    <p>{frontmatter.date}</p>
                </div>
            </div>
            <img src={frontmatter.cover_image} alt="Blog Post Cover"/>
        </div>
    )
}


function BlogMeat({content}){
    return(
        <div
            dangerouslySetInnerHTML={{ __html: marked(content) }}
            className="prose"
        />
    )
}