import readingTime from "reading-time";
import blocksToHtml from "@sanity/block-content-to-html"

export function prettyDate(dateString){
    const date = new Date(dateString);
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}

export function getReadingTime(content){
    const html = blocksToHtml({
        blocks: content,
      })

    const stats = readingTime(html);

    return Math.ceil(stats.minutes) + ' min read';
}