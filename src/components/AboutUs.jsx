import React from 'react'
import {FaFacebook, FaImdb, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import MovieSlider from "./MovieSlider.jsx";


const AboutUs = () => {
    const socialLinks = [
        {href: "https://www.facebook.com/", label: "Facebook", icon: <FaFacebook />},
        {href: "https://twitter.com/", label: "Twitter", icon: <FaTwitter />},
        {href: "https://instagram.com/", label: "Instagram", icon: <FaInstagram />},
        {href: "", label: "Whatsapp", icon: <FaWhatsapp />},
        {href: "https://www.imdb.com/name/nm8708980/", label: "IMDB", icon: <FaImdb />}
    ]

    const image = [
        {
            id: 1,
            src: "/img/movie-1.webp"
        },
        {
            id: 2,
            src: "/img/movie-2.jpg"
        },
        {
            id: 3,
            src: "/img/movie-3.jpeg"
        },
        {
            id: 4,
            src: "/img/movie-4.webp"
        },
        {
            id: 5,
            src: "/img/movie-5.jpg"
        },
        {
            id: 6,
            src: "/img/movie-7.jpg"
        }
    ]
    return (
        <section id="contact" className="">

            <div
                className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-32">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full flex justify-center">
                            <div className="relative">
                                <img
                                    src="/img/aakash.png"
                                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                            </div>
                        </div>
                        <div className="w-full text-center mt-20">
                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                <div className="p-3 text-center">
                                    <span
                                        className="text-xl font-bold block uppercase tracking-wide text-slate-700">4</span>
                                    <span className="text-sm text-slate-400">Production <br /> Designer</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span
                                        className="text-xl font-bold block uppercase tracking-wide text-slate-700">2</span>
                                    <span className="text-sm text-slate-400">Producer</span>
                                </div>

                                <div className="p-3 text-center">
                                    <span
                                        className="text-xl font-bold block uppercase tracking-wide text-slate-700">1</span>
                                    <span className="text-sm text-slate-400">Actor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Aakash Gautam</h3>
                        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Bhopal, India
                        </div>
                    </div>
                    <div className="mt-6 py-6 border-t border-slate-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <p className="font-light leading-relaxed text-slate-600 mb-4">Akash Gautam is known for
                                    Hexing (2017), Gandhi Fer Aa Gea (2020) and Delhi Crime (2019).</p>
                                <div className="flex flex-row items-center justify-center gap-4">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=" transition-colors duration-500 ease-in-out text-black">
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div>
                        <MovieSlider />
                    </div>

        </section>
    )
}
export default AboutUs
