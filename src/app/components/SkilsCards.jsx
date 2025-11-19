"use client";
import { useRef } from "react";
import "../globals.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function SkilsCards() {

    const cardRef = useRef([]);
    useGSAP(() => {

        const mm = gsap.matchMedia();
        mm.add({
            isMobile: '(max-width:701px)',
            isDesktop: '(min-width:700px)',
        }, (context) => {
            const { isMobile, isDesktop } = context.conditions;

            if (isMobile) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".card-wrapper",
                        start: "top bottom",
                        end: "+=500",
                        scrub: true,
                    }
                });

                tl.from(cardRef.current, {
                    opacity: 0,
                    ease: "power2.inOut",
                    stagger: { each: 0.15 }
                })
            } else if (isDesktop) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".card-wrapper",
                        start: "top 10%",
                        end: "+=900",
                        scrub: true,
                        pin: true,
                    }
                });

                tl.from(cardRef.current, {
                    opacity: 0,
                    ease: "power2.inOut",
                    stagger: { each: 0.15 }
                })
            }
        })

    })
    const infoCardSkils = [
        {
            id: 1,
            nameCard: "Front-End Development",
            lang: ["Next.JS", "React.JS", "Gsap.JS", "Tailwind CSS"],
            numberCard: "01"
        },
        {
            id: 2,
            nameCard: "UI / UX Design",
            lang: ["Responsive Design", "Web Animations", "Figma" , "Components Architecture"],
            numberCard: "02"
        },
        {
            id: 3,
            nameCard: "Tools & Workflow",
            lang: ["Git / GitHub", "VS Code", "npm / yarn", "Performance Optimization"],
            numberCard: "03"
        },
    ];

    return (
        <div className="relative card-wrapper h-screen w-full">
            <div className=" flex justify-center mt-15 flex-col landscape:flex-row lg:flex-row gap-5">
                {infoCardSkils.map((card, i) => {
                    return (
                        <div ref={(el) => cardRef.current[i] = el} key={card.id} className="card cardAnimation bg-neutral-950 text-black p-10 w-[250px] h-[350px] lg:w-[400px] lg:h-[600px] m-auto rounded-xl"
                            style={{ animationDelay: `${i * 0.3}s` }}>
                            <h1 className="text-xl lg:text-3xl pb-10 lg:pb-20 font-bold text-white">{card.nameCard}</h1>
                            <ul>
                                {card.lang.map((lang, index) => {
                                    return (
                                        <li key={index} className="my-5 lg:my-8 text-xs lg:text-lg border-b border-dashed border-white text-white">{lang}</li>
                                    );
                                })}
                            </ul>
                            <h1 className="flex justify-end text-5xl text-red-700 font-bold">{card.numberCard}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}