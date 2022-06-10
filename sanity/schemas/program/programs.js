export default {
  name: 'programs',
  title: 'Programs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slugProgram',
      title: 'Slug*',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
        slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'focuses',
      title: 'Focuses',
      type: 'array',
      of: [{type: 'reference', to: {type: 'focus'}}]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'ages',
      title: 'Ages',
      type: 'object',
      fields: [
        {
          name: 'fromAge',
          type: 'object',
          title: 'From Age',
          fields:[
            {
              name: 'fromAgeUnit',
              type: 'string',
              title: 'Age Unit',
              options: {
                list: [{title: "Weeks", value: "WEEKS"}, {title: "Months", value: "MONTHS"}, {title: "Years", value: "YEARS"}],
              }
            },
            {
              name: 'fromAgeValue',
              type: 'number',
              title: 'From Age Value'
            },
          ]
        },
        {
          name: 'toAge',
          type: 'object',
          title: 'To Age',
          fields:[
            {
              name: 'toAgeUnit',
              type: 'string',
              title: 'Age Unit',
              options: {
                list: [{title: "Weeks", value: "WEEKS"}, {title: "Months", value: "MONTHS"}, {title: "Years", value: "YEARS"}],
              }
            },
            {
              name: 'toAgeValue',
              type: 'number',
              title: 'To Age Value'
            },
          ]
        }
      ]
    },
    {
      name: 'tourId',
      title: 'Tour ID',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'slugProgram'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle && subtitle.current ? subtitle.current : ''
      }
    }
  }
}
