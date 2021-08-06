const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: '2021-08-01', 
  token: process.env.TOKEN,  
})

export default function handler(req, res) {
  const doc = {
      _type: "contact",
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      submissionTime: req.body.submissionTime,
  };

  return client
      .create(doc)
      .then(() => {
          return res.status(200).json({ status: "Submission Successful" });
      })
      .catch((err) => {
        console.log(err)
        return res.status(400).json(err)
       });
}
  