import type { Template } from 'tinacms'


const svgColorCircle: Template = {
  name: 'svgColorCircle',
  label: 'SVG Color Circle',

  ui: {
    itemProps: (item) => {
      return { label: item?.title || 'Color Circle' };
    },
  },

  fields: [
    {
      type: 'string',
      label: 'Circle Title',
      name: 'title',
    },
    {
      type: 'object',
      label: 'Color Stops',
      name: 'colorStops',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Offset',
          name: 'offset',
          description: 'Example: 50%',
        },
        {
          type: 'string',
          label: 'Color',
          name: 'color',
          description: 'Example: #FF0000 or hsl(0, 100%, 50%)',
        },
        {
          type: 'string',
          label: 'Opacity',
          name: 'opacity',
          description: 'Example: 1 for 100% opacity',
        },
      ],
    },
  ],
}

export default svgColorCircle;
