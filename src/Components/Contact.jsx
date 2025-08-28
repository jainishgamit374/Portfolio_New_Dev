import React, { useState } from 'react'
import { motion } from "framer-motion";
import { easeInOut } from 'framer-motion';


const Contact = () => {

    const cont = [
        {
            id: 1,
            title: 'Linkedin',
            info: "@Jainish_Gamit",
            icon1: 'ri-linkedin-box-fill',
            icon2: 'ri-arrow-right-line',
            link: 'https://www.linkedin.com/in/jainish-gamit/',
        },
        {
            id: 2,
            title: 'Whatsapp',
            info: "+91 635 374 1025",
            icon1: 'ri-whatsapp-line',
            icon2: 'ri-arrow-right-line',
            link: 'https://wa.me/916353741025',
        },
        {
            id: 3,
            title: 'Instagram',
            info: "@_jainish25_",
            icon1: 'ri-instagram-line',
            icon2: 'ri-arrow-right-line',
            link: 'https://www.instagram.com/_jainish25_/',
        },
    ]

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="relative w-full text-center py-10 overflow-hidden" id='contact'>
                <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
                    <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight">
                        Contact Us
                    </h1>
                    <div className="w-1/3 h-1 bg-white"></div>
                </div>
                <div className="Contact-wrapper max-w-screen-xl  mx-auto py-4 px-4 flex items-center justify-center">
                    <div className="Contact-container w-full h-full flex flex-col-reverse items-start md:flex-col-reverse lg:flex-row justify-between gap-20">
                        <div className="left-contact w-[100%] md:w-[100%] lg:w-[45%] h-full">
                            <div className="contact-head py-5">
                                <h1 className='text-2xl font-bold'>Talk To Me</h1>
                            </div>
                            <div className="contact-cards w-full flex flex-col md:flex-row lg:flex-col items-center justify-center gap-5 px-1 md:px-5 lg:px-10 md:py-5 lg:py-10">
                                {cont.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className="contact-card w-[90%] bg-white text-black p-6 lg:p-[1.2vw] rounded-xl flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="contact-icon text-3xl mb-2">
                                            <i className={item.icon1}></i>
                                        </div>
                                        <h1 className='text-xl mb-1'>{item.title}</h1>
                                        <a className='font-medium text- text-gray-700 mb-3' href={item.link} target="_blank" rel="noopener noreferrer">{item.info}</a>
                                        <motion.div
                                            className="contact-link flex items-center gap-2 cursor-pointer"
                                            whileHover={{ x: 4 }}
                                        >
                                            <span className='font-sans font-semibold tracking-wide'>Write Me</span>
                                            <i className={`${item.icon2} text-lg`}></i>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="right-contact w-[100%]  md:w-[100%] lg:w-[45%] h-full">
                            <div className="contact-head py-8 md:py-5 lg:py-5">
                                <h1 className='text-xl'>Write Me Your Project</h1>
                            </div>
                            <div className="contact-cards w-full flex flex-col items-center gap-5 justify-center px-1 md:px-10 lg:px-10 md:py-5 lg:py-10">
                                <form className='contact-from w-full px-5'>
                                    <div className="contact_-form-div relative mb-[2rem] h-[5rem]">
                                        <label className="contact-form-tag absolute -top-[0.75rem] left-[1.2rem] text-[4vw] md:text-[1.8vw] lg:text-[1.2vw] z-[2] bg-[#1A1A1A] px-2 rounded-full">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="contact-form-input absolute top-0 left-0 w-full h-full border-[2px] border-zinc-800 text-zinc-300 outline-none rounded-[0.75rem] p-[1.5rem] z-[1]"
                                            placeholder="Enter your name" />
                                    </div>
                                    <div className="contact_-form-div relative mb-[2rem] h-[5rem]">
                                        <label className="contact-form-tag absolute -top-[0.75rem] left-[1.2rem] text-[4vw] md:text-[1.8vw] lg:text-[1.2vw] z-[2] bg-[#1A1A1A] px-2 rounded-full">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="contact-form-input absolute top-0 left-0 w-full h-full border-[2px] border-zinc-800 text-zinc-300 outline-none rounded-[0.75rem] p-[1.5rem] z-[1]"
                                            placeholder="user@gmail.com" />
                                    </div>
                                    <div className="contact-form-div relative mb-[2rem] h-[14rem]">
                                        <label className="contact-form-tag absolute -top-[0.75rem] left-[1.2rem] text-[4vw] md:text-[1.8vw] lg:text-[1.2vw] z-[2] bg-[#1A1A1A] px-2 rounded-full">Project</label>
                                        <textarea
                                            name="project"
                                            cols="30"
                                            rows="10"
                                            className="contact-form-input absolute top-0 left-0 w-full h-full border-[2px] border-zinc-800 text-zinc-300 outline-none rounded-[0.75rem] p-[1.5rem] z-[1] resize-none"
                                            placeholder="Write your project">
                                        </textarea>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className="primary-btn w-34 h-14 px-5 py-6 mt-[5vw] bg-white hover:bg-gray-100 text-black flex flex-col items-center justify-center overflow-hidden rounded-full">
                                        <motion.div
                                            transition={{ ease: easeInOut }}
                                            className="flex w-full items-center justify-center gap-5 ">
                                            <span className="text-lg uppercase">Send Message</span>
                                            <motion.div
                                                className="p-1"
                                                animate={isHovered ? { x: "50%", rotate: "-45deg" } : { x: "0" }}
                                            >
                                                <i className="ri-arrow-right-line text-xl font-semibold"></i>
                                            </motion.div>
                                        </motion.div>
                                    </motion.button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact