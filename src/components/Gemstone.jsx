import React, { useState, useEffect } from 'react';

// Assuming gem1.jpg is in the public/images folder
const gemImageUrl = 'images/gem1.jpg'; 

const Gemstone = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        gender: 'Male', // Default value
        dob: '',
        tob: '',
        pob: ''
    });
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const totalSteps = 3;

    // Clear errors when step changes
    useEffect(() => {
        setError('');
    }, [currentStep]);

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

    const handleNext = () => {
        if (validateStep()) {
            if (currentStep < totalSteps) {
                setCurrentStep(prev => prev + 1);
            }
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep()) {
            console.log('Form Submitted!', formData);
            setShowModal(true);
        }
    };
    
    const handleGenderSelect = (gender) => {
        setFormData(prev => ({ ...prev, gender }));
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };
    
    const closeModal = () => {
        setShowModal(false);
        // Optional: Reset form state after submission
        // setCurrentStep(1);
        // setFormData({ fullName: '', gender: 'Male', dob: '', tob: '', pob: '' });
    };

    const getFormattedDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    };

    const progressWidth = `${(currentStep / totalSteps) * 100}%`;

    return (
        <>
            {/* Component-specific styles from the original <head> */}
            <style>
                {`
                .gender-btn {
                    border-color: #d1d5db; /* gray-300 */
                    color: #4b5563; /* gray-700 */
                    font-weight: 600; /* font-semibold */
                }

                .gender-btn.active {
                    background-image: linear-gradient(to right, #f59e0b, #f97316); /* yellow-500 to orange-500 */
                    color: white;
                    border-color: transparent;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-md */
                }
                `}
            </style>

            <div className="bg-white">
                <section className="relative w-full h-[600px] flex items-center justify-center text-center">
                    <img src={gemImageUrl} alt="Gemstone Banner" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-10 max-w-4xl px-6">
                        <h2 className="text-gray-800 text-3xl md:text-5xl font-bold leading-snug">
                            Efficient gemological snapshot<br className="hidden md:block" />
                            capturing core identity traits –
                            <span className="text-yellow-700"> Gemstone Report</span>
                        </h2>
                        <p className="mt-4 text-gray-700 text-base md:text-lg">
                            This report presents the core gemstone details — type and primary attributes — 
                            in a compact two-line format for streamlined documentation.
                        </p>
                        <button className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 shadow-lg hover:scale-105 transition">
                            Get Your Report Now ₹221
                        </button>
                    </div>
                </section>

                <section id="form" className="py-12 w-full">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            <div className="p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <svg className="w-20 h-20 mx-auto text-yellow-500 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 16.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M21 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7.5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M18.364 5.63604L14.8284 9.1716" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M9.17163 14.8284L5.63604 18.364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M18.364 18.364L14.8284 14.8284" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M9.17163 9.1716L5.63604 5.63604" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <h2 className="text-3xl font-bold text-gray-900 font-serif">Your Cosmic Blueprint Awaits</h2>
                                    <p className="text-gray-600 mt-2">Fill in your details to generate your personalized report.</p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex justify-between mb-1 text-sm font-medium text-gray-400">
                                        <span className={currentStep >= 1 ? 'text-gray-900' : ''}>Personal</span>
                                        <span className={currentStep >= 2 ? 'text-gray-900' : ''}>Birth Details</span>
                                        <span className={currentStep >= 3 ? 'text-gray-900' : ''}>Confirm</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full transition-all duration-500" style={{ width: progressWidth }}></div>
                                    </div>
                                </div>
                                
                                <form onSubmit={handleSubmit} noValidate>
                                    {currentStep === 1 && (
                                        <div className="form-step">
                                            <div className="grid gap-6">
                                                <div className="relative">
                                                    <label htmlFor="fullName" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Full Name</label>
                                                    <input id="fullName" type="text" placeholder="Enter your full name" required value={formData.fullName} onChange={handleInputChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none"/>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Gender</label>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <button type="button" onClick={() => handleGenderSelect('Male')} className={`gender-btn w-full p-3 rounded-lg border text-center transition ${formData.gender === 'Male' ? 'active' : ''}`}>Male</button>
                                                        <button type="button" onClick={() => handleGenderSelect('Female')} className={`gender-btn w-full p-3 rounded-lg border text-center transition ${formData.gender === 'Female' ? 'active' : ''}`}>Female</button>
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
                                                    <input id="dob" type="date" required value={formData.dob} onChange={handleInputChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none"/>
                                                </div>
                                                <div className="relative">
                                                    <label htmlFor="tob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Time of Birth</label>
                                                    <input id="tob" type="time" required value={formData.tob} onChange={handleInputChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none"/>
                                                </div>
                                                <div className="md:col-span-2 relative">
                                                    <label htmlFor="pob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Place of Birth</label>
                                                    <input id="pob" type="text" placeholder="e.g., Varanasi, India" required value={formData.pob} onChange={handleInputChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none"/>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 3 && (
                                        <div className="form-step">
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-semibold text-gray-800 text-center">Please Confirm Your Details</h3>
                                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-gray-700">
                                                    <p className="flex justify-between"><strong>Name:</strong> <span className="text-right">{formData.fullName}</span></p>
                                                    <p className="flex justify-between"><strong>Gender:</strong> <span>{formData.gender}</span></p>
                                                    <p className="flex justify-between"><strong>Date of Birth:</strong> <span>{getFormattedDate(formData.dob)}</span></p>
                                                    <p className="flex justify-between"><strong>Time of Birth:</strong> <span>{formData.tob}</span></p>
                                                    <p className="flex justify-between"><strong>Place of Birth:</strong> <span className="text-right">{formData.pob}</span></p>
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
                                            <button type="button" onClick={handlePrev} className="px-6 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-200 transition">Previous</button>
                                        )}
                                        {currentStep < totalSteps && (
                                            <button type="button" onClick={handleNext} className="ml-auto px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">Next Step</button>
                                        )}
                                        {currentStep === totalSteps && (
                                            <button type="submit" className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-yellow-500/30 hover:scale-[1.02] transform transition-all">Generate My Report</button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50" onClick={closeModal}>
                        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()}>
                            <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
                                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mt-6">Request Received!</h2>
                            <p className="text-gray-600 mt-2">Your personalized Cosmic Blueprint is being generated. You will receive the report within the next 24 hours.</p>
                            <button onClick={closeModal} className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-lg w-full">Great, Thanks!</button>
                        </div>
                    </div>
                )}
                
                {/* The rest of the page content remains the same */}
                <section className="py-20 px-6 md:px-20 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            <span className="text-orange-600">Gemstone</span> Consultancy
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                            The <span className="font-semibold text-yellow-600">Gemstone Consultancy Astrology Report</span> provides you with the most suitable gemstone to 'raise' the qualities of your planets. Our expert astrologers analyze your horoscope deeply up to the <span className="font-semibold">sub-lord level</span> and recommend gemstones that can enhance various aspects of life such as <span className="text-orange-600">marriage, career, finance, health, education</span> and more. Each report is <span className="font-semibold">personally prepared by an expert astrologer</span> after a thorough study of your horoscope. Click the <span className="font-semibold text-yellow-600">Order Report</span> button now and enhance the effects of your planets.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-left">
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Expert Crafted</h3>
                                <p className="text-gray-700">Manually prepared by Expert Astrologer with over 25 years of experience.</p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                                <h3 className="text-xl font-bold text-yellow-600 mb-2">Simple & Clear</h3>
                                <p className="text-gray-700">Easy-to-understand report designed for everyone, no jargon.</p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-md border-l-4 border-yellow-600">
                                <h3 className="text-xl font-bold text-orange-500 mb-2">Extra Value</h3>
                                <p className="text-gray-700">Includes an additional service worth Rs.221 for FREE.</p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-md border-l-4 border-orange-400">
                                <h3 className="text-xl font-bold text-yellow-700 mb-2">Complete Remedies</h3>
                                <p className="text-gray-700">Vedic remedies (solutions) are also suggested with the report.</p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-orange-600 mb-2">Instant Delivery</h3>
                                <p className="text-gray-700">Free delivery of your report directly to your E-Mail inbox.</p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                                <h3 className="text-xl font-bold text-yellow-600 mb-2">100% Confidential</h3>
                                <p className="text-gray-700">Your personal details and horoscope data remain fully private.</p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <a href="#form" className="inline-block px-10 py-4 text-lg rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-xl hover:scale-105 transition">
                                Order Report Now
                            </a>
                        </div>
                    </div>
                </section>
                
                <section className="bg-slate-50 py-16 sm:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Unlock Your Destiny with <span className="text-orange-600">Gemstone Astrology</span>
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                Discover the power of purified and energized gemstones, precisely chosen to harmonize your body's energy and amplify the positive influence of your ruling planets. Receive expert guidance to find the stone that will unlock your path to success and well-being.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500 transition-transform transform hover:scale-105">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg className="h-10 w-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Precision Analysis</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Our Gem Consultancy Report goes beyond traditional methods. We don't just follow old rules; our experts conduct a deep analysis of your horoscope down to the <span className="font-semibold text-orange-600">Nakshatra sub-lord level</span> to pinpoint the exact gemstone that will amplify the planetary qualities you need for success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500 transition-transform transform hover:scale-105">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Harnessing Positive Energy</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            While many astrologers avoid prescribing gems for planets in malefic houses (6th, 8th, 12th), our proprietary method at <span className="font-semibold text-yellow-600">Veda Structure</span> ensures that any recommended gemstone will <span className="font-semibold">only channel positive energy</span>, bringing beneficial effects to you and eliminating negative influences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-200">
                            <h3 className="text-center text-3xl font-bold text-gray-900 mb-8">Your Personalised Gemstone Report</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-orange-600 mb-4">You Need to Provide:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-700">
                                            <svg className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                                            Your Full Date of Birth
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <svg className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                                            Precise Time of Birth
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <svg className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                                            City & Country of Birth
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-yellow-600 mb-4">Your Report Will Include:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-700"><svg className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>In-depth analysis of your natal horoscope.</li>
                                        <li className="flex items-center text-gray-700"><svg className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>Precise gemstone suggestion, with weight & metal.</li>
                                        <li className="flex items-center text-gray-700"><svg className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>Auspicious day, finger & mantra for wearing the gem.</li>
                                        <li className="flex items-center text-gray-700"><svg className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>Personalised astrological remedies & solutions.</li>
                                        <li className="flex items-center text-gray-700"><svg className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>Complimentary 30-day query support.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Ready to Add Power to Your Planets?
                            </h3>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                                Wear the right gemstone, in the right way, and unlock a life of positivity, success, and stability. Every gemstone we suggest is chosen to safely enhance your destiny.
                            </p>
                            <a href="#form" className="inline-block bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 transform hover:scale-105">
                                Get Your Personalised Report Now
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Gemstone;