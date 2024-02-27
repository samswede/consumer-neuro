import type { Template } from "tinacms";

export const heroBlock: Template = {
    name: 'hero',
    label: 'Hero',
  
    fields: [
      
      {
        label: 'Header',
        name: 'header',
        type: 'rich-text',
      },
  
      {
        
        label: 'Hero Image',
        name: 'heroImage',
        type: 'image',
      },
  
  
      {
        label: "Links",
        name: "buttons",
        type: "object",
        list: true,
  
        ui: {
          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.label };
          },
        },
  
        fields: [
          { type: "string", name: "link" },
          { type: "string", name: "label" },
          {
            type: "string",
            name: "style",
            options: ["light", "dark"],
          },
        ],
      },

      {
        label: 'Description',
        name: 'description',
        type: 'rich-text',
      },
  
    ],
  }
