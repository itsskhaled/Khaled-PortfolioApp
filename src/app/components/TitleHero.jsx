"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";


gsap.registerPlugin(useGSAP, SplitText);
export default function TitleHero() {
    const titleRef = useRef(null);

    useGSAP(() => {

        const split = new SplitText(titleRef.current, {
            type: "lines",
            mask: "lines",
            autoSplit: true
        });

        gsap.from(split.lines, {
            y: 100,
            rotateY: 180,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.15 },
            duration: 1
        })


    })
    return (
        <p ref={titleRef} className="absolute bottom-4 z-1 text-center uppercase md:max-w-prose lg:w-lg">
            A Front-End Engineer blending modern UI aesthetics with smooth,
            thoughtful motion to create engaging digital experiences
        </p>
    );
}