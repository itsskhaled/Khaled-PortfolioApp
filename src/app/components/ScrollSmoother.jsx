"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import _ScrollSmoother from "gsap/ScrollSmoother";


gsap.registerPlugin(useGSAP, ScrollTrigger, _ScrollSmoother);
export default function ScrollSmoother({ children }) {
    const smoother = _ScrollSmoother.create({
        wrapper: ".smooth-wrapper",
        content: ".smooth-contnet",
        smooth: 2
    })
    return (
        <div className="smooth-wrapper">
            <div className="smooth-contnet">
                {children}
            </div>
        </div>
    );
}