import React from 'react';
import styles from '@/styles/Home.module.css';

const InteractiveMap = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Where can I play?</h1>
      <div className={styles.content}>
        <div className={styles.stateList}>
          <h2>BetBrokers States</h2>
          <p>BetBrokers is proud to announce we are pursuing licensing in the following states. Ensure to sign up for our mewsletter to not miss a beat! <a href="#">View Details</a></p>
          <ul>
            <li>Arizona</li>
            <li>Colorado</li>
            <li>Connecticut</li>
            <li>Washington D.C.</li>
            <li>Illinois</li>
            <li>Indiana</li>
            <li>Iowa</li>
            <li>Kansas</li>
            <li>Kentucky</li>
            <li>Louisiana</li>
            <li>Maryland</li>
            <li>Massachusetts</li>
            <li>Michigan</li>
            <li>New Jersey</li>
            <li>New York</li>
            <li>North Carolina</li>
            <li>Ohio</li>
            <li>Pennsylvania</li>
            <li>Tennessee</li>
            <li>Virginia</li>
            <li>Vermont</li>
            <li>West Virginia</li>
            <li>Wyoming</li>
            <li>Mohegan Reservation (Connecticut)</li>
          </ul>
        </div>
        <div className={styles.map}>
          {/* Replace this with your actual map component */}
          <img src="images/WhereCanIPlay.png" alt="Map" className={styles.mapImage} />
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
