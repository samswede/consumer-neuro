import { Collection } from "tinacms";


const globalCollection : Collection = {
    label: 'Global',
    name: 'global',
    path: 'content/global',

    ui: {
      // Don't allow editors to create new items
      allowedActions: {
        create: false,
        delete: false,
      },

      // This makes the home page the default route when editing live
      router: props => {
        return `/demo`
      },

    },

    fields: [
      {
        
        label: 'Theme',
        name: 'theme',
        type: 'string',
        description: 'Choose a theme for the website',
        options: ['light', 'dark', 'dark cappuccino', 'dark test', 'dark zinc'],
        
      },

      {
        label: 'Sheet Google Form',
        name: 'sheetGoogleForm',
        type: 'object',
        fields: [
          {
            label: 'Button Text',
            name: 'buttonText',
            type: 'string',
            description: 'Text for the button that will open the Google Form',
          },
          {
            label: 'Google Form Embedded URL',
            name: 'embeddedFormURL',
            type: 'string',
            description: 'URL of the Google Form to embed (must be the embed URL, not the form URL!)',
          },
        ],
      }

    ],
  }

export default globalCollection;