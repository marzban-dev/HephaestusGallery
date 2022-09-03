import React, { useEffect, useState } from "react";
import "./showDetails.css";

const ShowDetails = ({ picture }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    setDetails({
      year: picture.year,
      location: picture.location,
      type: picture.type,
      artist: picture.artist,
    });
  }, []);

  return (
    <div className="modal-picture-details">
      {details
        ? Object.keys(details).map((detail, index) => (
            <div className="modal-picture-details-item" key={index}>
              <div className="modal-picture-details-item-title">
                <span>{detail.charAt(0).toUpperCase() + detail.slice(1)}</span>
              </div>
              {details[detail]}
            </div>
          ))
        : null}
    </div>
  );
};

export default ShowDetails;
