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
        name: 'subheadline',
        title: 'Sub-Headline',
        type: 'string',
      },
      {
        title: 'Slot 1',
        name: 'slot1',
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'data', type: 'reference',
          to: {type: 'post'}, title: 'Data'},
          {name: 'category', type: 'string', title: 'Category'},
          {name: 'link', type: 'url', title: 'Link'},
        ]
      },
      {
        title: 'Slot 2',
        name: 'slot2',
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'data', type: 'reference',
          to: {type: 'Project'}, title: 'Data'},
          {name: 'category', type: 'string', title: 'Category'},
          {name: 'link', type: 'url', title: 'Link'},
        ]
      },
      {
        title: 'Slot 3',
        name: 'slot3',
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'data', type: 'string', title: 'Data'},
          {name: 'category', type: 'string', title: 'Category'},
          {name: 'link', type: 'url', title: 'Link'},
        ]
      },
      {
        title: 'Slot 4',
        name: 'slot4',
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'data', type: 'string', title: 'Data'},
          {name: 'category', type: 'string', title: 'Category'},
          {name: 'link', type: 'url', title: 'Link'},
        ]
      }
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }