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
      {
        name: 'subhead2',
        title: 'Sub-Headline 2',
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
        ]
      },
      {
        title: 'Slot 3',
        name: 'slot3',
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'data', type: 'string', title: 'Data'},
        ]
      },
      {
        title: 'Slot 4',
        name: 'slot4',
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'data', type: 'string', title: 'Data'},
        ]
      }
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }