import React from "react";
import "./MinuInfoKomponent.css";

const MinuInfoKomponent = ({ name }) => {
    const hobid = ["Rulaga sõitmine", "Lugemine", "Gaming", "Muusika tegemine", "Geopoliitika"];

    return (
        <div className="container">
            <h1>Hellou, mina olen {name}</h1>

            <h2>Mu hobideks on:</h2>
            <ul>
                {hobid.map((hobi, index) => (
                    <li key={index}>{hobi}</li>
                ))}
            </ul>

            <form className="contact-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Your email" />

                <label htmlFor="message">Sõnum:</label>
                <textarea id="message" placeholder="Your message"></textarea>

                <button type="button">Saada sõnum</button>
            </form>
        </div>
    );
};

export default MinuInfoKomponent;
