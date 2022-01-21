import React from "react";
import SocialMedia from "components/Header/SocialMedia";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <SocialMedia />
            <div className="header-gradient"></div>
            <h1>Hephaestus Gallery</h1>
        </header>
    )
}

export default Header;