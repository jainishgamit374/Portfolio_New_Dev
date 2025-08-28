import { easeInOut, motion, MotionConfig } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [btnClick, setBtnClick] = useState(false)
    
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const loaderRef = useRef(null);
    const originalScrollY = useRef(0);
    const eventListenersRef = useRef([]);

    const btnClicked = () => {
        setBtnClick(true);
        
        setScrollEnabled(true);
        
        // Remove all scroll prevention
        enableScrolling();
        
        // Notify parent component that scrolling is now enabled
        if (props.onStartClick) {
            props.onStartClick();
        }
    }
    
    const enableScrolling = useCallback(() => {
        // Re-enable CSS scrolling
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
        
        // Remove all event listeners
        eventListenersRef.current.forEach(({ element, event, handler, options }) => {
            element.removeEventListener(event, handler, options);
        });
        eventListenersRef.current = [];
        
        // Restore scroll position if needed
        window.scrollTo(0, originalScrollY.current);
    }, []);
    
    const disableScrolling = useCallback(() => {
        // Store current scroll position
        originalScrollY.current = window.pageYOffset || document.documentElement.scrollTop;
        
        // Method 1: CSS approach - most reliable
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${originalScrollY.current}px`;
        document.body.style.width = '100%';
        document.documentElement.style.overflow = 'hidden';
        
        // Method 2: Event prevention - backup method
        const preventScroll = (e) => {
            if (scrollEnabled) return;
            const target = e.target;
            const isInteractive = target && target.closest && target.closest('button, a, input, textarea, [role="button"], .primary-btn');
            if (isInteractive) return; // allow interactions on button and interactive elements
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        };
        
        const preventKeyScroll = (e) => {
            if (!scrollEnabled) {
                const scrollKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
                if (scrollKeys.includes(e.code) || scrollKeys.includes(e.key)) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    return false;
                }
            }
        };
        
        const forceScrollTop = () => {
            if (!scrollEnabled && window.pageYOffset !== 0) {
                window.scrollTo(0, 0);
            }
        };
        
        // Add event listeners and store references for cleanup
        const events = [
            { element: document, event: 'wheel', handler: preventScroll, options: { passive: false, capture: true } },
            { element: document, event: 'touchmove', handler: preventScroll, options: { passive: false, capture: true } },
            { element: document, event: 'touchstart', handler: preventScroll, options: { passive: false, capture: true } },
            { element: document, event: 'scroll', handler: forceScrollTop, options: { passive: false, capture: true } },
            { element: window, event: 'scroll', handler: forceScrollTop, options: { passive: false, capture: true } },
            { element: document, event: 'keydown', handler: preventKeyScroll, options: { passive: false, capture: true } },
            { element: document, event: 'keyup', handler: preventKeyScroll, options: { passive: false, capture: true } },
            { element: document, event: 'mousewheel', handler: preventScroll, options: { passive: false, capture: true } },
            { element: document, event: 'DOMMouseScroll', handler: preventScroll, options: { passive: false, capture: true } }
        ];
        
        events.forEach(({ element, event, handler, options }) => {
            element.addEventListener(event, handler, options);
            eventListenersRef.current.push({ element, event, handler, options });
        });
        
        // Force scroll to top immediately
        window.scrollTo(0, 0);
    }, [scrollEnabled]);

    const t1 = gsap.timeline();
    useGSAP(() => {
        t1.from(".loader-text .loading ", {
            y: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: 'easeInOut',
        })

        t1.to(".circle", {
            strokeDashoffset: -380,
            duration: 2.3,
            ease: 'easeInOut',
        }, "p");

        t1.to(
            '.loader-prog h1',
            {
                opacity: 1,
                duration: 2,
                ease: 'easeInOut',
                onStart: () => {
                    let percent = 0;
                    const interval = setInterval(() => {
                        percent += 10;
                        if (loaderRef.current) {
                            loaderRef.current.textContent = `${percent}%`;
                        }
                        if (percent === 100) {
                            clearInterval(interval);
                            // DON'T enable scrolling here - wait for button click
                        }
                    }, 100);
                },
            },
            'p'
        );

        t1.to('.loader-prog h1',
            {
                opacity: 0,
                duration: .1,
                ease: 'easeInOut',
            },
        );

        t1.from('button',
            {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'easeInOut',
            },
        );

    }, []);

    // Ultra-strong scroll prevention - disable scrolling until START button clicked
    useEffect(() => {
        if (!scrollEnabled) {
            disableScrolling();
        }
        
        // Cleanup on component unmount
        return () => {
            enableScrolling();
        };
    }, [scrollEnabled, disableScrolling, enableScrolling]);
    
    // Ensure scrolling stays disabled even during state changes
    useEffect(() => {
        const interval = setInterval(() => {
            if (!scrollEnabled && window.pageYOffset > 0) {
                window.scrollTo(0, 0);
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = '0px';
                document.body.style.width = '100%';
            }
        }, 16); // Check every frame
        
        return () => clearInterval(interval);
    }, [scrollEnabled]);

    return (
        <>
            <MotionConfig
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <motion.div
                    animate={btnClick ? "open" : "closed"}
                    variants={{
                        open: {
                            clipPath: "inset(0 0 100% 0)"
                        },
                        closed: {
                            clipPath: "inset(0 0 0% 0)"
                        }
                    }}
                    className="w-full h-screen bg-[#333] fixed bottom-0 left-[50%] -translate-x-[50%] z-50 snap-always loadered">
                    <div className="relative flex w-full h-full max-w-screen-xl mx-auto text-center">
                        <MotionConfig>
                            <div className="w-[50vw] h-[70vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="loader-container w-full h-full flex items-center flex-col gap-10 justify-center">
                                    <div className="loading relative">
                                        <svg width="225" height="225" viewBox="0 0 124 124">
                                            <circle
                                                style={{ rotate: "-90deg", transformOrigin: "center", strokeDasharray: "380", strokeDashoffset: "380" }}
                                                className="circle" cx="62" cy="62" r="59" fill="none" stroke="#ffff" strokeWidth="1px" />
                                        </svg>
                                        <div className="loader-prog absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                            <h1 ref={loaderRef} className='text-white text-[2vw] opacity-0'>0%</h1>
                                        </div>
                                    </div>
                                    <motion.button
                                        onClick={btnClicked}
                                        onTouchStart={btnClicked}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className="primary-btn h-8 w-34 px-4 py-4 bg-white hover:bg-gray-100 text-black flex flex-col items-center overflow-hidden rounded-full">
                                        <motion.div
                                            animate={{ y: isHovered ? "-200%" : "-50%" }}
                                            transition={{ ease: easeInOut }}
                                            className="flex translate-y-full w-full items-center justify-between gap-4 px-2">
                                            <span className="text-sm tracking-[0.4vw]">START</span>
                                        </motion.div>
                                        <motion.div
                                            animate={{ y: isHovered ? "-150%" : 0 }}
                                            transition={{ ease: easeInOut }}
                                            className="flex translate-y-full w-full items-center justify-between gap-4 px-2">
                                            <span className="text-sm tracking-[0.4vw]">START</span>
                                        </motion.div>
                                    </motion.button>
                                </div>
                            </div>
                        </MotionConfig>
                    </div>
                </motion.div>
            </MotionConfig>
        </>
    )
}

export default Loader

Loader.propTypes = {
    onStartClick: PropTypes.func,
}