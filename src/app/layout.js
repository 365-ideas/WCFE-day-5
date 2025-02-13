import { useContext } from "react";
import localFont from "next/font/local";
import "@/styles/reset.scss";
import { LoaderProvider } from "@/providers/LoaderProvider/LoaderProvider";
import { Root } from "./root";

const inter = localFont({
  src: [
    {
      path: './fonts/Inter_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter_ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Inter_Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-inter'
});

const trailers = localFont({
  src: [
    {
      path: './fonts/Trailers_Black.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-trailers'
});

const luxuriosScript = localFont({
  src: [
    {
      path: './fonts/LuxuriousScript-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-luxurios'
});

export const metadata = {
  title: "We're Creating For Emotions",
  description: "We're Creating For Emotions | Project #5",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={`body ${inter.variable} ${trailers.variable} ${luxuriosScript.variable}`}>
        <LoaderProvider>
          <Root>
            {children}
          </Root>
        </LoaderProvider>
      </body>
    </html>
  );
}
