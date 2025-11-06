// Path.jsx
import React, { useState, useEffect } from 'react';
import './Path.css'; 

function Path() {
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupAnimating, setIsPopupAnimating] = useState(false);

  // --- Popup Modal Logic ---
  const showPopup = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  
    requestAnimationFrame(() => {
      setIsPopupAnimating(true);
    });
  };

  const hidePopup = () => {
    setIsPopupAnimating(false);
  
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 300); 
  };


  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    reveals.forEach((reveal) => {
      observer.observe(reveal);
    });

  
    return () => {
      reveals.forEach((reveal) => {
        observer.unobserve(reveal);
      });
    };
  }, []); 


  useEffect(() => {
    document.title = 'Path & Recitation Services - Veda Structure';
  }, []);

  return (
    <>
      <main>
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 text-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            {/* IMPORTANT: Asset paths are now relative to the 'public' folder */}
            <source src="/images/Hv-F.mp4" type="video/mp4" />
          </video>

          <div
            className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"
            aria-hidden="true"
          ></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1
              className="mt-4 font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white reveal"
              style={{ transitionDelay: '100ms' }}
            >
              📿 Experience the{' '}
              <span className="text-saffron-500">Transformative Power</span> of
              Vedic Path
            </h1>

            <p
              className="mt-8 text-lg sm:text-xl text-white max-w-2xl mx-auto reveal"
              style={{ transitionDelay: '200ms' }}
            >
              Sacred mantras have the vibration to shift destiny. At Veda
              Structure, every Path is performed by{' '}
              <span className="text-saffron-500 font-semibold">
                experienced Kashi Pandits
              </span>
              , following authentic Vedic methods.
            </p>
            <div
              className="mt-10 reveal"
              style={{ transitionDelay: '300ms' }}
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-saffron-500 hover:bg-saffron-600 shadow-lg shadow-saffron-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Book Your Path Now
              </a>
              <p className="text-sm text-white mt-3">
                For peace, prosperity, protection, and spiritual upliftment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-base-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
              <div className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">🪔</span>
                </div>
                <p className="mt-4 text-base font-semibold text-neutral-800">
                  Certified Kashi Pandits
                </p>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: '50ms' }}
              >
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">📜</span>
                </div>
                <p className="mt-4 text-base font-semibold text-neutral-800">
                  Vedic & Puranic Scriptures
                </p>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">📿</span>
                </div>
                <p className="mt-4 text-base font-semibold text-neutral-800">
                  Personalized Sankalp
                </p>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: '150ms' }}
              >
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">🔔</span>
                </div>
                <p className="mt-4 text-base font-semibold text-neutral-800">
                  Authentic Live Chanting
                </p>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">📸</span>
                </div>
                <p className="mt-4 text-base font-semibold text-neutral-800">
                  Live Streaming & Video
                </p>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: '250ms' }}
              >
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">🌞</span>
                </div>
                <p className="mt-4 text-base font-semibold text-neutral-800">
                  Pure Ritual Setup
                </p>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">💫</span>
                </div>
                <p className="mt-4 text-base font-semibold text-neutral-800">
                  Expert Astrologer Guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="w-full h-80 md:h-96 bg-base-50 rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <img
                  src="/images/i-1.jpg"
                  alt="Kashi Pandits performing Path Recitation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                What is{' '}
                <span className="text-saffron-500">Path & Recitation?</span>
              </h2>
              <p className="mt-6 text-lg text-neutral-800">
                A{' '}
                <strong className="font-semibold text-saffron-500">
                  Path (पाठ)
                </strong>{' '}
                is the sacred chanting of Vedic or Puranic mantras — performed
                to invoke divine blessings, purify karmic blocks, and
                strengthen spiritual energy.
              </p>
              <p className="mt-4 text-lg text-neutral-800">
                When these mantras are recited by trained Pandits in{' '}
                <strong className="text-neutral-900">Kashi</strong>, the energy
                of every sound multiplies, connecting your soul directly to the
                Divine. Each mantra carries specific vibrations to restore
                balance in your life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-base-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto reveal">
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                Types of Path You Can Book
              </h2>
              <p className="mt-4 text-lg text-neutral-800">
                Choose the sacred recitation that aligns with your needs, or
                let our astrologers guide you.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="reveal bg-white rounded-xl shadow-lg border border-gray-100 hover:border-saffron-500/50 hover:shadow-saffron-500/10 transition-all duration-300 overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover object-top"
                  src="/images/m-1.jpeg"
                  alt="Maha Mrityunjaya Path"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    🔹 Maha Mrityunjaya Path
                  </h3>
                  <p className="mt-3 text-neutral-800">
                    For health, healing, and long life. Recitation of the
                    powerful “ॐ त्र्यम्बकं यजामहे…” mantra for protection and
                    rejuvenation.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#pricing"
                    className="inline-block w-full text-center px-5 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              <div
                className="reveal bg-white rounded-xl shadow-lg border border-gray-100 hover:border-saffron-500/50 hover:shadow-saffron-500/10 transition-all duration-300 overflow-hidden flex flex-col"
                style={{ transitionDelay: '100ms' }}
              >
                <img
                  className="w-full h-48 object-cover object-top"
                  src="/images/d-1.jpeg"
                  alt="Durga Saptashati Path"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    🔹 Durga Saptashati Path
                  </h3>
                  <p className="mt-3 text-neutral-800">
                    For strength, success, and removal of negativity. Chanting
                    of 700 verses dedicated to Goddess Durga.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#pricing"
                    className="inline-block w-full text-center px-5 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              <div
                className="reveal bg-white rounded-xl shadow-lg border border-gray-100 hover:border-saffron-500/50 hover:shadow-saffron-500/10 transition-all duration-300 overflow-hidden flex flex-col"
                style={{ transitionDelay: '200ms' }}
              >
                <img
                  className="w-full h-48 object-cover object-top"
                  src="/images/sundarkand.jpeg"
                  alt="Sundarkand Path"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    🔹 Sundarkand Path
                  </h3>
                  <p className="mt-3 text-neutral-800">
                    For courage, devotion, and blessings of Lord Hanuman.
                    Performed to remove fear, obstacles, and anxiety.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#pricing"
                    className="inline-block w-full text-center px-5 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              <div className="reveal bg-white rounded-xl shadow-lg border border-gray-100 hover:border-saffron-500/50 hover:shadow-saffron-500/10 transition-all duration-300 overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover object-top"
                  src="/images/narayan-1.jpeg"
                  alt="Vishnu Sahasranama Path"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    🔹 Vishnu Sahasranama Path
                  </h3>
                  <p className="mt-3 text-neutral-800">
                    For peace, prosperity, and divine protection. Recitation
                    of 1,000 holy names of Lord Vishnu.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#pricing"
                    className="inline-block w-full text-center px-5 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              <div
                className="reveal bg-white rounded-xl shadow-lg border border-gray-100 hover:border-saffron-500/50 hover:shadow-saffron-500/10 transition-all duration-300 overflow-hidden flex flex-col"
                style={{ transitionDelay: '100ms' }}
              >
                <img
                  className="w-full h-48 object-cover object-top"
                  src="/images/ram.jpeg"
                  alt="Ramcharitmanas Path"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    🔹 Ramcharitmanas Path
                  </h3>
                  <p className="mt-3 text-neutral-800">
                    For harmony, faith, and purification. Brings positivity
                    and divine vibrations wherever performed.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#pricing"
                    className="inline-block w-full text-center px-5 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              <div
                className="reveal bg-white rounded-xl shadow-lg border border-gray-100 hover:border-saffron-500/50 hover:shadow-saffron-500/10 transition-all duration-300 overflow-hidden flex flex-col"
                style={{ transitionDelay: '200ms' }}
              >
                <img
                  className="w-full h-48 object-cover object-top"
                  src="/images/customised.jpeg"
                  alt="Customized Path"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    🔹 Customized Path
                  </h3>
                  <p className="mt-3 text-neutral-800">
                    Based on your birth chart, Graha Dosh, or specific
                    wishes, our astrologer recommends the most beneficial
                    mantra recitation.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#pricing"
                    className="inline-block w-full text-center px-5 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                What You&apos;ll{' '}
                <span className="text-saffron-500">Receive</span>
              </h2>
              <p className="mt-6 text-lg text-neutral-800">
                Every Path is a complete divine experience, handled with
                utmost care and devotion.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                 
                  <span className="text-lg text-neutral-800">
                    Personalized Sankalp with your name, gotra, and intent
                  </span>
                </li>
                <li className="flex items-start">
                 
                  <span className="text-lg text-neutral-800">
                    Chanting by 3–5 dedicated Kashi Pandits
                  </span>
                </li>
                <li className="flex items-start">
                 
                  <span className="text-lg text-neutral-800">
                    Live streaming or full recording (optional)
                  </span>
                </li>
                <li className="flex items-start">
                
                  <span className="text-lg text-neutral-800">
                    Digital blessings note & Puja summary
                  </span>
                </li>
                <li className="flex items-start">
                
                  <span className="text-lg text-neutral-800">
                    Guidance on what to do post-path (spiritual routine or
                    donation advice)
                  </span>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <div className="w-full h-80 md:h-96 bg-base-50 rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <img
                  src="/images/p-2.png"
                  alt="Puja Samagri for Path Recitation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-base-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto reveal">
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                Why Choose{' '}
                <span className="text-saffron-500">Veda Structure?</span>
              </h2>
              <p className="mt-4 text-lg text-neutral-800">
                We are committed to authenticity and real results.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="reveal bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-saffron-500 rounded-full shadow-lg mx-auto">
                  <span className="text-4xl sm:text-5xl">🌺</span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-neutral-900">
                  Authenticity
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Follows the true Maharishi Vedic tradition.
                </p>
              </div>

              <div
                className="reveal bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-saffron-500 rounded-full shadow-lg mx-auto">
                  <span className="text-4xl sm:text-5xl">🕉️</span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-neutral-900">
                  Experience
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Over 15 years of Vedic expertise in Kashi.
                </p>
              </div>

              <div
                className="reveal bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-saffron-500 rounded-full shadow-lg mx-auto">
                  <span className="text-4xl sm:text-5xl">📜</span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-neutral-900">
                  Transparency
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Live proof of every recitation — join virtually.
                </p>
              </div>

              <div
                className="reveal bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-saffron-500 rounded-full shadow-lg mx-auto">
                  <span className="text-4xl sm:text-5xl">💫</span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-neutral-900">
                  Personalized
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Tailored as per your doshas and needs.
                </p>
              </div>

              <div
                className="reveal bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center col-span-2 md:col-span-1"
                style={{ transitionDelay: '400ms' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-saffron-500 rounded-full shadow-lg mx-auto">
                  <span className="text-4xl sm:text-5xl">💖</span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-neutral-900">
                  Energy Purification
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Correct pronunciation for real results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto reveal">
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                Choose Your Plan
              </h2>
              <p className="mt-4 text-lg text-neutral-800">
                Select the Path intensity that feels right for you.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="reveal bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-lg">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    {' '}
                    Basic Path
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-neutral-900">
                    ₹2,100
                  </p>
                  <p className="mt-2 text-gray-600">
                    Short recitation by 1 Pandit with your Sankalp
                  </p>
                </div>
                <a
                  href="#"
                  onClick={showPopup}
                  className="book-now-btn mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>

              <div
                className="reveal bg-white border-2 border-saffron-500 rounded-2xl p-8 flex flex-col shadow-2xl shadow-saffron-500/20 transform md:scale-105"
                style={{ transitionDelay: '100ms' }}
              >
                <span className="absolute top-0 -mt-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-saffron-500 text-white text-sm font-bold rounded-full">
                  POPULAR
                </span>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    {' '}
                    Complete Path
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-neutral-900">
                    ₹5,100
                  </p>
                  <p className="mt-2 text-gray-600">
                    Full recitation by 3 Pandits with mantras & rituals
                  </p>
                </div>
                <a
                  href="#"
                  onClick={showPopup}
                  className="book-now-btn mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-saffron-500 hover:bg-saffron-600 transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>

              <div
                className="reveal bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-lg"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold font-serif text-saffron-500">
                    {' '}
                    Maha Path
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-neutral-900">
                    ₹9,100
                  </p>
                  <p className="mt-2 text-gray-600">
                    5 Pandits, extended chanting, personalized blessings &
                    recording
                  </p>
                </div>
                <a
                  href="#"
                  onClick={showPopup}
                  className="book-now-btn mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-saffron-500 text-base font-medium rounded-md text-saffron-500 hover:bg-saffron-500 hover:text-white transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-base-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto reveal">
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-neutral-800">
                A simple and transparent process.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-8 lg:gap-x-20">
              <div className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center relative">
                <div className="flex items-center justify-center w-16 h-16 bg-base-100 border-2 border-saffron-500 rounded-full mx-auto -mt-14 mb-4">
                  <span className="text-2xl font-bold font-serif text-saffron-500">
                    01
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  Submit Your Details
                </h3>
                <p className="mt-2 text-gray-600">
                  Submit your Name, Gotra & Date of Birth.
                </p>

                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-10 z-0">
                  <svg
                    className="w-8 h-8 text-saffron-500/40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center relative"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-base-100 border-2 border-saffron-500 rounded-full mx-auto -mt-14 mb-4">
                  <span className="text-2xl font-bold font-serif text-saffron-500">
                    02
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  Choose Your Path
                </h3>
                <p className="mt-2 text-gray-600">
                  Choose the Path you wish to perform.
                </p>

                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-10 z-0">
                  <svg
                    className="w-8 h-8 text-saffron-500/40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center relative"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-base-100 border-2 border-saffron-500 rounded-full mx-auto -mt-14 mb-4">
                  <span className="text-2xl font-bold font-serif text-saffron-500">
                    03
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  Pandits Perform Path
                </h3>
                <p className="mt-2 text-gray-600">
                  Our Pandits perform the chanting in Kashi.
                </p>

                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-10 z-0">
                  <svg
                    className="w-8 h-8 text-saffron-500/40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="reveal p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center relative"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-base-100 border-2 border-saffron-500 rounded-full mx-auto -mt-14 mb-4">
                  <span className="text-2xl font-bold font-serif text-saffron-500">
                    04
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  Receive Blessings
                </h3>
                <p className="mt-2 text-gray-600">
                  Receive live stream link, photos, and a report.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto reveal">
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                What Our{' '}
                <span className="text-saffron-500">Devotees</span> Say
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="reveal bg-base-50 border border-base-100 rounded-xl p-8">
                <div className="text-3xl text-amber-400">⭐⭐⭐⭐⭐</div>
                <p className="mt-6 text-lg text-neutral-800">
                  “After my Maha Mrityunjaya Path, my health improved
                  miraculously. Grateful for Veda Structure!”
                </p>
                <p className="mt-4 font-bold text-neutral-900">
                  - Renu Sharma
                </p>
              </div>
              <div
                className="reveal bg-base-50 border border-base-100 rounded-xl p-8"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="text-3xl text-amber-400">⭐⭐⭐⭐⭐</div>
                <p className="mt-6 text-lg text-neutral-800">
                  “The Durga Saptashati Path brought peace and prosperity to
                  my home. Truly divine experience.”
                </p>
                <p className="mt-4 font-bold text-neutral-900">
                  - Saurabh Gupta
                </p>
              </div>
              <div
                className="reveal bg-base-50 border border-base-100 rounded-xl p-8"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="text-3xl text-amber-400">⭐⭐⭐⭐⭐</div>
                <p className="mt-6 text-lg text-neutral-800">
                  “Sundarkand Path filled my heart with devotion. Felt Hanuman
                  ji’s presence.”
                </p>
                <p className="mt-4 font-bold text-neutral-900">
                  - Aditi Verma
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-base-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center reveal">
              <h2 className="font-serif text-4xl font-bold text-neutral-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-6">
              <details className="reveal bg-white p-6 rounded-lg group border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium text-neutral-900">
                    Q1: Can I attend the Path online?
                  </span>
                  <span className="text-saffron-500 group-open:rotate-45 transform transition-transform duration-200 text-2xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-neutral-800">
                  👉 Yes! We offer live-streaming and recorded video options.
                </p>
              </details>
              <details className="reveal bg-white p-6 rounded-lg group border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium text-neutral-900">
                    Q2: How do I choose the right Path?
                  </span>
                  <span className="text-saffron-500 group-open:rotate-45 transform transition-transform duration-200 text-2xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-neutral-800">
                  👉 Our astrologer will analyze your birth chart and suggest
                  the most suitable recitation.
                </p>
              </details>
              <details className="reveal bg-white p-6 rounded-lg group border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium text-neutral-900">
                    Q3: How soon will my Path start after booking?
                  </span>
                  <span className="text-saffron-500 group-open:rotate-445 transform transition-transform duration-200 text-2xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-neutral-800">
                  👉 Usually within 2–3 days based on the auspicious
                  muhurat.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-t from-base-100 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900">
              📿 Let the Power of{' '}
              <span className="text-saffron-500">Sacred Sound</span> Transform
              You.
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-neutral-800">
              Mantras are living vibrations. When recited with devotion, they
              align your body, mind, and soul with cosmic rhythm. At Veda
              Structure, we bring this ancient healing to your life.
            </p>
            <div className="mt-10">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-saffron-500 hover:bg-saffron-600 shadow-lg shadow-saffron-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Book Your Path Now – Experience the Energy
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- Booking Popup Modal --- */}
      {/* This is now controlled by React state.
        - `isPopupVisible` controls the 'display' (using 'hidden' class).
        - `isPopupAnimating` controls the opacity and scale for the transition.
      */}
      {isPopupVisible && (
        <div
          id="booking-popup"
          className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out ${
            isPopupAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={hidePopup} // Click on overlay to close
        >
          <div
            id="popup-content"
            className={`bg-white p-8 md:p-12 rounded-lg shadow-2xl text-center relative max-w-sm w-full transform transition-all duration-300 ease-out ${
              isPopupAnimating ? 'scale-100' : 'scale-95'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-12 h-12 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-6">
              Booked Successfully!
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Our team will contact you shortly.
            </p>
            <button
              id="close-popup"
              onClick={hidePopup}
              className="mt-8 w-full px-6 py-3 bg-saffron-500 text-white font-bold rounded-md hover:bg-saffron-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Path;