"use client";

import { ArrowUpRight } from "@deemlol/next-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { ProjectsHomeData } from "../API/ProjectsHome";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function ProjectsCard() {

    const titleProject = useRef(null);
    const nameProject = useRef([]);
    const tagsRef = useRef([]);
    const yearRef = useRef([]);
    const arrowRef = useRef([]);
    const barRef = useRef([]);
    const imageProduct = useRef([]);

    useGSAP(() => {

        const titleSplit = new SplitText(titleProject.current, {
            type: "chars",
            mask: "chars"
        })
        gsap.from(titleSplit.chars, {
            x: 50,
            rotate: 180,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: { each: 0.1 },
            scrollTrigger: {
                trigger: ".cards",
                start: "top center",
                end: "+=500",
                toggleActions: "play none none none"
            }
        })

        nameProject.current.forEach((el) => {
            const split = new SplitText(el, {
                type: "lines",
                mask: "lines",
                smartWrap: true
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cards",
                    start: "top center",
                    end: "+=500",
                    toggleActions: "play none none none"
                }
            });

            tl.from(split.lines, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: {
                    each: 0.15
                }
            })
        })

        const mm = gsap.matchMedia();

        mm.add({
            isMobile: '(max-width:701px)',
            isDesktop: '(min-width:700px)',
        }, (context) => {
            const { isMobile, isDesktop } = context.conditions;
            if (isDesktop) {
                tagsRef.current.forEach((el) => {
                    gsap.from(el.children, {
                        y: 50,
                        opacity: 0,
                        duration: 2,
                        ease: "elastic.out",
                        stagger: { each: 0.15 },
                        scrollTrigger: {
                            trigger: ".cards",
                            start: "top center",
                            end: "+=500",
                            toggleActions: "play none none none"
                        }
                    });
                });
            } else if (isMobile) {
                tagsRef.current.forEach((el) => {
                    gsap.from(el.children, {
                        y: 50,
                        opacity: 0,
                        duration: 2,
                        ease: "power2.out",
                        stagger: { each: 0.15 },
                        scrollTrigger: {
                            trigger: ".cards",
                            start: "top center",
                            end: "+=500",
                            toggleActions: "play none none none"
                        }
                    });
                });
            }
        })


        yearRef.current.forEach((el) => {
            const finalValue = parseInt(el.innerText);
            gsap.fromTo(el, { innerText: 1999, opacity: 0 }, {
                opacity: 1,
                innerText: finalValue,
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: ".cards",
                    start: "top center",
                    end: "+=500",
                    toggleActions: "play none none none",
                },
                onUpdate: function () {
                    el.innerText = Math.floor(el.innerText);
                }
            })
        });


        gsap.from(arrowRef.current, {
            rotate: 35,
            opacity: 0,
            duration: 3,
            ease: "elastic.out",
            stagger: { each: 0.15 },
            scrollTrigger: {
                trigger: ".cards",
                start: "top center",
                end: "+=500",
                toggleActions: "play none none none"
            }
        });

        barRef.current.forEach((el) => {
            gsap.from(el, {
                width: "0%",
                duration: 0.6,
                ease: "power2.out",
                stagger: { each: 0.15 },
                scrollTrigger: {
                    trigger: ".cards",
                    start: "top center",
                    end: "+=500",
                    toggleActions: "play none none none"
                }
            })
        })
    }, [])
    const handleEnter = (i) => {
        const img = imageProduct.current[i];
        gsap.killTweensOf(img);
        gsap.to(img, {
            opacity: 1,
            y: -20,
            rotate: -5,
            duration: 0.6,
            ease: "elastic.out",
        });
    };

    const handleLeave = (i) => {
        const img = imageProduct.current[i];
        gsap.killTweensOf(img);
        gsap.to(img, {
            opacity: 0,
            y: 0,
            duration: 0.4,
            ease: "power4.out",
        });
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-35 lg:px-10 items-center">
            <div className="text-3xl lg:text-5xl uppercase">
                <h1 ref={titleProject}>Our Projects</h1>
            </div>
            <div className="cards w-[90%] lg:w-full m-auto col-span-2">
                {ProjectsHomeData.map((item, i) => {
                    return (
                        <Link key={i} href={`/Projects/${item.id}`}>
                            <div onMouseEnter={() => handleEnter(i)} onMouseLeave={() => handleLeave(i)}>
                                <div ref={(image) => imageProduct.current[i] = image} className="absolute w-65 h-40 lg:w-80 lg:h-45 left-50 -rotate-12 opacity-0">
                                    <Image src={item.image || null} alt="You have no internet connection👀." className="w-full h-full object-cover rounded-md" />
                                </div>
                                <div className="group flex justify-between pt-10 pb-10">
                                    <h1 ref={(el) => nameProject.current[i] = el} className="text-sm lg:text-5xl uppercase">{item.name}</h1>
                                    <div ref={(el) => tagsRef.current[i] = el} className="tags flex flex-col lg:flex-row items-center ml-20 gap-2">
                                        <h1 className="backdrop-blur-lg bg-white/10 py-2 px-4 rounded-xl text-xs lg:text-base">{item.lang[0]}</h1>
                                        <h1 className="backdrop-blur-lg bg-white/10 py-2 px-4 rounded-xl text-xs lg:text-base">{item.lang[1]}</h1>
                                        <h1 className="backdrop-blur-lg bg-white/10 py-2 px-4 rounded-xl text-xs lg:text-base">{item.lang[2]}</h1>
                                    </div>
                                    <div className="flex gap-10 items-center sm:text-xl lg:text-3xl">
                                        <h1 ref={(el) => yearRef.current[i] = el}>{item.year}</h1>
                                        <p className="cursor-pointer"><ArrowUpRight ref={(el) => arrowRef.current[i] = el} size={24} color="#FFFFFF" /></p>
                                    </div>
                                </div>
                                <hr ref={(el) => barRef.current[i] = el} className="opacity-25" />
                            </div>
                        </Link>
                    );
                })}

            </div>
        </div>
    );
}