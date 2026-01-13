import MenuPath from "../components/MenuPath";
import ProjectsAll from "../components/ProjectsAll";
import ContactPage from "../Contact/page";
import Footer from "../Footer/page";
import LayoutSmoother from "../LayoutSmoother";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app';

export const metadata = {
  title: "All Projects",
  description:
    "Explore all my front-end projects featuring responsive designs, animations, and high-quality user experiences. Browse through my portfolio of web development projects built with React, Next.js, and modern technologies.",
  keywords: [
    "Portfolio Projects",
    "Web Development Projects",
    "React Projects",
    "Next.js Projects",
    "Front-End Projects",
    "UI/UX Projects",
    "Khaled Projects",
  ],
  openGraph: {
    title: "All Projects - Khaled Portfolio",
    description: "Explore all my front-end projects featuring responsive designs, animations, and high-quality user experiences.",
    url: `${baseUrl}/AllProjects`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/AllProjects`,
  },
};

export default function AllProjects() {
  return (
    <>
      <MenuPath />
      <LayoutSmoother>
        <ProjectsAll />
        <ContactPage />
        <Footer />
      </LayoutSmoother>
    </>
  );
}
