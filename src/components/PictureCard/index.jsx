import React from "react";

const PictureCard = ({imageSrc, title,onClick}) => {

    const pictureCardImgStyle = {
        width: "100%",
        borderRadius: "10px",
        transform: "scale(1)",
        transition: "transform 0.1s",
        cursor: "pointer",
        userSelect: "none"
    };

    const onMouseDown = (e) => e.target.style.transform = "scale(0.97)";
    const onMouseUp = (e) => e.target.style.transform = "scale(1)";
    const onMouseEnter = (e) => e.target.style.transform = "scale(1.04)";
    const onMouseLeave = (e) => e.target.style.transform = "scale(1)";

    return <img
        src={imageSrc}
        alt={title}
        style={pictureCardImgStyle}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
    />
}

export default PictureCard;