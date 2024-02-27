import type { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";
import { researchBlock } from "./templates/research.template";
import { workshopsBlock } from "./templates/workshops.template";


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
                      contentBlock, 
                      researchBlock,
                      workshopsBlock
                    ],
      },
    ],
  }

export default homeCollection;