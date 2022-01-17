import React from "react";

const PictureCard = ({imageSrc, title}) => {
    return <img src={imageSrc} alt={title} style={{
        width: "100%",
        height: "auto",
        borderRadius:"10px"
    }}/>
}

export default PictureCard;