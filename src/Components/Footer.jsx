import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";

const Footer = () => {
    const footerLinkes = [
        { link: "Github", url: "https://github.com/jainishgamit374" },
        { link: "LinkedIn", url: "https://www.linkedin.com/in/jainish-gamit-2b024b296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { link: "Twitter", url: "https://x.com/gamit_jain43598?t=PRBYtYqmVbK7mLeWu_Gp7A&s=09" },
        { link: "Instagram", url: "https://www.instagram.com/flowgenix_.ai?igsh=MXZzNmxtdWdubGh5dg==" },
    ];
    useEffect(() => {
        // Create wave overlay element
        const createWaveOverlay = () => {
            if (document.querySelector('.wave-overlay')) return;
            
            const overlay = document.createElement('div');
            overlay.className = 'wave-overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: #000000;
                z-index: 9999;
                pointer-events: none;
                clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
            `;
            document.body.appendChild(overlay);
            return overlay;
        };

        const handleSocialClick = (e, url) => {
            e.preventDefault();
            
            const overlay = createWaveOverlay();
            
            // Simple wave animation from top
            const tl = gsap.timeline({
                onComplete: () => {
                    // Open the link after animation
                    window.open(url, '_blank');
                    
                    // Simple wave-out animation
                    gsap.to(overlay, {
                        duration: 0.6,
                        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                        ease: "power2.inOut",
                        onComplete: () => {
                            if (overlay && overlay.parentNode) {
                                overlay.parentNode.removeChild(overlay);
                            }
                        }
                    });
                }
            });

            // Simple smooth wave from top to bottom
            tl.fromTo(overlay, 
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
                },
                {
                    duration: 0.8,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "power2.inOut"
                }
            );
        };

        const smoothScroll = (e) => {
            // Check if this is a social media link
            const url = e.currentTarget.getAttribute('data-url');
            if (url) {
                handleSocialClick(e, url);
                return;
            }

            // Regular smooth scroll for other links
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });
                }
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        };

        const links = document.querySelectorAll(".footer-links a");
        links.forEach((link) => {
            link.addEventListener("click", smoothScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", smoothScroll);
            });
            // Clean up any remaining overlays
            const overlays = document.querySelectorAll('.wave-overlay');
            overlays.forEach(overlay => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            });
        };
    }, []);

    return (
        <>
            <div className="relative w-full h-screen md:h-[70vh] lg:h-auto pt-10 overflow-hidden bg-zinc-50" id="contact">
                <div className="heading max-w-screen-xl h-auto mx-auto flex items-start justify-between flex-col  gap-5 px-1 md:px-4 lg:px-4 lg:gap-8  text-black">

                    <div className="footer-top px-1 w-full flex items-center justify-between">
                        <div className="py-5">
                            <h1 className="text-5xl font-[Bandeins Strange Variable]">CONTACT</h1>
                        </div>
                        <div className="footer-logo py-5">
                            <h1 className='footertext text-4xl font-["Oxta]'>JG</h1>
                        </div>
                    </div>

                    <div className="footer-moddle flex flex-col lg:justify-between lg:flex-row gap-8 px-2 w-full">
                        <div className="contact flex flex-col gap-2 w-1/2">
                            <div className="mail">
                                <h1 className="text-base lg:text-xl text-zinc-500">Email</h1>
                                <a className="text-lg" href="">Jainishgamit374@gmail.com</a>
                            </div>
                            <div className="number">
                                <h1 className="text-base lg:text-xl text-zinc-500">Number</h1>
                                <h2>+91 9574981958</h2>
                            </div>
                        </div>
                        <div className="contact flex flex-col gap-2 w-1/2 lg:w-1/2">
                            <h1 className="text-xl text-zinc-600">Social</h1>
                            <div className="footer-links w-full flex items-start flex-col justify-start gap-1 pr-12">
                                {footerLinkes.map((item, i) => (
                                    <div key={i} className="w-[100%] flex items-center gap-4 md:w-[40%] lg:w-[100%] h-[4vh] border-b-[.2vw] border-zinc-700 group cursor-pointer">
                                        <a 
                                            className='flex-1 text-xl md:text-xl lg:text-xl hover:text-blue-600 transition-colors duration-300' 
                                            data-url={item.url}
                                            href="#"
                                        >
                                            {item.link}
                                        </a>
                                        <span className="text-xl md:text-xl lg:text-xl text-zinc-600 group-hover:text-blue-600 transition-colors duration-300 pointer-events-none">
                                            <MdArrowOutward />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="Credit py-6 lg:py-0 lg:pl-10 lg:w-1/2 flex items-start justify-start lg:justify-end">
                            <h1 className="text-2xl md:text-3xl text-zinc-600 lg:text-end">
                                Designed and  Develop <br />
                                by JAINISH
                            </h1>
                        </div>


                    </div>

                    <div className="w-full py-4 lg:py-10 flex items-center justify-center">
                        <p className="text-sm md:text-xl lg:text-xl">
                            All Rights Reserved. @ copyright Jainish Gamit 2025
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
