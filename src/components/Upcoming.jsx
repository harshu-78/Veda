import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Upcoming = () => {
  // State for all dynamic parts of the page
  const [mainDisplay, setMainDisplay] = useState({
    type: 'img',
    src: 'images/main iamge.jpg',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [participantCount, setParticipantCount] = useState(1); 
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [gotra, setGotra] = useState('');
  const [isGotraDisabled, setIsGotraDisabled] = useState(false);
  const [showPrasad, setShowPrasad] = useState(false);

  const carouselRef = useRef(null);
  const pageLinkRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Countdown Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const end = new Date('Nov 20, 2025 23:59:59').getTime();
      const now = new Date().getTime();
      const diff = end - now;

      if (diff < 0) {
        setCountdown('Offer ended');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${mins}m ${secs}s left`);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Carousel Auto-scroll Logic
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let autoScroll;
    const scrollAmount = 300;

    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(autoScroll);
    };

    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
    startAutoScroll();

    return () => {
      // Cleanup listeners and interval on unmount
      carousel.removeEventListener('mouseenter', stopAutoScroll);
      carousel.removeEventListener('mouseleave', startAutoScroll);
      clearInterval(autoScroll);
    };
  }, []);

  // Toast message auto-hide logic
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage('');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // --- Event Handlers ---

  // Gallery thumbnail click
  const handleThumbClick = (el) => {
    if (el.tagName === 'VIDEO') {
      setMainDisplay({ type: 'video', src: el.src });
    } else {
      setMainDisplay({ type: 'img', src: el.src });
    }
  };

  // Favorite button toggle
  const handleFavToggle = () => {
    const newFavState = !isFavorite;
    setIsFavorite(newFavState);
    setToastMessage(
      newFavState ? 'Added to favorites' : 'Removed from favorites'
    );
  };

  // Share popup copy link
  const handleCopyLink = () => {
    const input = pageLinkRef.current;
    if (input) {
      input.select();
      input.setSelectionRange(0, 99999); // For mobile
      navigator.clipboard.writeText(input.value).then(() => {
        setToastMessage('Link copied to clipboard');
      });
    }
  };

  // Modal: Open modal and set participant count
  const openModalWithParticipants = (count) => {
    setParticipantCount(count);
    setIsModalOpen(true);
  };

  // Modal: "I don't know my Gotra" checkbox
  const handleGotraCheck = (e) => {
    if (e.target.checked) {
      setGotra('Kashyap');
      setIsGotraDisabled(true);
    } else {
      setGotra('');
      setIsGotraDisabled(false);
    }
  };

  // Modal: Prasad toggle
  const handlePrasadToggle = (e) => {
    setShowPrasad(e.target.checked);
  };

  // Modal: Next button
  const handleFormNext = () => {
    alert('Proceeding to Review Cart...');
    // Add your redirection or next step logic here
  };

  // Carousel navigation buttons
  const handleCarouselNav = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = 300;
      carousel.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Helper to render dynamic participant inputs
  const renderParticipantInputs = () => {
    return Array.from({ length: participantCount }, (_, i) => (
      <input
        key={i}
        type="text"
        placeholder={`Participant ${i + 1} *`}
        required
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
      />
    ));
  };

  return (
    <>
     
      <style>{`
        .gold-text { background: linear-gradient(90deg,#f59e0b,#d97706); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .glass { background: rgba(255,255,255,.85); backdrop-filter: blur(12px); }
        .soft-border { border: 1px solid rgba(250,204,21,.35); }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeSlide { from {opacity:0; transform: translateY(10px)} to {opacity:1; transform: translateY(0)} }
        .fadeSlide { animation: fadeSlide .5s ease; }
      `}</style>

    
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 text-gray-800">
        <div className="pointer-events-none fixed -top-24 -left-24 w-72 h-72 bg-yellow-300/40 blur-3xl rounded-full"></div>
        <div className="pointer-events-none fixed -bottom-24 -right-24 w-72 h-72 bg-orange-300/40 blur-3xl rounded-full"></div>

        <nav className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-600 flex items-center gap-2">
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

      {/* Main Section */}
<section className="max-w-7xl mx-auto p-6 md:p-8 grid lg:grid-cols-2 gap-8">
  <div className="space-y-4">
    <div
      id="mainDisplay"
      className="relative rounded-2xl shimmer soft-border w-full h-[500px] aspect-[6/5] overflow-hidden group"
    >
      {/* This part is now controlled by React state */}
      {mainDisplay.type === 'img' ? (
        <img
          id="mainImage"
          src={mainDisplay.src}
          alt="Product Image"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03] flex space-x-3"
          data-aos="zoom-in"
          key={mainDisplay.src}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl"
          key={mainDisplay.src}
        >
          <source src={mainDisplay.src} type="video/mp4" />
        </video>
      )}
    </div>

    {/* Thumbnails row */}
    <div
      id="thumbRow"
      className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-3 flex space-x-3"
      data-aos="zoom-in"
    >
      <img
        src="images/main iamge.jpg"
        className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
        alt="thumbnail"
        onClick={(e) => handleThumbClick(e.target)}
      />
      <img
        src="images/m2.jpg"
        className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
        alt="thumbnail"
        onClick={(e) => handleThumbClick(e.target)}
      />
      <video
        src="images/video1.mp4"
        className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
        muted
        onClick={(e) => handleThumbClick(e.target)}
      ></video>
      <img
        src="images/bagagalmukhi yantra.webp"
        className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
        alt="thumbnail"
        onClick={(e) => handleThumbClick(e.target)}
      />
      <img
        src="images/B-Y2.webp"
        className="thumb w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition"
        alt="thumbnail"
        onClick={(e) => handleThumbClick(e.target)}
      />
    </div>
  </div>

  {/* Product Details Card */}
  <div className="glass soft-border rounded-2xl w-full h-[500px] p-6 md:p-8 fadeSlide">
    <div
      className="flex items-start justify-between gap-4 glass rounded-2xl p-6"
      data-aos="fade-left"
    >
      <div>
        <p className="uppercase tracking-wide text-gray-500 text-xs">
          Yagya Puja
        </p>
        <h1
          className="text-3xl md:text-4xl font-extrabold mt-1 gold-text text-3xl font-extrabold gold-text mb-6"
          data-aos="fade-down"
        >
          Adi Lakshmi Puja
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center text-yellow-600">
            ★★★★★
          </div>
          <span className="text-xs text-gray-500">(150 reviews)</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          id="favBtn"
          className={`w-11 h-11 border rounded-full flex items-center justify-center hover:bg-red-50 transition ${
            isFavorite ? 'text-red-600' : 'hover:text-red-600'
          }`}
          onClick={handleFavToggle}
        >
          ❤️
        </button>
        <button
          id="shareBtn"
          className="w-11 h-11 border rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-700 transition"
          onClick={() => setIsShareOpen(true)}
        >
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

    {/* Offer countdown */}
    <div className="mt-4 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 px-4 py-3 rounded-xl shadow flex items-center justify-between gap-3">
      <div className="font-semibold">
        Booking closes in: 01/11/25 – 20/11/25
      </div>
      <div id="countdown" className="text-xs font-bold">
        {countdown}
      </div>
    </div>

    {/* Trust badges */}
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

    {/* --- Added Devotee Count and Images --- */}
    <div className="mt-6">
      <p className="text-sm text-gray-700 font-semibold mb-3">
        1,00,000+ devotees have joined the Pujas organized by VedaStructure 🙏🏻
      </p>
      <div className="flex -space-x-4">
        <img
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
          src="/images/devotee1.webp" // Replace with actual devotee image paths
          alt="Devotee 1"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
          src="/images/devotee2.webp"
          alt="Devotee 2"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
          src="/images/devotee3.webp"
          alt="Devotee 3"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
          src="/images/devotee4.webp"
          alt="Devotee 4"
        />
        <a
  className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-orange-500 border-2 border-white rounded-full hover:bg-orange-600"
  href="#"
>
  +99
</a>
      </div>
    </div>
    {/* -------------------------------------- */}

    <a href="#participate-section">
      {' '}
      <button
        id="bookBtn"
        className="mt-6 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-amber-300/40 transition transform active:scale-[.98] hover:scale-105 hover:shadow-mdc hover:bg-orange-700"
      >
        Participate in Puja
      </button>
    </a>
  </div>
</section>

        <h3
          id="participate-section"
          className=" text-4xl font-extrabold gold-text text-center mt-9"
        >
          4 Ways to Participate
        </h3>

       <div className=" mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6">
  {/* Card 1 */}
  <div className="max-w-sm mx-auto">
    <div className="border-2 border-orange-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
      {/* YAHAN BADLAAV KIYA HAI (p-4 -> pt-4 px-4) */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white pt-4 px-4 text-left">
        <h3 className="text-lg font-semibold">
          Individual Lakshmi Puja
        </h3>
        <p className="text-xl font-bold mt-1">₹851</p>
        <img
          src="/images/one_family.avif"
          alt="Individual"
          className="rounded-lg mt-3"
        />
      </div>
      <div className="p-5 space-y-3 text-gray-700 text-sm">
        <p>🔸 Link for Recorded video of Lakshmi Puja</p>
        <p>
          🔸 Individual’s Name and Gotra will be chanted during the Puja
          Sankalp
        </p>
        <p>
          🔸 You can choose to offer Vastra & Bhog to Lakshmi Mata and
          the video of the Offerings will be shared with you
        </p>
        <p>🔸 Prasad will be shipped to your home</p>
      </div>
      <div className="p-4 text-center">
        <button
          data-participants="1"
          className="open-modal-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-2 rounded-lg transition"
          onClick={() => openModalWithParticipants(1)}
        >
          PARTICIPATE
        </button>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="border-2 border-orange-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
    {/* YAHAN BADLAAV KIYA HAI (p-4 -> pt-4 px-4) */}
    <div className="bg-gradient-to-r from-pink-600 to-orange-500 text-white pt-4 px-4 text-left">
      <h3 className="text-lg font-semibold">Couple Lakshmi Puja</h3>
      <p className="text-xl font-bold mt-1">₹1251</p>
      <img
        src="/images/two_family.avif"
        alt="Couple"
        className="rounded-lg mt-3"
      />
    </div>
    <div className="p-5 space-y-3 text-gray-700 text-sm">
      <p>🔸 Link for Recorded video of Lakshmi Puja</p>
      <p>
        🔸 2 Devotee Name and Gotra will be chanted during the Puja
        Sankalp
      </p>
      <p>
        🔸 You can choose to offer Vastra & Bhog to Lakshmi Mata and the
        video of the Offerings will be shared with you
      </p>
      <p>🔸 Prasad will be shipped to your home</p>
    </div>
    <div className="p-4 text-center">
      <button
        data-participants="2"
        className="open-modal-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-2 rounded-lg transition"
        onClick={() => openModalWithParticipants(2)}
      >
        PARTICIPATE
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="border-2 border-orange-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
    {/* YAHAN BADLAAV KIYA HAI (p-4 -> pt-4 px-4) */}
    <div className="bg-gradient-to-r from-orange-600 to-red-400 text-white pt-4 px-4 text-left">
      <h3 className="text-lg font-semibold">Family Lakshmi Puja</h3>
      <p className="text-xl font-bold mt-1">₹1451</p>
      <img
        src="/images/four_family.avif"
        alt="Family"
        className="rounded-lg mt-3"
      />
    </div>
    <div className="p-5 space-y-3 text-gray-700 text-sm">
      <p>🔸 Link for Recorded video of Lakshmi Puja</p>
      <p>
        🔸 4 Devotee Name and Gotra will be chanted during the Puja
        Sankalp
      </p>
      <p>
        🔸 You can choose to offer Vastra & Bhog to Lakshmi Mata and the
        video of the Offerings will be shared with you
      </p>
      <p>🔸 Prasad will be shipped to your home</p>
    </div>
    <div className="p-4 text-center">
      <button
        data-participants="4"
        className="open-modal-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-2 rounded-lg transition"
        onClick={() => openModalWithParticipants(4)}
      >
        PARTICIPATE
      </button>
    </div>
  </div>

  {/* Card 4 */}
  <div className="border-2 border-orange-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
    {/* YAHAN BADLAAV KIYA HAI (p-4 -> pt-4 px-4) */}
    <div className="bg-gradient-to-r from-orange-600 to-red-400 text-white pt-4 px-4 text-left">
      <h3 className="text-lg font-semibold">Joint Family Lakshmi Puja</h3>
      <p className="text-xl font-bold mt-1">₹1551</p>
      <img
        src="/images/six_family.avif"
        alt="Family"
        className="rounded-lg mt-3"
      />
    </div>
    <div className="p-5 space-y-3 text-gray-700 text-sm">
      <p>🔸 Link for Recorded video of Lakshmi Puja</p>
      <p>
        🔸 6 Devotee Name and Gotra will be chanted during the Puja
        Sankalp
      </p>
      <p>
        🔸 You can choose to offer Vastra & Bhog to Lakshmi Mata and the
        video of the Offerings will be shared with you
      </p>
      <p>🔸 Prasad will be shipped to your home</p>
    </div>
    <div className="p-4 text-center">
      <button
        data-participants="6"
        className="open-modal-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-2 rounded-lg transition"
        onClick={() => openModalWithParticipants(6)}
      >
        PARTICIPATE
      </button>
    </div>
  </div>
</div>

        {/* --- Form Modal --- */}
        <div
          id="formModal"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            isModalOpen ? '' : 'hidden'
          } bg-black/20 backdrop-blur-sm`}
          onClick={(e) => {
            if (e.target.id === 'formModal') setIsModalOpen(false);
          }}
        >
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <button
              id="closeModalBtn"
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              onClick={() => setIsModalOpen(false)}
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
                  <span className="px-3 py-2 bg-gray-100 text-gray-600">
                    +91
                  </span>
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
                {/* This div is now dynamically filled by React */}
                <div className="space-y-3" id="participant-inputs-container">
                  {renderParticipantInputs()}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Add Gotra</h3>
                <input
                  type="text"
                  id="gotraInput"
                  placeholder="Enter Gotra"
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 ${
                    isGotraDisabled ? 'bg-gray-100' : ''
                  }`}
                  value={gotra}
                  onChange={(e) => setGotra(e.target.value)}
                  disabled={isGotraDisabled}
                />
                <label className="flex items-center gap-2 mt-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    id="unknownGotra"
                    className="w-4 h-4"
                    onChange={handleGotraCheck}
                  />
                  I don’t know my Gotra
                </label>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Do you want the Prasad to be Delivered?
                </h3>
                <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-600">
                    Note: Prasad will be delivered within 10 days of the
                    puja/offering.
                  </p>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      id="prasadToggle"
                      onChange={handlePrasadToggle}
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 relative transition-all duration-300">
                      <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></span>
                    </div>
                  </label>
                </div>
                <div
                  id="prasadFields"
                  className={`mt-4 space-y-4 ${showPrasad ? '' : 'hidden'}`}
                >
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Select Prasad Type (Only One)
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer hover:bg-orange-50">
                        <input
                          type="radio"
                          name="prasadType"
                          value="rudraksh"
                          className="w-4 h-4 text-orange-500"
                        />
                        <span className="flex-1">Rudraksh – ₹199</span>
                      </label>
                      <label className="flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer hover:bg-orange-50">
                        <input
                          type="radio"
                          name="prasadType"
                          value="bracelet"
                          className="w-4 h-4 text-orange-500"
                        />
                        <span className="flex-1">Bracelet – ₹299</span>
                      </label>
                      <label className="flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer hover:bg-orange-50">
                        <input
                          type="radio"
                          name="prasadType"
                          value="full"
                          className="w-4 h-4 text-orange-500"
                        />
                        <span className="flex-1">
                          Full Packet (Rudraksh + Bracelet) – ₹449
                        </span>
                      </label>
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
              </div>
              <div>
                <button
                  type="button"
                  id="nextBtn"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
                  onClick={handleFormNext}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Info Tabs (About/Benefits/FAQ/Shipping/Reviews) */}
        <section className=" mt-6 max-w-7xl mx-auto px-6 md:px-8 pb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="md:col-span-3 glass soft-border rounded-2xl p-6 glass rounded-2xl p-6"
              data-aos="fade-left"
            >
              <h3 className="text-3xl font-extrabold gold-text text-center mb-3">
                About the Puja
              </h3>
              <h5 className="text-lg font-semibold">Adi Lakshmi Puja </h5>
              <p className="text-sm leading-7">
                Adi Lakshmi, also known as the Primordial Lakshmi, is a form of
                Goddess Lakshmi, the Hindu deity of wealth, prosperity, and
                well-being. Adi Lakshmi represents the primal energy of creation
                and abundance, emphasizing spiritual and material prosperity.
                Performing the Adi Lakshmi Puja invokes her blessings for
                wealth, peace, happiness, and spiritual growth. It is
                particularly significant during festivals like Diwali or
                Varalakshmi Vratham, as well as on auspicious days such as
                Fridays and Purnima (full moon days).
              </p>
              <h5 className="text-lg font-semibold">
                Significance of Adi Lakshmi Puja
              </h5>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Symbol of Abundance: Adi Lakshmi signifies unlimited wealth
                  and prosperity, ensuring a life free from financial and
                  emotional stress.
                </li>
                <li>
                  Spiritual Prosperity: Alongside material wealth, Adi Lakshmi
                  bestows spiritual richness, inner peace, and enlightenment.
                </li>
                <li>
                  Energy of Creation: She is associated with sustaining life and
                  balance, ensuring well-being for families and communities.
                </li>
                <li>
                  Divine Feminine Power: Worshipping Adi Lakshmi honors the
                  nurturing and protective aspects of the Goddess.
                </li>

                <h5 className="text-lg font-semibold">
                  Importance of Adi Lakshmi Puja
                </h5>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    Brings Financial Stability: The puja helps overcome
                    financial struggles and instills confidence in managing
                    resources.
                  </li>
                  <li>
                    Improves Relationships: Strengthens bonds within families
                    and promotes harmony at home.
                  </li>
                  <li>
                    Dispels Negativity: The puja removes obstacles and negative
                    energies that hinder personal or professional growth.
                  </li>
                  <li>
                    Attracts Good Fortune: It is believed to open pathways for
                    opportunities and success.
                  </li>
                  <li>
                    Supports Spiritual Aspirations: Facilitates self-awareness
                    and spiritual elevation.
                  </li>

                  <h5 className="text-lg font-semibold">
                    How to Perform Adi Lakshmi Puja
                  </h5>
                  <h6 className="text-sm font-semibold">Preparations:</h6>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      Clean the puja area and purify it with water and incense.
                    </li>
                    <li>
                      Place a picture or idol of Adi Lakshmi on a decorated
                      altar.
                    </li>
                    <li>
                      Arrange offerings such as flowers, fruits, sweets, and
                      coins.
                    </li>
                  </ul>
                </ul>
              </ul>
              <blockquote className="mt-4 border-l-4 border-yellow-500 pl-4 italic text-red-600 font-semibold">
                {' '}
                <h5 className="text-lg font-semibold text-black ">Rituals:</h5>{' '}
                <p className="text-black">chant this Mantra</p> ॥ ओं श्रीं ह्रीं
                क्लीं आदि लक्ष्म्यै नमः ॥
              </blockquote>
            </div>
          </div>

         <div className="grid md:grid-cols-3 mt-4 gap-6">
  <div
    className="md:col-span-3 glass soft-border rounded-2xl p-6"
    data-aos="fade-left"
  >
    <h3 className="text-3xl font-extrabold gold-text text-center mb-6">
      Benefits of this Puja
    </h3>

    {/* Naya Horizontal Scroll Design Yahan Se */}
    <div className="flex gap-4 overflow-x-auto pb-4">
      {/* Card 1 */}
      <div className="min-w-[280px] bg-white/70 p-5 rounded-xl shadow border border-yellow-200">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white mb-3">
          {/* Icon (Example: Money) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 18c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2-1.343-2-3-2"></path></svg>
        </div>
        <h4 className="font-bold text-orange-600 mb-1">Material Prosperity</h4>
        <p className="text-sm text-gray-700">
          Ensures wealth, abundance, and financial security.
        </p>
      </div>
      
      {/* Card 2 */}
      <div className="min-w-[280px] bg-white/70 p-5 rounded-xl shadow border border-yellow-200">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white mb-3">
          {/* Icon (Example: Heart) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <h4 className="font-bold text-orange-600 mb-1">Emotional Well-being</h4>
        <p className="text-sm text-gray-700">
          Promotes happiness and mental peace.
        </p>
      </div>

      {/* Card 3 */}
      <div className="min-w-[280px] bg-white/70 p-5 rounded-xl shadow border border-yellow-200">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white mb-3">
          {/* Icon (Example: Health) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c-3.6 0-6.6-2.9-6.6-6.4C5.4 11.1 12 4.5 12 4.5s6.6 6.6 6.6 10.1c0 3.5-3 6.4-6.6 6.4z"></path></svg>
        </div>
        <h4 className="font-bold text-orange-600 mb-1">Health and Longevity</h4>
        <p className="text-sm text-gray-700">
          Protects against illness and ensures vitality.
        </p>
      </div>

      {/* Card 4 */}
      <div className="min-w-[280px] bg-white/70 p-5 rounded-xl shadow border border-yellow-200">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white mb-3">
          {/* Icon (Example: Success) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h4 className="font-bold text-orange-600 mb-1">Success in Endeavors</h4>
        <p className="text-sm text-gray-700">
          Helps overcome challenges in career, business, and education.
        </p>
      </div>

      {/* Card 5 */}
      <div className="min-w-[280px] bg-white/70 p-5 rounded-xl shadow border border-yellow-200">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white mb-3">
          {/* Icon (Example: Spiritual) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343m11.314 11.314A8 8 0 016.343 7.343"></path></svg>
        </div>
        <h4 className="font-bold text-orange-600 mb-1">Spiritual Growth</h4>
        <p className="text-sm text-gray-700">
          Enhances devotion, focus, and connection with divine energies.
        </p>
      </div>
    </div>
    {/* Naya Design Yahan Tak */}

  </div>
</div>

          <div className="grid md:grid-cols-3 mt-4 gap-6">
            <div
              className="md:col-span-3 glass soft-border rounded-2xl p-6 glass rounded-2xl p-6"
              data-aos="fade-left"
            >
              <h3 className="text-3xl font-extrabold text-center gold-text mb-3">
                Puja Process
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li className="font-medium mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="font-medium mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum!
                </li>
                <li className="font-medium mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li className="font-medium mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li className="font-medium mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing..
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 mt-4 gap-6">
            <div
              className="md:col-span-3 glass soft-border rounded-2xl p-6 glass rounded-2xl p-6"
              data-aos="fade-left"
            >
              <h3 className="text-3xl font-extrabold text-center gold-text mb-3">
                FAQ
              </h3>
              <details className="border rounded-lg mb-2 p-3 bg-white/70">
                <summary className="cursor-pointer font-semibold">
                  Who should perform Adi Lakshmi Puja?
                </summary>
                <p className="mt-2 text-sm">
                  Anyone seeking prosperity, peace, and spiritual growth can
                  perform this puja, irrespective of gender or age.
                </p>
              </details>
              <details className="border rounded-lg mb-2 p-3 bg-white/70">
                <summary className="cursor-pointer font-semibold">
                  When should Adi Lakshmi Puja be performed?
                </summary>
                <p className="mt-2 text-sm">
                  Fridays, full moon days, and the months of Sharad and Kartika
                  are especially auspicious.
                </p>
              </details>
              <details className="border rounded-lg mb-2 p-3 bg-white/70">
                <summary className="cursor-pointer font-semibold">
                  What offerings are ideal for Adi Lakshmi?
                </summary>
                <p className="mt-2 text-sm">
                  Lotus flowers, cow ghee lamps, sweets, and gold or silver
                  coins are considered auspicious.{' '}
                </p>
              </details>
              <details className="border rounded-lg mb-2 p-3 bg-white/70">
                <summary className="cursor-pointer font-semibold">
                  What mantras are powerful for Adi Lakshmi?
                </summary>
                <p className="mt-2 text-sm font-semibold text-red-500">
                  ॥ ओं श्रीं ह्रीं क्लीं आदि लक्ष्म्यै नमः ॥
                </p>
              </details>
              <details className="border rounded-lg mb-2 p-3 bg-white/70">
                <summary className="cursor-pointer font-semibold">
                  {' '}
                  Can the puja be done at home?{' '}
                </summary>
                <p className="mt-2 text-sm">
                  Yes, Adi Lakshmi Puja can be performed at home with devotion
                  and proper rituals.
                </p>
              </details>
            </div>
          </div>

          <div className="grid md:grid-cols-3 mt-4 gap-6">
            <div
              className="md:col-span-3 glass soft-border rounded-2xl p-6 glass rounded-2xl p-6"
              data-aos="fade-left"
            >
              <h3 className="text-3xl font-extrabold text-center gold-text mb-3">
                Reviews
              </h3>
              <div className="bg-white rounded-xl border p-4 mb-3">
                <p className="font-semibold">Arpit Pandey – ⭐⭐⭐⭐⭐</p>
                <p className="text-sm">
                  Very powerful experience. Felt protected and calm.
                </p>
              </div>
              <div className="bg-white rounded-xl border p-4">
                <p className="font-semibold">Harsh Singh – ⭐⭐⭐⭐⭐</p>
                <p className="text-sm">
                  Quick arrangement and great guidance by priest.
                </p>
              </div>

              <div className="bg-white mt-2 rounded-xl border p-4">
                <p className="font-semibold">Diksha – ⭐⭐⭐</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <div className="bg-white mt-2 rounded-xl border p-4">
                <p className="font-semibold"> vartika – ⭐⭐⭐⭐</p>
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Share Popup */}
        <div
          id="sharePopup"
          className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${
            isShareOpen ? '' : 'hidden'
          }`}
          onClick={(e) => {
            if (e.target.id === 'sharePopup') setIsShareOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 border-t-4 border-yellow-500 animate-[fadeSlide_.4s_ease]">
            <h2 className="text-xl font-bold text-yellow-700 mb-3">
              Share this Puja{' '}
            </h2>
            <div className="flex items-center mb-4">
              <input
                id="pageLink"
                type="text"
                ref={pageLinkRef}
                defaultValue="http://127.0.0.1:5500/index.html" 
                readOnly
                className="flex-1 border rounded-l-lg px-3 py-2 text-sm"
              />
              <button
                onClick={handleCopyLink}
                className="bg-yellow-600 text-white px-4 py-2 rounded-r-lg"
              >
                Copy
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?text=http://127.0.0.1:5500/index.html"
                className="border border-green-500 text-green-600 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
              >
                WhatsApp
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sharer/sharer.php?u=http://127.0.0.1:5500/index.html"
                className="border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Facebook
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
                className="border border-pink-500 text-pink-600 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition"
              >
                Instagram
              </a>
            </div>
            <button
              id="closePopup"
              className="mt-5 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2.5 rounded-lg font-semibold"
              onClick={() => setIsShareOpen(false)}
            >
              Close
            </button>
          </div>
        </div>

        {/* Toast */}
        {toastMessage && (
          <div
            id="toast"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-xl"
          >
            {toastMessage}
          </div>
        )}

        {/* Related Carousel Section */}
        <section className="max-w-7xl mx-auto px-6 mt-12 relative">
          <h2
            className="text-3xl font-bold mb-4 text-3xl font-extrabold gold-text mb-6"
            data-aos="fade-right"
          >
            You May Also Like
          </h2>

          <button
            id="prevBtn"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-white px-3 py-2 rounded-full shadow hover:bg-yellow-600 z-10"
            onClick={() => handleCarouselNav('prev')}
          >
            ◀
          </button>

          <div
            id="carousel"
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth flex space-x-6 overflow-x-auto scroll-smooth pb-4"
            data-aos="fade-up"
          >
            {/* All carousel items go here */}
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/main iamge.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Bagalmukhi Puja</p>
              <p className="text-red-600 font-semibold">₹1150</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/m2.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Sawan Special Vedic Yagya 2025 – In Kashi
              </p>
              <p className="text-red-600 font-semibold">
                {' '}
                📆 Saturday, 9 August 2025,
              </p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y3.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                {' '}
                Adi Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y4.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Dhana Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y5.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Dhanya Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            {/* ... Other carousel items ... */}
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y6.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Gaja Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y7.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Santana Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y8.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Dhairya Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y9.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Vijaya Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y10.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">
                Vidya Lakshmi Puja (Ashta-Lakshmi)
              </p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y11.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Surya Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y12.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Chandra Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y13.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Mangal Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y14.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Budh Puja (Mercury Puja)</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y15.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Guru Puja (Jupiter Puja)</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y16.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Shukra Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y17.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Shani Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y18.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Rahu Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y19.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Ketu Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y20.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Navagraha Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y21.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Vishnu Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
            <div className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
              <img
                src="images/y22.jpg"
                className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt="Related"
              />
              <p className="mt-2 font-bold">Surya Puja</p>
              <p className="text-red-600 font-semibold">₹5100.00</p>
              <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">
                Book Now
              </button>
            </div>
          </div>

         
          <button
            id="nextBtn" 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-white px-3 py-2 rounded-full shadow hover:bg-yellow-600 z-10"
            onClick={() => handleCarouselNav('next')}
          >
            ▶
          </button>
        </section>
      </div>
    </>
  );
};


export default Upcoming;