import AboutPage from "./About/page";
import Menu from "./components/MenuBar";
import ContactPage from "./Contact/page";
import Footer from "./Footer/page";
import HomePage from "./Home/page";
import LayoutSmoother from "./LayoutSmoother";
import ProjectsPage from "./Projects/page";
import Skils from "./Skils/page";

export const metadata = {
  title: "KHALED | HOME",
  description:
    "Get to know me by visiting my portfolio and learning about my experience.",
};
export default function Home() {
  return (
    <>
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
