import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';
import NavBarV3 from '@/components/v3/navigationbar';
import FooterV3 from '@/components/v3/footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Boneeto Studios - Innovating Creative Solutions",
  description: "Discover Boneeto Studios and get to know Jaden Choo Wei Chiat. Explore innovative creative solutions and insights from Jaden, an expert in marketing and design.",
  keywords: "Boneeto Studios, Jad Choo, Jaden Choo Wei Chiat, Jaden Choo, Choo Wei Chiat, Swinburne Jaden Choo, Jaden Choo Swinburne, Jaden Swinburne, Choo Swinburne, Jaden Choo Quest Marketing, Quest Marketing Jaden Choo, Jaden Choo Malaysia, Kuching Malaysia, Malaysian Developer, Software Developer Malaysia, Tech Innovator Malaysia, Jaden Choo Projects, Boneeto Flakes, Bonito Flakes",
  robots: "index, follow",
  verification: {
    google: "xOQ1i6oWxShAuMPjdsnt-JVg6iUmQS9oj1BGUX3tnz0",
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="bg-[rgb(17,17,17)]">
          <div className="h-28 sm:h-28 flex items-center justify-center relative">
            <Image
              src={TopBanner}
              alt="Main Banner"
              className=""
            />
          </div>
        </div> */}
        {/* <div className="">
          <NavigationBar />
        </div> */}
        <div className="font-cascadia-code">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
