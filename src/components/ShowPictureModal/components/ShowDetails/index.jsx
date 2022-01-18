import React, {useEffect, useState} from "react";

const ShowDetails = ({picture}) => {
    const [details , setDetails] = useState(null);

    useEffect(() => {
        setDetails({
            year: picture.year,
            location: picture.location,
            type: picture.type,
            painter: picture.painter
        })
    },[]);

    return (
        <div className="modal-picture-details">
            {details ? Object.keys(details).map(detail => (
                <div className="modal-picture-details-item">
                    <div className="modal-picture-details-item-title">
                        <span>{detail}</span>
                    </div>
                    {details[detail]}
                </div>
            )) : null}
        </div>
    );
}

export default ShowDetails;