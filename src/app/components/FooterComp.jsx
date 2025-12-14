"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, SplitText } from "gsap/all";
import { useRef } from "react";
import "../globals.css";

gsap.registerPlugin(useGSAP, ScrollToPlugin, SplitText);

export default function FooterComp() {

    const ContainarRef = useRef(null);
    const TitleFooterRef = useRef(null);
    const GmailRef = useRef(null);
    const LinksRef = useRef([]);
    const nameRef = useRef(null);
    const RightRef = useRef(null);
    const hrRef = useRef(null);

    useGSAP(() => {
        const TitleFooterSplit = new SplitText(TitleFooterRef.current, {
            type: "lines , words",
            wordsClass: "word++",
            mask: "lines"
        });
        const GmailSplit = new SplitText(GmailRef.current, {
            type: "lines",
            mask: "lines"
        });

        const RightSplit = new SplitText(RightRef.current, {
            type: "lines",
            mask: "lines"
        });

        const NameSplit = new SplitText(nameRef.current, {
            type: "chars",
            mask: "chars",
            smartWrap: true
        })


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ContainarRef.current,
                start: "top center",
                end: "+=400",
                toggleActions: "play none none none",
            }
        });

        tl.from(TitleFooterSplit.lines, {
            y: 60,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(".word4", {
                    color: "red",
                    rotateX: "360",
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        });
        tl.from(GmailSplit.lines, {
            y: 60,
            duration: 0.5,
            ease: "power2.out"
        }, "<30%");

        tl.from(hrRef.current, {
            width: 0,
            ease: "power2.out"
        })

        tl.from(NameSplit.chars, {
            x: 50,
            rotate: 15,
            opacity: 0,
        })

        tl.from(RightSplit.lines, {
            y: 60,
            duration: 0.5,
            ease: "power2.out"
        }, "<80%");

        LinksRef.current.forEach((linkRef) => {
            const LinksSplit = new SplitText(linkRef, {
                type: "words",
                mask: "words"
            });
            tl.from(LinksSplit.words, {
                y: 30,
                duration: 0.35,
                stagger: { each: 0.008 },
                ease: "power2.out",
            });
        })


        LinksRef.current.forEach((link) => {
            link.addEventListener("mousemove", (e) => {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2

                gsap.to(link, {
                    x: x * 0.5,
                    y: y * 0.5,
                    duration: 0.2
                });
            })
            link.addEventListener("mouseleave", (e) => {
                gsap.to(link, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            })
        })
    })


    return (
        <section ref={ContainarRef} className="max-w-full min-h-[50vh] sm:min-h-[50vh] lg:min-h-[90vh] pt-5 sm:pt-10 landscape-mobile-footer">
            <div className="flex flex-col justify-center items-center w-full h-[90vh] leading-loose">
                <h1 ref={TitleFooterRef} className="text:xl sm:text:xl md:text-2xl lg:text-4xl text-center uppercase mb-10">Let’s build something great together</h1>
                <p ref={GmailRef} className="text-lg my-5 hover:text-red-700 transition-all duration-300 delay-200 uppercase font-bold"><a href="https://www.vipkhaled30@gmail.com">Contact me at : khaled@gmail.com</a></p>
                <nav>
                    {[
                        { id: 1, name: "GitHub", href: "https://github.com/itsskhaled" },
                        { id: 2, name: "LinkedIn", href: "www.linkedin.com/in/khaled-alhaj-8a5376261" },
                        { id: 3, name: "Upwork", href: "https://www.upwork.com/freelancers/~01152930a27dbe675a" },
                        { id: 4, name: "Projects", href: "/AllProjects" },
                    ].map((item, i) => {
                        return (
                            <a ref={(el) => LinksRef.current[i] = el} key={i} className="mx-2 inline-block uppercase font-bold text-xs sm:text-xs md:text-base lg:text-base" href={item.href}>{item.name}</a>
                        );
                    })
                    }
                </nav>
                <hr ref={hrRef} className="w-full h-px mt-10 opacity-20" />
                <div className="flex flex-col sm:flex-col lg:flex-row text-center justify-between w-[95%] absolute bottom-10 landscape-mobile-footer">
                    <h1 ref={nameRef} className="uppercase text-7xl sm:text-7xl md:text-8xl lg:text-9xl">Khaled</h1>
                    <p ref={RightRef} className="flex items-end m-auto sm:m-auto md:m-auto lg:mr-5 landscape-mobile-footer-CopeRight">© 2025 Khaled — All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}