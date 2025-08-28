import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";


const Button = ({ text = "Start a Project" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="primary-btn h-8 w-34 px-5 py-4 bg-white hover:bg-gray-100 text-black flex flex-col items-center overflow-hidden rounded-full">
            <motion.div
                animate={{ y: isHovered ? "-200%" : "-50%" }}
                transition={{ ease: easeInOut }}
                className="flex translate-y-full w-full items-center justify-between gap-5">
                <span className="text-sm">{text}</span>
                <motion.div
                    animate={{ y: isHovered ? "-280%" : 1 }}
                    transition={
                        {
                            ease: "linear",
                            duration: 0.5,
                            x: { duration: 1 }
                        }
                    }
                >
                    <MdOutlineSubdirectoryArrowRight size={".7em"} />
                </motion.div>
            </motion.div>
            <motion.div
                animate={{ y: isHovered ? "-150%" : 0 }}
                transition={{ ease: easeInOut }}
                className="flex translate-y-full w-full items-center justify-between gap-4">
                <span className="text-sm">{text}</span>
                <motion.div
                    animate={{ y: isHovered ? 1 : "280%" }}
                    transition={{
                        ease: "linear",
                        duration: 0.5,
                        x: { duration: 1 }
                    }}
                >
                    <MdOutlineSubdirectoryArrowRight size={".7em"} />
                </motion.div>
            </motion.div>
        </motion.button>



    );
};

export default Button;