import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pratik Barua | Software Engineer, Web Developer & CEO",
  description: "Sleek, high-contrast premium developer portfolio highlighting MERN stack, Next.js, and self-hosted infrastructure architectures.",
  metadataBase: new URL("https://coder-portfolio.dev"),
  openGraph: {
    title: "Pratik Barua | Software Engineer, Web Developer & CEO",
    description: "Sleek, high-contrast premium developer portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col font-inter">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
