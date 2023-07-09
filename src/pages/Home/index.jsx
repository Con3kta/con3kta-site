import React from "react";
import Header from "./Header";
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.home_container}>
            <Header />
        </div>
    )
}

export default Home