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
  title: "Pratik Barua | Software Engineering Student & MERN Stack Developer",
  description: "B.Sc. in Software Engineering student at DIU (CGPA 4.00/4.00) & MERN Stack Developer. Alumni of Programming Hero, specializing in full-stack architectures, high-concurrency voice AI agents, and CI/CD pipelines.",
  openGraph: {
    title: "Pratik Barua | Software Engineering Student & MERN Stack Developer",
    description: "B.Sc. in Software Engineering student at DIU (CGPA 4.00/4.00) & MERN Stack Developer. Alumni of Programming Hero.",
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
