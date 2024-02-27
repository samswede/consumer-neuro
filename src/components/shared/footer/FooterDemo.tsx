import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterDemo() {
  return (
    <footer className="bg-gray-900">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link href={"/"} className="text-2xl text-white">
            Do Not Miss Out!
          </Link>
          <p className="mt-2 text-xs text-justify text-gray-400">
            Sign up to get notified about new trips and experiences.
          </p>
          <div className="flex mt-4">
            <Input type="email" placeholder="Email" />
            <Button variant="destructive">Subscribe</Button>
          </div>
        
        </div>

        <div className="justify-between w-full mt-4 text-center lg:flex">

          
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Social Media
            </h2>
            <div className="flex justify-center mt-4 space-x-4 lg:mt-2">
                <Link href={""}>
                <Facebook className="text-blue-500" />
                </Link>
                <Link href={""}>
                <Twitter className="text-sky-300" />
                </Link>
                <Link href={""}>
                <Instagram className="text-pink-500" />
                </Link>
                <Link href={""}>
                <Linkedin className="text-blue-400" />
                </Link>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Home
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Concept
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Upcoming Trips
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Past Trips
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              About
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Mission
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Team
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Itineraries
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Legal Information
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <p className="text-center text-white pb-2">
          @2024 All rights reserved by onepoint55.
        </p>
      </div>
    </footer>
  )
}