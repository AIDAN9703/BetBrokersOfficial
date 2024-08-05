import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import InteractiveMap from '@/components/InteractiveMap';
import "@/globals.css"
import InteractiveBoxes from '@/components/InteractiveBoxes';
import BettingSection from '@/components/BettingSection';
import HomePageSection from '@/components/HomePageCTA';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
       
       <main className={styles.main}>
        <HomePageSection />
        <BettingSection />
        <InteractiveBoxes />
        <InteractiveMap />
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://betbrokers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by BetBrokers
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
