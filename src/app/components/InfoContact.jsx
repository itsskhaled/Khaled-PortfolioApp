"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import BtnMoving from "./BtnMoving";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function InfoContact() {
    const continarRef = useRef(null);
    const headTitleRef = useRef(null);
    const titleRef = useRef(null);
    const infoRef = useRef(null);
    const btnRef = useRef(null);

    useGSAP(() => {
        const headSplit = new SplitText(headTitleRef.current, {
            type: "words",
            mask: "words",
            smartWrap: true
        });
        const titleSplit = new SplitText(titleRef.current, {
            type: "words",
            mask: "words",
            smartWrap: true
        });
        const infoSplit = new SplitText(infoRef.current, {
            type: "lines",
            mask: "lines",
            smartWrap: true
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: continarRef.current,
                start: "top center",
                end: "+=400",
                toggleActions: "play none none none",
            }
        });

        tl.from(headSplit.words, {
            y: 50,
            opacity: 0,
            ease: "power3.out",
            duration: 0.2,
            stagger: { each: 0.15 }
        });

        tl.from(titleSplit.words, {
            y: 50,
            opacity: 0,
            ease: "power3.out",
            duration: 0.2,
            stagger: { each: 0.15 }
        }, "-=50%");

        tl.from(infoSplit.lines, {
            y: 50,
            opacity: 0,
            ease: "power3.out",
            duration: 0.2,
            stagger: { each: 0.15 }
        });

        tl.from(btnRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.2,
            ease: "power3.out",
        })
    })

    return (
        <div ref={continarRef}
            className="relative w-[95%] h-[95%] z-10 backdrop-blur-xl bg-white/10 text-center py-80 rounded-2xl pt-100"
        >
            <h1 ref={headTitleRef}
                className="text-red-700 font-bold relative bottom-45 uppercase tracking-[0.5rem]"
            >
                book a call
            </h1>

            <h1 ref={titleRef}
                className="relative bottom-30 max-w-[40%] m-auto uppercase mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl"
            >
                Ready to Transform Your Vision?
            </h1>
            <h1 ref={infoRef}
                className="relative bottom-30  m-auto uppercase max-w-[60%] sm:max-w-[60%] lg:max-w-[35%] text-ms sm:text-ms md:text-lg lg:text-lg"
            >
                Let's discuss how we can bring your ideas to <br /> life. Book a quick call with our team, and<br /> we'll guide you through the next steps.
            </h1>
            <div ref={btnRef}>
                <Link href="https://wa.me/972599718309?text=Hello, Let's turn your idea into a digital website" target="_blank" rel="noopener noreferrer">
                    <BtnMoving text="book a call" />
                </Link>
            </div>
        </div>
    );
}