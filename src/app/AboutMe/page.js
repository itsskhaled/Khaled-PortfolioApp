import MoreAboutMe from "../components/AboutMe";
import MenuPath from "../components/MenuPath";
import ContactPage from "../Contact/page";
import Footer from "../Footer/page";
import LayoutSmoother from "../LayoutSmoother";
// import ProjectsPage from "../Projects/page";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app';

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Khaled, a Front-End Engineer specializing in modern websites, animations, and high-performance UI experiences. Discover my journey, skills, and passion for creating engaging digital experiences.",
  keywords: [
    "About Khaled",
    "Front-End Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Portfolio",
    "Developer Bio",
  ],
  openGraph: {
    title: "About Me - Khaled Portfolio",
    description: "Learn more about Khaled, a Front-End Engineer specializing in modern websites, animations, and high-performance UI experiences.",
    url: `${baseUrl}/AboutMe`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/AboutMe`,
  },
};

export default function AboutMe() {
  return (
    <>
      <MenuPath />
      <LayoutSmoother>
        <MoreAboutMe />
        <div className="landscape-mobile-Aboutme-OurProject">
        {/* <ProjectsPage /> */}
        </div>
        <ContactPage />
        <Footer />
      </LayoutSmoother>
    </>
  );
}
