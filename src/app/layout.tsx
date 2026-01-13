import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";

import "./globals.css";

import Header from "./header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "KA-ZE Sushi Whistler | Traditional Japanese Cuisine",
  description:
    "KA-ZE Sushi and Beyond - Traditional Japanese cuisine located in the heart of Whistler, BC. Featuring premium sushi, sashimi, and Japanese hot pot by Tokyo Tom with 38 years of experience.",
  keywords: [
    "sushi",
    "Whistler",
    "Japanese restaurant",
    "sashimi",
    "Japanese cuisine",
    "Ka-ze",
    "Tokyo Tom",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 text-center mt-auto">
      <div className="container mx-auto px-6">
        <p className="font-heading text-primary text-2xl tracking-wider mb-1">KA-ZE</p>
        <p className="text-neutral-400 text-sm tracking-widest uppercase">Sushi and Beyond</p>
        <p className="text-neutral-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} KA-ZE Sushi Whistler
        </p>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
