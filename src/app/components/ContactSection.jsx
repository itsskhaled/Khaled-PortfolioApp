"use client";

import Link from "next/link";
import BtnMoving from "./BtnMoving";
import Image from "next/image";
import bgContact from "@/Image/BackGround-About.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function ContactSection() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const discRef = useRef(null);
    const btnRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 20%",
                end: "+=500px",
                toggleActions: "play none none none"
            }
        });

        const titleSplit = new SplitText(titleRef.current, {
            type: "words",
            mask: "words"
        });
        const textSplit = new SplitText(textRef.current, {
            type: "words",
            mask: "words"
        });
        const discSplit = new SplitText(discRef.current, {
            type: "lines",
            mask: "lines",
            // autoSplit: true
        });

        const imageBG = gsap.utils.toArray(".imageBG");
        gsap.from(imageBG, {
            opacity: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "+=100px",
                scrub: 1
            }
        })


        tl.from([titleSplit.words, textSplit.words, discSplit.lines, btnRef.current], {
            yPercent: 50,
            opacity: 0,
            ease: "power2.out",
            duration: .8,
            stagger: { each: .04 }
        })

    })
    return (
        <section ref={containerRef} className="w-full h-[80vh] md:h-screen relative justify-center flex py-20">
            <div className="w-full h-[80vh] md:h-screen flex flex-col items-center justify-center backdrop-blur-xl bg-white/10 mx-5 md:mx-11 py-5 relative rounded-xl z-20 ">
                <h1 ref={titleRef} className="tracking-[0.5rem] text-red-700 font-bold absolute top-50 uppercase">book a call</h1>
                <h1 ref={textRef} className="text-xl md:text-3xl lg:text-5xl py-10 uppercase">Ready to Transform Your Vision?</h1>
                <p ref={discRef} className="px-10 md:px-10 lg:px-80 text-center text-xl md:text-3xl lg:text-5xl capitalize">Let`s discuss how we can bring your ideas to life. Book a quick call with our team, and we`ll guide you through the next steps.</p>
                <div ref={btnRef} className="absolute bottom-0">
                    <Link href="https://wa.me/972599718309?text=Hello, Let's turn your idea into a digital website" target="_blank" rel="noopener noreferrer">
                        <BtnMoving text="book a call" />
                    </Link>
                </div>
            </div>
            <Image src={bgContact} alt="bgContact" className="imageBG h-full w-full object-cover absolute z-10" />
        </section>
    );
}