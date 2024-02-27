import React from 'react';

import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text"


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

    return (
        <TinaMarkdown
            content={content}
            components={{
                h1: (props) => (
                    <h1
                        className={`${className} text-5xl ${headerClassName} ${headerColor} md:text-7xl`}
                        {...props}
                    />
                ),
                h2: (props) => (
                    <h2
                        className={`${className} text-4xl ${headerClassName} ${headerColor} md:text-6xl`}
                        {...props}
                    />
                ),
                h3: (props) => (
                    <h3
                        className={`${className} text-3xl ${headerClassName} ${headerColor} md:text-5xl`}
                        {...props}
                    />
                ),
                h4: (props) => (
                    <h4
                        className={`${className} text-2xl ${headerClassName} ${headerColor} md:text-4xl`}
                        {...props}
                    />
                ),
                h5: (props) => (
                    <h5
                        className={`${className} text-xl ${headerClassName} ${headerColor} md:text-3xl`}
                        {...props}
                    />
                ),
                bold: (props) => (
                    <span
                        className={`${boldClassName} ${boldColor}`}
                        {...props}
                    />
                ),
                p: (props) => (
                    <p
                        className={`${className} ${pClassName} ${pColor}`}
                        {...props}
                    />
                ),
                a: (props) => (
                    <a
                        className={`text-blue-500 underline`}
                        {...props}
                    />
                ),
            }}
        />
    );
}

export default TextMD;