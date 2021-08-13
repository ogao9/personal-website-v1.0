export default {
    name: 'contact',
    title: 'Contact Form Submissions',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
      {
        name: 'time',
        title: 'Time Submitted',
        type: 'datetime',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'message',
      },
    },
  }