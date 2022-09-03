import React from "react";
import TwitterIcon from "assets/twitter-svgrepo-com.svg";
import ApiIcon from "assets/api-svgrepo-com.svg";
import "./socialMedia.css";

const SocialMedia = () => {
  const socialMediaItems = [
    {
      title: "Twitter",
      img: TwitterIcon,
      w: "30px",
      link: "https://twitter.com/hephaestus_gall",
    },
    {
      title: "Api",
      img: ApiIcon,
      w: "30px",
      link: "https://onlineartdatabase.pythonanywhere.com/",
    },
  ];

  const renderSocialMediaItems = () => {
    return socialMediaItems.map((item) => {
      return (
        <a href={item.link} className="social-media-list-item">
          <img src={item.img} alt={item.title} width={item.w} />
        </a>
      );
    });
  };

  return (
    <div className="social-media">
      <div className="social-media-github">
        <a href="https://github.com/marzban.dev" className="social-media-github-item" title="Mansour">
          <img src="https://avatars.githubusercontent.com/u/84951627?v=4" alt="X-Dark-Coder Github" />
        </a>
        <a href="https://github.com/nimiology" className="social-media-github-item" title="Nima">
          <img src="https://avatars.githubusercontent.com/u/73313947?v=4" alt="nimiology Github" />
        </a>
      </div>
      <div className="social-media-list">{renderSocialMediaItems()}</div>
    </div>
  );
};

export default SocialMedia;
