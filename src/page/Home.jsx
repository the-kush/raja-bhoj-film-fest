import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Registration from "../components/Registration.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden bg-black text-white">
                    {<Navbar />}
                    {<Hero />}
                    {<About />}
                    {<Registration />}
                    {<Footer />}
        </div>

    )
}
export default Home