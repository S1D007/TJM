import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalProvider from "./GlobalProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "The Journal Me",
  description: "The only Place to Express your Feelings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
