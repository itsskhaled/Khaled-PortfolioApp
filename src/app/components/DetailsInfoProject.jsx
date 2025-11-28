"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { ProjectDetails } from "../API/ProjectsHome";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function DetailsInfoProject() {
    return (
        <section  className="w-full h-[270vh] sm:h-[270vh] md:h-[300vh] lg:h-[150vh] py-30 overflow-visible">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[550px_1fr] lg:grid-cols-[700px_1fr] gap-y-40">
                <div className="relative flex">
                    <div className="box-1 sticky top-30 w-full h-[50vh] bg-linear-to-b from-[#FF3B3B] to-[#6A00FF] mx-10 rounded-xl select-none text-xs sm:text-xs md:text-xs lg:text-base">
                        <h1 className="py-5 text-3xl uppercase px-7">Project Details</h1>
                        <div className="flex w-[90%] justify-between m-auto border-t items-center">
                            <p className="py-5 uppercase">Owner</p>
                            {ProjectDetails.map((item, i) => {
                                return (
                                    <p key={i} className="uppercase">{item.Owner}</p>
                                );
                            })}
                        </div>
                        <div className="flex w-[90%] justify-between m-auto border-t items-center">
                            <p className="py-5 uppercase">Release Date</p>
                            {ProjectDetails.map((item, i) => {
                                return (
                                    <p key={i} className="uppercase">{item.ReleaseDate}</p>
                                );
                            })}
                        </div>
                        <div className="flex w-[90%] justify-between m-auto border-t items-center">
                            <p className="py-5 uppercase">Services</p>
                            {ProjectDetails.map((item, i) => {
                                return (
                                    <p key={i} className="uppercase">{item.Services}</p>
                                );
                            })}
                        </div>
                        <div className="flex w-[90%] justify-between m-auto border-t items-center">
                            <p className="py-5 uppercase">Duration</p>
                            {ProjectDetails.map((item, i) => {
                                return (
                                    <p key={i} className="uppercase">{item.Duration}</p>
                                );
                            })}
                        </div>
                        <div className="flex w-[90%] justify-between m-auto border-t items-center">
                            <p className="py-5 uppercase">Budget</p>
                            {ProjectDetails.map((item, i) => {
                                return (
                                    <p key={i} className="uppercase">{item.Budget}</p>
                                );
                            })}
                        </div>
                        <br /><br />
                        <Link href="https://urbanzo.vercel.app">
                            <button
                                className="uppercase bg-red-700 text-white w-full py-4 rounded-md drop-shadow-[0_0_10px_#b91c1c] hover:drop-shadow-[0_0_20px_#dc2626] shadow-[inset_0_0_25px_rgba(255,255,255,0.4)] translate duration-300 cursor-pointer">
                                Launch Project
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="box-2">
                    <div className="px-15.5">
                        <h1 className="text-5xl pb-5 uppercase">Overview</h1>
                        {ProjectDetails.map((item, i) => {
                            return (
                                <p key={i} className="pb-10 text-neutral-500 capitalize">{item.Overview}</p>
                            );
                        })}
                    </div>
                    <div className="px-15.5">
                        <h1 className="text-5xl py-5 uppercase">Objective</h1>
                        {ProjectDetails.map((item, i) => {
                            return (
                                <p key={i} className="pb-10 text-neutral-500 capitalize">{item.Objective}</p>
                            );
                        })}
                    </div>
                    <div className="px-15.5">
                        <h1 className="text-5xl pb-5 uppercase">Process</h1>
                        {ProjectDetails.map((item, i) => {
                            return (
                                <p key={i} className="pb-10 text-neutral-500 capitalize">{item.Process}</p>
                            );
                        })}
                    </div>
                    <div className="px-15.5">
                        <h1 className="text-5xl pb-5 uppercase">Impact</h1>
                        {ProjectDetails.map((item, i) => {
                            return (
                                <p key={i} className="pb-10 text-neutral-500 capitalize">{item.Impact}</p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}