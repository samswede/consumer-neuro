import type { Template } from "tinacms";


export const researchBlock: Template = {
    name: 'research',
    label: 'Research Section',
  
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
        label: "Carousel Style",
        name: "carouselStyle",
        type: "string",
        options: ["cards", "flow", "click"],
      },
  
      {
        label: 'Research Carousel',
        name: 'researchCarousel',
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
            
            label: 'Authors',
            name: 'authors',
            type: 'string',
          },
  
          {
            label: 'Journal',
            name: 'journal',
            type: 'string',
          },

          {
            label: 'Link',
            name: 'link',
            type: 'string',
          },
          
          {
            
            label: "Card Background Color",
            description: "Write Tailwind CSS color names or hex codes e.g. 'bg-gradient-to-b from-black to-purple-600'",
            name: "backgroundColor",
            type: "string",
            
          },
  
        ],
      }
  
    ],
  }