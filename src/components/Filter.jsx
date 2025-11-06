"use client";

import { useState, useMemo, useEffect } from "react";
import { Link } from 'react-router-dom';

// Data
const initialCardsToShow = 8;

const categories = [
    { key: "all", label: "All Pujas" },
    { key: "yagya", label: "Yagya Puja" },
    { key: "havan", label: "Homa | Havan" },
    { key: "japa", label: "Japa | Chanting" },
    { key: "path", label: "Path | Recitation" }, 
    { key: "kashiKhand", label: "Puja in Kashi" },
    { key: "dailypuja", label: "Daily Puja" },
    { key: "rudrabhishek", label: "Nitya Ati Rudrabhishek" },
    { key: "upcoming", label: "Upcoming Festival Puja" },
    { key: "puja", label: "Puja" }, 
];

export const initialPujas = [
    { id: 1, title: "Bagalamukhi Yagya", category: "yagya", img: "/images/Bagalamukhi Puja.jpg" },
    { id: 2, title: "Chandra Puja", category: "yagya", img: "/images/Chandra Puja.jpg" },
    { id: 3, title: "Gaja Lakshmi Puja", category: "havan", img: "/images/Gaja Lakshmi Puja (Ashta-Lakshmi).jpg" },
    { id: 4, title: "Sawan Special Rudrabhishek", category: "upcoming", img: "/images/Sawan Special Vedic Yagya 2025 – In Kashi.jpg" },
    { id: 31, title: "Navratri Durga Puja", category: "upcoming", img: "/images/Navratri.jpeg" },
    { id: 32, title: "Diwali Lakshmi Ganesh Puja", category: "upcoming", img: "/images/Gaja Lakshmi Puja (Ashta-Lakshmi).jpg" },
    { id: 5, title: "Adi Lakshmi Puja", category: "dailypuja", img: "/images/Adi Lakshmi Puja (Ashta-Lakshmi).jpg" },
    { id: 6, title: "Shani Shanti Japa", category: "japa", img: "/images/Shani Puja.jpg" },
    { id: 7, title: "Durga Saptashati Path", category: "path", img: "/images/Dhanya Lakshmi Puja (Ashta-Lakshmi).jpg" },
    { id: 8, title: "Rahu Graha Shanti Homa", category: "havan", img: "/images/Bagalamukhi Puja.jpg" },
    { id: 9, title: "Budh Graha Japa", category: "japa", img: "/images/Budh Puja (Mercury Puja).jpg" },
    { id: 10, title: "Vidya Lakshmi Puja", category: "dailypuja", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Vidya+Lakshmi+Puja" },
    { id: 11, title: "Kashi Khand Path", category: "kashiKhand", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Kashi+Khand" },
    { id: 12, title: "Nitya Ati Rudrabhishek", category: "rudrabhishek", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Rudrabhishek" },
    { id: 13, title: "Ganga Aarti Participation", category: "kashiKhand", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Ganga+Aarti" },
    ...Array.from({ length: 17 }, (_, i) => ({ id: 14 + i, title: `Sample Puja ${i + 1}`, category: ["yagya", "havan", "japa", "path"][i % 4], img: `https://placehold.co/600x400/FFF3D7/805A2A?text=Puja+${14 + i}` }))
];

// SVG Icons
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.875-5.939l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>;


const TempleIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>;
const PanditIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
const SankalpIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>;


function PujaCard({ puja }) {
    const endsInDays = useMemo(() => Math.floor(2 + Math.random() * 10), []);

    const linkPath = puja.category === 'upcoming' 
        ? `/upcoming-puja/${puja.id}` 
        : `/pujas/${puja.id}`;      

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/80 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative">
                <img src={puja.img} alt={puja.title} className="w-full h-48 object-cover" style={{ objectPosition: 'center 25%' }} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/FFF3D7/805A2A?text=Image+Not+Found'; }} />
                {puja.category === 'upcoming' && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-red-600 font-bold text-xs px-3 py-1.5 rounded-full flex items-center shadow-md">
                        <ClockIcon /> Ends in {endsInDays} days
                    </div>
                )}
                <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-md hover:bg-white transition-transform duration-200 hover:scale-110">
                    <ShareIcon />
                </button>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 leading-tight mb-4 flex-grow">{puja.title}</h3>
                <div className="mt-auto">
                    
                    <Link to={linkPath}>
                        <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03]">
                            {puja.category === 'upcoming' ? 'Participate Now' : 'Book Now'}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Main Filter Component
export default function Filter() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setIsExpanded(false);
    }, [filter, search]);

    const { upcomingPujas, otherPujas } = useMemo(() => {
        const upcoming = initialPujas
            .filter(p => p.category === 'upcoming' && p.title.toLowerCase().includes(search.toLowerCase()))
            .slice(0, 3);

        const others = initialPujas.filter(p => {
            if (p.category === 'upcoming') return false;
            const matchFilter = filter === 'all' || p.category === filter;
            const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
            return matchFilter && matchSearch;
        });

        return { upcomingPujas: upcoming, otherPujas: others };
    }, [search, filter]);

    const isFiltered = filter !== 'all' || search !== '';

    const displayedOtherPujas = isFiltered ? otherPujas : (isExpanded ? otherPujas : otherPujas.slice(0, initialCardsToShow));

    const showExploreButton = !isFiltered && !isExpanded && otherPujas.length > initialCardsToShow;

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Explore Our Sacred{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400">
                            Pujas and Yagyas
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose from a variety of rituals, yagya, havan, japa and more — performed authentically by expert Vedic priests.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar Filter */}
                    <aside className="lg:col-span-3 xl:col-span-2 bg-gradient-to-b from-white to-amber-50 rounded-2xl shadow-lg p-5 border border-gray-200/80 h-fit lg:sticky top-6">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full"></span>
                            <h2 className="text-xl font-extrabold text-gray-900 tracking-wide">Filters</h2>
                        </div>
                        <div className="relative mb-5">
                            <input
                                type="text"
                                placeholder="Search for Pujas..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm bg-white shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                        </div>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat.key}>

                                    {cat.key === 'rudrabhishek' ? (
                                        <Link
                                            to="/nitya-ati-rudrabhishek"
                                            className={`w-full text-left block px-4 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-sm ${filter === cat.key ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md scale-105" : "bg-white/80 hover:bg-amber-100/70 hover:text-orange-800"}`}
                                        >
                                            {cat.label}
                                        </Link>
                                    ) : cat.key === 'kashiKhand' ? (
                                        <Link
                                            to="/puja-in-kashi"
                                            className={`w-full text-left block px-4 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-sm ${filter === cat.key ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md scale-105" : "bg-white/80 hover:bg-amber-100/70 hover:text-orange-800"}`}
                                        >
                                            {cat.label}
                                        </Link>
                                    ) : cat.key === 'dailypuja' ? ( 
                                        <Link
                                            to="/daily-puja" 
                                            className={`w-full text-left block px-4 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-sm ${filter === cat.key ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md scale-105" : "bg-white/80 hover:bg-amber-100/70 hover:text-orange-800"}`}
                                        >
                                            {cat.label}
                                        </Link>
                                    ) : cat.key === 'path' ? ( 
                                        <Link
                                            to="/path-recitation"
                                            className={`w-full text-left block px-4 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-sm ${filter === cat.key ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md scale-105" : "bg-white/80 hover:bg-amber-100/70 hover:text-orange-800"}`}
                                        >
                                            {cat.label}
                                        </Link>
                                    ) : cat.key === 'puja' ? ( 
                                        <Link
                                            to="/simple-puja" 
                                            className={`w-full text-left block px-4 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-sm ${filter === cat.key ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md scale-105" : "bg-white/80 hover:bg-amber-100/70 hover:text-orange-800"}`}
                                        >
                                            {cat.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => setFilter(cat.key)}
                                            className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-sm ${filter === cat.key ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md scale-105" : "bg-white/80 hover:bg-amber-100/70 hover:text-orange-800"}`}
                                        >
                                            {cat.label}
                                        </button>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content Section */}
                    <div className="lg:col-span-9 xl:col-span-10">
                        {/* Regular Pujas Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                            {displayedOtherPujas.length > 0 ? (
                                displayedOtherPujas.map((puja) => (
                                    <PujaCard key={puja.id} puja={puja} />
                                ))
                            ) : (
                                filter !== 'upcoming' && <div className="col-span-full flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-md">
                                    <p className="text-xl font-semibold text-gray-700">No Pujas Found</p>
                                    <p className="text-gray-500 mt-2">Please try adjusting your search or filter.</p>
                                </div>
                            )}
                        </div>

                        {showExploreButton && (
                            <div className="text-center mt-10">
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03]"
                                >
                                    Explore All Pujas
                                </button>
                            </div>
                        )}

                        {/* NEW "Embrace the Festive Spirit" Section */}
                        {(filter === 'all' || filter === 'upcoming') && upcomingPujas.length > 0 && (
                            <div className="bg-amber-50/50 border border-amber-200/60 rounded-3xl p-6 sm:p-8 lg:p-12 mt-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-center">
                                    {/* Left Column */}
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                                            Embrace the <span className="text-orange-600">Festive Spirit</span>
                                        </h2>
                                        <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>
                                        <p className="mt-6 text-gray-600 leading-relaxed">
                                            This festive season, book pujas in your name at auspicious temples. We also perform pujas exclusively for you with a live stream.
                                        </p>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-md border border-gray-200/80">
                                                <TempleIcon className="h-6 w-6 text-orange-500" />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-bold text-gray-800">Sacred Mahurats</h4>
                                                <p className="text-gray-600 mt-1 text-sm">Pujas are performed on the most auspicious days and timings for the best results.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-md border border-gray-200/80">
                                                <PanditIcon className="h-6 w-6 text-orange-500" />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-bold text-gray-800">Learned Pandits</h4>
                                                <p className="text-gray-600 mt-1 text-sm">Every puja is performed by our team of experienced and learned pandits.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-md border border-gray-200/80">
                                                <SankalpIcon className="h-6 w-6 text-orange-500" />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-bold text-gray-800">Personalized Sankalps</h4>
                                                <p className="text-gray-600 mt-1 text-sm">We take your personal sankalps to ensure the puja is performed for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Upcoming Pujas Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {upcomingPujas.map((puja) => (
                                        <PujaCard key={puja.id} puja={puja} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}