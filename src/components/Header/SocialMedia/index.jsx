import React from "react";
import TwitterIcon from "assets/twitter-svgrepo-com.svg";
import GithubIcon from "assets/github-svgrepo-com.svg";
import ApiIcon from "assets/api-svgrepo-com.svg";
import "./socialMedia.css";

const SocialMedia = () => {

    const socialMediaItems = [
        {title: "Twitter", img: TwitterIcon, w: "30px", link: "https://twitter.com/hephaestus_gall"},
        {title: "Github", img: GithubIcon, w: "35px", link: "https://github.com/X-Dark-Coder"},
        {title: "Api", img: ApiIcon, w: "30px", link: "https://onlineartdatabase.pythonanywhere.com/"}
    ];

    const renderSocialMediaItems = () => {
        return socialMediaItems.map(item => {
            return (
                <a href={item.link} className="social-media-list-item">
                    <img src={item.img} alt={item.title} width={item.w}/>
                </a>
            );
        });
    }

    return (<div className="social-media">
        <div className="social-media-github">
            {/*<img src={GithubIcon} alt="github"/>*/}
        </div>
        <div className="social-media-list">
            {renderSocialMediaItems()}
        </div>
    </div>);
}

export default SocialMedia;