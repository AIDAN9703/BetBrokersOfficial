import React from 'react';
import '@/globals.css'; // Ensure this path is correct

const HomePageSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-16 px-0 items-center justify-center h-screen overflow-hidden">
      {/* Background Stars */}
      <div className="absolute top-0 left-0 w-full h-full stars"></div>
      
      {/* Animated Rocket Ship */}
      <div className="rocket-path">
        <img src="/images/rocketship.png" alt="Rocket Ship" className="rocket-ship" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center lg:pt-40 md:pt-30 sm:pt-20">
        <h1 className="text-6xl md:text-8xl font-custom-font font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-platinum-100 to-black-2">
          THE FUTURE IS <span className="text-platinum-100">HERE</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-custom-font text-platinum-100">
          Sign up now for exclusive access to our brand new
          <br />
          <span className="text-platinum-100 font-bold">COMPOUND BETTING™</span> technology.
        </p>
        <button className="mt-12 px-8 py-4 border-2 border-platinum-100 rounded-full font-bold text-platinum-100 hover:bg-custom-purple hover:text-black transition duration-300">
          SIGN ME UP!
        </button>
      </div>
    </section>
  );
};

export default HomePageSection; 