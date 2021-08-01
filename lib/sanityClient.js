import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'mo42qo1k',
    dataset: "production",
    apiVersion: '2021-08-01',
    useCdn: true // `false` if you want to ensure fresh data
})