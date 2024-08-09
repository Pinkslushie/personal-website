import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';
import NavBarV3 from '@/components/v3/navigationbar';
import FooterV3 from '@/components/v3/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Boneeto Studios",
  description: 'Getting to know Jad better!',
  keywords: "boneetoflakes, bonitoflakes, jaden choo wei chiat, jaden choo, jadenchoo, choo wei chiat, swinburne jaden choo, jaden choo swinburne, jaden swinburne, choo swinburne, JADEN CHOO WEI CHIAT, jaden CHOO wei chiat, Jaden CHOO, Jaden CHOO Wei Chiat, jaden quest marketing, quest marketing jaden, jaden choo quest marketing, quest marketing jaden choo",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
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
