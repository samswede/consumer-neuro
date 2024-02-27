import type { Template } from "tinacms";


export const workshopsBlock: Template = {
    name: 'workshops',
    label: 'Workshops Section',
  
    ui: {
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: item?.title };
      },

    },
  
    fields: [
      
      {
        label: 'Header',
        name: 'header',
        type: 'rich-text',
      },
  
      {
        label: 'Years',
        name: 'years',
        type: 'object',
        list: true,
  
        ui: {
          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.year };
          },

        },
        fields: [
          {
            label: 'Year',
            name: 'year',
            type: 'string',
          },
          {
            label: 'Workshops',
            name: 'workshops',
            type: 'object',
            list: true,

            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.title };
              },
    
            },
            fields: [
              {
                label: 'Title',
                name: 'title',
                type: 'string',
              },
              
              {
                label: 'Description',
                name: 'description',
                type: 'string',
              },

              {
                label: 'Images',
                name: 'images',
                type: 'object',
                list: true,

                fields: [
                  {
                    label: 'Image',
                    name: 'image',
                    type: 'image',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }