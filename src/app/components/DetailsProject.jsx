"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import ContactPage from "../Contact/page";
import Footer from "../Footer/page";
import MenuPath from "./MenuPath";
import Link from "next/link";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function DetailsProject({ project, projectinfo }) {
    const imageRef = useRef(null);
    const nameRef = useRef(null);

    useGSAP(() => {
        const btns = gsap.utils.toArray(".btn");
        gsap.from(imageRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power3.out"
        });
        const nameSplit = new SplitText(nameRef.current, {
            type: "words",
            mask: "words"
        });
        gsap.from(nameSplit.words, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: "power3.out"
        });
        gsap.from(btns, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: "power2.out"
        });
    });

    return (
        <div className="relative">
            <MenuPath />
            <section ref={imageRef} className="w-full relative h-screen">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent flex items-end p-10 z-10">
                    <div className="flex justify-between w-full items-center">
                        <h1 ref={nameRef} className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white">{project.name}</h1>
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 select-none">
                            <p className="btn backdrop-blur-xl bg-white/10 text-white py-2 px-4 rounded-md">UX/UI</p>
                            <p className="btn backdrop-blur-xl bg-white/10 text-white py-2 px-4 rounded-md">Coding</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[550px_1fr] lg:grid-cols-[750px_1fr]">
                    <div className="box1 relative">
                        <div className="sticky top-5">
                            <div className="mx-10 py-5 bg-linear-to-b from-red-700 to-blue-800 rounded-md m-auto mt-35 uppercase text-xs sm:text-xs md:text-base lg:text-base">
                                <h1 className="uppercase py-10 px-10 text-2xl">Project Details</h1>
                                <div className="flex w-[90%] justify-between m-auto border-t py-5 ">
                                    <p>Owner</p>
                                    <p>{projectinfo.Owner}</p>
                                </div>
                                <div className="flex w-[90%] justify-between m-auto border-t py-5">
                                    <p>Release Date</p>
                                    <p>{projectinfo.ReleaseDate}</p>
                                </div>
                                <div className="flex w-[90%] justify-between m-auto border-t py-5">
                                    <p>Services</p>
                                    <p>{projectinfo.Services}</p>
                                </div>
                                <div className="flex w-[90%] justify-between m-auto border-t py-5">
                                    <p>Duration</p>
                                    <p>{projectinfo.Duration}</p>
                                </div>
                                <div className="flex w-[90%] justify-between m-auto border-t py-5">
                                    <p>Budget</p>
                                    <p>{projectinfo.Budget}</p>
                                </div>
                            </div>
                            <Link href="https://urbanzo.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <div className="my-10 mx-10">
                                    <button className="uppercase w-full py-4 bg-red-700 drop-shadow-[0_0_10px_#b91c1c] shadow-[inset_0_0_25px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_20px_#dc2626] translate duration-300 cursor-pointer rounded-md">Launch Project</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="box2 mx-10">
                        <div className="mt-35 w-[95%] ">
                            <div className="pb-10">
                                <h1 className="py-5 text-5xl uppercase">Overview</h1>
                                <p className="text-neutral-500">{projectinfo.Overview}</p>
                            </div>
                            <div className="pb-10">
                                <h1 className="py-5 text-5xl uppercase">Objective</h1>
                                <p className="text-neutral-500">{projectinfo.Objective}</p>
                            </div>
                            <div className="pb-10">
                                <h1 className="py-5 text-5xl uppercase">Process</h1>
                                <p className="text-neutral-500">{projectinfo.Process}</p>
                            </div>
                            <div className="pb-10">
                                <h1 className="py-5 text-5xl uppercase">Impact</h1>
                                <p className="text-neutral-500">{projectinfo.Impact}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactPage />
            <Footer />
        </div>
    );
}
