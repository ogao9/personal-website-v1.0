export default {
    name: 'Project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'publishDate',
        title: 'Date Published',
        type: 'date',
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
      },
      {
        name: 'externalLink',
        title: 'External Link',
        type: 'url',
      },
      {
        name: 'githubLink',
        title: 'Github Link',
        type: 'url',
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'image',
        title: 'Cover Image',
        description: 'Image with an aspect Ratio of 16:9 is preferred',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }