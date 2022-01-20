import React, {useEffect, useState} from "react";
import "./showDetails.css";

const ShowDetails = ({picture}) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        setDetails({
            year: picture.year,
            location: picture.location,
            type: picture.type,
            artist: picture.artist
        })
    }, []);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="modal-picture-details">
            {details ? Object.keys(details).map((detail, index) => (
                <div className="modal-picture-details-item" key={index}>
                    <div className="modal-picture-details-item-title">
                        <span>{capitalizeFirstLetter(detail)}</span>
                    </div>
                    {details[detail]}
                </div>
            )) : null}
        </div>
    );
}

export default ShowDetails;