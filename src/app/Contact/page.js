import Image from "next/image";
import bgContact from "@/Image/BackGround-About.jpg";
import InfoContact from "../components/InfoContact";

export default function ContactPage() {
  return (
    <section id="Contact" className="relative landscape:min-h-[600px] w-full h-screen flex items-center justify-center mt-100 sm:mt-10 lg:mt-0">
      <InfoContact />
      <Image
        src={bgContact}
        alt="background"
        fill
        className="object-cover z-0"
        priority
      />
    </section>
  );
}
