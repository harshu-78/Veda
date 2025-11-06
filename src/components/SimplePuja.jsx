import React, { useRef } from 'react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-zinc-700 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);


const CTAButton = ({ text, icon, className = '' }) => (
  <button 
    className={`bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 
               hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out text-lg ${className}`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {text}
  </button>
);



const StarIcon = ({ filled = true }) => (
  <svg 
    className={`w-6 h-6 ${filled ? 'text-yellow-400' : 'text-zinc-300'}`} 
    fill="currentColor" 
    viewBox="0 0 20 20" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const MapPinIcon = () => (
  <svg 
    className="w-5 h-5 mr-1" 
    fill="currentColor" 
    viewBox="0 0 20 20" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

// Testimonial Data
const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    quote: "My family felt immense peace after the Pitru Dosh Puja. Truly divine experience.",
    stars: 5,
    img: "https://placehold.co/100x100/EAD9C7/573F28?text=PS"
  },
  {
    name: "Rohit Mehta",
    location: "Delhi, India",
    quote: "Veda Structure’s Rudrabhishek Puja changed my energy completely. Highly recommended.",
    stars: 5,
    img: "https://placehold.co/100x100/D1D5DB/374151?text=RM"
  },
  {
    name: "Aarushi Singh",
    location: "Bangalore, India",
    quote: "Never thought online Puja could feel so real and sacred. Thank you!",
    stars: 5,
    img: "https://placehold.co/100x100/F0E7D8/6B4F3A?text=AS"
  },
  {
    name: "Vishal Bhardwaj",
    location: "Varanasi, India",
    quote: "The personalized sankalp felt very powerful. The pandits were very knowledgeable.",
    stars: 4,
    img: "https://placehold.co/100x100/E0E7FF/4338CA?text=VB"
  }
];

// Duplicate data for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials];


const SimplePuja = () => {
  return (
    <div className="bg-amber-50 min-h-screen font-sans text-zinc-800">
      

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .hover-pause:hover {
            animation-play-state: paused;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* --- Hero Section --- */}
      <section className="relative h-[70vh] md:h-[85vh] text-white flex items-center justify-center text-center p-6 overflow-hidden">
        {/* --- Video Background --- */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute z-0 inset-0 w-full h-full object-cover"
        >
    
          <source src="/images/Daily Puja.mp4" type="video/mp4" />

          Aapka browser video tag ko support nahi karta.
        </video>
        
      

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Video par dark overlay (video ke upar) */}
        
        <div className="relative z-20 max-w-4xl mx-auto"> {/* Text content (overlay ke upar) */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            🙏 Experience the Power of Authentic Vedic Puja
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10">
            Performed by Kashi Pandits for Your Peace, Health & Prosperity
          </p>
          <CTAButton text="Book Your Puja Now" icon="🔮" />
        </div>
      </section>

      {/* --- Highlights Section --- */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle title="Highlights of Veda Structure Puja Services" />
     
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 (Bada) */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center lg:col-span-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <span className="text-5xl p-4 text-orange-600">🌺</span>
              <div>
                <h3 className="font-bold text-xl mb-1 text-zinc-900">Performed in Kashi</h3>
                <p className="text-zinc-700">The City of Lord Shiva</p>
              </div>
            </div>

            {/* Card 2 (Chota) */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center lg:col-span-1 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <span className="text-5xl p-4 text-orange-600">🕉️</span>
              <div>
                <h3 className="font-bold text-xl mb-1 text-zinc-900">Experienced Pandits</h3>
                <p className="text-zinc-700">Guided by Vedic experts</p>
              </div>
            </div>

            {/* Card 3 (Chota) */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center lg:col-span-1 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <span className="text-5xl p-4 text-orange-600">🔥</span>
              <div>
                <h3 className="font-bold text-xl mb-1 text-zinc-900">Personalized Sankalp</h3>
                <p className="text-zinc-700">Intention ritual for you</p>
              </div>
            </div>

            {/* Card 4 (Bada) */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center lg:col-span-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <span className="text-5xl p-4 text-orange-600">📿</span>
              <div>
                <h3 className="font-bold text-xl mb-1 text-zinc-900">Pure Ingredients</h3>
                <p className="text-zinc-700">Use of pure vedic chants & samagri</p>

              </div>
            </div>

            {/* Card 5 (Bada) */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center lg:col-span-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <span className="text-5xl p-4 text-orange-600">📸</span>
              <div>
                <h3 className="font-bold text-xl mb-1 text-zinc-900">Live Streaming</h3>
                <p className="text-zinc-700">Video & Recording Option Available</p>
              </div>
            </div>

            {/* Card 6 (Chota) */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center lg:col-span-1 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <span className="text-5xl p-4 text-orange-600">💫</span>
              <div>
                <h3 className="font-bold text-xl mb-1 text-zinc-900">Suitable Muhurat</h3>
                <p className="text-zinc-700">Auspicious Time Selection</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- How It Works Section  --- */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="How It Works" />

          {/* --- Desktop Timeline (Horizontal) --- */}
          <div className="hidden md:flex relative justify-between max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 w-full h-1 bg-orange-200 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center w-60">
              <div className="w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-3xl mb-6 border-4 border-orange-200 shadow-lg">1</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Fill Your Details</h3>
              <p className="text-zinc-700">Fill your Name, Birth Details & Gotra</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center w-60">
              <div className="w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-3xl mb-6 border-4 border-orange-200 shadow-lg">2</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Select the Puja</h3>
              <p className="text-zinc-700">Select the Puja type & preferred date</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center w-60">
              <div className="w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-3xl mb-6 border-4 border-orange-200 shadow-lg">3</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Puja is Performed</h3>
              <p className="text-zinc-700">Pandits perform your Puja in Kashi (Live or Remote)</p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center w-60">
              <div className="w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-3xl mb-6 border-4 border-orange-200 shadow-lg">4</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Receive Blessings</h3>
              <p className="text-zinc-700">Receive video/photos & blessings note</p>
            </div>
          </div>

          {/* --- Mobile Timeline  --- */}
          <div className="flex flex-col md:hidden relative pl-16">
            {/* Connecting Line */}
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-orange-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 mb-16">
              <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-2xl absolute top-0 -left-8 border-4 border-orange-200 shadow-lg">1</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Fill Your Details</h3>
              <p className="text-zinc-700">Fill your Name, Birth Details & Gotra</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 mb-16">
              <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-2xl absolute top-0 -left-8 border-4 border-orange-200 shadow-lg">2</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Select the Puja</h3>
              <p className="text-zinc-700">Select the Puja type & preferred date</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 mb-16">
              <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-2xl absolute top-0 -left-8 border-4 border-orange-200 shadow-lg">3</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Puja is Performed</h3>
              <p className="text-zinc-700">Pandits perform your Puja in Kashi (Live or Remote)</p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center font-extrabold text-2xl absolute top-0 -left-8 border-4 border-orange-200 shadow-lg">4</div>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">Receive Blessings</h3>
              <p className="text-zinc-700">Receive video/photos & blessings note</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- Types of Puja Section --- */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle title="Types of Puja You Can Book" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500 transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl text-orange-700 mb-3">🔹 Daily Puja</h3>
              <p className="text-zinc-700">For maintaining positive energy and divine protection every day.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500 transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl text-orange-700 mb-3">🔹 Special Puja</h3>
              <p className="text-zinc-700">For career, marriage, business growth, or spiritual upliftment.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500 transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl text-orange-700 mb-3">🔹 Dosha Nivaran Puja</h3>
              <p className="text-zinc-700">For Kaal Sarp, Manglik, Pitru Dosh, or Graha Shanti remedies.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500 transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl text-orange-700 mb-3">🔹 Rudrabhishek Puja</h3>
              <p className="text-zinc-700">For Lord Shiva’s blessings, inner peace, and removal of negativity.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500 transition-transform duration-300 hover:scale-105 col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-2xl text-orange-700 mb-3">🔹 Online Puja</h3>
              <p className="text-zinc-700">Can’t visit Kashi? Get your Puja performed remotely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section className="py-24 px-6 bg-amber-100">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="Choose Your Plan" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
            
            {/* Plan 1: Basic */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">✨ Basic Puja</h3>
              <p className="text-5xl font-extrabold text-zinc-900 my-5">₹3,100</p>
              <p className="min-h-[6rem] text-zinc-700 mb-8">Performed by 1 Pandit in Kashi (Online Option Available)</p>
              <CTAButton text="Book Now" className="bg-zinc-700 hover:bg-zinc-800" />
            </div>

            {/* Plan 2: Premium (Highlighted) */}
            <div className="bg-white p-10 pt-14 rounded-2xl shadow-2xl text-center border-4 border-orange-500 scale-110 relative z-10">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">Recommended</span>
              <h3 className="font-bold text-3xl mb-2 text-orange-600">🔥 Premium Puja</h3>
              <p className="text-5xl font-extrabold text-orange-600 my-5">₹7,100</p>
              <p className="min-h-[6rem] text-zinc-700 mb-8">Performed by 3 Pandits with detailed rituals</p>
              <CTAButton text="Book Now" />
            </div>

            {/* Plan 3: Maha Puja */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">🌺 Maha Puja</h3>
              <p className="text-5xl font-extrabold text-zinc-900 my-5">₹11,100</p>
              <p className="min-h-[6rem] text-zinc-700 mb-8">Complete Puja + Rudrabhishek + Personalized Blessing</p>
              <CTAButton text="Book Now" className="bg-zinc-700 hover:bg-zinc-800" />
            </div>

          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle title="Voices of Devotion" />
        </div>
        
        {/* --- Animated Swiper (Marquee) --- */}
        <div 
          className="w-full relative"
          style={{ maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)" }}
        >
          <div className="flex w-max animate-marquee hover-pause">
            {doubledTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[320px] sm:w-[380px] mx-4 py-16"
              >
                <div className="relative bg-amber-50 rounded-2xl shadow-xl p-8 pt-24 text-center h-full border border-orange-100">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" 
                    onError={(e) => e.target.src = 'https://placehold.co/112x112/F9E5C9/8B5A2A?text=Devotee'}
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < testimonial.stars} />
                    ))}
                  </div>
                  <h3 className="font-extrabold text-2xl text-zinc-900 mb-1">{testimonial.name}</h3>
                  <p className="flex items-center justify-center text-orange-600 font-semibold mb-6">
                    <MapPinIcon />
                    {testimonial.location}
                  </p>
                  <p className="text-zinc-700 italic text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="container mx-auto max-w-3xl">
          <SectionTitle title="Frequently Asked Questions" />
          <div className="space-y-4">
            {/* FAQ 1 - Using <details> for accordion */}
            <details className="bg-white p-6 rounded-lg shadow-lg border border-zinc-200 open:shadow-xl transition-all duration-300 mb-4">
              <summary className="font-bold text-xl cursor-pointer text-zinc-900 hover:text-orange-600 transition-colors list-none">
                Q1: Can I watch my Puja live?
              </summary>
              <p className="mt-4 text-zinc-700 text-base">
                👉 Yes, we provide live streaming and post-Puja video.
              </p>
            </details>
            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg shadow-lg border border-zinc-200 open:shadow-xl transition-all duration-300 mb-4">
              <summary className="font-bold text-xl cursor-pointer text-zinc-900 hover:text-orange-600 transition-colors list-none">
                Q2: How do I know which Puja is right for me?
              </summary>
              <p className="mt-4 text-zinc-700 text-base">
                👉 Our astrologer will analyze your birth chart and suggest the best Puja.
              </p>
            </details>
            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg shadow-lg border border-zinc-200 open:shadow-xl transition-all duration-300 mb-4">
              <summary className="font-bold text-xl cursor-pointer text-zinc-900 hover:text-orange-600 transition-colors list-none">
                Q3: What happens after booking?
              </summary>
              <p className="mt-4 text-zinc-700 text-base">
                👉 You’ll get a confirmation message, puja date, and live stream link.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-orange-100 to-amber-50 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-900 mb-6">
             Purify Your Karma. Strengthen Your Destiny
          </h2>
          <p className="text-xl text-zinc-800 mb-10">
            Veda Structure’s Puja Services connect you directly to divine energies from the holy city of Kashi.
          </p>
          <CTAButton text="Book Your Puja Now & Invoke Divine Blessings" icon="" className="py-4 px-10 text-xl" />
        </div>
      </section>

    

    </div>
  );
};

export default SimplePuja;