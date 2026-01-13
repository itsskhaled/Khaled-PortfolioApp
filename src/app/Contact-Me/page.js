import ContactMe from "../components/ContactMe";
import MenuPath from "../components/MenuPath";
import ContactPage from "../Contact/page";
import Footer from "../Footer/page";
import LayoutSmoother from "../LayoutSmoother";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app';

export const metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Khaled for web development projects, questions, or work opportunities. I'm available for freelance projects, collaborations, and full-time positions.",
  keywords: [
    "Contact Khaled",
    "Hire Front-End Developer",
    "Web Developer Contact",
    "Freelance Developer",
    "Work Opportunities",
  ],
  openGraph: {
    title: "Contact Me - Khaled Portfolio",
    description: "Get in touch with Khaled for web development projects, questions, or work opportunities.",
    url: `${baseUrl}/Contact-Me`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/Contact-Me`,
  },
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
