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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni nam, eligendi pariatur aliquid quam dolorum ratione
                    amet minus magnam, veniam laborum, deserunt vero modi!
                </p>
            </div>
        </header>
    )
}

export default Header;