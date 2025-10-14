"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

// Sample Testimonials Data - You can add more
const testimonials = [
  {
    text: "The organization of the puja was excellent. The Pandit ji explained every ritual in detail. I felt a great sense of peace.",
    name: "Rohan Sharma",
    location: "Varanasi",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    text: "The live-streaming feature was wonderful. We were able to join the puja even while living abroad, and it felt as if we were right there.",
    name: "Roshni Patel",
    location: "Kanpur",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    text: "I booked the Kaal Sarp Dosh Nivaran Puja. The experience was very smooth, and I found peace of mind. Thanks to the Devdham app.",
    name: "Arpit Pandey",
    location: "Varansi",
    avatar: "images/arpit.png",
    rating: 5,
  },
  {
    text: "The service was very professional. From booking to the completion of the puja, everything was very well organized. I highly appreciate it.",
    name: "Meera Desai",
    location: "Mumbai",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 4,
  },
  {
    text: "The Rudrabhishek experience at home was divine. I felt a very positive energy. All my family members are very happy.",
    name: "Vikram Rathod",
    location: "Varanasi",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
  },
];

// Helper component for Star Ratings
const StarRating = ({ rating }) => (
  <div className="flex justify-center text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

// Helper component for decorative border in the header
const DecorativeBorder = () => (
    <div className="flex justify-center items-center gap-3 my-4">
        <div className="h-px w-16 bg-gradient-to-l from-amber-400 to-transparent"></div>
        <div className="w-2 h-2 rotate-45 bg-amber-400"></div>
        <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-transparent"></div>
    </div>
);


export default function Reviev() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(nextReview, 6000); // Auto-scroll every 6 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative  py-20 sm:py-28 overflow-hidden">
      {/* Background Spiritual Pattern */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asanoha.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
            Voice of Faith
          </h2>
          <DecorativeBorder />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Sacred journeys and divine experiences, shared by our cherished devotees.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative h-[480px] sm:h-[400px]">
          {testimonials.map((review, index) => {
             let positionClasses = 'opacity-0 scale-75 transform';
             if (index === currentIndex) {
                positionClasses = 'opacity-100 scale-100 transform translate-x-0 z-10';
             } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                positionClasses = 'opacity-30 scale-90 transform -translate-x-1/2 md:-translate-x-3/4 lg:-translate-x-[65%] z-0 hidden md:block';
             } else if (index === (currentIndex + 1) % testimonials.length) {
                positionClasses = 'opacity-30 scale-90 transform translate-x-1/2 md:translate-x-3/4 lg:translate-x-[65%] z-0 hidden md:block';
             }

            return (
              <div
                key={index}
                className={`absolute top-0 left-1/2 w-[90%] sm:w-[70%] md:w-[55%] lg:w-[48%] h-full p-4 transition-all duration-700 ease-cubic-bezier ${positionClasses}`}
                style={{ transform: `translateX(-50%) ${positionClasses.includes('translate-x-') ? '' : ''}` }}
              >
                <div className="relative bg-amber-50/70 backdrop-blur-sm rounded-2xl h-full flex flex-col items-center justify-center p-8 text-center border border-amber-200/50 shadow-lg shadow-amber-800/10 transition-all duration-300 hover:shadow-xl hover:shadow-amber-800/20 hover:scale-[1.02]">
                    <FaQuoteLeft className="absolute top-8 left-8 text-5xl text-amber-200/60 z-0"/>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-4">
                            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-amber-400 to-orange-500 shadow-lg">
                                <img src={review.avatar} alt={review.name} className="w-full h-full rounded-full object-cover border-4 border-amber-50"/>
                            </div>
                        </div>
                        <p className="font-bold text-xl text-gray-800 font-serif">
                            {review.name}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">{review.location}</p>
                        <StarRating rating={review.rating} />
                        <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed">
                            {review.text}
                        </p>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation Arrows */}
        <button onClick={prevReview} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition" aria-label="Previous review">
            <FaChevronLeft className="text-orange-500" />
        </button>
        <button onClick={nextReview} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition" aria-label="Next review">
            <FaChevronRight className="text-orange-500" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-orange-500 scale-125' : 'bg-orange-200 hover:bg-orange-300'}`}
                    aria-label={`Go to review ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
