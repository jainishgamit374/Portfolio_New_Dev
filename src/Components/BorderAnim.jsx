import React from 'react'
import { image1, image2, image3 } from '../utils'

const BorderAnim = () => {
    return (
        <>

            <div className="w-full h-screen flex items-center justify-center">
                <div className="grid grid-cols-4  gap-4 p-10 ">
                    <div className="col-span-5 box rounded-3xl bg-[#232323] relative p-[0.1rem]">
                        <div className="in flex bg-[#232323] items-start flex-col gap-8  p-8 rounded-3xl">
                            <img className='rounded-[1rem] mb-[1rem]' src={image1} alt="" />
                            <div className="flex items-center justify-between w-full">
                                <h1>Tow Good Co.(Clone)</h1>
                                <a className='flex items-center gap-10 bg-zinc-300 p-1 px-5 text-zinc-800 font-semibold rounded-full' href="#">
                                    Live <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BorderAnim