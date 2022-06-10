import TimeToSecondsField from 'sanity-plugin-time-seconds'
export default {
  name: 'locations',
  title: 'Locations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Location Name',
      type: 'string',
    },
    {
      name: 'slugLocation',
      title: 'Slug*',
      type: 'slug',
      options: {
        source: 'name',
        maxLength:  100,
        slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [{type: 'reference', to: {type: 'offering'}}]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
            }
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
            }
          ]
        }
      ]
    },
    {
      name: 'serves',
      title: 'Serves',
      type: 'array',
      of: [{type: 'reference', to: {type: 'town'}}]
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'object',
      fields: [
        {
          name: 'fromHour',
          title: 'From Hour',
          type: "number",
          inputComponent: TimeToSecondsField,
          options: {
            placeholder: "Please enter a value in 00:00 format"
          }
        },
        {
          name: 'toHour',
          title: 'To Hour',
          type: "number",
          inputComponent: TimeToSecondsField,
          options: {
            placeholder: "Please enter a value in 00:00 format"
          }
        },
      ],
    },
    {
      name: 'schoolDayHours',
      title: 'School Day`s Hours',
      type: 'object',
      fields: [
        {
          name: 'fromHour',
          title: 'From Hour',
          type: "number",
          inputComponent: TimeToSecondsField,
          options: {
            placeholder: "Please enter a value in 00:00 format"
          }
        },
        {
          name: 'toHour',
          title: 'To Hour',
          type: "number",
          inputComponent: TimeToSecondsField,
          options: {
            placeholder: "Please enter a value in 00:00 format"
          }
        },
      ],
    },
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        {
          name: 'street',
          type: 'string',
          title: 'Street'
        },
        {
          name: 'city',
          type: 'string',
          title: 'City',
        },
        {
          name: 'state',
          type: 'string',
          title: 'State'
        },
        {
          name: 'postalCode',
          type: 'string',
          title: 'Postal Code',
        }
      ],
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'array',
      of: [{type: 'string', options: { hotspot: true}}]
    },
    {
      name: 'tourId',
      title: 'Tour ID',
      type: 'string',
    },
    {
      name: 'enrollLink',
      title: 'Enroll Link',
      type: 'url',
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slugLocation'
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