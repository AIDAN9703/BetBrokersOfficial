import React from 'react';
import '@/globals.css';

const BettingSection: React.FC = () => {
  return (
    <section className="bg-transparent text-platinum-100 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-3/5 lg:pr-8 mb-12 lg:mb-0">
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:justify-start mb-6">
              <div className="mx-8 mb-6 lg:mb-0">
                <h2 className="text-5xl text-platinum-100 font-bold">250+</h2>
                <p className="text-xl font-semibold">Players on Waitlist</p>
              </div>
              <div className="mx-8 mb-6 lg:mb-0">
                <h2 className="text-5xl text-platinum-100 font-bold">13</h2>
                <p className="text-xl font-semibold">Pending States</p>
              </div>
              <div className="mx-8 mb-6 lg:mb-0">
                <h2 className="text-5xl text-platinum-100 font-bold">7</h2>
                <p className="text-xl font-semibold">Sports Supported</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h1 className="text-4xl font-bold -mb-10">Let's Get to Know Each Other!</h1>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl mb-4 font-Bodoni">Jumping in has never been easier</h2>
            <ol className="list-decimal list-inside text-left max-w-md space-y-2 font-Bodoni">
              <li>Create an account online.</li>
              <li>Enroll in our waitlist and receive exclusive rewards upon launch.</li>
              <li>Visit our Technology page for more information on what we're all about!</li>
            </ol>
          </div>
        </div>
        <div className="lg:w-2/5 flex justify-center lg:justify-end">
          <img src="/images/iphone.png" alt="Sportsbook App" className="w-64 lg:w-80" />
        </div>
      </div>
    </section>
  );
};

export default BettingSection;
