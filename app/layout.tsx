import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google"
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Torino Chat",
  description: "A Chat application made out of the hooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ConvexClientProvider>
        {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
