import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 relative  overflow-hidden ">
      {/* Yellow Coupon Section */}
      <div
        className="relative z-10 bg-[#f4b61e] rounded-2xl shadow-lg w-[90%] sm:w-[80%] md:w-[65%] max-w-5xl mx-auto py-6 px-2 sm:py-10 sm:px-6 md:py-12 md:px-8 text-center text-white -mb-20"
        data-aos="zoom-in-up"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          UNLOCK 20% OFF YOUR FIRST ORDER
        </h2>
        <p className="mt-2 text-base sm:text-lg">
          Reveal coupon code by entering your email
        </p>

        <div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 sm:px-8 py-2 h-10 w-full sm:w-[300px] rounded-md border border-white/70 bg-transparent placeholder-white/70 text-white focus:outline-none"
          />
          <button className="px-6 sm:px-8 py-2 h-10 bg-green-500 hover:bg-green-600 rounded-md font-semibold w-full sm:w-auto">
            Reveal coupon
          </button>
        </div>
      </div>

      {/* Dark Footer */}
      <div className="bg-[#081124] text-white pt-28 pb-12 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* COL-1 */}
          <div data-aos="fade-right" data-aos-delay="200">
            <img src="/images/footer-logo.png" className="h-12" alt="Logo" />
            <p className="mt-6 text-sm leading-relaxed text-gray-300">
              Veda Structure is your one-stop destination for all spiritual needs, 
              offering authentic rituals, astrology services, and sacred items to enhance your spiritual journey.
            </p>
          </div>

          {/* COL-2 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className=" text-3xl font-bold mb-4 cursor-pointer hover:text-yellow-300 ">QUICK LINK</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-300">
                 <Link to="/Puja"> Book Puja</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Blog | Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Veda Store 
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                 <Link to="/Ganesh"> Ganesh</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                <Link to="/#">About Us</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                   <Link to="/Contact">Contact Us</Link>
                </a>
              </li>
            </ul>
          </div>

          {/* COL-3 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className=" text-3xl font-bold mb-4 cursor-pointer hover:text-yellow-300 ">IMPORTANT LINK</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  <Link to="/Policy"> Privacy and Policy</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                 <Link to="/Terms"> Terms and Conditions</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  <Link to="/Refund"> Refund Policy</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                   <Link to="/AstrologyComp"> Become a Astrologer</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                 <Link to="/AstrologyLogin"> Astrologer Login</Link>
                </a>
              </li>
              
            </ul>
          </div>

          {/* COL-4 */}
         <div data-aos="fade-left" data-aos-delay="500">
  <h3 className="text-3xl font-bold mb-4 cursor-pointer hover:text-yellow-300 flex items-center gap-2">
    <Link to="/Contact" className="flex items-center gap-2">
      CONTACT US
    </Link>
  </h3>

  <ul className="space-y-2 text-sm">
    <li className="flex items-center gap-2 hover:text-yellow-300">
      <MapPin className="w-4 h-4 " />
      Varanasi, Uttar Pradesh 221001
    </li>
    <li className="flex items-center gap-2 hover:text-yellow-300">
      <Phone className="w-4 h-4 " />
      +91-9634876239
    </li>
    <li className="flex items-center gap-2 hover:text-yellow-300">
      <Mail className="w-4 h-4 " />
      care@vedastructure.com
    </li>
  </ul>
</div>
        </div>

        {/* Payment Icons */}
        <div
          className="mt-10 border-t border-white/20 pt-10 flex justify-start gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src="/images/visa.jpg" className="h-7" alt="Visa" />
          <img src="/images/paypal.jpg" className="h-7" alt="Paypal" />
          <img src="/images/card.jpg" className="h-7" alt="Card" />
        </div>
      </div>

     
    {/* Copyright Strip */}
<div 
  className="relative z-20 bg-[#111827] py-4 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-3 overflow-hidden "
 
>
  <div>© 2025 Veda Structure . All rights reserved.</div>
  <div className="flex gap-4">
    <a href="#" className="hover:text-white">Out Of Stock</a>
    <a href="#" className="hover:text-white">Privacy Policy</a>
    <a href="#" className="hover:text-white"><Link to="/Terms"> Terms and Conditions</Link></a>
  </div>
</div>


    </footer>
  );
};

export default Footer;