"use client";

import Image from "next/image";
import imgAbout from "@/Image/Khaled.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export default function MoreAboutMe() {
    const ContainerRef = useRef(null);
    const TitleAboutRef = useRef(null);
    const InfoFirstRef = useRef(null);
    const InfoSecondRef = useRef(null);
    const PhotoRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        const TitleSplit = new SplitText(TitleAboutRef.current, {
            type: "chars",
            mask: "chars",
            smartWrap: true
        });
        const InfoFirstSplit = new SplitText(InfoFirstRef.current, {
            type: "lines",
            mask: "linse",
            smartWrap: true
        });
        const InfoSecondSplit = new SplitText(InfoSecondRef.current, {
            type: "lines",
            mask: "linse",
            smartWrap: true
        });

        tl.from(TitleSplit.chars, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.2 },
            ease: "power3.out"
        });

        tl.from(InfoFirstSplit.lines, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: { each: 0.2 },
            ease: "power3.out"
        }, "<50%");
        tl.from(InfoSecondSplit.lines, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: { each: 0.2 },
            ease: "power3.out"
        });
        tl.from(PhotoRef.current, {
            height: 0,
            duration: 1,
            ease: "power3.out"
        }, "<")

        PhotoRef.current.addEventListener("mousemove", (e) => {
            const rect = PhotoRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.weight / 2;

            gsap.to(PhotoRef.current, {
                x: x * 0.5,
                y: y * 0.5,
                duration: 1
            });
        })
        PhotoRef.current.addEventListener("mouseleave", (e) => {
            gsap.to(PhotoRef.current, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            })
        })
    })

    return (
        <section ref={ContainerRef} className="w-full h-[150vh] landscape-mobile-Aboutme">
            <h1 ref={TitleAboutRef} className="text-center text-7xl sm:text-7xl md:text-9xl lg:text-[20rem] my-20 sm:my-20 lg:my-10 uppercase">about me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-full h-screen ">
                <div className="title text-center sm:text-center md:text-left lg:text-left text-2xl sm:text-2xl md:text-3xl lg:text-4xl uppercase py-10 px-20">
                    <h1 ref={InfoFirstRef}>I’m driven by curiosity and passion for building.
                        Every project for me is an opportunity to learn and grow.
                    </h1>
                    <br />
                    <h1 ref={InfoSecondRef}>I focus on quality and improvement first — and I believe the financial side naturally follows when the work is done with excellence.</h1>
                </div>
                <div ref={PhotoRef} className="image w-[80%] m-auto">
                    <Image src={imgAbout} className="object-cover w-full h-full rounded-2xl" />
                </div>
            </div>
        </section>
    );
}