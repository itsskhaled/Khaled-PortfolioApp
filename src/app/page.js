import AboutPage from "./About/page";
import Menu from "./components/MenuBar";
import ContactPage from "./Contact/page";
import Footer from "./Footer/page";
import HomePage from "./Home/page";
import LayoutSmoother from "./LayoutSmoother";
import ProjectsPage from "./Projects/page";
import Skils from "./Skils/page";

export const metadata = {
  title: "KHALED | Home",
  description:
    "Portfolio of Khaled, a Front-End Engineer specializing in modern UI/UX design, React, Next.js, and creating engaging digital experiences. Explore my projects, skills, and get in touch.",
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
  ],
  openGraph: {
    title: "Khaled - Front-End Engineer & Web Developer Portfolio",
    description: "Portfolio of Khaled, a Front-End Engineer specializing in modern UI/UX design, React, Next.js, and creating engaging digital experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app',
    type: "website",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app',
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Khaled",
    "jobTitle": "Front-End Engineer",
    "description": "Front-End Engineer blending modern UI aesthetics with smooth, thoughtful motion to create engaging digital experiences",
    "url": baseUrl,
    "sameAs": [
      // Add your social media profiles here
      // "https://github.com/khaled",
      // "https://linkedin.com/in/khaled",
      // "https://twitter.com/khaled",
    ],
    "knowsAbout": [
      "Front-End Development",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "UI/UX Design",
      "Web Development",
      "Responsive Design",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Menu />
      <LayoutSmoother>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <Skils />
        <ContactPage />
        <Footer />
      </LayoutSmoother>
    </>
  );
}
