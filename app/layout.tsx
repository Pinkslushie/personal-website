import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/v1/misc/navigationbar'
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BoneetoFlakes",
  description: 'Getting to know Jad better!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Add the link tag for the favicon */}
        <link rel="icon" href="/favicon.ico" />
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
        <div className="">
          <NavigationBar />
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
