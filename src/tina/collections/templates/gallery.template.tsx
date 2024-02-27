import type { Template } from "tinacms";

export const galleryBlock: Template = {

    label: "Image Gallery",
    name: "gallery",
    ui: {
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: item?.title };
      },
    },
    fields: [
        {
            type: 'object',
            label: 'Image Items',
            name: 'items',
            list: true,
            fields: [
                {
                    label: "Title",
                    name: "title",
                    type: "string",
                },
                { label: "Image", name: "image", type: "image" },
                {
                    label: "Size",
                    name: "size",
                    type: "string",
                    options: ["sm", "med", "lg", "xl"],
                },
            ]
        }
    ],
  };