// src/pages/upcoming.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css"; // if Tailwind is configured globally

const Upcoming = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gotraKnown, setGotraKnown] = useState(true);
  const [gotra, setGotra] = useState("");
  const [prasadChecked, setPrasadChecked] = useState(false);
  const [prasadType, setPrasadType] = useState("");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleGotraChange = (e) => {
    const checked = e.target.checked;
    setGotraKnown(!checked);
    if (checked) setGotra("Kashyap");
    else setGotra("");
  };

  const handlePrasadToggle = (e) => {
    setPrasadChecked(e.target.checked);
  };

  const handleNext = () => {
    alert("Proceeding to Review Cart...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 text-gray-800">
      {/* background glow */}
      <div className="pointer-events-none fixed -top-24 -left-24 w-72 h-72 bg-yellow-300/40 blur-3xl rounded-full"></div>
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-72 h-72 bg-orange-300/40 blur-3xl rounded-full"></div>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-600 flex items-center gap-2 flex-wrap">
        <a className="font-medium hover:text-yellow-700 transition" href="#">
          Home
        </a>
        <span>›</span>
        <a className="font-medium hover:text-yellow-700 transition" href="#">
          Puja
        </a>
        <span>›</span>
        <a className="font-medium hover:text-yellow-700 transition" href="#">
          Yagya Puja
        </a>
        <span>›</span>
        <span className="font-semibold text-red-600">Adi Lakshmi Puja</span>
      </nav>

      {/* Top Section */}
      <section className="max-w-7xl mx-auto p-6 md:p-8 grid lg:grid-cols-2 gap-8">
        {/* Left - Images */}
        <div className="space-y-4">
          <div
            id="mainDisplay"
            className="relative rounded-2xl shimmer soft-border w-full aspect-[6/5] overflow-hidden group"
          >
            <img
              id="mainImage"
              src="images/main iamge.jpg"
              alt="Product"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
              data-aos="zoom-in"
            />
          </div>

          <div
            id="thumbRow"
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-3"
            data-aos="zoom-in"
          >
            <img
              src="images/main iamge.jpg"
              className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
              alt=""
            />
            <img
              src="images/m2.jpg"
              className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
              alt=""
            />
            <video
              src="images/video1.mp4"
              className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
              muted
            ></video>
            <img
              src="images/bagagalmukhi yantra.webp"
              className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
              alt=""
            />
            <img
              src="images/B-Y2.webp"
              className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
              alt=""
            />
          </div>
        </div>

        {/* Right - Info */}
        <div className="glass soft-border rounded-2xl w-full p-6 md:p-8 fadeSlide">
          <div
            className="flex items-start justify-between gap-4 glass rounded-2xl p-6"
            data-aos="fade-left"
          >
            <div>
              <p className="uppercase tracking-wide text-gray-500 text-xs">
                Yagya Puja
              </p>
              <h1
                className="text-3xl md:text-4xl font-extrabold mt-1 gold-text mb-6"
                data-aos="fade-down"
              >
                Adi Lakshmi Puja
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center text-yellow-600">★★★★★</div>
                <span className="text-xs text-gray-500">(150 reviews)</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-11 h-11 border rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition">
                ❤️
              </button>
              <button className="w-11 h-11 border rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-700 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M18 8a3 3 0 1 0-2.82-4H14a2 2 0 0 0-2 2v7.23l-2.4-1.2a3 3 0 1 0-.9 1.79l3.74 1.87A2 2 0 0 0 15 15V6h.18A3 3 0 0 0 18 8Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-4 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 px-4 py-3 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="font-semibold text-center sm:text-left">
              Booking: 01/11/25 – 20/11/25
            </div>
            <div className="text-xs font-bold">Countdown Running...</div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="bg-white rounded-xl border p-3 hover:scale-105 hover:shadow-md hover:bg-yellow-500">
              ✅ Certified Priests
            </div>
            <div className="bg-white rounded-xl border p-3 hover:scale-105 hover:shadow-md hover:bg-yellow-500">
              🕉️ Vedic Rituals
            </div>
            <div className="bg-white rounded-xl border p-3 hover:scale-105 hover:shadow-md hover:bg-yellow-500">
              🚚 Prasad Delivery
            </div>
          </div>

          <button
            onClick={toggleModal}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-amber-300/40 transition transform active:scale-[.98] hover:scale-105"
          >
            Participate in Puja
          </button>
        </div>
      </section>

      {/* Participate Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold z-10"
            >
              &times;
            </button>

            <div className="w-full flex items-center justify-center border-b bg-white shadow-sm sticky top-0 z-50 rounded-t-lg">
              <div className="flex items-center justify-center space-x-6 p-3 text-sm md:text-base">
                <div className="flex items-center space-x-2 text-orange-500 font-semibold">
                  <span className="w-6 h-6 flex items-center justify-center border-2 border-orange-500 rounded-full">
                    1
                  </span>
                  <span>Add Details</span>
                </div>
              </div>
            </div>

            <form className="max-w-3xl mx-auto bg-white rounded-xl p-6 md:p-10 space-y-6">
              <div>
                <label className="font-semibold text-lg flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    className="w-5 h-5"
                    alt=""
                  />
                  WhatsApp Mobile Number
                </label>
                <div className="flex items-center mt-2 border rounded-lg overflow-hidden">
                  <span className="px-3 py-2 bg-gray-100 text-gray-600">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter WhatsApp Number"
                    className="flex-1 px-3 py-2 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Add Participants</h3>
                <input
                  type="text"
                  placeholder="Participant 1 *"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Add Gotra</h3>
                <input
                  type="text"
                  placeholder="Enter Gotra"
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 ${
                    !gotraKnown ? "bg-gray-100" : ""
                  }`}
                  value={gotra}
                  disabled={!gotraKnown}
                  onChange={(e) => setGotra(e.target.value)}
                />
                <label className="flex items-center gap-2 mt-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!gotraKnown}
                    onChange={handleGotraChange}
                    className="w-4 h-4"
                  />
                  I don’t know my Gotra
                </label>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Do you want the Prasad to be Delivered?
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border rounded-lg px-4 py-3 gap-3">
                  <p className="text-sm text-gray-600">
                    Note: Prasad will be delivered within 10 days of the puja/offering.
                  </p>
                  <label className="inline-flex items-center cursor-pointer flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={prasadChecked}
                      onChange={handlePrasadToggle}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 relative transition-all duration-300">
                      <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></span>
                    </div>
                  </label>
                </div>

                {prasadChecked && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">
                        Select Prasad Type (Only One)
                      </h4>
                      <div className="space-y-2">
                        {[
                          { value: "rudraksh", label: "Rudraksh – ₹199" },
                          { value: "bracelet", label: "Bracelet – ₹299" },
                          {
                            value: "full",
                            label: "Full Packet (Rudraksh + Bracelet) – ₹449",
                          },
                        ].map((item) => (
                          <label
                            key={item.value}
                            className="flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer hover:bg-orange-50"
                          >
                            <input
                              type="radio"
                              name="prasadType"
                              value={item.value}
                              checked={prasadType === item.value}
                              onChange={(e) => setPrasadType(e.target.value)}
                              className="w-4 h-4 text-orange-500"
                            />
                            <span className="flex-1">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                      />
                      <input
                        type="text"
                        placeholder="Full Address"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="City"
                          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                          type="text"
                          placeholder="Pincode"
                          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upcoming;
