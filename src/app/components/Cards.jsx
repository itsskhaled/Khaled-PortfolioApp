import Image from "next/image";
import { ProjectsHomeData } from "../API/ProjectsHome";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function Cards() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    const nameProjectRef = useRef([]);


    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({ isMobile: "(max-width: 768px)", isDesktop: "(min-width: 769px)" }, (context) => {
            const { isMobile, isDesktop } = context.conditions;

            const cards = cardsRef.current;
            // const withoutFirstCards = cards.slice(1);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 10%",
                    end: `+=${1000 * cards.length}px`,
                    scrub: isDesktop? 1 : 0.25,
                    pin: containerRef.current,
                }
            })


            // gsap.set(withoutFirstCards, { y: (i) => i * 20 + 20 })

            cards.forEach((card, i) => {

                const target = i - 1;
                tl.from(card, {
                    y: i !== 0 ? window.innerHeight : 0,
                })

                if (target >= 0) {
                    tl.to(cards[i - 1], {
                        scale: 0.5,
                        opacity: 0,
                        filter: isDesktop ? "blur(30px)" : null
                    }, "<20%")
                }
            })
        })


        return () => mm.revert();
    }, { scope: containerRef });
    return (
        <div ref={containerRef} className="pin-wrapper flex flex-col w-full items-center gap-20 my-50">
            {ProjectsHomeData.map((project, i) => {
                return (
                    <div ref={(card) => cardsRef.current[i] = card} key={i} className="container absolute flex flex-col-reverse md:flex-row lg:flex-row w-100 md:w-350 h-200 md:h-170">
                        <div className="bg-white relative w-full h-full py-20 px-10 rounded-br-xl rounded-bl-xl md:rounded-tl-xl md:rounded-bl-xl">
                            <h1 data-title ref={(nameProject) => nameProjectRef.current[i] = nameProject} className="text-black text-2xl md:text-4xl lg:text-5xl py-5">{project.name}</h1>
                            <div data-tags className="flex gap-3 md:gap-5 lg:gap-8">
                                <p className="text-black border rounded-xl px-4">{project.lang[0]}</p>
                                <p className="text-black border rounded-xl px-4">{project.lang[1]}</p>
                                <p className="text-black border rounded-xl px-4">{project.lang[2]}</p>
                            </div>
                            <p data-desc className="absolute bottom-30 text-neutral-500 w-80 text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, doloremque blanditiis libero quod dignissimos officiis iste voluptatem aliquid pariatur eaque, maiores voluptatum fugit numquam veritatis eius eveniet voluptate consequuntur animi!</p>
                            <Link key={i} href={`/Projects/${project.id}`}>
                                <button data-btn className="absolute bottom-0 text-black px-4 rounded-xl mb-10 border cursor-pointer">Explore</button>
                            </Link>
                        </div>
                        <div className="bg-neutral-950 w-full flex items-center md:rounded-tr-xl md:rounded-br-xl">
                            <div className="w-full h-100">
                                <Image data-img src={project.image} alt={project.slug} className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>
                );
            })}


        </div>
    );
}