import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const getNotionData = async () => {
    const databaseId = "9e431e8fd2bc4c409a87b1104e138270";
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Status",
            select: {
                equals: "Live",
            },
        },
    });
    const dataArray = await response.results[0];

    const content = dataArray.properties.Data.rich_text[0].plain_text;
    const title = dataArray.properties.Name.title[0].plain_text;
    const imageUrl = dataArray.properties.ImageURL.rich_text[0].plain_text;

    return { content, title, imageUrl };
};

export default async function handler(req, res) {
    try{
        const notionData = await getNotionData();
        return res.status(200).json(notionData);

    }catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}
