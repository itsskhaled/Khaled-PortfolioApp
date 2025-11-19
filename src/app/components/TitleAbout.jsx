"use client";

import bgAbout from "@/Image/BackGround-About.jpg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import BtnMoving from "./BtnMoving";
import Link from "next/link";

gsap.registerPlugin(useGSAP, SplitText);

export default function TitleAbout() {

    const contianerRef = useRef(null);
    const titleAboutRef = useRef(null);
    const infoAboutRef = useRef(null);
    const btnRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {

        const titleSplit = new SplitText(titleAboutRef.current, {
            type: "lines",
            mask: "lines",
        });
        const infoSolit = new SplitText(infoAboutRef.current, {
            type: "chars",
            mask: "chars",
            smartWrap: true
        });

        gsap.from(imageRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: contianerRef.current,
                start: "top 60%",
                end: "+=500",
                toggleActions: "play none none none",
            }
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contianerRef.current,
                start: "top 60%",
                end: "+=500",
                scrub: true,
            }
        });
        tl.from(infoSolit.chars, {
            opacity: 0.3,
            duration: 1,
            ease: "bounce",
            stagger: { each: 0.15 }
        })
        gsap.from(titleSplit.lines, {
            y: -50,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: contianerRef.current,
                start: "top 60%",
                end: "+=300",
                toggleActions: "play none none none"
            }
        });
        gsap.from(btnRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: contianerRef.current,
                start: "top 60%",
                end: "+=300",
                toggleActions: "play none none none"
            }
        })

    }, []);
    return (
        <section id="About" ref={contianerRef} className="relative landscape:min-h-[600px] w-full h-screen flex items-center justify-center">
            <div
                className="relative w-[95%] h-[95%] z-10 backdrop-blur-xl bg-white/10  text-center py-80 rounded-2xl"
            >
                <h1 ref={titleAboutRef} className="text-red-700 font-bold relative bottom-45 tracking-[1rem] uppercase">
                    About
                </h1>
                <h1 ref={infoAboutRef} className="relative bottom-30 max-w-[65%] m-auto uppercase text-2xl sm:text-2xl md:text-3xl lg:text-5xl">
                    I’m a front-end developer specializing in modern UI and smooth motion
                    design. I create clean, dynamic interfaces using React, Next.js,
                    Tailwind CSS, and GSAP to deliver engaging user experiences.
                </h1>
                <div ref={btnRef}>
                    <Link href="/AboutMe"><BtnMoving text="more about me" /></Link>
                </div>
            </div>
            <div ref={imageRef}>
                <Image
                    src={bgAbout}
                    alt="background"
                    fill
                    className="object-cover z-0"
                    priority
                />
            </div>
        </section>

    );
}