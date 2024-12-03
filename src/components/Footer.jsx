import React from 'react'

import {FaDiscord, FaTwitter, FaYoutube, FaInstagram, FaFacebook} from "react-icons/fa";

const socialLinks = [
    {href: "https://www.facebook.com/", label: "Facebook", icon: <FaFacebook />},
    {href: "https://twitter.com/", label: "Twitter", icon: <FaTwitter />},
    {href: "https://instagram.com/", label: "Instagram", icon: <FaInstagram />},
    {href: "https://youtube.com/", label: "Youtube", icon: <FaYoutube />},
]

const Footer = () => {
    return (
        <footer className="w-screen py-6 px-6 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">©Raja Bhoj Films. All Rights Reserved</p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-300">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a className="text-center text-sm font-light hover:text-yellow-300 hover:underline md:text-right">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
export default Footer
