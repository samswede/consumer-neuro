import Link from "next/link"
import Image from "next/image"

import { HomeBlocksPasttrips } from "@/tina/__generated__/types"

import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"



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



export function PastTripsSection(props: HomeBlocksPasttrips) {


  return (
    <section className="relative overflow-hidden" id="pasttrips">

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
          <TinaMarkdown
            content={props.message}
            components={{
              h1: (props) => (
                <h1
                  className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                  {...props}
                />
              ),
              bold: (props) => (
                <span
                  className="bg-gradient-to-b from-blue-300 to-pink-600 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="mx-auto mt-8 max-w-[700px] px-2 text-center text-xl text-muted-foreground"
                  {...props}
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-5 py-12">
          
        {
          (() => {
            switch (props?.style || "swiper") {
              case "swiper": {
                return (
                  <Carousel className="w-full max-w-xs z-[1]">
                    <CarouselContent>
                      {props?.tripscarousel?.map((trip, index) => (
                        <CarouselItem key={index}>

                        
                          <Card>
                          
                                <CardHeader>
                                  <AspectRatio ratio={16 / 9}>
                                    <Image
                                      src={trip?.image || ""}
                                      alt=""
                                      layout="fill"
                                      objectFit="cover"
                                      
                                      className="object-cover"
                                      
                                    />
                                  </AspectRatio>
                                </CardHeader>
                                <CardContent
                                  className="bg-black/30 backdrop-blur-lg p-4 rounded-lg"
                                  >
                                    
                                    <TinaMarkdown
                                        content={trip?.description}
                                        components={{
                                          h1: (props) => (
                                            <h1
                                              className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                                              {...props}
                                            />
                                          ),
                                          h2: (props) => (
                                            <h2
                                              className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-6xl"
                                              {...props}
                                            />
                                          ),
                                          h3: (props) => (
                                            <h3
                                              className="mx-auto text-3xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl"
                                              {...props}
                                            />
                                          ),
                                          h4: (props) => (
                                            <h4
                                              className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-primary md:text-4xl"
                                              {...props}
                                            />
                                          ),
                                          h5: (props) => (
                                            <h5
                                              className="mx-auto text-xl font-extrabold leading-tight tracking-tighter text-primary md:text-3xl"
                                              {...props}
                                            />
                                          ),
                                          bold: (props) => (
                                            <span
                                              className="bg-gradient-to-b from-blue-400 to-green-600 bg-clip-text text-transparent"
                                              {...props}
                                            />
                                          ),
                                          // Customizing the italic component with a different color gradient
                                          em: (props) => (
                                            <span
                                              className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent"
                                              {...props}
                                            />
                                          ),
                                          /*
                                          I want to make it so that if something is both italic and bold, it will be a different color
                                          */

                                          
                                          p: (props) => (
                                            <p
                                              className="mx-auto mt-8 max-w-[700px] px-2 text-left text-sm text-muted-foreground"
                                              {...props}
                                            />
                                          ),

                                          
                                        }}
                                      />

                                </CardContent>
                                <CardFooter>
                                  <Link href={trip?.link || ""}>
                                    
                                    <Button>View Trip</Button>
                                    
                                  </Link>
                                </CardFooter>
                            
                          </Card>

                          
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                );
              }
              
              case "cards": {
                return (
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      {props?.tripscarousel?.map((trip, index) => (
                        <CarouselItem key={index}>
                          
                          <div className="relative p-4 rounded-lg justify-center">
                              <div className="absolute inset-0 z-[-1] rounded-lg">
                                
                                <Image
                                      src={trip?.image || ""}
                                      alt=""
                                      layout="fill"
                                      objectFit="cover"
                                      
                                      className="object-cover rounded-lg"
                                      
                                    />

                              </div>
                              <div className="p-4 rounded-lg">
                                  <TinaMarkdown
                                        content={trip?.header}
                                        components={{
                                          h1: (props) => (
                                            <h1
                                              className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                                              {...props}
                                            />
                                          ),
                                          h2: (props) => (
                                            <h2
                                              className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-6xl"
                                              {...props}
                                            />
                                          ),
                                          h3: (props) => (
                                            <h3
                                              className="mx-auto text-3xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl"
                                              {...props}
                                            />
                                          ),
                                          h4: (props) => (
                                            <h4
                                              className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-secondary md:text-4xl text-center"
                                              {...props}
                                            />
                                          ),
                                          h5: (props) => (
                                            <h5
                                              className="mx-auto text-xl font-extrabold leading-tight tracking-tighter text-primary md:text-3xl"
                                              {...props}
                                            />
                                          ),
                                          bold: (props) => (
                                            <span
                                              className="bg-gradient-to-b from-yellow-400 to-red-600 bg-clip-text text-transparent"
                                              {...props}
                                            />
                                          ),
                                          // Customizing the italic component with a different color gradient
                                          em: (props) => (
                                            <span
                                              className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent"
                                              {...props}
                                            />
                                          ),
                                          /*
                                          I want to make it so that if something is both italic and bold, it will be a different color
                                          */

                                          
                                          p: (props) => (
                                            <p
                                              className="mx-auto mt-8 max-w-[700px] px-2 text-left text-sm text-primary-foreground"
                                              {...props}
                                            />
                                          ),

                                          
                                        }}
                                      />
                              </div>
                              <div className="p-4 bg-white/30 backdrop-blur-md rounded-lg">
                                  <TinaMarkdown
                                        content={trip?.description}
                                        components={{
                                          h1: (props) => (
                                            <h1
                                              className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                                              {...props}
                                            />
                                          ),
                                          h2: (props) => (
                                            <h2
                                              className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-6xl"
                                              {...props}
                                            />
                                          ),
                                          h3: (props) => (
                                            <h3
                                              className="mx-auto text-3xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl"
                                              {...props}
                                            />
                                          ),
                                          h4: (props) => (
                                            <h4
                                              className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-primary md:text-4xl"
                                              {...props}
                                            />
                                          ),
                                          h5: (props) => (
                                            <h5
                                              className="mx-auto text-xl font-extrabold leading-tight tracking-tighter text-primary md:text-3xl"
                                              {...props}
                                            />
                                          ),
                                          bold: (props) => (
                                            <span
                                              className="bg-gradient-to-b from-blue-400 to-green-600 bg-clip-text text-transparent"
                                              {...props}
                                            />
                                          ),
                                          // Customizing the italic component with a different color gradient
                                          em: (props) => (
                                            <span
                                              className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent"
                                              {...props}
                                            />
                                          ),
                                          /*
                                          I want to make it so that if something is both italic and bold, it will be a different color
                                          */

                                          
                                          p: (props) => (
                                            <p
                                              className="mx-auto max-w-[700px] px-2 text-left text-sm text-secondary-foreground"
                                              {...props}
                                            />
                                          ),

                                          
                                        }}
                                      />
                              </div>
                              <div className="relative p-4 rounded-lg justify-center">
                                  <Link href={trip?.link || ""}>
                                    
                                    <Button>View Trip</Button>
                                    
                                  </Link>
                              </div>
                          </div>
                          

                        </CarouselItem>
                      ))}
                      
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                );
              }

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
