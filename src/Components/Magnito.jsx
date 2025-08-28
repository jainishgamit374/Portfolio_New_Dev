import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap, { Elastic } from 'gsap'


const Magnito = () => {

    useGSAP(() => {
        const magnet = document.querySelector('.magneto');
        const textmgt = document.querySelector('.text');

        // Mouse move stuff //
        const activateMagneto = (event) => {
            let boundBox = magnet.getBoundingClientRect();
            const magnetoStrength = 40
            const magnetoTextStrength = 80

            const shiftX = ((event.clientX - (boundBox.left)) / magnet.offsetWidth) - 0.5
            const shiftY = ((event.clientY - (boundBox.top)) / magnet.offsetHeight) - 0.5

            //  Move the button to it's new position //
            gsap.to(magnet, {
                duration: 0.5,
                x: shiftX * magnetoStrength,
                y: shiftY * magnetoStrength,
                ease: 'power4.easeOut'
            })

            //  Move the text to it's new position //
            gsap.to(textmgt, {
                duration: 0.5,
                x: shiftX * magnetoTextStrength,
                y: shiftY * magnetoTextStrength,
                ease: 'power4.easeOut'
            })


        }


        // Mouse leave stuff //
        const resetMagneto = () => {
            gsap.to(magnet, {
                duration: 1.5,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });

            gsap.to(textmgt, {
                duration: 1.5,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });
        }

        // Add event listeners for mousemove and mouseleave
        magnet.addEventListener('mousemove', activateMagneto);
        magnet.addEventListener('mouseleave', resetMagneto);

    })

    return (
        <>
            <div className="w-full h-screen relative flex items-center justify-center">
                <div className="magneto-cont">
                    <button className='magneto flex items-center justify-center size-40 bg-zinc-700 rounded-full text-white border-none cursor-pointer shadow-zinc-100 backdrop-blur-sm'>
                        <span className='text'>Our Work</span>
                    </button>
                    <div id="debugger" className='absolute left-0 bottom-0 bg-yellow-50 text-black p-[2rem] w-[20rem] text-b'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Magnito