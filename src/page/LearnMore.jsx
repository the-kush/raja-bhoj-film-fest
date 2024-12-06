import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {TiArrowLeft, TiArrowRight} from "react-icons/ti";
import {useNavigate} from "react-router-dom";

const LearnMore = () => {
    const navigate = useNavigate();

    const goback = () => {
        navigate(-1);
    }

    return (
        <div className="bg-black">
            <Navbar />
            <section>
                <div className="p-2 pt-24">
                <button className="bg-white z-10 flex flex-row text-black px-4 py-2 rounded-lg shadow-xl w-auto items-center gap-2 font-robert-regular uppercase hover:bg-yellow-300" onClick={goback}><TiArrowLeft /> Go Back</button>
                </div>
                <div className="text-white flex flex-col pt-12">
                    <div className="text-center">
                        <h1 className="p-2 md:text-5xl text-2xl font-circular-web">Why Register?</h1>
                        <h1 className="p-2 md:text-6xl text-3xl font-circular-web">Raja Bhoj Film Festival</h1>
                        <p className="p-2 text-gray-300">Unveiling the Glory of Ancient Hindu Kingdoms</p>
                    </div >
                    <div className="px-4 md:px-16 text-xl">
                        <h4 className="py-3">Bhopal & Mumbai, February 2025</h4>
                        <p className="text-justify md:text-xl text-sm text-gray-500 px-2">
                            Step into an era of unparalleled grandeur, where legends and history come alive through the magic of cinema. The Raja Bhoj Film Festival invites you to experience a cinematic journey through the world of ancient Hindu kingdoms. Hosted first in the heart of heritage-rich Bhopal, and then in the bustling film capital, Mumbai, this festival pays tribute to India’s glorious past, inspiring an exploration of our rich cultural legacy and untold stories.
                        </p>
                    </div>
                    <div className="px-4 md:px-16 text-xl py-4 text-justify mx-2 text-gray-500">
                        <h4 className="underline py-3 text-white">Festival Highlight's</h4>
                        <ul className="list-disc px-2">
                            <li className="text-sm md:text-lg"><h4 className="text-red-300">Theme: Ancient Hindu
                                Kingdoms</h4>
                                This year’s festival theme will transport you to a world of ancient dynasties, valorous
                                kings, and timeless traditions. Through carefully curated films, we’ll delve into the
                                lives, arts, and cultures that defined ancient Hindu empires, offering an authentic,
                                immersive experience of history.
                            </li>
                        </ul>
                        <ul className="list-disc px-2">
                            <li className="text-sm md:text-lg"><h4 className="py-1 text-blue-300 text-sm md:text-lg">
                                Dates & Location
                            </h4>
                                <ul className="list-disc px-6 text-sm md:text-lg">
                                    <li>Bhopal - February 2025</li>
                                    <li>Mumbai - February 2025</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-disc px-2">
                            <li className="text-sm md:text-lg"><h4 className="py-1 text-yellow-300 text-sm md:text-lg">
                                Featured Events:
                            </h4>
                                <ul className="list-disc px-6 text-sm md:text-lg">
                                    <li><p>Opening Night in Bhopal: </p>Celebrate the festival’s grand inauguration with
                                        a showcase of classic films and documentaries depicting the bravery and richness
                                        of ancient India.

                                    </li>
                                    <li><p>Panel Discussions: </p>Engage in thought-provoking discussions with
                                        historians, filmmakers, and artists who bring ancient India to life on screen.
                                    </li>
                                    <li><p>Special Screenings & Workshops: </p>Dive deeper into storytelling,
                                        cinematography, and art direction that honor the aesthetic beauty of ancient
                                        kingdoms.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-disc py-2 px-2">
                            <li className="text-sm md:text-lg"><p className="text-green-300">Venue Experience:
                            </p>
                                Each venue will be transformed to reflect ancient Hindu empires' architectural brilliance and cultural richness. Expect intricate decor, royal artifacts, and a captivating ambiance to heighten your journey into the past.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="p-2 md:text-5xl text-2xl font-circular-web text-center">Why Attend?</h1>
                        <p className="text-justify md:text-xl text-sm text-gray-500 px-6 py-2">Whether you’re a film enthusiast, history buff, or cultural explorer, the Raja Bhoj Film Festival is a unique opportunity to witness the synthesis of cinema and history. Join us in celebrating India’s heritage and discovering stories that echo our ancient kingdoms' valor, artistry, and legacy.
                        </p>
                        <p className="text-justify md:text-xl text-sm text-gray-500 px-6 py-2">Save the Date and prepare to be transported to a world where history and cinema unite!
                        </p>
                        <div className="flex justify-center py-8">
                            <a href="https://workspace.google.com/intl/en_in/lp/forms/?utm_source=google&utm_medium=cpc&utm_campaign=1707696-Workspace-APAC-IN-en-BKWS-BRO-LV-Hybrid&utm_content=text-ad-none-none-DEV_c-CRE_608605507431-ADGP_Hybrid%20%7C%20BKWS%20-%20BRO%20%7C%20Txt-Forms-N%2FA-KWID_43700080103292606-kwd-11663925057&userloc_1007826-network_g=&utm_term=KW_google%20forms&gad_source=1&gclid=Cj0KCQiA3sq6BhD2ARIsAJ8MRwXbE3OUw90-ec9woMF64z1lXZRP49axUCmbCLHg0Ty04qE4K79l3NQaAnTIEALw_wcB&gclsrc=aw.ds">
                        <button className="bg-white flex flex-row text-black px-4 py-2 rounded-lg shadow-xl w-auto items-center gap-2 font-robert-regular uppercase hover:bg-yellow-300">
                            Register <TiArrowRight />
                        </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
export default LearnMore
