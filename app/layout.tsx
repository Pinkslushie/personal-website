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
  keywords: "Boneeto Studios, Jaden Choo Wei Chiat, creative solutions, marketing expertise, innovative design, professional insights",
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
      <Head>
        <meta name="google-site-verification" content="xOQ1i6oWxShAuMPjdsnt-JVg6iUmQS9oj1BGUX3tnz0" />
      </Head>
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
        <NavBarV3 />
        <div className="font-cascadia-code">
          {children}
        </div>
        <FooterV3 />
        <Toaster />
      </body>
    </html>
  )
}
