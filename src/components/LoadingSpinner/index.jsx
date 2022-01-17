import React from "react";
import loadingSpinnerImg from "../../assets/Rolling-1s-200px.svg";

const LoadingSpinner = () => {

    const loadingContainerStyle = {
        width: "100%",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const loadingSpinnerStyle = {
        width: "80px",
        height: "80px"
    }

    return <div style={loadingContainerStyle}>
        <img style={loadingSpinnerStyle} src={loadingSpinnerImg} alt="loading-spinner"/>
    </div>
}

export default LoadingSpinner;