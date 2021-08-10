const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: '2021-08-01', 
  token: process.env.TOKEN,  
})

import groq from 'groq';

export default async function handler(req, res) {
  const query = groq`*[_type == "contact"]|order(time desc)`
  const submissions = await client.fetch(query)

  //Spam Prevention
  if(submissions.length > 0){
    if((Date.parse(req.body.time) - Date.parse(submissions[0].time)) / 1000  <= 300){
      return res.status(401).json({ status: "Spam Mitigation Triggered. Please try again in five minutes." })
    }
  
    if(submissions.length >= 30){
      return res.status(401).json({ status: "Inbox is full. Please try again later." })
    }
  }

  const doc = {
      _type: "contact",
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      time: req.body.time,
  };

  return client
      .create(doc)
      .then(() => {
          return res.status(200).json({ status: "Submission Successful" });
      })
      .catch((err) => {
        console.log(err)
        return res.status(500).json(err)
       });
}
  