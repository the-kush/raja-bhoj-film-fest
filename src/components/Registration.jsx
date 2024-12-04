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
        </section>
    )
}
export default Registration
