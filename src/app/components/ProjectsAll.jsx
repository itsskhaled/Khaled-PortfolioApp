"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export default function ProjectsAll() {

    const titleRef = useRef(null);
    const infoRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline();
        const titleSplit = new SplitText(titleRef.current, {
            type: "chars",
            mask: "chars",
            smartWrap: true
        });
        const infoSplit = new SplitText(infoRef.current, {
            type: "words",
            mask: "words",
            smartWrap: true
        });

        tl.from(titleSplit.chars, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.2 },
            ease: "power3.out"
        });
        tl.from(infoSplit.words, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: { each: 0.2 },
            ease: "power3.out"
        })
    })
    return (
        <section className="w-full h-screen">
            <h1 ref={titleRef} className="text-center text-7xl sm:text-7xl md:text-9xl lg:text-[20rem] my-20 sm:my-20 lg:my-10 uppercase">Projects</h1>
            <h1 ref={infoRef} className="text-center text-2xl sm:text-2xl lg:text-5xl uppercase pt-20">There are no projects at the moment, I'm working on that.</h1>
        </section>
    );
}