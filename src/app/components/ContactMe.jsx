"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export default function ContactMe() {

    const titleRef = useRef(null);
    const contactRef = useRef(null);
    const linkRef = useRef([]);

    useGSAP(() => {

        const tl = gsap.timeline();
        const titleSplit = new SplitText(titleRef.current, {
            type: "chars",
            mask: "chars",
            smartWrap: true
        });
        const contactSplit = new SplitText(contactRef.current, {
            type: "words",
            mask: "words"
        });
        tl.from(titleSplit.chars, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.2 },
            ease: "power3.out"
        });
        tl.from(contactSplit.words, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.2 },
            ease: "power3.out"
        }, "<50%");
        linkRef.current.forEach((link) => {
            const linksplit = new SplitText(link, {
                type: "words",
                mask: "words"
            });
            tl.from(linksplit.words, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: { each: 0.2 },
                ease: "power3.out"
            }, "<")
        })
    })

    return (
        <section className="w-full h-screen">
            <h1 ref={titleRef} className="text-center text-7xl sm:text-7xl md:text-9xl lg:text-[20rem] my-20 sm:my-20 lg:my-10 uppercase">contact</h1>
            <div className="m-auto sm:m-auto lg:ml-20">
                <p ref={contactRef} className="uppercase text-2xl opacity-30">Contact me on</p>
                <br />
                <ul className="w-64">
                    {[
                        { id: 1, name: "email", href: "https://mail.google.com/mail/u/0/?hl=en#inbox" },
                        { id: 2, name: "instageam", href: "https://www.instagram.com/programmer.khaled/" },
                        { id: 3, name: "linkedin", href: "#" },
                    ].map((item, i) => {
                        return (
                            <li key={i} ref={(link) => linkRef.current[i] = link} className="text-6xl uppercase hover:text-red-600 translate duration-300"><a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a></li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}