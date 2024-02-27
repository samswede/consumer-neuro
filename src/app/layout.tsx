import './globals.css';
import type { Metadata } from 'next';

// Post Hog
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'

// TinaCMS
import client from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

// Fonts
import { IBM_Plex_Sans } from 'next/font/google';

// Components
import { NavBarMenu } from '@/components/shared/navbar/NavBarMenu';

import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: 'Consumer Neuroscience',
  description: '...',
};


// Post Hog
const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})


// Fonts
const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch tinaCMS data
  const result = await client.queries.global({ relativePath: "Global.md"})
  
  /*
  // Use TinaCMS data
  const { data } = useTina({
    data: result?.data,
    query: result?.query,
    variables: result?.variables,
  });
  */

  return (
    <html lang="en">
      <PHProvider>
        <body className={cn(ibmPlexSans.className, result?.data?.global?.theme)}>

          <PostHogPageView /> 

          <header>
            <NavBarMenu />
          </header>
          
            {children}
          
          
        </body>
      </PHProvider>
    </html>
  );
}
