import MenuPath from "../components/MenuPath";
import ProjectsAll from "../components/ProjectsAll";
import ContactPage from "../Contact/page";
import Footer from "../Footer/page";
import LayoutSmoother from "../LayoutSmoother";

export const metadata = {
  title: "KHALED | ALL PROJECTS",
  description:
    "Explore all my front-end projects featuring responsive designs, animations, and high-quality user experiences.",
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
