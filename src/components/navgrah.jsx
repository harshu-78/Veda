import React, { useState, useEffect } from 'react';

const Gemstone = () => {
    // Alpine.js ke x-data ko replace karne ke liye React ka useState
    const [activeTab, setActiveTab] = useState(1);

    // Saare JavaScript code (IntersectionObserver, Swiper) ko chalane ke liye
    useEffect(() => {

        // --- 1. Resource ID aur URL define karna ---
        const swiperCssId = 'swiper-css-dynamic';
        const swiperJsId = 'swiper-js-dynamic';
        const swiperCssUrl = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        const swiperJsUrl = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';

        // --- 2. Instance variables store karna ---
        let observer;
        let swiperInstance = null;

        // --- 3. Helper Functions ---

        // Function to load CSS
        const loadCss = (id, href) => {
            if (!document.getElementById(id)) {
                const link = document.createElement('link');
                link.id = id;
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            }
        };

        // Function to load JS
        const loadScript = (id, src, callback) => {
            if (!document.getElementById(id)) {
                const script = document.createElement('script');
                script.id = id;
                script.src = src;
                script.async = true;
                // Jab script load ho jaye, tab callback (initSwiper) chalao
                script.onload = callback;
                document.head.appendChild(script);
            } else if (window.Swiper) {
                 // Agar script pehle se loaded hai (hot reload), toh seedha callback chalao
                callback();
            }
        };

        // Function to set up Intersection Observers
        const setupObservers = () => {
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observerCallback = (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        obs.unobserve(entry.target);
                    }
                });
            };
            observer = new IntersectionObserver(observerCallback, observerOptions);
            
            document.querySelectorAll('.problem-card').forEach(e => observer.observe(e));
            document.querySelectorAll('.benefit-tab').forEach(e => observer.observe(e));
            const displayCard = document.querySelector('.lg\\:col-span-1.relative.bg-gradient-to-br');
            if (displayCard) observer.observe(displayCard);
            document.querySelectorAll('.process-step').forEach(e => observer.observe(e));
            const swiperSection = document.querySelector('.testimonial-swiper');
            if (swiperSection) observer.observe(swiperSection);
        };

        // Function to initialize Swiper
        const initSwiper = () => {
            const swiperSection = document.querySelector('.testimonial-swiper');
            // Check karo ki Swiper JS library ab load ho chuki hai
            if (window.Swiper && swiperSection && !swiperSection.swiper) {
                swiperInstance = new window.Swiper('.testimonial-swiper', {
                    loop: true,
                    slidesPerView: 'auto', // Mobile par 'auto' width
                    centeredSlides: true,  // Mobile par slide center me
                    spaceBetween: 20,      // Mobile par space
                    
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        // Tablet
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            centeredSlides: false, // Tablet par center nahi
                        },
                        // Desktop
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            centeredSlides: false, // Desktop par center nahi
                        }
                    }
                });
            }
        };

        // --- 4. Logic ko Execute karna ---
        loadCss(swiperCssId, swiperCssUrl); // Pehle CSS load karo
        setupObservers();                   // Observers set karo
        // Phir JS load karo, aur jab wo load ho jaye, tab initSwiper chalao
        loadScript(swiperJsId, swiperJsUrl, initSwiper);


        // --- 5. Cleanup Function (Jab component unmount hoga) ---
        return () => {
            // Observer ko disconnect karo
            if (observer) {
                observer.disconnect();
            }

            // Swiper instance ko destroy karo
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
            }
            
            // Dynamically add ki hui CSS ko hatao
            const loadedCss = document.getElementById(swiperCssId);
            if (loadedCss) document.head.removeChild(loadedCss);
            
            // Dynamically add ki hui JS ko hatao
            const loadedJs = document.getElementById(swiperJsId);
            if (loadedJs) document.head.removeChild(loadedJs);
        };

    }, []); // [] ka matlab ye effect sirf ek baar component mount hone par chalega

    return (
        <>
            {/* --- Saare CSS Styles aur Keyframes --- */}
            <style>
                {`
                    /* SWIPER CSS IMPORT AB YAHAN NAHI HAI. Ye JS se ho raha hai. */
                    
                    body {
                        font-family: 'Poppins', sans-serif;
                        scroll-behavior: smooth;
                    }

                    .font-serif-display {
                        font-family: 'Lora', serif;
                    }

                    @keyframes gradient-xy {
                        0% { background-position: 0% 0%; }
                        50% { background-position: 100% 100%; }
                        100% { background-position: 0% 0%; }
                    }

                    .animate-gradient-xy {
                        background-size: 400% 400%;
                        animation: gradient-xy 15s ease infinite;
                    }

                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out forwards;
                    }

                    .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
                    .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
                    .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }

                    @keyframes pulse-light {
                        0%, 100% {
                            transform: scale(1);
                            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        }
                        50% {
                            transform: scale(1.02);
                            box-shadow: 0 6px 15px rgba(255, 165, 0, 0.3);
                        }
                    }

                    .animate-pulse-light {
                        animation: pulse-light 3s ease-in-out infinite;
                    }
                    .animate-pulse-light.delay-100 { animation-delay: 0.1s; }
                    .animate-pulse-light.delay-200 { animation-delay: 0.2s; }
                    
                    @keyframes pulse-slow {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 4s ease-in-out infinite;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background-color: #FDBA74; /* Orange-300 */
                        opacity: 0.7;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: #F97316; /* Orange-600 */
                        opacity: 1;
                    }

                    /* ===== SWIPER LAYOUT BEHTAR KARNE KE LIYE ===== */
                    .testimonial-swiper {
                        /* Dikhane ke liye ki aur cards hain */
                        padding-left: 16px;
                        padding-right: 16px;
                    }

                    @media (min-width: 1024px) {
                        .testimonial-swiper {
                             /* Desktop par zyada padding */
                             padding-left: 48px;
                             padding-right: 48px;
                        }
                    }

                    .testimonial-swiper .swiper-slide {
                        width: 85%; /* Mobile par card ki chaudai */
                        height: auto; /* Height auto adjust hogi */
                    }

                    @media (min-width: 768px) {
                        .testimonial-swiper .swiper-slide {
                            width: auto; /* Tablet/Desktop par default */
                        }
                    }
                `}
            </style>

            {/* --- Section 1: Hero --- */}
            <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50" autoPlay loop muted playsInline>
                    <source src="/n1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
                <div className="container mx-auto px-6 relative z-20 text-white">
                    <div className="max-w-3xl text-center md:text-left">
                        <span className="text-orange-300 font-semibold uppercase">Remove Astrological Obstacles</span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif-display mt-4 mb-6 leading-tight drop-shadow-lg">
                            Navgraha Shanti Yagya
                        </h1>
                        <p className="text-lg text-gray-200 mb-10 drop-shadow-md">
                            To <b>balance planetary energies</b> and remove astrological obstacles. Bring peace, prosperity, and harmony back into your life by pacifying the nine planets.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#book" className="bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 transform hover:-translate-y-1">
                                Book Your Yagya Now
                            </a>
                            <a href="#benefits" className="bg-white text-orange-600 border border-orange-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-orange-50 transition duration-300">
                                Discover Benefits
                            </a>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row gap-x-6 gap-y-4 justify-center md:justify-start">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-center font-medium text-gray-200">
                                Authentic Vedic Rituals
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-center font-medium text-gray-200">
                                Experienced Pandits
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Problems --- */}
            <section id="problems" className="relative py-20 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-red-100 to-yellow-100 opacity-75 animate-gradient-xy z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-700 font-semibold uppercase tracking-wider block mb-2 animate-fade-in-up delay-100">Are you facing challenges?</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif-display text-gray-900 mt-4 mb-4 animate-fade-in-up delay-200">Life Feels Stuck? The Planets Might Be The Reason.</h2>
                        <p className="text-lg text-gray-700 animate-fade-in-up delay-300">
                            Malefic effects of planets (Graha Doshas) can manifest as persistent problems in various areas of your life.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="problem-card bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 opacity-0 transform translate-y-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-red-200 text-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md animate-pulse-light">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold font-serif-display text-gray-900 mb-3">Career & Financial Blocks</h3>
                            <p className="text-gray-600">Constant failures, unexpected job loss, rising debts, and lack of growth despite hard work.</p>
                        </div>
                        <div className="problem-card bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 opacity-0 transform translate-y-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-200 to-yellow-200 text-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md animate-pulse-light delay-100">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold font-serif-display text-gray-900 mb-3">Health & Relationship Issues</h3>
                            <p className="text-gray-600">Chronic health problems, lack of mental peace, anxiety, and frequent conflicts with family or partners.</p>
                        </div>
                        <div className="problem-card bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 opacity-0 transform translate-y-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 text-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md animate-pulse-light delay-200">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold font-serif-display text-gray-900 mb-3">Constant Bad Luck</h3>
                            <p className="text-gray-600">Feeling a sense of blockage, things not working out at the last minute, and a persistent feeling of negativity.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- Section 3: Benefits --- */}
            <section id="benefits" className="relative py-20 md:py-32 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-yellow-50 to-orange-50 opacity-75 animate-gradient-xy z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif-display text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Pacify the Planets, Welcome Harmony</h2>
                        <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            This Yagya is the supreme Vedic remedy to neutralize these doshas and restore balance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        <div className="lg:col-span-1 flex flex-col space-y-4">
                            <button
                                onClick={() => setActiveTab(1)}
                                className={`benefit-tab bg-white rounded-2xl text-left transition-all duration-300 p-6 flex items-center gap-5 opacity-0 transform translate-y-10 ${activeTab === 1 ? 'scale-105 shadow-xl shadow-orange-400/50 opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                style={{ animationDelay: '0.3s' }}
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif-display text-gray-900">Neutralize Malefic Effects</h3>
                                    <p className="text-sm text-gray-600">Pacify Shani, Rahu, Ketu, etc.</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setActiveTab(2)}
                                className={`benefit-tab bg-white rounded-2xl text-left transition-all duration-300 p-6 flex items-center gap-5 opacity-0 transform translate-y-10 ${activeTab === 2 ? 'scale-105 shadow-xl shadow-orange-400/50 opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                style={{ animationDelay: '0.4s' }}
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif-display text-gray-900">Strengthen Positive Planets</h3>
                                    <p className="text-sm text-gray-600">Boost Guru, Shukra, etc.</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setActiveTab(3)}
                                className={`benefit-tab bg-white rounded-2xl text-left transition-all duration-300 p-6 flex items-center gap-5 opacity-0 transform translate-y-10 ${activeTab === 3 ? 'scale-105 shadow-xl shadow-orange-400/50 opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                style={{ animationDelay: '0.5s' }}
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif-display text-gray-900">Clear Career Obstacles</h3>
                                    <p className="text-sm text-gray-600">Remove blocks in job & finance.</p>
                                </div>
                            </button>
                        </div>

                        <div className="lg:col-span-1 relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl min-h-[400px] p-8 md:p-12 opacity-0 transform translate-y-10 flex items-center justify-center" style={{ animationDelay: '0.4s' }}>
                            
                            {activeTab === 1 && (
                                <div className="w-full text-center">
                                    <div className="w-28 h-28 mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40 mx-auto animate-pulse-slow">
                                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                                    </div>
                                    <h3 className="text-3xl font-bold font-serif-display text-gray-900 mb-4">Neutralize Malefic Effects</h3>
                                    <p className="text-lg text-gray-600">Reduces the negative impact of Shani, Rahu, Ketu, and other malefic planets, clearing long-standing obstacles.</p>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div className="w-full text-center">
                                    <div className="w-28 h-28 mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40 mx-auto animate-pulse-slow">
                                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    </div>
                                    <h3 className="text-3xl font-bold font-serif-display text-gray-900 mb-4">Strengthen Positive Planets</h3>
                                    <p className="text-lg text-gray-600">Enhances the positive influence of benefic planets like Jupiter (Guru) and Venus (Shukra) for luck and prosperity.</p>
                                </div>
                            )}
                            {activeTab === 3 && (
                                <div className="w-full text-center">
                                    <div className="w-28 h-28 mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40 mx-auto animate-pulse-slow">
                                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-3xl font-bold font-serif-display text-gray-900 mb-4">Clear Career Obstacles</h3>
                                    <p className="text-lg text-gray-600">Opens new opportunities for job, business growth, and financial stability by removing planetary blockages.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- Section 4: Process --- */}
            <section id="process" className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif-display text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Our Authentic Vedic Process</h2>
                        <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            We follow a 100% transparent and shastric process.
                        </p>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-orange-400 via-yellow-500 to-orange-400 rounded-full z-0"></div>

                        <div className="relative space-y-16">
                            <div className="process-step relative pl-20 opacity-0 transform translate-y-10" style={{ animationDelay: '0.3s' }}>
                                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-yellow-500/50 ring-8 ring-gray-50 z-10">
                                    1
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                                    <h3 className="text-2xl font-bold font-serif-display text-gray-900 mb-2">Sankalpa (The Vow)</h3>
                                    <p className="text-gray-600">You provide your details (Name, Gotra, Birth Details). Our priest takes the Sankalpa (vow) on your behalf, dedicating the Yagya to your well-being.</p>
                                </div>
                            </div>

                            <div className="process-step relative pl-20 opacity-0 transform translate-y-10" style={{ animationDelay: '0.4s' }}>
                                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-yellow-500/50 ring-8 ring-gray-50 z-10">
                                    2
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                                    <h3 className="text-2xl font-bold font-serif-display text-gray-900 mb-2">Live Yagya Performance</h3>
                                    <p className="text-gray-600">Our team of 5 learned Pandits performs the Yagya, chanting specific mantras (1.25 Lakh Jaap). You can join via a private live stream.</p>
                                </div>
                            </div>

                            <div className="process-step relative pl-20 opacity-0 transform translate-y-10" style={{ animationDelay: '0.5s' }}>
                                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-yellow-500/50 ring-8 ring-gray-50 z-10">
                                    3
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                                    <h3 className="text-2xl font-bold font-serif-display text-gray-900 mb-2">Purnahuti & Prasad</h3>
                                    <p className="text-gray-600">After the Purnahuti (final offering), blessings are invoked. We courier the sanctified Prasad (vibhuti, raksha sutra) to your address.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- Section 5: Testimonials (Swiper) --- */}
            <section id="testimonials" className="py-20 bg-orange-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif-display text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>What Our Devotees Say</h2>
                    </div>
                </div>

                {/* Swiper container - Layout behtar kiya gaya hai */}
                <div className="testimonial-swiper swiper-container relative w-full opacity-0 transform translate-y-10" style={{ animationDelay: '0.3s' }}>
                    <div className="swiper-wrapper pb-24">
                        
                        {/* --- CARD 1 --- (Design updated hai) */}
                        <div className="swiper-slide">
                            <div className="relative mt-12 bg-yellow-300 rounded-3xl p-8 pt-20 shadow-xl text-center h-full">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                    <img className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300" alt="Rajat Sharma" />
                                </div>
                                <div className="flex justify-center text-white mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Rajat Sharma</h3>
                                <span className="flex items-center justify-center text-lg text-gray-700 mt-1 mb-6">
                                    <svg className="w-5 h-5 text-red-600 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                    Bangalore, India
                                </span>
                                <h4 className="text-xl font-bold text-gray-800 mt-8 mb-3">Discover What the Stars Hold for You</h4>
                                <p className="text-gray-700 text-lg leading-relaxed px-4">
                                    Every year brings a new vibration. 2026 will be ruled by the Saturn-Rahu influence, marking a year of karma, growth, and transformation.
                                </p>
                            </div>
                        </div>

                        {/* --- CARD 2 --- */}
                        <div className="swiper-slide">
                            <div className="relative mt-12 bg-yellow-300 rounded-3xl p-8 pt-20 shadow-xl text-center h-full">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                    <img className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300" alt="Priya Kulkarni" />
                                </div>
                                <div className="flex justify-center text-white mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Priya Kulkarni</h3>
                                <span className="flex items-center justify-center text-lg text-gray-700 mt-1 mb-6">
                                    <svg className="w-5 h-5 text-red-600 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                    Pune, India
                                </span>
                                <h4 className="text-xl font-bold text-gray-800 mt-8 mb-3">Discover What the Stars Hold for You</h4>
                                <p className="text-gray-700 text-lg leading-relaxed px-4">
                                    Every year brings a new vibration. 2026 will be ruled by the Saturn-Rahu influence, marking a year of karma, growth, and transformation.
                                </p>
                            </div>
                        </div>

                        {/* --- CARD 3 --- */}
                        <div className="swiper-slide">
                            <div className="relative mt-12 bg-yellow-300 rounded-3xl p-8 pt-20 shadow-xl text-center h-full">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                    <img className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" src="https://images.unsplash.com/photo-1607346256330-dfl4g5793589?q=80&w=300" alt="Amit Patel" />
                                </div>
                                <div className="flex justify-center text-white mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.534 4.735a1 1 0 00.95.69h4.989c.969 0 1.371 1.24.588 1.81l-4.036 2.929a1 1 0 00-.364 1.118l1.534 4.735c.3.921-.755 1.688-1.54 1.118l-4.036-2.929a1 1 0 00-1.176 0l-4.036 2.929c-.784.57-1.838-.197-1.539-1.118l1.534-4.735a1 1 0 00-.364-1.118L2.03 10.162c-.783-.57-.38-1.81.588-1.81h4.989a1 1 0 00.95-.69L11.049 2.927z"></path></svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Amit Patel</h3>
                                <span className="flex items-center justify-center text-lg text-gray-700 mt-1 mb-6">
                                    <svg className="w-5 h-5 text-red-600 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                    New Jersey, USA
                                </span>
                                <h4 className="text-xl font-bold text-gray-800 mt-8 mb-3">Discover What the Stars Hold for You</h4>
                                <p className="text-gray-700 text-lg leading-relaxed px-4">
                                    Every year brings a new vibration. 2026 will be ruled by the Saturn-Rahu influence, marking a year of karma, growth, and transformation.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* Pagination bullets */}
                    <div className="swiper-pagination bottom-8"></div>
                </div>
            </section>
            
            {/* --- Section 6: CTA --- */}
            <section id="book" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif-display mb-6 drop-shadow-md">Take the First Step Towards a Balanced Life</h2>
                        <p className="text-lg text-orange-50 mb-8 drop-shadow-sm">
                            Book your personalized Navgraha Shanti Yagya and let our expert Pandits perform the ritual for your well-being.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left mb-10 border border-white/20">
                            <h4 className="text-xl font-bold text-white mb-5">What's Included:</h4>
                            <ul className="space-y-3 text-white">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="text-lg">Personalized Sankalpa in Your Name</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="text-lg">Navgraha Mantra Jaap (1.25 Lakh)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="text-lg">Live Yagya Streaming Link</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="text-lg">Sanctified Prasad Home-Delivered</span>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="bg-white text-orange-600 font-bold text-xl px-12 py-4 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1">
                            Book My Yagya Now
                        </a>
                    </div>
                </div>
            </section>
            
            {/* --- Section 7: FAQ --- */}
            <section id="faq" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif-display text-gray-900 mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <details className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 open:shadow-lg">
                            <summary className="font-semibold text-lg cursor-pointer text-gray-800">
                                What is Navgraha Shanti Yagya?
                            </summary>
                            <p className="mt-4 text-gray-600">
                                It is a powerful Vedic ritual performed to appease all nine planets (Surya, Chandra, Mangal, Budha, Guru, Shukra, Shani, Rahu, and Ketu). Its main purpose is to neutralize their negative effects and enhance their positive influences.
                            </p>
                        </details>
                        <details className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                            <summary className="font-semibold text-lg cursor-pointer text-gray-800">
                                Do I need to be present for the Yagya?
                            </summary>
                            <p className="mt-4 text-gray-600">
                                No, your physical presence is not required. The Yagya is performed by our priests on your behalf. We take your 'Sankalpa' remotely. We will provide a private live stream link for you to watch the Yagya from anywhere.
                            </p>
                        </details>
                        <details className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                            <summary className="font-semibold text-lg cursor-pointer text-gray-800">
                                What details do you need from me?
                            </summary>
                            <p className="mt-4 text-gray-600">
                                We will need your Full Name, Gotra (if known), Date of Birth, Time of Birth, and Place of Birth to create the personalized Sankalpa for the ritual.
                            </p>
                        </details>
                        <details className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                            <summary className="font-semibold text-lg cursor-pointer text-gray-800">
                                When will I see the results?
                            </summary>
                            <p className="mt-4 text-gray-600">
                                The positive effects of the Yagya begin immediately after its completion. However, significant and noticeable changes, such as removal of obstacles and improved mental peace, are often observed over the next 4 to 12 weeks as the positive energies integrate.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gemstone;