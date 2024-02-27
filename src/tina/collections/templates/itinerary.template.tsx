import type { Template } from "tinacms";


export const itineraryBlock: Template = {
    name: 'itinerary',
    label: 'Itinerary Section',
  
    ui: {
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: item?.title };
      },
      // Setting a default will auto-populate new items with the given values
  
      /*
      defaultItem: {
        
        message: "",
  
        badges: [
          {
            badge: "badge 1",
            description: "badge 1 description",
          },
          {
            badge: "badge 2",
            description: "badge 2 description",
          },
          {
            badge: "badge 3",
            description: "badge 3 description",
          },
        ],
        
        carouselTitle: "Swipe through the days",
        
        itineraryCarousel: [
          {
            title: "Day 1",
            header: "",
            description: "",
            badges: [
              {
                badge: "badge 1",
                description: "badge 1 description",
              },
              {
                badge: "badge 2",
                description: "badge 2 description",
              },
              {
                badge: "badge 3",
                description: "badge 3 description",
              },
            ],
            
            backgroundStyle: "circle",
            backgroundColor: "purple",
          }
        ]
  
      }
      */
    },
  
    fields: [
      
      {
        label: 'Message',
        name: 'message',
        type: 'rich-text',
      },
  
      {
        label: 'Badges',
        name: 'badges',
        type: 'object',
        list: true,
  
        ui: {
          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.badge };
          },
          
        },
  
        fields: [
          {
            label: 'Badge',
            name: 'badge',
            type: 'string',
          },
  
        ],
      },
  
      {
        label: 'Carousel Title',
        name: 'carouselTitle',
        type: 'rich-text',
      },
  
      {
        label: "Carousel Style",
        name: "carouselStyle",
        type: "string",
        options: ["cards", "flow", "click"],
      },
  
      {
        label: "Carousel Background Video",
        name: "carouselBackgroundVideo",
        type: "image",
      },
  
      {
        label: "Carousel Background Fallback Image",
        name: "carouselBackgroundFallbackImage",
        type: "image",
      },
  
  
      {
        label: 'Itinerary Cards Carousel',
        name: 'itineraryCarousel',
        type: 'object',
        list: true,
  
        ui: {
          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.title };
          },
          // Setting a default will auto-populate new items with the given values
  
          /*
          defaultItem: {
            title: "Day X",
            header: "",
            description: "",
            badges: [
              {
                badge: "badge 1",
                description: "badge 1 description",
              },
              {
                badge: "badge 2",
                description: "badge 2 description",
              },
              {
                badge: "badge 3",
                description: "badge 3 description",
              },
            ],
            backgroundStyle: "circle",
            backgroundColor: "red",
          }
          */
        },
  
        fields: [
          {
            
            label: 'Title',
            name: 'title',
            type: 'string',
          },
          
          {
            
            label: 'Header',
            name: 'header',
            type: 'rich-text',
          },
  
          {
            
            label: 'Description',
            name: 'description',
            type: 'rich-text',
          },
  
          {
            label: 'Badges',
            name: 'badges',
            type: 'object',
            list: true,
  
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.badge };
              },
              
            },
  
            fields: [
              {
                label: 'Badge',
                name: 'badge',
                type: 'string',
              },
              { 
                label: 'Description',
                name: 'description',
                type: 'string',
              }
  
            ],
            
          },
          
          {
            
            label: "Card Background Color",
            description: "Write Tailwind CSS color names or hex codes e.g. 'bg-gradient-to-b from-black to-purple-600'",
            name: "backgroundColor",
            type: "string",
            
          },
  
          {
            label: "Special SVG Style",
            name: "specialStyle",
            type: "string",
            options: ["circle", "horizon", "none"],
          },
  
          {
            
            label: "Special SVG Color",
            name: "specialColor",
            type: "string",
            options: ["red", "green", "blue", "purple", "yellow", "orange", "cyan", "magenta"],
          },
        ],
      }
  
    ],
  }