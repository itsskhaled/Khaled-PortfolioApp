"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import KhaledPhoto from "@/Image/Photo-Khaled.jpg";

gsap.registerPlugin(useGSAP);

export default function ParallaxImage() {

    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {

        const img = imgRef.current;
        const container = containerRef.current;

        const maxMove = 150;
        const maxRotate = 10; // درجة دوران

        container.addEventListener("mousemove", (e) => {

            const rect = container.getBoundingClientRect();

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // نحسب نسبة الماوس من 0 - 1 داخل الكونتينر
            const progressX = mouseX / rect.width;
            const progressY = mouseY / rect.height;

            // نحولها إلى -1 إلى 1
            const mappedX = (progressX - 0.5) * 2;
            const mappedY = (progressY - 0.5) * 2;

            // نحدد الحركة
            const finalX = mappedX * maxMove;
            const finalY = mappedY * maxMove;

            // الدوران
            const rotate = mappedX * maxRotate;

            gsap.to(img, {
                x: finalX,
                y: finalY,
                rotate: rotate,
                duration: 0.6,
                ease: "power3.out"
            });

        });

    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen flex items-center justify-center z-10 overflow-hidden"
        >
            <div
                ref={imgRef}
                className="relative w-[300px] h-[400px]  sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px]"
            >
                <Image
                    src={KhaledPhoto}
                    alt="Khaled"
                    fill
                    className="rounded-2xl object-cover"
                />
            </div>
        </div>
    );
}
