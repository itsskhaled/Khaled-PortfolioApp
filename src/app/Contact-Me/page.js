import ContactMe from "../components/ContactMe";
import MenuPath from "../components/MenuPath";
import ContactPage from "../Contact/page";
import Footer from "../Footer/page";
import LayoutSmoother from "../LayoutSmoother";

export const metadata = {
  title: "KHALED | CONTACT ME",
  description:
    "Contact me for web development projects, questions, or work opportunities",
};

export default function Contact() {
  return (
    <>
      <MenuPath />
      <LayoutSmoother>
        <ContactMe />
        <ContactPage />
        <Footer />
      </LayoutSmoother>
    </>
  );
}
