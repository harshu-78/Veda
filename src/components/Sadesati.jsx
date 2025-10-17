import React, { useState } from 'react';
import './Sadesati.css'; // Make sure to create and import this CSS file

const Sadesati = () => {
    // State for the multi-step form
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        gender: 'Male',
        dob: '',
        tob: '',
        pob: '',
    });
    const [error, setError] = useState('');

    // State for the 3D carousel
    const [rotation, setRotation] = useState(0);

    // --- FORM LOGIC ---

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleGenderChange = (gender) => {
        setFormData(prev => ({ ...prev, gender }));
    };

    const validateStep = () => {
        let isValid = true;
        if (currentStep === 1) {
            if (!formData.fullName.trim()) {
                isValid = false;
            }
        } else if (currentStep === 2) {
            if (!formData.dob || !formData.tob || !formData.pob.trim()) {
                isValid = false;
            }
        }

        if (!isValid) {
            setError('Please fill all required fields in this step.');
        } else {
            setError('');
        }
        return isValid;
    };

    const handleNextStep = () => {
        if (validateStep()) {
            if (currentStep < 3) {
                setCurrentStep(prev => prev + 1);
            }
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Form submitted successfully! (This is a demo)');
    };

    const getProgressBarWidth = () => {
        if (currentStep === 1) return '33%';
        if (currentStep === 2) return '66%';
        if (currentStep === 3) return '100%';
        return '33%';
    };

    // --- CAROUSEL LOGIC ---

    const handleCarouselNav = (direction) => {
        const angle = 72; // 360 degrees / 5 items
        if (direction === 'next') {
            setRotation(prev => prev - angle);
        } else {
            setRotation(prev => prev + angle);
        }
    };

    return (
        <div className="bg-gradient-to-br from-white via-amber-50 to-white text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full flex items-center text-white overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="images/avid.mp4" type="video/mp4" /> {/* Assuming video is in public folder */}
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                            Uncover the Impact of <br />
                            Saturn’s
                            <span className="text-yellow-400 drop-shadow-[0_2px_6px_rgba(250,204,21,0.8)]">
                                7.5-Year Journey
                            </span> <br />
                            on Your Life
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                            This detailed report reveals challenges, transformations, and remedies based on your birth chart.
                            Gain clarity and prepare for <span className="font-semibold text-yellow-300">spiritual and practical growth</span>.
                        </p>
                        <a href="#form" className="inline-block px-8 py-4 rounded-full font-bold text-lg bg-yellow-400 text-gray-900 shadow-2xl hover:bg-yellow-300 hover:scale-105 transform transition duration-300">
                            Get Your Report Now – ₹112
                        </a>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="form" className="py-12">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <svg className="w-20 h-20 mx-auto text-yellow-500 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 16.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.364 5.63604L14.8284 9.1716" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.17163 14.8284L5.63604 18.364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.364 18.364L14.8284 14.8284" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.17163 9.1716L5.63604 5.63604" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2 className="text-3xl font-bold text-gray-900 font-serif">Your Cosmic Blueprint Awaits</h2>
                                <p className="text-gray-600 mt-2">Fill in your details to generate your personalized report.</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-700">Personal</span>
                                    <span className="text-sm font-medium text-gray-700">Birth Details</span>
                                    <span className="text-sm font-medium text-gray-700">Confirm</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full transition-all duration-500" style={{ width: getProgressBarWidth() }}></div>
                                </div>
                            </div>

                            <form id="kundali-form" onSubmit={handleSubmit}>
                                {currentStep === 1 && (
                                    <div className="form-step">
                                        <div className="grid gap-6">
                                            <div className="relative">
                                                <label htmlFor="fullName" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Full Name</label>
                                                <input id="fullName" type="text" placeholder="Enter your full name" required className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" value={formData.fullName} onChange={handleInputChange} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-gray-700">Gender</label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <button type="button" onClick={() => handleGenderChange('Male')} className={`gender-btn w-full p-3 rounded-lg border border-gray-300 text-center transition ${formData.gender === 'Male' ? 'active' : ''}`}>Male</button>
                                                    <button type="button" onClick={() => handleGenderChange('Female')} className={`gender-btn w-full p-3 rounded-lg border border-gray-300 text-center transition ${formData.gender === 'Female' ? 'active' : ''}`}>Female</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="form-step">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label htmlFor="dob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Date of Birth</label>
                                                <input id="dob" type="date" required className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" value={formData.dob} onChange={handleInputChange} />
                                            </div>
                                            <div className="relative">
                                                <label htmlFor="tob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Time of Birth</label>
                                                <input id="tob" type="time" required className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" value={formData.tob} onChange={handleInputChange} />
                                            </div>
                                            <div className="md:col-span-2 relative">
                                                <label htmlFor="pob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Place of Birth</label>
                                                <input id="pob" type="text" placeholder="e.g., Varanasi, India" required className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" value={formData.pob} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="form-step">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold text-gray-800 text-center">Please Confirm Your Details</h3>
                                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-gray-700">
                                                <p><strong>Name:</strong> {formData.fullName}</p>
                                                <p><strong>Gender:</strong> {formData.gender}</p>
                                                <p><strong>Date of Birth:</strong> {formData.dob ? new Date(formData.dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}</p>
                                                <p><strong>Time of Birth:</strong> {formData.tob}</p>
                                                <p><strong>Place of Birth:</strong> {formData.pob}</p>
                                            </div>
                                            <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                <span className="text-lg font-semibold text-gray-700">Total Price</span>
                                                <span className="text-2xl font-bold text-orange-500">₹112</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

                                <div className="mt-8 flex justify-between items-center">
                                    {currentStep > 1 && (
                                        <button type="button" onClick={handlePrevStep} className="px-6 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-200 transition">Previous</button>
                                    )}
                                    {currentStep < 3 && (
                                        <button type="button" onClick={handleNextStep} className="ml-auto px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">Next Step</button>
                                    )}
                                    {currentStep === 3 && (
                                        <button type="submit" className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-yellow-500/30 hover:scale-[1.02] transform transition-all">
                                            Generate My Report
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Three Phases Section */}
            <section className="relative bg-gray-50 py-20 sm:py-24">
                {/* ... content for Three Phases Section ... */}
                 <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute left-[50%] top-0 h-[60rem] w-[100rem] -translate-x-1/2 bg-gradient-to-t from-gray-50 via-orange-50 to-gray-50 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            The Three Phases of <span className="text-orange-600">Sade Sati</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            A transformative 7.5-year journey as Saturn transits the three signs around your natal Moon. Each phase brings its own unique lessons and challenges.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
                    
                    <div className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-orange-400 hover:shadow-2xl hover:-translate-y-1.5">
                        <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white shadow-md">
                            1
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                            The Rising: Transit to 12th House
                        </h3>
                        </div>
                        <p className="mt-5 text-gray-700">
                        As Saturn enters the house before your Moon sign, it signals the beginning. This phase focuses on the subconscious, expenses, and letting go.
                        </p>
                        <div className="mt-6 space-y-4">
                        <div>
                            <h4 className="font-semibold text-gray-800">Challenges:</h4>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                            <li>Unexpected financial pressures & expenditures</li>
                            <li>Feelings of isolation and mental restlessness</li>
                            <li>Potential for hidden enemies or disputes</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Opportunities:</h4>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                            <li>Deep spiritual introspection and growth</li>
                            <li>Planning for the future with a detached view</li>
                            <li>Beneficial for work related to foreign lands</li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col rounded-2xl border-2 border-orange-500 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                        Peak Phase
                        </div>
                        <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white shadow-md">
                            2
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                            The Peak: Transit over Moon Sign
                        </h3>
                        </div>
                        <p className="mt-5 text-gray-700">
                        The most intense period, as Saturn directly impacts your natal Moon (mind and emotions). This is a time of profound testing and character building.
                        </p>
                        <div className="mt-6 space-y-4">
                        <div>
                            <h4 className="font-semibold text-gray-800">Challenges:</h4>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                            <li>Intense mental and emotional pressure</li>
                            <li>Challenges to health, career, and relationships</li>
                            <li>Feeling burdened by responsibilities</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Opportunities:</h4>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                            <li>Forging incredible inner strength and resilience</li>
                            <li>Deep self-realization and emotional maturity</li>
                            <li>Building a new foundation based on reality</li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-orange-400 hover:shadow-2xl hover:-translate-y-1.5">
                        <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white shadow-md">
                            3
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                            The Setting: Transit to 2nd House
                        </h3>
                        </div>
                        <p className="mt-5 text-gray-700">
                        In the final phase, Saturn's influence shifts to your finances, family, and speech, consolidating the lessons learned.
                        </p>
                        <div className="mt-6 space-y-4">
                        <div>
                            <h4 className="font-semibold text-gray-800">Challenges:</h4>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                            <li>Financial constraints and family disagreements</li>
                            <li>Harshness in speech affecting relationships</li>
                            <li>Pressure related to family responsibilities</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Opportunities:</h4>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                            <li>Developing strong financial discipline</li>
                            <li>Learning the value of family and resources</li>
                            <li>Emerging with grounded wisdom and stability</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        How Will <span className="text-orange-500">Sade Sati</span> Impact Your Zodiac?
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                        Saturn's transit is a universal test, but its challenges and rewards are unique to your Moon Sign (Rashi). Discover your personal journey.
                    </p>
                    <div className="mt-10">
                        <a href="#form" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg shadow-orange-500/30 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                            Get Your Personalized Report — ₹112
                        </a>
                    </div>

                    <div className="mt-20 flex flex-col items-center justify-center">
                        <div className="scene h-72 w-72">
                            <div className="carousel" style={{ transform: `rotateY(${rotation}deg)` }}>
                                <div className="carousel-item rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-2xl backdrop-blur-lg">
                                    <div className="text-center">
                                        <h3 className="text-4xl font-bold text-yellow-500">♉</h3>
                                        <h4 className="mt-2 text-2xl font-semibold text-gray-800">Taurus</h4>
                                        <p className="mt-3 text-gray-600">Faces tests in finance and relationships, forging profound inner resilience.</p>
                                    </div>
                                </div>
                                <div className="carousel-item rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-2xl backdrop-blur-lg">
                                     <div className="text-center">
                                        <h3 className="text-4xl font-bold text-yellow-500">♊</h3>
                                        <h4 className="mt-2 text-2xl font-semibold text-gray-800">Gemini</h4>
                                        <p className="mt-3 text-gray-600">Challenges communication, building mental discipline and stronger convictions.</p>
                                    </div>
                                </div>
                                <div className="carousel-item rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-2xl backdrop-blur-lg">
                                     <div className="text-center">
                                        <h3 className="text-4xl font-bold text-yellow-500">♍</h3>
                                        <h4 className="mt-2 text-2xl font-semibold text-gray-800">Virgo</h4>
                                        <p className="mt-3 text-gray-600">Tests their analytical mind, teaching valuable lessons in flexibility and health.</p>
                                    </div>
                                </div>
                                <div className="carousel-item rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-2xl backdrop-blur-lg">
                                     <div className="text-center">
                                        <h3 className="text-4xl font-bold text-yellow-500">♎</h3>
                                        <h4 className="mt-2 text-2xl font-semibold text-gray-800">Libra</h4>
                                        <p className="mt-3 text-gray-600">Brings challenges to partnerships, fostering self-reliance and true judgment.</p>
                                    </div>
                                </div>
                                <div className="carousel-item rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-2xl backdrop-blur-lg">
                                    <div className="text-center">
                                        <h3 className="text-4xl font-bold text-yellow-500">♏</h3>
                                        <h4 className="mt-2 text-2xl font-semibold text-gray-800">Scorpio</h4>
                                        <p className="mt-3 text-gray-600">An intense transformation, facing deep fears to emerge with spiritual power.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button onClick={() => handleCarouselNav('prev')} className="px-5 py-3 rounded-full bg-white/60 text-orange-500 backdrop-blur-sm shadow-md hover:bg-gray-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={() => handleCarouselNav('next')} className="px-5 py-3 rounded-full bg-white/60 text-orange-500 backdrop-blur-sm shadow-md hover:bg-gray-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sadesati;