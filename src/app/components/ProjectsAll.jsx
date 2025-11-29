"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { ProjectsHomeData } from "../API/ProjectsHome";
import Link from "next/link";

gsap.registerPlugin(useGSAP, SplitText);

export default function ProjectsAll() {

    const titleRef = useRef(null);
    const imageRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline();
        const titleSplit = new SplitText(titleRef.current, {
            type: "chars",
            mask: "chars",
            smartWrap: true
        });

        tl.from(titleSplit.chars, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.08 },
            ease: "power3.out"
        });

        tl.from(imageRef.current, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out"
        }, "<50%")

    })
    return (
        <section className="w-full h-screen sm:h-screen md:h-[120vh] lg:h-[150vh] landscape-mobile-h">
            <h1 ref={titleRef} className="text-center text-7xl sm:text-7xl md:text-9xl lg:text-[20rem] my-20 sm:my-20 lg:my-10 uppercase">Projects</h1>
            <Link href="https://urbanzo.vercel.app" target="_blank" rel="noopener noreferrer">
                <div ref={imageRef} className="w-[95%] h-[800px] m-auto my-10">
                    <h1 className="absolute py-5 px-5 text-9xl text-black">0{ProjectsHomeData[0].id}</h1>
                    <Image src={ProjectsHomeData[0].image} alt="" className="w-full h-full object-cover rounded-2xl" />
                </div>
            </Link>
        </section>
    );
}