import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | The Journal Me",
  description: "Find and Explore the World of Journals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
