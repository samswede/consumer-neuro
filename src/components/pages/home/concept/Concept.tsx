import Link from "next/link"
import { HomeBlocksContent } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"

import TextMD from '@/components/shared/text/TextMD';

import { Button } from "@/components/ui/button"


export function Concept(props: HomeBlocksContent) {
  return (
    <section className="relative overflow-hidden">

      <div 
        id="concept"
        className="relative flex flex-col items-center gap-2 py-24">

        <div
          className="px-4 py-8 text-center"
          data-tina-field={tinaField(props, "message")}
        >
          <TextMD 
            content={props.message}
            boldColor = "bg-gradient-to-b from-blue-400 to-green-600"
            />
          
        </div>
        <div className="flex gap-5 py-12">
          {props.links?.map((link) => {
            switch (link?.style) {
              case "dark": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    key={link.label}
                    //key={"a"}
                    href={link.link || ""}
                  >
                    <Button size="lg">{link.label}</Button>
                  </Link>
                )
              }
              case "light": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    key={link.label}
                    //key={"b"}
                    href={link?.link || ""}
                  >
                    <Button size="lg" variant={"ghost"}>
                      {link.label}
                    </Button>
                  </Link>
                )
              }
            }
          })}
        </div>
      </div>
    </section>
  )
}
