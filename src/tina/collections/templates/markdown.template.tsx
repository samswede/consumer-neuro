import type { Template } from "tinacms";

/*
interface TextMDProps {
  content: TinaMarkdownContent | TinaMarkdownContent[];
  className?: string;
  headerClassName?: string;
  headerColor?: string;
  boldClassName?: string;
  boldColor?: string;
  pClassName?: string;
  pColor?: string;

  }

const TextMD: React.FC<TextMDProps> = ({ 
              content, 
              className = "mx-auto",
              headerClassName = "font-extrabold leading-tight tracking-tighter text-primary",
              headerColor = "text-primary",
              boldClassName = "bg-clip-text text-transparent",
              boldColor = "bg-gradient-to-b from-yellow-400 to-red-600",
              pClassName = "mt-8 max-w-[700px] px-2 text-center text-xl",
              pColor = "text-muted-foreground",
              
          }) => {

          */

export const markdownBlock: Template = {
    name: 'markdown',
    label: 'Markdown',

    /*
    defaultItem: {
      content: '## Hello, World!',
      style: {
        className: 'mx-auto',
        headerClassName: 'font-extrabold leading-tight tracking-tighter text-primary',
        headerColor: 'text-primary',
        boldClassName: 'bg-clip-text text-transparent',
        boldColor: 'bg-gradient-to-b from-yellow-400 to-red-600',
        pClassName: 'mt-8 max-w-[700px] px-2 text-center text-xl',
        pColor: 'text-muted-foreground',
      },
    },
    */
   
    fields: [
      
      {
        label: 'Content',
        name: 'content',
        type: 'rich-text',
      },
  
      {
        label: 'Style',
        name: 'style',
        type: 'object',
        fields: [
          {
            label: 'Class Name',
            name: 'className',
            description: 'The class name for the container, default: "mx-auto"',
            type: 'string',
          },
          {
            label: 'Header Class Name',
            name: 'headerClassName',
            description: 'The class name for the header, default: "font-extrabold leading-tight tracking-tighter text-primary"',
            type: 'string',
          },
          {
            label: 'Header Color',
            name: 'headerColor',
            description: 'The color for the header, default: "text-primary"',
            type: 'string',
          },
          {
            label: 'Bold Class Name',
            name: 'boldClassName',
            description: 'The class name for the bold text, default: "bg-clip-text text-transparent"',
            type: 'string',
          },
          {
            label: 'Bold Color',
            name: 'boldColor',
            description: 'The color for the bold text, default: "bg-gradient-to-b from-yellow-400 to-red-600"',
            type: 'string',
          },
          {
            label: 'Paragraph Class Name',
            name: 'pClassName',
            description: 'The class name for the paragraph, default: "mt-8 max-w-[700px] px-2 text-center text-xl"',
            type: 'string',
          },
          {
            label: 'Paragraph Color',
            name: 'pColor',
            description: 'The color for the paragraph, default: "text-muted-foreground"',
            type: 'string',
          },
        ],
      },
  
    ],
  }
  