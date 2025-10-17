import React, { useState } from 'react';



const Numerology = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    tob: '',
    pob: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleGenderClick = (genderValue) => {
    setFormData({ ...formData, gender: genderValue });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName.trim() || !formData.gender) {
        setErrorMessage('Please fill all required fields in this step.');
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.dob || !formData.tob.trim() || !formData.pob.trim()) {
        setErrorMessage('Please fill all required fields in this step.');
        return false;
      }
    }
    setErrorMessage('');
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form Submitted:', formData);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const progressWidths = ['33.33%', '66.66%', '100%'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="images/NV-final.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Unlock Your Destiny Through the <br />
            <span className="text-yellow-500">Power of Numbers</span>
          </h1>
          <p className="text-gray-300 font-semibold mt-4 text-lg">
            This report reveals the hidden meanings behind your numbers, offering guidance for personal growth and decision-making.
          </p>
          <div className="mt-10"></div>
          <a href="#cosmic-form" className="bg-yellow-500 hover:bg-yellow-700 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
            Get Your Report Now ₹-221
          </a>
        </div>
      </section>

      {/* 🌟 Cosmic Blueprint Form Section */}
      <section id="cosmic-form" className="py-12 w-full bg-[#FFF8E1]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <svg className="w-20 h-20 mx-auto text-yellow-500 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 3V7.5M12 16.5V21M21 12H16.5M7.5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <h2 className="text-3xl font-bold text-gray-900 font-serif">Your Cosmic Blueprint Awaits</h2>
                <p className="text-gray-600 mt-2">Fill in your details to generate your personalized report.</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-400">
                  <span className={currentStep >= 1 ? 'text-gray-900' : ''}>Personal</span>
                  <span className={currentStep >= 2 ? 'text-gray-900' : ''}>Birth Details</span>
                  <span className={currentStep >= 3 ? 'text-gray-900' : ''}>Confirm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full transition-all duration-500" style={{ width: progressWidths[currentStep - 1] }}></div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                {/* Step 1 */}
                {currentStep === 1 && (
                  <div className="grid gap-6">
                    <div className="relative">
                      <label htmlFor="fullName" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Full Name</label>
                      <input id="fullName" type="text" placeholder="Enter your full name" required value={formData.fullName} onChange={handleChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Gender</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button type="button" onClick={() => handleGenderClick('Male')} className={`w-full p-3 rounded-lg border border-gray-300 text-center transition ${formData.gender === 'Male' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                          Male
                        </button>
                        <button type="button" onClick={() => handleGenderClick('Female')} className={`w-full p-3 rounded-lg border border-gray-300 text-center transition ${formData.gender === 'Female' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                          Female
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="dob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Date of Birth</label>
                      <input id="dob" type="date" required value={formData.dob} onChange={handleChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" />
                    </div>
                    <div className="relative">
                      <label htmlFor="tob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Time of Birth</label>
                      <input id="tob" type="time" required value={formData.tob} onChange={handleChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" />
                    </div>
                    <div className="md:col-span-2 relative">
                      <label htmlFor="pob" className="absolute -top-2 left-4 text-xs bg-white px-1 text-gray-500">Place of Birth</label>
                      <input id="pob" type="text" placeholder="e.g., Varanasi, India" required value={formData.pob} onChange={handleChange} className="form-input w-full p-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-none" />
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 text-center">Please Confirm Your Details</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-gray-700">
                        <p className="flex justify-between"><strong>Name:</strong> <span>{formData.fullName || '—'}</span></p>
                        <p className="flex justify-between"><strong>Gender:</strong> <span>{formData.gender || '—'}</span></p>
                        <p className="flex justify-between"><strong>Date of Birth:</strong> <span>{formData.dob ? new Date(formData.dob).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '—'}</span></p>
                        <p className="flex justify-between"><strong>Time of Birth:</strong> <span>{formData.tob || '—'}</span></p>
                        <p className="flex justify-between"><strong>Place of Birth:</strong> <span>{formData.pob || '—'}</span></p>
                    </div>
                    <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <span className="text-lg font-semibold text-gray-700">Total Price</span>
                      <span className="text-2xl font-bold text-orange-500">₹221</span>
                    </div>
                  </div>
                )}

                {errorMessage && (
                    <p className="text-red-500 text-sm mt-4 text-center">
                        {errorMessage}
                    </p>
                )}

                <div className="mt-8 flex justify-between items-center">
                  {currentStep > 1 && (
                    <button type="button" onClick={handlePrev} className="px-6 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-200 transition">
                      Previous
                    </button>
                  )}
                  {currentStep < 3 && (
                    <button type="button" onClick={handleNext} className="ml-auto px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
                      Next Step
                    </button>
                  )}
                  {currentStep === 3 && (
                    <button type="submit" className="ml-auto px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-yellow-500/30 hover:scale-[1.02] transform transition">
                      Generate My Report
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
              <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-6">Request Received!</h2>
            <p className="text-gray-600 mt-2">Your personalized Cosmic Blueprint is being generated. You will receive the report within 24 hours.</p>
            <button onClick={closeModal} className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-lg w-full">
              Great, Thanks!
            </button>
          </div>
        </div>
      )}

      {/* About Numerology Section */}
      <section className="py-20 min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-orange-50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/40 via-transparent to-amber-200/20 blur-3xl opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img src="images/Na2.jpeg" alt="Numerology Meaning" className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-orange-400/10 rounded-3xl"></div>
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 mb-6">
              About The Significance of Numerology
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Numerology is the science of systematically reading the numbers and extracting conclusions out of it. The prehistoric study of Numerology is still used to comprehend personality traits and relationship compatibility. Numerology uses the complete date of birth and name of a person to determine their unique character and destiny.
              <br /><br />
              The talent that naturally belongs to you and others that you may acquire with time can be revealed with the help of numerology. The destiny number in Numerology can also be calculated through your birth date and full name — uncovering aspects like your future opportunities, suitable profession, and compatibility with others.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-300/50 hover:scale-105 transition-all duration-300">
                Explore Your Number
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Number Section */}
      <section className="py-20 min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/40 via-transparent to-orange-200/30 blur-3xl opacity-70"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-700 drop-shadow-md">
            Choose Your Number to Know Your Numerology Analysis
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {numbers.map((number) => (
              <div key={number} className="p-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-yellow-200 hover:border-yellow-400 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 cursor-pointer group">
                <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400 group-hover:from-orange-500 group-hover:to-yellow-400 transition">
                  {number}
                </h3>
                <p className="mt-3 text-gray-600 font-medium group-hover:text-gray-800 transition">
                  NUMBER {number}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Numerology;