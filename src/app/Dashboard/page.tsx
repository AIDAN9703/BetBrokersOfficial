"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "@/styles/Dashboard.module.css"
const DashboardPage = () => {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    router.push('/Login');
                    return;
                }
                const response = await axios.get('/api/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
                router.push('/Login');
            }
        };

        fetchUserData();
    }, [router]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.dashboardContainer}>
            <h1>Welcome, {user.username}</h1>
            <p>Email: {user.email}</p>
            {/* Display other user data */}
            <h1> User Metrics</h1>
                <div>Amount Wagered: $0.00</div>
                <div>Amount Won: $0.00</div>
        </div>
    );
};

export default DashboardPage;
