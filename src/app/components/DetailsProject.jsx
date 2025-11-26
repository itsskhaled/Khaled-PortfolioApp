"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import ContactPage from "../Contact/page";
import MenuPath from "./MenuPath";
import DetailsInfoProject from "./DetailsInfoProject";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function DetailsProject({ project }) {
    const ContainerRef = useRef(null);

    useGSAP(() => {
        gsap.from(ContainerRef.current, {
            height: 0,
            opacity: 0,
            duration: 1,
            ease: "power3.inOut"
        })
    })
    return (
        <>
            <MenuPath />
            <section ref={ContainerRef} className="w-full h-screen relative group">
                <div className="absolute z-10 flex justify-between items-end pb-10 w-full px-10 inset-0 
                bg-linear-to-t from-black/70 to-transparent">
                    <h1 className="text-5xl">{project.name}</h1>
                    <div className="flex uppercase gap-10">
                        <p className="backdrop-blur-lg bg-white text-black py-2 px-4 rounded-md">uxui</p>
                        <p className="backdrop-blur-lg bg-white text-black py-2 px-4 rounded-md">coding</p>
                    </div>
                </div>
                <Image src={project.image} alt="" className="w-full h-full object-cover" />
            </section>
            <DetailsInfoProject />
            <ContactPage />
            <br /><br />
        </>
    );
}