"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);
export default function SkilsCards() {
    const contaninerRef = useRef(null);

    const FrontRef = useRef(null);
    const DesignRef = useRef(null);
    const ToolsRef = useRef(null);

    const borderFrontRef = useRef(null);
    const borderDesignRef = useRef(null);
    const borderToolsRef = useRef(null);

    useGSAP(() => {

        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            const xy = { x: 0, y: 0 };

            const CardSkillsFront = MotionPathPlugin.convertCoordinates(borderFrontRef.current, FrontRef.current, xy);
            const CardSkillsTools = MotionPathPlugin.convertCoordinates(borderToolsRef.current, ToolsRef.current, xy);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contaninerRef.current,
                    start: "top top",
                    end: "+=1000px",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true
                    // markers: true
                }
            });

            tl.to(FrontRef.current, { x: "+=" + CardSkillsFront.x, y: "+=" + CardSkillsFront.y, ease: "none" }, 0)
                .to(ToolsRef.current, { x: "+=" + CardSkillsTools.x, y: "+=" + CardSkillsTools.y, ease: "none" }, 0)
        });
    });
    return (
        <div ref={contaninerRef} className="w-full relative py-30">
            <div className="relative hidden lg:flex w-full justify-center gap-30">
                <div ref={FrontRef} className="w-100 h-130 absolute z-30 rounded-xl">
                    <div className="card bg-neutral-950 h-full py-10 px-10 rounded-xl">
                        <h1 className="text-3xl">Front-End Development</h1>
                        <ul className="mt-20">
                            <li className="mb-8 border-b">Next JS</li>
                            <li className="mb-8 border-b">React JS</li>
                            <li className="mb-8 border-b">Tailwind CSS</li>
                            <li className="mb-8 border-b">GSAP</li>
                        </ul>
                        <h1 className="absolute bottom-10 text-5xl text-red-800 font-bold">01</h1>
                    </div>
                </div>
                <div ref={DesignRef} className="w-100 h-130 absolute z-20 rounded-xl">
                    <div className="card card-2 bg-neutral-950 h-full py-10 px-10 rounded-xl">
                        <h1 className="text-3xl">UI / UX Design</h1>
                        <ul className="mt-20">
                            <li className="mb-8 border-b">Responsive Design</li>
                            <li className="mb-8 border-b">Web Animations</li>
                            <li className="mb-8 border-b">Adobe XD</li>
                            <li className="mb-8 border-b">Components Archotecture</li>
                        </ul>
                        <h1 className="absolute bottom-10 text-5xl text-red-800 font-bold">02</h1>
                    </div>
                </div>
                <div ref={ToolsRef} className="w-100 h-130 absolute z-20 rounded-xl">
                    <div className="card card-3 bg-neutral-950 h-full py-10 px-10 rounded-xl">
                        <h1 className="text-3xl">Tools & WorkFlow</h1>
                        <ul className="mt-20">
                            <li className="mb-8 border-b">Git / GitHub</li>
                            <li className="mb-8 border-b">VS Code / Cursor</li>
                            <li className="mb-8 border-b">NPM / YARN</li>
                            <li className="mb-8 border-b">Performance Optimization</li>
                        </ul>
                        <h1 className="absolute bottom-10 text-5xl text-red-800 font-bold">03</h1>
                    </div>
                </div>
            </div>

             {/* =========== Mobile Component =========== */}
            <div className="relative flex flex-col lg:hidden w-full items-center gap-30">
                <div className="w-100 h-130 relative z-30 rounded-xl">
                    <div className="bg-neutral-950 h-full py-10 px-10 rounded-xl">
                        <h1 className="text-3xl">Front-End Development</h1>
                        <ul className="mt-20">
                            <li className="mb-8 border-b">Next JS</li>
                            <li className="mb-8 border-b">React JS</li>
                            <li className="mb-8 border-b">Tailwind CSS</li>
                            <li className="mb-8 border-b">GSAP</li>
                        </ul>
                        <h1 className="absolute bottom-10 text-5xl text-red-800 font-bold">01</h1>
                    </div>
                </div>
                <div className="w-100 h-130 relative z-20 rounded-xl">
                    <div className="bg-neutral-950 h-full py-10 px-10 rounded-xl">
                        <h1 className="text-3xl">UI / UX Design</h1>
                        <ul className="mt-20">
                            <li className="mb-8 border-b">Responsive Design</li>
                            <li className="mb-8 border-b">Web Animations</li>
                            <li className="mb-8 border-b">Adobe XD</li>
                            <li className="mb-8 border-b">Components Archotecture</li>
                        </ul>
                        <h1 className="absolute bottom-10 text-5xl text-red-800 font-bold">02</h1>
                    </div>
                </div>
                <div className="w-100 h-130 relative z-20 rounded-xl">
                    <div className="bg-neutral-950 h-full py-10 px-10 rounded-xl">
                        <h1 className="text-3xl">Tools & WorkFlow</h1>
                        <ul className="mt-20">
                            <li className="mb-8 border-b">Git / GitHub</li>
                            <li className="mb-8 border-b">VS Code / Cursor</li>
                            <li className="mb-8 border-b">NPM / YARN</li>
                            <li className="mb-8 border-b">Performance Optimization</li>
                        </ul>
                        <h1 className="absolute bottom-10 text-5xl text-red-800 font-bold">03</h1>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-full justify-center gap-30">
                <div ref={borderFrontRef} className="w-100 h-130 " />
                <div ref={borderDesignRef} className="w-100 h-130 " />
                <div ref={borderToolsRef} className="w-100 h-130 " />
            </div>
        </div>
    );
}