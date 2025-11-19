"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
export default function SkilsTitle() {
    const ContainerRef = useRef(null);
    const CreationsRef = useRef(null);
    const AmazingRef = useRef(null);
    const BtnRef = useRef(null);
    const barHrRef = useRef(null);
    useGSAP(() => {
        const SplitText_Creations = new SplitText(CreationsRef.current, {
            type: "lines",
            mask: "lines",
            smartWrap: true
        });
        const SplitText_Amazing = new SplitText(AmazingRef.current, {
            type: "lines",
            mask: "lines",
            smartWrap: true
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ContainerRef.current,
                start: "top center",
                end: "+=200",
                toggleActions: "play none none none"
            }
        });

        tl.from(SplitText_Creations.lines, {
            y: 50,
            opacity: 0,
            ease: "power3"
        });
        tl.from(SplitText_Amazing.lines, {
            opacity: 0,
            rotate: 10,
            y: 50,
            ease: "power3.out"
        }, ">");
        tl.from(BtnRef.current, {
            y: 50,
            opacity: 0,
            ease: "power3"
        }, "<");
        tl.from(barHrRef.current, {
            width: 0,
            duration: 1.3,
            ease: "power1"
        }, ">");
    }, [])
    return (
        <>
            <div ref={ContainerRef} className="flex landscape:mt-100 flex-col md:flex-row lg:flex-row justify-between items-center pt-100 lg:pt-20 pr-10 lg:px-10">
                <div>
                    <h1 className="text-red-700 uppercase mb-8 tracking-[0.5rem]" ref={CreationsRef}>capabilities</h1>
                    <h1
                        className="uppercase 
                                    text-3xl lg:text-5xl 
                                    w-[300px] lg:w-[700px] 
                                    mb-8"
                        ref={AmazingRef}>
                        Tailored Solutions for Your Unique Vision
                    </h1>
                </div>
                <Link href="/Contact-Me">
                <button
                    className="uppercase bg-red-700 text-white px-6 py-3 rounded-md relative top:0 lg:top-15 right-20 drop-shadow-[0_0_10px_#b91c1c] hover:drop-shadow-[0_0_20px_#dc2626] shadow-[inset_0_0_25px_rgba(255,255,255,0.4)] translate duration-300 cursor-pointer"
                    ref={BtnRef}>
                    Get in touch
                </button>
                </Link>
            </div>
            <hr ref={barHrRef} className="opacity-10 w-[95%] m-auto relative top-10 " />
        </>
    );
}