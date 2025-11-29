import MoreAboutMe from "../components/AboutMe";
import MenuPath from "../components/MenuPath";
import ContactPage from "../Contact/page";
import Footer from "../Footer/page";
import LayoutSmoother from "../LayoutSmoother";
import ProjectsPage from "../Projects/page";
import Skils from "../Skils/page";

export const metadata = {
  title: "KHALED | ABOUT ME",
  description:
    "Khaled – Front-end developer specializing in modern websites, animations, and high-performance UI experiences.",
};

export default function AboutMe() {
  return (
    <>
      <MenuPath />
      <LayoutSmoother>
        <MoreAboutMe />
        <div className="landscape-mobile-Aboutme-OurProject">
        <ProjectsPage />
        </div>
        <ContactPage />
        <Footer />
      </LayoutSmoother>
    </>
  );
}
