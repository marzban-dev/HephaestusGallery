import React from "react";
import SocialMedia from "components/Header/SocialMedia";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <SocialMedia />
            <div className="header-gradient"></div>
            <h1 className="header-title">Hephaestus Gallery</h1>
            <div className="header-about">
                <p>
                    The Hephaestus Gallery is a virtual museum and searchable database of European fine arts,
                    decorative arts, and architecture (3rd-19th centuries), currently containing over 52.800 reproductions.
                    Thanks to <a href="https://www.wga.hu/">"Web Gallery of Art"</a> we used their database and created a whole new website.
                </p>
            </div>
        </header>
    )
}

export default Header;
