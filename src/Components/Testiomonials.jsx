import React from 'react'
import { tn1, tn2, tn3, tn4 } from '../utils'
// import { tn1 } from '../utils'

const Testiomonials = () => {
    const Testiomonialsdata = [
        {
            id: 1,
            image: tn1,
            title: 'Harry Clinton',
            para: "A really good job, all aspects of the project were followed step by and with good results. A really good job, all aspects of the project were followed  step by and with good results.Sara cill",
        },
        {
            id: 2,
            image: tn2,
            title: 'Harry Clinton',
            para: "A really good job, all aspects of the project were followed step by and with good results. A really good job, all aspects of the project were followed  step by and with good results.Sara cill",
        },
        {
            id: 3,
            image: tn3,
            title: 'Harry Clinton',
            para: "A really good job, all aspects of the project were followed step by and with good results. A really good job, all aspects of the project were followed  step by and with good results.Sara cill",
        },
        {
            id: 4,
            image: tn4,
            title: 'Harry Clinton',
            para: "A really good job, all aspects of the project were followed step by and with good results. A really good job, all aspects of the project were followed  step by and with good results.Sara cill",
        },
    ];

    return (
        <>
            <div className="relative w-full text-center py-10 overflow-hidden" id='testiomonials'>
                <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
                    <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight">
                        Testimonials
                    </h1>
                    <div className="w-1/3 h-1 bg-white"></div>
                </div>
                <div className="Testiomonials-wrapper max-w-screen-xl mx-auto py-4 px-4 flex items-center justify-center">
                    <div className="heading w-full h-full mx-auto flex items-center flex-col gap-4 py-10 px-1 md:py-10 md:px-8 lg:py-10 lg:px-12">
                        <div className="grid grid-cols-6 gap-10 w-full ">
                            {Testiomonialsdata.map((item) => (
                                <div
                                    key={item.id}
                                    className="col-span-6 md:col-span-3 lg:col-span-3 rounded-3xl bg-[#232323] p-10 flex items-start flex-col gap-11 border-[1px] gradient 
                                           transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/10 cursor-pointer
                                           hover:transform hover:scaleX-105 hover:-skew-y-1 hover:rotate-1">
                                    <div className="flex items-center gap-20 w-full">
                                        <img
                                            className="rounded-full size-20 border-[1px] transition-transform duration-300 ease-in-out hover:scale-110"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                        <h2 className="text-white text-xl uppercase px-10 font-semibold tracking-wide transition-colors duration-300">{item.title}</h2>
                                    </div>
                                    <p className="text-gray-300 text-start text-[3vw] md:text-[1.2vw] lg:text-[1.2vw] transition-colors duration-300 ease-in-out hover:text-white">{item.para}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testiomonials;
