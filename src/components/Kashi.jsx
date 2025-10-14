import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const pujas = [
    {
        title: "Rudrabhishek Puja",
        description: "Performed to please Lord Shiva and remove all negativities.",
        imgSrc: "/images/Rudrabhishek.jpeg",
        linkTo: "/rudrabhishek"
    },
    {
        title: "Mahamrityunjaya Puja",
        description: "A life-protecting puja invoking Lord Shiva’s blessings for longevity.",
        imgSrc: "/images/Mahamritunjay.jpeg",
        linkTo: "/mahamrityunjaya"
    },
    {
        title: "Ganga Aarti",
        description: "A divine evening ritual performed on the ghats of River Ganga.",
        imgSrc: "/images/Ganga.jpeg",
        linkTo: "/ganga-aarti"
    },
    {
        title: "Tripindi Shradh",
        description: "A ritual for ancestors to attain peace and moksha.",
        imgSrc: "/images/shradh.jpeg",
        linkTo: "/tripindi-shradh"
    },
    {
        title: "Navgraha Shanti Puja",
        description: "Performed to balance planetary energies and remove doshas.",
        imgSrc: "/images/Navgrah.jpeg",
        linkTo: "/navgraha-shanti"
    },
    {
        title: "Kashi Anna Daan",
        description: "Offering food to the needy, considered the highest virtue in Kashi.",
        imgSrc: "/images/Anna dan.jpeg",
        linkTo: "/kashi-anna-daan"
    }
];

// Reusable Puja Card Component
const PujaCard = ({ title, description, imgSrc, linkTo }) => (
    <div className="group glass p-6 rounded-2xl shadow-xl hover:scale-105 transition transform duration-300 bg-white/70" data-aos="zoom-in-up" data-aos-duration="800">
        <Link to={linkTo} className="cursor-pointer">
            <img src={imgSrc} alt={title} className="rounded-xl w-full h-52 object-cover mb-4" />
            <h3 className="text-2xl font-semibold text-orange-700 group-hover:text-yellow-800">{title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{description}</p>
        </Link>
        <Link to={linkTo} className="relative mt-6 inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(255,165,0,0.7)]">
            <span className="relative z-10">Book Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
        </Link>
    </div>
);


const Kashi = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);

    return (
        // FIX: Main container handles the scrolling, preventing double scrollbars.
        <div className="text-gray-800 bg-gradient-to-br from-yellow-50 to-white">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                {/* FIX: Video Background with correct path and z-index */}
                <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards]">
                    <source src="/images/KPV-1.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 via-transparent to-transparent animate-pulse z-10"></div>
                <img src="/images/mandala-bg.svg" className="absolute w-64 opacity-10 top-10 left-1/2 -translate-x-1/2 animate-[spin-slow_60s_linear_infinite] z-10" alt="Mandala" />
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Hero Content */}
                <div className="relative z-20 max-w-3xl px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" data-aos="fade-up" data-aos-duration="1400">
                        Experience the Divine Rituals With the <br />
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">Specific Pujas of Kashi</span>
                    </h1>
                    <p className="text-gray-300 font-semibold mt-4 text-lg" data-aos="fade-right" data-aos-duration="1400">यत्र भक्तिः तत्र देवता।</p>
                    <a href="#pujas"
                        className="relative inline-block mt-6 px-8 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)]" data-aos="fade-down" data-aos-duration="1400">
                        <span className="relative z-10">Book Your Specific Pooja</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/mandala-bg.svg')] bg-no-repeat bg-center opacity-5"></div>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10" data-aos="fade-up">
                    <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="1200">
                        <img src="/images/ghat.jpeg" alt="Kashi Ghat" className="rounded-3xl shadow-2xl transition-transform duration-[2500ms] hover:scale-105 will-change-transform" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left border-l-4 border-yellow-600 pl-6">
                        <h2 className="text-5xl font-extrabold text-yellow-800 mb-4">About Kashi</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Kashi (Varanasi) — the eternal city of light — stands as one of the world’s oldest living cities and the spiritual heart of India. Every ritual, every mantra chanted here echoes through ages, offering liberation from the cycle of birth and karma.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Situated along the sacred Ganga, Kashi’s ghats witness countless divine ceremonies daily. From
                            <span className="font-semibold text-orange-600"> Rudrabhishek</span> to <span className="font-semibold text-orange-600">Ganga Aarti</span>, every puja holds a promise — of peace, purity, and prosperity.
                        </p>
                        <div className="italic text-yellow-700 bg-white/60 rounded-xl px-5 py-3 shadow-md mb-6">
                            <p>“काशी विश्वनाथ की नगरी – जहाँ हर श्वास में शिव बसते हैं।”</p>
                            <p className="text-sm text-gray-600 mt-1">— The City Where Every Breath is a Prayer</p>
                        </div>
                        <div className="flex justify-center md:justify-start gap-8 mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-orange-600">10,000+</h3>
                                <p className="text-gray-700">Pujas Performed</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-orange-600">5,000+</h3>
                                <p className="text-gray-700">Devotees Served</p>
                            </div>
                        </div>
                        <button
                            className="relative inline-block px-8 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)]">
                            <span className="relative z-10">Know More</span>
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Puja List Section */}
            <section id="pujas" className="py-20 bg-gradient-to-br from-yellow-50 to-white" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-yellow-800 mb-10">Kashi Specific Pujas</h2>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
                        {pujas.map((puja, index) => (
                            <PujaCard
                                key={index}
                                title={puja.title}
                                description={puja.description}
                                imgSrc={puja.imgSrc}
                                linkTo={puja.linkTo}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kashi;