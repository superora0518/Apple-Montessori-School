export default {
  name: 'focus',
  title: 'Focuses',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
}
