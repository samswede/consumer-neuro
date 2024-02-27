import React from 'react';

import Link from "next/link"
import Image from "next/image"

import { SheetGoogleForm } from "@/components/shared/sheet/SheetGoogleForm"
import { Button } from "@/components/ui/button"

import TextMD from '@/components/shared/text/TextMD';

type TripCardProps = {
  header: any;
  description: any;
  link: string | null | undefined;
  image?: any;
  sheetGoogleForm: any;
  
};

const TripCard: React.FC<TripCardProps> = ({ 
     
    header, 
    description, 
    link,
    image,
    sheetGoogleForm
  
    }) => {
  return (
    
            <div className="relative p-4 rounded-lg justify-center bg-black/60 backdrop-blur-lg">
                <div className="absolute inset-0 z-[-1] rounded-lg">
                {
                    // if trip?.image is not empty, then render the Image component
                    // else, render nothing
                    (image) && (
                    <Image
                        src={image || ""}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        
                        className="object-cover rounded-lg"
                        
                    />
                    )
                }
                

                </div>
                <div className="p-4 rounded-lg">
                    <TextMD 
                        content={header}
                        headerColor='text-primary'
                        boldColor = "bg-gradient-to-b from-yellow-400 to-red-600"
                        pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
                        pColor = "text-primary-foreground"
                        />

                </div>
                
                <div className="p-4 bg-white/30 backdrop-blur-md rounded-lg">
                    <TextMD 
                        content={description}
                        headerColor='text-secondary'
                        boldColor = "bg-gradient-to-b from-blue-300 to-green-400"
                        pClassName = "mt-8 max-w-[700px] px-2 text-left text-sm"
                        pColor = "text-secondary-foreground"
                        />
                    
                </div>
                <div className="relative p-4 rounded-lg justify-center">
                    <Link href={link || ""}>
                    
                    <Button>Learn More</Button>
                    
                    </Link>
                    <SheetGoogleForm {...sheetGoogleForm}/>
                </div>
            </div>
  );
};

export default TripCard;
