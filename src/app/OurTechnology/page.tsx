import React from 'react';
import BetForm from '@/components/BetForm';

const OurTechnology = () => {
  return (
    <div className="bg-white text-red-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="font-bold text-center text-4xl text-red-600 mb-8">Our Technology</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Revolutionizing Online Betting</h2>
          <p className="text-lg leading-relaxed">
            Its no question we are in a new age of technology. Artificial Intelligence is taking the world by a storm and has been implemented in almost every industry. Our goal is to be the first to bring it to the mainstream sports betting world. By doing this we can pioneer an entire new sector in the industry, raising the stakes even more higher and allowing users to take on far more risk, or far less risk then the average sportsbook offers.
          </p>
          <div className="flex justify-center mt-8">
            <img src="/images/technology.png" alt="Technology Illustration" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-lg leading-relaxed">
            Our platform utilizes a unique compounding rate formula to calculate payouts. Simply enter the true over/under, your desired over/under, and your initial bet. Our system will instantly compute the potential payouts, offering you a clear and transparent betting experience.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Real-time odds calculation</li>
            <li>Secure and transparent transactions</li>
            <li>Responsive and intuitive user interface</li>
            <li>Advanced analytics and insights</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Try It Out</h2>
          <p className="text-lg leading-relaxed mb-6">
            Use the form below to experiment with our betting technology. Enter your desired parameters, and see the potential payouts instantly!
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BetForm />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed">
            Our platform stands out with its user-centric design and commitment to providing a fair and transparent betting experience. We continuously innovate and improve our technology to ensure our users have access to the best tools and insights. Join us and experience the future of online betting!
          </p>
        </section>
      </div>
    </div>
  );
};

export default OurTechnology;
