import { Client } from "@notionhq/client"

const notion = new Client({ auth: "secret_kRQSnW78dkgYrovebcScvP2ZpNsvaihQnbpTg9a6hzs" })

const databaseId = "9e431e8fd2bc4c409a87b1104e138270"

export async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

export async function getData(){
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
}

