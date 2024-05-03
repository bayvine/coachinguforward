import type { Metadata } from "next";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from 'next/font/local'
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 
// Font files can be colocated inside of `app`
const Poppins = localFont({ 
   src: [
    {
      path: './fonts/Poppins/Poppins-ExtraLight.ttf', 
      weight: '200', 
      style: 'normal'
    },
    {
      path: './fonts/Poppins/Poppins-ExtraLightItalic.ttf', 
      weight: '200', 
      style: 'italic'
    },
    {
      path: './fonts/Poppins/Poppins-Light.ttf', 
      weight: '300', 
      style: 'normal'
    },
    {
      path: './fonts/Poppins/Poppins-LightItalic.ttf', 
      weight: '300', 
      style: 'italic'
    },
    {
      path: './fonts/Poppins/Poppins-Regular.ttf', 
      weight: '400', 
      style: 'normal'
    },
    {
      path: './fonts/Poppins/Poppins-Medium.ttf', 
      weight: '500', 
      style: 'normal'
    },
    {
      path: './fonts/Poppins/Poppins-MediumItalic.ttf', 
      weight: '500', 
      style: 'italic'
    },
    {
      path: './fonts/Poppins/Poppins-SemiBold.ttf', 
      weight: '600', 
      style: 'normal'
    },
    {
      path: './fonts/Poppins/Poppins-SemiBoldItalic.ttf', 
      weight: '600', 
      style: 'italic'
    },
    {
      path: './fonts/Poppins/Poppins-Bold.ttf', 
      weight: '700', 
      style: 'normal'
    },
    {
      path: './fonts/Poppins/Poppins-BoldItalic.ttf', 
      weight: '700', 
      style: 'italic'
    },
    {
      path: './fonts/Poppins/Poppins-ExtraBold.ttf', 
      weight: '800', 
      style: 'normal'
    },
    {
      path: './fonts/Poppins/Poppins-ExtraBoldItalic.ttf', 
      weight: '800', 
      style: 'italic'
    },
  ],
  variable: '--font-poppins',
})

const GeneralSans = localFont({
  src: [
    {
      path: './fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf', 
    },
    {
      path: './fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf', 
      style: 'italic'
    }, 
  ],
  variable: '--font-generalsans',
})

const Quote = localFont({ 
  src: [{
    path: './fonts/Boska/Fonts/WEB/fonts/Boska-Italic.woff', 
    weight: '400', 
    style: 'italic'
  }], 
  variable: '--font-quote'
})

export const metadata: Metadata = {
  title: "CoachingUForward by Ann Scherer",
  description: "Life and Career Coaching for YOU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={clsx(['overflow-x-hidden', `${Poppins.variable} ${GeneralSans.variable} ${Quote.variable}`])}>
        <Navbar />
        {children}
        <Footer />

        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
