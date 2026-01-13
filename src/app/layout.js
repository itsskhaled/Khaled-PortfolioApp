import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app'),
  title: {
    default: "Khaled - Front-End Engineer & Web Developer Portfolio",
    template: "%s | Khaled Portfolio"
  },
  description: "Portfolio of Khaled, a Front-End Engineer specializing in modern UI/UX design, React, Next.js, and creating engaging digital experiences. Explore my projects, skills, and get in touch.",
  keywords: [
    "Front-End Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Responsive Design",
    "Modern Web Design"
  ],
  authors: [{ name: "Khaled" }],
  creator: "Khaled",
  publisher: "Khaled",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app',
    siteName: "Khaled Portfolio",
    title: "Khaled - Front-End Engineer & Web Developer Portfolio",
    description: "Portfolio of Khaled, a Front-End Engineer specializing in modern UI/UX design, React, Next.js, and creating engaging digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khaled Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaled - Front-End Engineer & Web Developer Portfolio",
    description: "Portfolio of Khaled, a Front-End Engineer specializing in modern UI/UX design, React, Next.js, and creating engaging digital experiences.",
    images: ["/og-image.jpg"],
    creator: "@khaled",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app',
  },
  category: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
