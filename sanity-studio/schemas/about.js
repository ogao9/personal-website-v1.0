export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'headline',
        title: 'Headline',
        type: 'text',
      },
      {
        name: 'interests',
        title: 'Career Interests',
        type: 'text',
      },
      {
        name: 'funFacts',
        title: 'Fun Facts',
        type: 'text',
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }