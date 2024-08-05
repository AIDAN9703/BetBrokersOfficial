"use client"

import React, { useState } from 'react';
import '@/globals.css'


const BetForm: React.FC = () => {
  const [trueOverUnder, setTrueOverUnder] = useState<number | undefined>(0);
  const [userOverUnder, setUserOverUnder] = useState<number | undefined>(0);
  const [initialBet, setInitialBet] = useState<number | undefined>(0);
  const [payoutChart, setPayoutChart] = useState<any>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ true_over_under: trueOverUnder, user_over_under: userOverUnder, initial_bet: initialBet }),
    });

    if (response.ok) {
      const data = await response.json();
      setPayoutChart(data.payout_chart);
    } else {
      console.error('Error calculating payout chart');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-2 '>
        <label className='pr-3'>True Over/Under:</label>
        <input className='text-black outline-double p-1'
          type="number"
          value ={trueOverUnder || ''}
          onChange={(e) => setTrueOverUnder(parseFloat(e.target.value))}
        />
      </div>
      <div className='py-2'>
        <label className='pr-3'>User Desired Over/Under:</label>
        <input className='text-black outline-double p-1'
          type="number"
          value={userOverUnder || ''}
          onChange={(e) => setUserOverUnder(parseFloat(e.target.value))}
        />
      </div>
      <div className='py-2'>
        <label className='pr-3'>Initial Bet:</label>
        <input className='text-black outline-double p-1'
          type="number"
          value={initialBet || ''}
          onChange={(e) => setInitialBet(parseFloat(e.target.value))}
        />
      </div>
      <button type="submit">Calculate Payout</button>
      {payoutChart && (
        <div>
          <h2>Payout Chart</h2>
          <pre>{JSON.stringify(payoutChart, null, 2)}</pre>
        </div>
      )}
    </form>
  );
};

export default BetForm;
