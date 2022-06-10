export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slugBlog',
      title: 'Slug*',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'slugBlog',
      media: 'heroImage'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle && subtitle.current ? subtitle.current : '',
        media: media
      }
    }
  }
}
