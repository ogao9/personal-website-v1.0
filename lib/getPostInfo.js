import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

//return an array of objects with post data
export function getPostData(){
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map(fileName=>{
        const slug = fileName.replace('.md', '');

        const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, fileName), 'utf-8');
        const {data:frontmatter} = matter(markdownWithMeta);

        return {
            slug,
            frontmatter
        }
    })

    return posts;
}

//return an array of objects in the specified format
export function getPostPaths(){
    const fileNames = fs.readdirSync(postsDirectory);

    const paths = fileNames.map(fileName => (
        { params: {slug: fileName.replace('.md', '')} }
    ))

    return paths;
}

//return an array containing the frontmatter and content of a single post
export function getSinglePostInfo(postSlug){
    const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, postSlug + '.md'), 'utf-8');
    const {content, data:frontmatter} = matter(markdownWithMeta);
    
    return [content, frontmatter];
}

//return an array of strings (the titles)
export function getPostTitles(){
    const titlesArray = [];
    const fileNames = fs.readdirSync(postsDirectory);

    fileNames.map(fileName=>{
        const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, fileName), 'utf-8');
        const {data:frontmatter} = matter(markdownWithMeta);
        titlesArray.push(frontmatter.title);
    })

    return titlesArray;
}