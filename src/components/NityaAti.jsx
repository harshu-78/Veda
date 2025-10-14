import React from 'react';

const NityaAti = () => {
    return (
        <div className="bg-cream text-charcoal font-sans antialiased">
            <header className="relative min-h-screen flex items-end md:items-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/banner.jpg" 
                         alt="A serene Shivling during an Abhishekam ceremony" 
                         className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-0 md:px-12 text-center md:text-left">
                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-wide">
                        Experience Divine Grace Daily
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-amber-300 max-w-2xl">
                        Join our Nitya Ati Rudrabhishek Yagya to invoke Lord Shiva’s blessings for profound peace, health, and prosperity.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <a href="#participate" className="w-full sm:w-auto bg-saffron-500 hover:bg-saffron-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                            Book Your Sankalpam
                        </a>
                        <a href="#live" className="w-full sm:w-auto bg-black/20 backdrop-blur-sm border border-white/50 hover:bg-white hover:text-charcoal text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center gap-2">
                           Watch Live Yagya
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section id="about" className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center">
                                <div className="p-4 bg-orange-100 border-2 border-yellow-500/30 rounded-t-full rounded-b-xl shadow-2xl">
                                     <div className="overflow-hidden rounded-t-full rounded-b-lg">
                                        <img src="/images/Kashi Vishvnath.jpg" alt="A serene Shivling during an Abhishekam ceremony" className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                                    The Four Pillars of Divine Essence
                                </h2>
                                <p className="mt-4 text-orange-600 text-lg">
                                    Understand the sacred components that combine to create the profound spiritual energy of the Yagya.
                                </p>
                                <div className="my-8 h-px w-2/3 mx-auto lg:mx-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300 shadow-sm hover:shadow-lg">
                                        <div className="text-4xl text-orange-500 mb-3">🔱</div>
                                        <h3 className="font-semibold text-xl text-gray-800">Vedic Recitation</h3>
                                        <p className="mt-2 text-gray-600 text-sm">Sacred hymns of Shri Rudram, chanted to invoke the infinite aspects of Lord Shiva.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300 shadow-sm hover:shadow-lg">
                                        <div className="text-4xl text-orange-500 mb-3">🏺</div>
                                        <h3 className="font-semibold text-xl text-gray-800">Abhishekam</h3>
                                        <p className="mt-2 text-gray-600 text-sm">The ritual bathing of the Shivling with holy offerings, purifying all existence.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300 shadow-sm hover:shadow-lg">
                                        <div className="text-4xl text-orange-500 mb-3">🔥</div>
                                        <h3 className="font-semibold text-xl text-gray-800">Yagya (Havan)</h3>
                                        <p className="mt-2 text-gray-600 text-sm">Offerings to Agni, the sacred fire, carrying prayers and intentions to the divine.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300 shadow-sm hover:shadow-lg">
                                        <div className="text-4xl text-orange-500 mb-3">🙏</div>
                                        <h3 className="font-semibold text-xl text-gray-800">Sankalpam</h3>
                                        <p className="mt-2 text-gray-600 text-sm">Devotee's intentions, guided with precision by learned and devoted Vedic priests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits" className="py-24 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">
                                A River of Divine Blessings
                            </h2>
                            <p className="mt-4 text-orange-600 text-lg">
                                Discover the sacred benefits that flow into your life through the grace of this powerful Yagya.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="w-full flex justify-center">
                                <img src="/images/medi.jpg" alt="A person meditating in a serene temple" className="rounded-2xl shadow-2xl object-cover max-h-[600px]" />
                            </div>
                            <div className="relative">
                                <div className="absolute top-0 bottom-0 left-4">
                                    <svg width="2" height="100%" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-yellow-300">
                                        <line x1="1" y1="0" x2="1" y2="100%" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="space-y-12">
                                    <div className="group relative pl-12">
                                        <div className="absolute top-0 left-0 h-full flex items-center">
                                            <div className="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 h-8 w-8 bg-cream rounded-full"></div>
                                            <svg className="w-8 h-8 absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 text-orange-500 transition-colors duration-300 group-hover:text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a1.5 1.5 0 011.378 2.126l-1.38 3.862a.5.5 0 01-.94-.038l-1.38-3.862A1.5 1.5 0 0110 3.5zm-3.122 5.372a.5.5 0 01-.939-.038L4.56 5.626A1.5 1.5 0 016.878 3.5h6.244a1.5 1.5 0 011.378 2.126l-1.38 3.862a.5.5 0 01-.94-.038l1.38-3.862a.5.5 0 00-.46-.626H6.878a.5.5 0 00-.459.626l1.38 3.862zM4.5 10.5a1.5 1.5 0 011.378 2.126L4.5 16.5h11l-1.378-3.874a1.5 1.5 0 112.756-.972L18.5 16.5A1.5 1.5 0 0117.122 18H2.878A1.5 1.5 0 011.5 16.5l1.622-4.874A1.5 1.5 0 014.5 10.5z"/></svg>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Inner Peace & Clarity</h3>
                                        <p className="mt-1 text-gray-600">Calm your mind, reduce stress, and find mental clarity amidst life's challenges.</p>
                                    </div>
                                    <div className="group relative pl-12">
                                         <div className="absolute top-0 left-0 h-full flex items-center">
                                            <div className="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 h-8 w-8 bg-cream rounded-full"></div>
                                            <svg className="w-8 h-8 absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 text-orange-500 transition-colors duration-300 group-hover:text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.5 9.5a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Removes Doshas & Negativity</h3>
                                        <p className="mt-1 text-gray-600">Neutralize malefic planetary influences and cleanse energetic blockages.</p>
                                    </div>
                                    <div className="group relative pl-12">
                                        <div className="absolute top-0 left-0 h-full flex items-center">
                                            <div className="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 h-8 w-8 bg-cream rounded-full"></div>
                                            <svg className="w-8 h-8 absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 text-orange-500 transition-colors duration-300 group-hover:text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5c0 1.01.366 1.932.956 2.686a.5.5 0 00.708-.708A4.002 4.002 0 016 7a4 4 0 118 0 4.002 4.002 0 01-.664 2.012.5.5 0 10.708.708A5.002 5.002 0 0015 7a5 5 0 00-5-5z"/><path d="M10 12a5 5 0 00-5 5c0 1.01.366 1.932.956 2.686a.5.5 0 00.708-.708A4.002 4.002 0 016 17a4 4 0 118 0 4.002 4.002 0 01-.664 2.012.5.5 0 10.708.708A5.002 5.002 0 0015 17a5 5 0 00-5-5z"/></svg>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Protection & Cleansing</h3>
                                        <p className="mt-1 text-gray-600">Build a divine shield of protection and cleanse your aura from impurities.</p>
                                    </div>
                                    <div className="group relative pl-12">
                                         <div className="absolute top-0 left-0 h-full flex items-center">
                                            <div className="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 h-8 w-8 bg-cream rounded-full"></div>
                                           <svg className="w-8 h-8 absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 text-orange-500 transition-colors duration-300 group-hover:text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a.5.5 0 00-.485.379l-1 4A.5.5 0 009 6.5h2a.5.5 0 00.485-.621l-1-4A.5.5 0 0010 2zM5.485 5.379a.5.5 0 00-.485.621l1 4A.5.5 0 006.5 10h1.272a.5.5 0 00.464-.314l.728-1.562A.5.5 0 019.236 8h1.528a.5.5 0 01.464.686l-.728 1.562a.5.5 0 00.464.314h1.272a.5.5 0 00.485-.379l1-4a.5.5 0 00-.485-.621H5.485zM4 11a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1A.5.5 0 014 11zm11.5.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM5 14a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1A.5.5 0 015 14zm10.5.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z"/></svg>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Blessings for Family & Home</h3>
                                        <p className="mt-1 text-gray-600">Foster love, harmony, health, and prosperity for your entire family and home.</p>
                                    </div>
                                    <div className="group relative pl-12">
                                        <div className="absolute top-0 left-0 h-full flex items-center">
                                            <div className="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 h-8 w-8 bg-cream rounded-full"></div>
                                            <svg className="w-8 h-8 absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 text-orange-500 transition-colors duration-300 group-hover:text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.103.5 0l4.33 2.887c.23.153.23.467 0 .62l-4.33 2.887a.375.375 0 01-.5 0L3.5 11.082a.375.375 0 010-.62L8.433 7.418zM2.25 12.332c0 .414.336.75.75.75h14a.75.75 0 00.75-.75.75.75 0 00-.75-.75h-14a.75.75 0 00-.75.75z"/></svg>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Growth & Prosperity</h3>
                                        <p className="mt-1 text-gray-600">Accelerate your spiritual journey and attract abundance in all your endeavors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section id="participate" className="py-24" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')" }}>
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="hidden lg:block">
                                <img src="/images/download.jpg" alt="A devotee participating in a sacred ritual at Prayagraj" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-center lg:text-left mb-12">
                                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">
                                        Begin Your Sacred Journey
                                    </h2>
                                    <p className="mt-4 text-orange-600 text-lg">
                                        Follow this simple, four-step path to connect with the divine.
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    <div className="group flex items-start gap-6 p-4 rounded-lg transition-colors duration-300 hover:bg-white">
                                        <div className="flex-shrink-0 font-serif text-4xl font-bold text-yellow-300 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
                                            01
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Choose Your Sankalpam</h3>
                                            <p className="mt-1 text-gray-600">Select your divine intention or prayer. This is the most crucial step, as it sets the purpose of your participation.</p>
                                        </div>
                                    </div>
                                    <div className="group flex items-start gap-6 p-4 rounded-lg transition-colors duration-300 hover:bg-white">
                                        <div className="flex-shrink-0 font-serif text-4xl font-bold text-yellow-300 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
                                            02
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Submit Your Details</h3>
                                            <p className="mt-1 text-gray-600">Provide your name (and Gotra, if known). This allows the priests to include you in the sacred ritual by name.</p>
                                        </div>
                                    </div>
                                    <div className="group flex items-start gap-6 p-4 rounded-lg transition-colors duration-300 hover:bg-white">
                                        <div className="flex-shrink-0 font-serif text-4xl font-bold text-yellow-300 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
                                            03
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Watch the Livestream</h3>
                                            <p className="mt-1 text-gray-600">Join the daily Yagya live from anywhere in the world and immerse yourself in the divine vibrations.</p>
                                        </div>
                                    </div>
                                    <div className="group flex items-start gap-6 p-4 rounded-lg transition-colors duration-300 hover:bg-white">
                                        <div className="flex-shrink-0 font-serif text-4xl font-bold text-yellow-300 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
                                            04
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-orange-600">Receive Blessings</h3>
                                            <p className="mt-1 text-gray-600">Feel the grace of Lord Shiva in your life. You can also opt to receive sacred Prasadam at your home.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 text-center lg:text-left">
                                    <a href="#register" className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-4 px-12 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-400/50">
                                         Book Your Sankalpam Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="py-24" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/sand-paper.png')" }}>
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4a2c2a]">
                                Voices of Devotion
                            </h2>
                            <p className="mt-4 text-[#854d27] text-lg">
                                Hear the heartfelt experiences of devotees who have been touched by the grace of Lord Shiva.
                            </p>
                            <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            <div className="bg-[#fcf6f0] p-8 rounded-lg shadow-[8px_8px_16px_#d1c7bc,_-8px_-8px_16px_#ffffff] transform hover:scale-105 transition-transform duration-300">
                                <div className="text-center">
                                    <div className="text-3xl font-serif text-orange-600 mb-4">ॐ</div>
                                    <p className="font-serif text-lg italic text-[#6b4a34]">"Since I started attending the Rudrabhishek online, my life has become more peaceful. Immensely grateful for this opportunity."</p>
                                    <div className="mt-6 flex flex-col items-center">
                                        <img src="https://i.pravatar.cc/150?u=anjali" alt="Anjali M." className="w-16 h-16 rounded-full object-cover ring-4 ring-offset-2 ring-yellow-500" />
                                        <p className="font-semibold text-[#4a2c2a] mt-3">Anjali M.</p>
                                        <p className="text-sm text-[#854d27]">Pune</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#fcf6f0] p-8 rounded-lg shadow-[8px_8px_16px_#d1c7bc,_-8px_-8px_16px_#ffffff] transform hover:scale-105 transition-transform duration-300">
                                <div className="text-center">
                                    <div className="text-3xl font-serif text-orange-600 mb-4">ॐ</div>
                                    <p className="font-serif text-lg italic text-[#6b4a34]">"The daily live Yagya is a divine experience. The energy is palpable even through the screen. My family's health has improved. Har Har Mahadev!"</p>
                                    <div className="mt-6 flex flex-col items-center">
                                        <img src="https://i.pravatar.cc/150?u=rajesh" alt="Rajesh K." className="w-16 h-16 rounded-full object-cover ring-4 ring-offset-2 ring-yellow-500" />
                                        <p className="font-semibold text-[#4a2c2a] mt-3">Rajesh K.</p>
                                        <p className="text-sm text-[#854d27]">Delhi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#fcf6f0] p-8 rounded-lg shadow-[8px_8px_16px_#d1c7bc,_-8px_-8px_16px_#ffffff] transform hover:scale-105 transition-transform duration-300">
                                <div className="text-center">
                                    <div className="text-3xl font-serif text-orange-600 mb-4">ॐ</div>
                                    <p className="font-serif text-lg italic text-[#6b4a34]">"Booking was easy and the priests are authentic. I felt a positive shift in my career and finances. A truly blessed service."</p>
                                    <div className="mt-6 flex flex-col items-center">
                                        <img src="https://i.pravatar.cc/150?u=priya" alt="Priya S." className="w-16 h-16 rounded-full object-cover ring-4 ring-offset-2 ring-yellow-500" />
                                        <p className="font-semibold text-[#4a2c2a] mt-3">Priya S.</p>
                                        <p className="text-sm text-[#854d27]">Bengaluru</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="py-24">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <details className="group bg-white p-6 rounded-lg shadow-sm">
                                <summary className="flex items-center justify-between font-semibold text-lg text-charcoal cursor-pointer list-none">
                                    What is Ati Rudrabhishek?
                                    <span className="relative h-5 w-5 ml-4">
                                       <svg className="h-5 w-5 text-saffron-500 absolute transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 text-slate-600">
                                    Ati Rudrabhishek is an intensive form of Rudrabhishek, a sacred Vedic ritual for Lord Shiva. It involves ceremonial bathing (Abhishekam) of the Shiva Linga while chanting the Shri Rudram from the Yajurveda multiple times. The prefix 'Ati' means 'extra' or 'intense', signifying its high potency in removing negativities and bestowing blessings.
                                </p>
                            </details>
                            <details className="group bg-white p-6 rounded-lg shadow-sm">
                                <summary className="flex items-center justify-between font-semibold text-lg text-charcoal cursor-pointer list-none">
                                    Can I join online?
                                    <span className="relative h-5 w-5 ml-4">
                                       <svg className="h-5 w-5 text-saffron-500 absolute transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 text-slate-600">
                                    Absolutely! We livestream the Nitya Yagya daily. You can participate from anywhere in the world. When you book a Sankalpam, our priests will recite your name and gotra during the ritual, ensuring the blessings reach you directly, regardless of your physical location.
                                </p>
                            </details>
                            <details className="group bg-white p-6 rounded-lg shadow-sm">
                                <summary className="flex items-center justify-between font-semibold text-lg text-charcoal cursor-pointer list-none">
                                    Is it done by qualified priests?
                                    <span className="relative h-5 w-5 ml-4">
                                       <svg className="h-5 w-5 text-saffron-500 absolute transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 text-slate-600">
                                    Yes, all our rituals are conducted by highly experienced and qualified Vedic priests who have dedicated their lives to the study and practice of Vedic traditions. They perform the Yagya with utmost devotion and strict adherence to scriptural injunctions.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NityaAti;