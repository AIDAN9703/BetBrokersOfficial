"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "@/styles/SignUp.module.css";

export default function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [fadeIn, setFadeIn] = useState(false); // State for controlling fade-in effect
    const router = useRouter();

    useEffect(() => {
        // Trigger fade-in effect on component mount
        setFadeIn(true);
    }, []);

    const onSignup = async () => {
        try {
            const response = await axios.post('/api/users/signup/', user);
            if (response.status === 201) {
                router.push('/Dashboard');
            }
        } catch (error: any) {
            setError(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <div className={styles.backgroundAnimation}></div>
                    <div className={styles.wordsContainer}>
                        <h2 className={`word ${fadeIn ? 'fadeIn' : ''}`}>Welcome to</h2>
                        <h1 className={`word ${fadeIn ? 'fadeIn' : ''}`}>BetBrokers</h1>
                    </div>
                    <div className={styles.logo}>
                        <img src='./images/BetBrokersLogoBlack.png' />
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.formContainer}>
                        <h1 className={styles.title}>Sign Up</h1>
                        <input
                            id="username"
                            type="text"
                            className={styles.input}
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            placeholder="Your name"
                        />
                        <input
                            id="email"
                            type="email"
                            className={styles.input}
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Email address"
                        />
                        <input
                            id="password"
                            type="password"
                            className={styles.input}
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                        />
                        <div className={styles.terms}>
                            <input type="checkbox" id="terms" className={styles.checkbox} />
                            <label htmlFor="terms">
                                By creating an account, you agree to our <a href="/terms">terms</a> and <a href="/privacy">privacy policy</a>.
                            </label>
                        </div>
                        <button className={styles.SignUpButton} onClick={onSignup}>Create Account</button>
                        {error && <p className={styles.error}>{error}</p>}
                        <div className={styles.additionalSignUp}>
                            <p>or</p>
                            <button className={styles.socialButton}>
                                <img src="./images/SignupWithGoogle.png" alt="Google Icon" />
                            </button>
                            <button className={styles.socialButton}>
                                
                            </button>
                            <p>Already have an account? <a href="/Login">Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
