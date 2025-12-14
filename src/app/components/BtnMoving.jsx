"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function BtnMoving({ text }) {
    const BtnRef = useRef(null);

    useGSAP(() => {
        const btn = BtnRef.current;
        if (!btn) return; // مهم جداً

        const handleMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
                x: x,
                y: y,
                duration: 0.5,
            });
        };

        const handleLeave = () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        };

        btn.addEventListener("mousemove", handleMove);
        btn.addEventListener("mouseleave", handleLeave);

        return () => {
            btn.removeEventListener("mousemove", handleMove);
            btn.removeEventListener("mouseleave", handleLeave);
        };

    }, []);

    return (
        <button
            ref={BtnRef}
            className="uppercase bg-red-700 drop-shadow-[0_0_10px_#b91c1c] shadow-[inset_0_0_25px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_20px_#dc2626] translate duration-300 font-bold rounded-md cursor-pointer relative bottom-20 py-4 px-7 text-xs sm:text-xs md:text-base lg:text-base"
        >
            {text}
        </button>
    );
}
