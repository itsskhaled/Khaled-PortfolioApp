"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);

export default function Preloader({ children }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  const preRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current === 100) clearInterval(interval);
    }, 35);
  }, []);

  useGSAP(() => {
    if (count === 100 && !done) {
      const textSplit = new SplitText(textRef.current, {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline({
        onComplete: () => setDone(true),
      });

      tl.to(textSplit.lines, {
        y: -600,
        duration: 0.8,
        ease: "power4.inOut",
      });

      tl.to(preRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [count]);

  if (done) return children;
  
  return (
    <div
      ref={preRef}
      className="fixed inset-0 bg-red-900 w-full h-screen z-9999 flex justify-end items-end overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-black text-[15rem] sm:text-[15rem] lg:text-[30rem] font-bold"
      >
        {count}
      </h1>
    </div>
  );
}
