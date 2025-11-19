"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollToPlugin);

export default function Menu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const itemsRef = useRef(null);

    const toggleMenu = () => {
        setOpen(!open);

        if (!open) {
            gsap.fromTo(
                menuRef.current,
                { y: "-100%", opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            );

            const splitText = new SplitText(itemsRef.current, {
                type: "lines",
                mask: "lines"
            });

            gsap.from(splitText.lines, {
                y: -100,
                opacity: 1,
                ease: "power3",
                stagger: {
                    each: 0.15
                }
            });
        } else {
            gsap.to(menuRef.current, {
                y: "-100%",
                opacity: 0,
                duration: 0.5,
                ease: "power3.in",
            });
        }
    };

    const handleClick = (sectioId) => {
        setOpen(false);

        gsap.to(menuRef.current, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
                gsap.to(window, {
                    scrollTo: sectioId,
                    duration: 0.8,
                })
            }
        });
    }


    return (
        <div className="fixed landscape:pt-5 w-full text-center z-999">
            <h1
                onClick={toggleMenu}
                className="my-8 relative cursor-pointer after:content-[''] after:absolute after:bottom-8 after:left-1/2 after:-translate-x-1/2  after:w-32 after:h-[5px] after:bg-white after:rounded-2xl uppercase text-[12px] z-1000 active:scale-95"
            >
                {open ? "Close" : "Menu"}
            </h1>
            <div
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-[50vh] landscape:h-screen lg:landscape:h-[50vh] backdrop-blur-xl bg-white/10  rounded-b-2xl shadow-lg  transform -translate-y-full"
            >
                <ul className="pt-28 landscape:overflow-hidden landscape:text-2xl text-2xl sm:text-2xl lg:text-5xl  my-5 uppercase" ref={itemsRef}>
                    <li className="my-5 cursor-pointer" onClick={() => handleClick("#Home")}>Home</li>
                    <li className="my-5 cursor-pointer" onClick={() => handleClick("#About")}>About</li>
                    <li className="my-5 cursor-pointer" onClick={() => handleClick("#Projects")}>Projects</li>
                    <li className="my-5 cursor-pointer" onClick={() => handleClick("#Contact")}>Contact</li>
                </ul>
            </div>
        </div>
    );
}
