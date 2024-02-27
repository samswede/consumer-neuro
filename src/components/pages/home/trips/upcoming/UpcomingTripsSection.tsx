import Link from "next/link"
import Image from "next/image"

import { HomeBlocksUpcomingtrips } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"

import { TinaMarkdown } from "tinacms/dist/rich-text"
import TextMD from '@/components/shared/text/TextMD';


import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  } from "@/components/ui/card"

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  } from "@/components/ui/carousel"


import CardsCarousel from "@/components/shared/carousel/CardsCarousel"
import SwiperCarousel from "@/components/shared/carousel/SwiperCarousel"
import { SwiperSlide } from 'swiper/react';


import { SheetGoogleForm } from "@/components/shared/sheet/SheetGoogleForm";


import TripCard from "@/components/pages/home/trips/upcoming/TripCard"



export function UpcomingTripsSection(props: HomeBlocksUpcomingtrips) {


  return (
    <section className="relative overflow-hidden" id="upcomingtrips">

      <div className="relative flex flex-col items-center gap-2 py-24">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline

          src={props?.backgroundVideo || "public/assets/videos/ibiza/waves_drone.mp4"}
          poster={props?.backgroundFallbackImage || ""}
          >
  
        </video>


        <div
          className="px-4 py-8 text-center z-[1]"
          data-tina-field={tinaField(props, "message")}
        >

          <TextMD 
            content={props.message}
            headerColor='text-primary'
            boldColor = "bg-gradient-to-b from-blue-300 to-pink-600"
            pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
            pColor = "text-primary-foreground"
            />
          
        </div>
        <div className="flex gap-5 py-12">
          
        {
          (() => {
            switch (props?.style || "swiper") {
              case "test": {
                return (
                  <Carousel className="w-full max-w-xs z-[1]">
                    <CarouselContent>
                      {props?.tripscarousel?.map((trip, index) => (
                        <CarouselItem key={index}>

                        
                            <TripCard 
                              header={trip?.header}
                              description={trip?.description}
                              link={trip?.link}
                              image={trip?.image}
                              sheetGoogleForm={trip?.sheetGoogleForm}
                            />

                          
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                );
              }
              
              case "click": {
                return (
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      {props?.tripscarousel?.map((trip, index) => (
                        <CarouselItem key={index}>
                          
                          <TripCard 
                              header={trip?.header}
                              description={trip?.description}
                              link={trip?.link}
                              image={trip?.image}
                              sheetGoogleForm={trip?.sheetGoogleForm}
                            />
                          

                        </CarouselItem>
                      ))}
                      
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                );
              }

              case 'cards':
                  return (
                  <CardsCarousel>
                    {props?.tripscarousel?.map((trip, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full max-w-xs rounded-lg"
                        >
                            <TripCard 
                              header={trip?.header}
                              description={trip?.description}
                              link={trip?.link}
                              image={trip?.image}
                              sheetGoogleForm={trip?.sheetGoogleForm}
                            />

                        </SwiperSlide>
                    ))}
                  </CardsCarousel>
                  );
                
                case 'flow':
                  return (
                    <SwiperCarousel>
                    {props?.tripscarousel?.map((trip, index) => (
                        <SwiperSlide
                          key={index}
                          className="w-full max-w-xs rounded-lg"
                        >
                            <TripCard 
                              header={trip?.header}
                              description={trip?.description}
                              link={trip?.link}
                              image={trip?.image}
                              sheetGoogleForm={trip?.sheetGoogleForm}
                            />

                        </SwiperSlide>
                    ))}
                  </SwiperCarousel>
                  );

              default: {
                return null;
              }
            }
          })()
        }
          
        </div>
      </div>
    </section>
  )
}
