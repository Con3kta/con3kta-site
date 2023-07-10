import React from "react";
import Header from "./Header";
import './styles.css';
import CardUser from "../../components/CardUser";

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <CardUser />
        </div>
    )
}

export default Home