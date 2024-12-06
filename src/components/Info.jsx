import React, { useState, useEffect } from "react";
// import Grid from "./Grid.jsx";

const Info = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        { title: "Our Mission", content: "The mission of revolutionising cinema through the revival of ancient art seeks to blend the rich cultural heritage of the past with the innovative technologies of the present. This mission aims to bring ancient artistic expressions, such as traditional storytelling, classical dance forms, ancient music, and historical visual arts, into the modern cinematic experience. By doing so, it not only preserves these ancient arts but also reinvents them, making them relevant and accessible to contemporary audiences.\n" },
        { title: "History", content: "Founded in 2005, Raja Bhoj Film Festival Film Festival has grown to become one of the premier film festivals in the country, attracting filmmakers and cinema enthusiasts from all over the world." },
        { title: "Venues", content: "Our festival takes place in some of the most iconic theatres and venues in the city, including the historic {venue1} and the state-of-the-art {venue2}."},
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(Number(entry.target.dataset.index));
                    }
                });
            },
            { threshold: 0.7 } // Trigger when 50% of the element is visible
        );

        const sectionElements = document.querySelectorAll(".scroll-section");
        sectionElements.forEach((el) => observer.observe(el));

        return () => {
            sectionElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="">
            {sections.map((section, index) => (
                <div
                    key={index}
                    data-index={index}
                    className={`scroll-section h-[400px] flex flex-col items-center justify-center ${
                        activeIndex === index ? "opacity-100" : "opacity-50"
                    } transition-opacity duration-500`}
                >
                    <h1 className="text-4xl font-bold font-general">{section.title}</h1>
                    <p className="text-lg mt-4 text-justify md:px-32 px-16 text-gray-500 font-robert-regular">{section.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Info;