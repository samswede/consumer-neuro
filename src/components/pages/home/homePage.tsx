"use client";

import { HomeQuery, HomeQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


import { WelcomeHero } from "@/components/pages/home/hero/WelcomeHero";
import { Concept } from "@/components/pages/home/concept/Concept";

export default function HomePage(props: {
    data: HomeQuery,
    variables: HomeQueryVariables,
    query: string
  }) {
    const { data } = useTina(props)
  
    return (
      <>

        {data.home.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "HomeBlocksHero": {
              return <WelcomeHero key={i} {...block} />
            }
            
            case "HomeBlocksContent": {
              return <Concept key={i} {...block} />
            }
            
          }
        })}

      </>
    )
  }
