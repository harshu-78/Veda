
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";


export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8" data-aos="fade-right" data-aos-duration="1200">
          {/* Tagline */}
          <div
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full 
            text-base font-bold tracking-wide text-orange-800
            bg-gradient-to-r from-orange-100/90 to-yellow-100/90 
            backdrop-blur-xl border border-orange-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.15)] 
            hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            transition-all duration-500 ease-out overflow-hidden group"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
              translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></span>
            <span className="absolute inset-0 rounded-full ring-2 ring-orange-300/40"></span>
            <span className="relative z-10">Popular • 24/7 Bookings</span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Transform Your Home <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400">
              with Sacred Puja
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-gray-600 text-lg leading-relaxed max-w-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Professional priests, authentic rituals and live sessions. Choose a puja
            package &amp; we’ll take care of everything — decorations, prasad, and
            digital certificates.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition"
            >
              Book Puja →
            </button>
             <button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition"
            >
              Book Yagya →
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-5">
            <div
              className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-4"
              data-aos="flip-left"
              data-aos-delay="1000"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center text-orange-600 text-xl font-bold">
               🕉️
              </div>
              <div>
                <div className="font-semibold">Authentic Vedic</div>
                <div className="text-sm text-gray-500">Priests with proper lineage</div>
              </div>
            </div>
            <div className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center text-yellow-600 text-xl font-bold">
                ★
              </div>
              <div>
                <div className="font-semibold">Instant Booking</div>
                <div className="text-sm text-gray-500">Slots available 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
       <div className="relative" data-aos="fade-left" data-aos-duration="1200">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-orange-100">
            <img
              src="/images/Pujasection.png"   
              alt="Puja Poster"
              className="w-full h-[420px] object-cover brightness-95 hover:scale-105 transition duration-500"
            />
          </div>

          {/* Floating Card */}
          <div
            className="absolute -bottom-10 left-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-5 w-80 border border-orange-100"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">Next Available</div>
                <div className="font-semibold">Tomorrow • 10:00 AM</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-orange-600">₹499</div>
                <div className="text-xs text-gray-500">Starting from</div>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2.5 rounded-lg shadow hover:scale-105 transition"
              >
                Book Now
              </button>
              <button
                onClick={() => setIsDetailsOpen(true)}
                className="px-4 py-2 border rounded-lg hover:bg-orange-50"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOOKING POPUP */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white/95 rounded-3xl shadow-2xl w-full max-w-xl p-8 relative border border-orange-200/50 ring-1 ring-orange-100">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              ✖
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 animate-pulse">
                Puja Booking
              </h2>
              <p className="text-sm text-gray-500">Book your sacred ritual with ease</p>
            </div>

            {/* Progress */}
            <div className="flex justify-between items-center mb-2">
              <div className={`${step === 1 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center font-semibold`}>Details</div>
              <div className={`${step === 2 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center`}>Schedule</div>
              <div className={`${step === 3 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center`}>Confirm</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div
                className="bg-gradient-to-r from-orange-500 to-yellow-400 h-2 rounded-full"
                style={{ width: `${step * 33.3}%` }}
              ></div>
            </div>

            {/* FORM */}
            {step === 1 && (
              <div className="space-y-6">
                <input type="text" placeholder="Full Name" className="w-full border rounded-xl p-3 shadow-sm" />
                <div className="grid grid-cols-2 gap-6">
                  <input type="tel" placeholder="Phone" className="w-full border rounded-xl p-3" />
                  <input type="email" placeholder="Email" className="w-full border rounded-xl p-3" />
                </div>
                <div className="flex justify-end">
                  <button onClick={nextStep} className="px-6 py-3 bg-orange-500 text-white rounded-full shadow hover:scale-105 transition">
                    Next →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <select className="w-full border rounded-xl p-3">
                  <option>-- Choose Puja --</option>
                  <option>Ganesh Puja</option>
                  <option>Durga Puja</option>
                  <option>Lakshmi Puja</option>
                  <option>Satyanarayan Puja</option>
                </select>
                <div className="grid grid-cols-2 gap-6">
                  <input type="date" className="w-full border rounded-xl p-3" />
                  <input type="time" className="w-full border rounded-xl p-3" />
                </div>
                <input type="text" placeholder="Temple or Address" className="w-full border rounded-xl p-3" />
                <div className="flex justify-between">
                  <button onClick={prevStep} className="px-6 py-3 bg-gray-300 rounded-full shadow">
                    ← Back
                  </button>
                  <button onClick={nextStep} className="px-6 py-3 bg-orange-500 text-white rounded-full shadow hover:scale-105 transition">
                    Next →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <textarea rows="4" className="w-full border rounded-xl p-3" placeholder="Any special requests..."></textarea>
                <div className="flex justify-between">
                  <button onClick={prevStep} className="px-6 py-3 bg-gray-300 rounded-full shadow">
                    ← Back
                  </button>
                  <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full shadow hover:scale-105 transition">
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DETAILS MODAL */}
      {isDetailsOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white/95 rounded-3xl p-8 w-full max-w-lg shadow-2xl relative border border-orange-200/50">
            <button
              onClick={() => setIsDetailsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-xl"
            >
              ✖
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-2xl shadow-md text-white">
                📖
              </div>
              <h3 className="text-2xl font-extrabold text-gray-800">Puja Details</h3>
            </div>
            <div className="divide-y divide-orange-100">
              <div className="py-3">
                <h4 className="font-semibold text-orange-600">✨ Rituals</h4>
                <p className="text-gray-700 mt-1">Performed authentically by <span className="font-semibold">Vedic priests</span>.</p>
              </div>
              <div className="py-3">
                <h4 className="font-semibold text-orange-600">🙏 Benefits</h4>
                <p className="text-gray-700 mt-1">Includes <span className="font-semibold">Prasad</span>, blessings & digital certificate.</p>
              </div>
              <div className="py-3">
                <h4 className="font-semibold text-orange-600">📺 Access</h4>
                <p className="text-gray-700 mt-1">Join <span className="font-semibold">live</span> or watch later anytime.</p>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5 border-l-4 border-orange-400 shadow-sm">
              <h4 className="font-bold text-orange-600 mb-2">Key Highlights:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>✔️ Experienced Pandits</li>
                <li>✔️ All Samagri & Items included</li>
                <li>✔️ Personalized Sankalp for your family</li>
                <li>✔️ Digital Certificate & Prasad Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}