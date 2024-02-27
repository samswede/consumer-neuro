import type { Template } from "tinacms";

export const heroBlock: Template = {
    name: 'hero',
    label: 'Hero',
  
    fields: [
      
      {
        type: 'rich-text',
        label: 'Message',
        name: 'message',
      },
  
      {
        type: 'image',
        label: 'Background Video (MP4 <30MB)',
        name: 'backgroundVideo',
      },
  
      {
        type: 'image',
        label: 'Background Fallback Image',
        name: 'backgroundFallbackImage',
      },
  
  
      {
        name: "links",
        label: "Links",
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
  
    ],
  }
