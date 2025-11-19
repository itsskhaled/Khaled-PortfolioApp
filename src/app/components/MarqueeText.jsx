"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP);

export default function MarqueeText() {

    const marqueeRef = useRef(null);

    useEffect(() => {
        const el = marqueeRef.current;
        const content = el.innerHTML;
        el.innerHTML = content + content;
    }, []);

    useGSAP(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: 30,
            repeat: -1,
            ease: "linear"
        });
    });

    return (
        <div className="overflow-hidden w-screen">
            <h1
                ref={marqueeRef}
                className="opacity-10 font-bold text-[12rem] whitespace-nowrap inline-block uppercase"
            >
                Khaled | Front-End & Motion Specialist {" "}
            </h1>
        </div>
    );
}
