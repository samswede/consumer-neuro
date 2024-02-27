import type { Template } from "tinacms";

export const pasttripsBlock: Template = {
    name: 'pasttrips',
    label: 'Past Trips Section',
  
    ui: {
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: item?.title };
      },
      // Setting a default will auto-populate new items with the given values
      defaultItem: {
        message: "",
        style: "cards",
        backgroundVideo: "ibiza/waves_drone.mp4",
        
        tripscarousel: [
          {
            title: "Past Trip",
            header: "Location 202X",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
            link: "/Location_202X",
            image: "",
          }
        ]
  
      }
    },
  
    fields: [
      
      {
        type: 'rich-text',
        label: 'Message',
        name: 'message',
      },
  
      {
        type: "string",
        label: "Carousel Style",
        name: "style",
        options: ["swiper", "cards"],
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
        type: 'object',
        label: 'Past Trips',
        name: 'tripscarousel',
        list: true,
  
        ui: {
          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.title };
          },
          // Setting a default will auto-populate new items with the given values
          defaultItem: {
            title: "Past Trip",
            header: "Location 202X",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
            link: "/Location_202X",
            image: "",
          }
        },
  
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          
          {
            type: 'rich-text',
            label: 'Header',
            name: 'header',
          },
  
          {
            type: 'rich-text',
            label: 'Description',
            name: 'description',
          },
  
          {
            type: 'string',
            label: 'Link',
            name: 'link',
          },
          
          
          {
            type: 'image',
            label: 'Image',
            name: 'image',
          },
        ],
      }
  
    ],
  }
