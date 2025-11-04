import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Note: 'Link' is imported but not used in this component.
// You might need it if you plan to link the 'Details' button.
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

  // Reset step to 1 when popup opens
  const openPopup = () => {
    setStep(1); // Reset to first step
    setIsPopupOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
      {" "}
      {/* Added pb-24 for spacing from fixed button */}
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
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent  
              translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"
            ></span>
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
            Professional priests, authentic rituals and live sessions. Choose a
            puja package &amp; we’ll take care of everything — decorations,
            prasad, and digital certificates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={openPopup}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition font-semibold"
            >
              Enquire Puja →
            </button>
            <button
              onClick={openPopup}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition font-semibold"
            >
              Enquire Yagya →
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-4"
              data-aos="flip-left"
              data-aos-delay="1000"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center text-orange-600 text-xl font-bold flex-shrink-0">
                🕉️
              </div>
              <div>
                <div className="font-semibold">Authentic Vedic</div>
                <div className="text-sm text-gray-500">
                  Priests with proper lineage
                </div>
              </div>
            </div>
            <div className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center text-yellow-600 text-xl font-bold flex-shrink-0">
                ★
              </div>
              <div>
                <div className="font-semibold">Instant Booking</div>
                <div className="text-sm text-gray-500">
                  Slots available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative mt-12 lg:mt-0"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-orange-100">
            <img
              src="/images/Pujasection.png" // Make sure this path is correct
              alt="Pandits performing puja"
              className="w-full h-auto max-h-[480px] lg:h-[420px] object-cover brightness-95 hover:scale-105 transition duration-500"
            />
            {/* The image from the screenshot had a different image */}
            {/* You might want to use: src="httpsNext_Available_Image.png" */}
          </div>

          {/* Floating Card */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-sm lg:left-6 lg:-translate-x-0 lg:w-80 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-5 border border-orange-100"
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
                onClick={() => setIsDetailsOpen(true)}
                className="flex-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-orange-50 transition font-semibold text-gray-700"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- FIXED ENQUIRE NOW BUTTON --- */}
      <button
        onClick={openPopup}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition font-semibold"
      >
        <span>Enquire Now</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* --- BOOKING / ENQUIRY POPUP --- */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-6 sm:p-8 relative border border-orange-200/50"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                Booking / Enquiry Form
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Please fill out the form to make an enquiry.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-gray-200">
              <div
                className={`flex-1 text-center py-2 border-b-4 ${
                  step === 1
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-400"
                } font-semibold transition-all`}
              >
                Details
              </div>
              <div
                className={`flex-1 text-center py-2 border-b-4 ${
                  step === 2
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-400"
                } font-semibold transition-all`}
              >
                Schedule
              </div>
              <div
                className={`flex-1 text-center py-2 border-b-4 ${
                  step === 3
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-400"
                } font-semibold transition-all`}
              >
                Confirm
              </div>
            </div>

            {/* --- FORM STEPS --- */}

            {/* STEP 1: Details */}
            {step === 1 && (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow-md hover:scale-105 transition font-semibold"
                  >
                    Next →
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Schedule */}
            {step === 2 && (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                <select
                  required
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-gray-700"
                >
                  <option value="">-- Choose Puja Name --</option>
                  <option>Ganesh Puja</option>
                  <option>Durga Puja</option>
                  <option>Lakshmi Puja</option>
                  <option>Satyanarayan Puja</option>
                  <option>Other</option>
                </select>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Choose your preferred day(s) (Select 1 to 3)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      required
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Temple / Address (if applicable)"
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                <input
                  type="text"
                  defaultValue="Kashi / Varanasi"
                  placeholder="Holy Place"
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 text-gray-700"
                />

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow-md hover:scale-105 transition font-semibold"
                  >
                    Next →
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Confirm */}
            {step === 3 && (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Enquiry Submitted!"); // Placeholder action
                  setIsPopupOpen(false);
                }}
              >
                <textarea
                  rows="5"
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Any special requests or details..."
                ></textarea>
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow-md hover:scale-105 transition font-semibold"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- DETAILS MODAL (Unchanged) --- */}
      {isDetailsOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className="bg-white/95 rounded-3xl p-8 w-full max-w-lg shadow-2xl relative border border-orange-200/50"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <button
              onClick={() => setIsDetailsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl"
            >
              &times;
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-2xl shadow-md text-white text-2xl">
                📖
              </div>
              <h3 className="text-2xl font-extrabold text-gray-800">
                Puja Details
              </h3>
            </div>
            <div className="divide-y divide-orange-100">
              <div className="py-3">
                <h4 className="font-semibold text-orange-600">✨ Rituals</h4>
                <p className="text-gray-700 mt-1">
                  Performed authentically by{" "}
                  <span className="font-semibold">Vedic priests</span>.
                </p>
              </div>
              <div className="py-3">
                <h4 className="font-semibold text-orange-600">🙏 Benefits</h4>
                <p className="text-gray-700 mt-1">
                  Includes{" "}
                  <span className="font-semibold">Prasad</span>, blessings &
                  digital certificate.
                </p>
              </div>
              <div className="py-3">
                <h4 className="font-semibold text-orange-600">📺 Access</h4>
                <p className="text-gray-700 mt-1">
                  Join <span className="font-semibold">live</span> or watch
                  later anytime.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5 border-l-4 border-orange-400 shadow-sm">
              <h4 className="font-bold text-orange-600 mb-2">
                Key Highlights:
              </h4>
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