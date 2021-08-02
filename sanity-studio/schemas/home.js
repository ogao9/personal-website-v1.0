export default {
    name: 'home',
    title: 'Home',
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
        name: 'subhead',
        title: 'Sub-Headline',
        type: 'text',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }