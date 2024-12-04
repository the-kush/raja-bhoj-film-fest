import React, { useState, useRef} from 'react'
import { TiLocationArrow} from "react-icons/ti";
import {useNavigate} from "react-router-dom";

const TiltCard = ({ children, className}) => {
    const [transformStyle, setTransformStyle] = useState('')
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left)/ width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 25;
        const tiltY = (relativeX - 0.5) * -25;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;



        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('')
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
            {children}
        </div>
    )
}

const Registration = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/learn-more");
    }
    return (
        <section id="register" className="pb-52">
            <div className="container mx-auto px-3 md:px-19">
                <div className='px-5 py-32 flex flex-col items-center justify-center'>
                    <p className='font-circular-web text-lg text-blue-50'>Raja Bhoj Film Festival
                    </p>
                    <p className='max-w-md text-blue-50 opacity-50 font-circular-web text-lg'>Unveiling the Glory of Ancient Hindu Kingdoms
                    </p>
                    <p className=" text-blue-50 opacity-50 font-circular-web text-lg text-justify">Step into an era of unparalleled grandeur, where legends and history come alive through the magic of cinema. The Raja Bhoj Film Festival invites you to experience a cinematic journey through the world of ancient Hindu kingdoms. Hosted first in the heart of heritage-rich Bhopal, and then in the bustling film capital, Mumbai, this festival pays tribute to India’s glorious past, inspiring an exploration of our rich cultural legacy and untold stories.</p>
                </div>

                <TiltCard className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                    <div>
                        <video
                            src="/videos/registration-1.mp4"
                            loop
                            muted
                            autoPlay
                            className="absolute size-full object-cover object-center"/>
                        <div className="relative z-20 text-blue-50 flex flex-col justify-between p-5">
                            <div className="flex flex-col items-center justify-center text-black pt-14 mt-4">
                                <h1 className="bento-title special-font">Register</h1>
                                <p className="mt-3 text-xm md:text-base">Click to Learn more or Register for the event</p>
                                <div className="flex flex-col md:flex-row gap-4 pt-16">
                                    <button className="bg-white px-4 py-2 rounded-lg shadow-xl w-full flex flex-row items-center gap-2 font-robert-regular uppercase hover:bg-yellow-300" onClick={handleNavigate}>Learn More <TiLocationArrow size={20}/></button>
                                    <button className="bg-white px-4 py-2 rounded-lg shadow-xl w-auto flex items-center gap-2 font-robert-regular uppercase hover:bg-yellow-300">Register <TiLocationArrow size={20}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TiltCard>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-16">
                <h2 className="md:text-5xl text-red-300 font-robert-regular mx-2 text-4xl pb-4">Subscribe to Our Newsletter</h2>
                <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                    <button
                        className="!absolute right-1 top-1 z-10 select-none rounded hover:bg-red-300 py-2 px-4 text-center align-middle font-general text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Subscribe
                    </button>
                    <input
                        type="email"
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        required
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email Address
                    </label>
                </div>
            </div>
        </section>
    )
}
export default Registration
