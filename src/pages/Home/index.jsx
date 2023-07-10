import React from "react";
import Header from "./Header";
import styles from './Home.module.css';
import CardUser from "../../components/CardUser";

function Home() {
    return (
        <div className={styles.home_container}>
            <Header />
            <CardUser />
        </div>
    )
}

export default Home