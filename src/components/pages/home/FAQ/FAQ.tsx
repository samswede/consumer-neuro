"use client"; // This is a special comment that tells Tina to use the client from the generated file

import { HomeBlocksAccordion } from "@/tina/__generated__/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ(props: HomeBlocksAccordion) {


  return (
    <div id="FAQ">
        <h1>
        {props.title}
        </h1>

      <Accordion type="single" collapsible className="w-full">

        {
          props.items?.map((item, idx) => {
            return (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item?.trigger}</AccordionTrigger>
                <AccordionContent>{item?.content}</AccordionContent>
              </AccordionItem>
            )
          })
        }

      </Accordion>
        
    </div>
  );
}
