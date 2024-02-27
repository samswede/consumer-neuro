import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


type SheetGoogleFormProps = {
  buttonText?: string | null,
  embeddedFormURL?: string | null,
}


export function SheetGoogleForm({ buttonText, embeddedFormURL }: SheetGoogleFormProps) {
  const defaultText = "Google Form Sheet"
  const defaultFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeqymnsplI3MfVipP9Gdv7Taf7DakbmH6AyLGglvXt-X39esg/viewform?embedded=true"
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{buttonText ?? defaultText}</Button>
      </SheetTrigger>
      <SheetContent>
          
          <iframe 
            src={embeddedFormURL ?? defaultFormURL} 
            className="w-full top-0 left-0"
            height="800"
            >
              Loading…
          </iframe>
          
      </SheetContent>
    </Sheet>
  )
}
