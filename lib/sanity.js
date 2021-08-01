import sanityClient from './sanityClient';
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq';

export async function getPostPaths(){
    const allPosts = await sanityClient.fetch('*[_type == "post"]')
    const paths = await allPosts.map((post) => ({ params: { slug: post.slug.current } }))

    return paths;
}

export async function getPostData(postSlug){
    const query = groq`*[_type == "post" && slug.current == $postSlug][0]{
        title,
        "slug": slug.current,
        excerpt,
        coverImage,
        publishedAt,
        "authorName": author->name,
        "authorImage": author->image,
        body,
      }`
    const data =  await sanityClient.fetch(query, { postSlug })

    return data;
}

export async function getAllPosts(){
    const query = groq`*[_type == "post"]{
        title,
        "slug": slug.current,
        excerpt,
        coverImage,
        publishedAt,
        "authorName": author->name,
        "authorImage": author->image,
        body,
      }|order(publishedAt desc)`
    const data =  await sanityClient.fetch(query)
    
    return data;
}

export function urlFor (source) {
    return imageUrlBuilder(sanityClient).image(source)
}