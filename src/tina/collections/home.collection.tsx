import type { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";
import { accordionBlock } from "./templates/accordion.template";
import { pasttripsBlock } from "./templates/pasttrips.template";
import { upcomingtripsBlock } from "./templates/upcomingtrips.template";


const homeCollection : Collection = {
    label: 'Home',
    name: 'home',
    path: 'content/home',

    ui: {
      // Don't allow editors to create new items
      allowedActions: {
        create: false,
        delete: false,
      },

      // This makes the page the default route in the CMS
      // This is what makes it live editable!
      router: props => {
        return `/`
      }
    },

    fields: [
      {
        type: 'object',
        list: true,
        name: 'blocks',
        label: 'Sections',
        templates: [  heroBlock, 

                      upcomingtripsBlock,
                      pasttripsBlock,

                      contentBlock, 
                      accordionBlock,
                    ],
      },
    ],
  }

export default homeCollection;