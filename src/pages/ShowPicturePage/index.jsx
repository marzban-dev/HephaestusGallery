import React, {useEffect, useState} from "react";
import {fetchPicture} from "../../api";
import {REACT_MODAL_OPTIONS} from "../../config";
import {useParams, useLocation, useNavigate} from "react-router-dom";
import Modal from "react-modal";
import "./showPicturePage.css";

const ShowPicturePage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [picture, setPicture] = useState(null);
    const [details, setDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";

        if (!state || !state.cachedPicture) {
            fetchPicture(id).then(result => {
                setDetails({
                    year: result.year,
                    location: result.location,
                    type: result.type,
                    painter: result.painter
                })
                setPicture(result)
            }).catch(error => console.log(error));
        } else {
            setDetails({
                year: state.cachedPicture.year,
                location: state.cachedPicture.location,
                type: state.cachedPicture.type,
                painter: state.cachedPicture.painter
            })
            setPicture(state.cachedPicture);
        }

        return () => document.getElementsByTagName('body')[0].style.overflowY = "scroll";
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => navigate(-1), REACT_MODAL_OPTIONS.closeTimeoutMS);
    };

    const renderDetails = () => {
        return Object.keys(details).map(detail => (
            <div className="modal-picture-details-item">
                <div className="modal-picture-details-item-title">
                    <span>{detail}</span>
                </div>
                {details[detail]}
            </div>
        ));
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => closeModal()}
            {...REACT_MODAL_OPTIONS}
        >
            {picture ? (
                <>
                    <div className="modal-picture-container">
                        <img src={picture.picture} alt={picture.title}/>
                    </div>
                    <div className="modal-picture-title">
                        {picture.title}
                    </div>
                    <div className="modal-picture-details">
                        {renderDetails()}
                    </div>
                </>
            ) : null}

        </Modal>
    )
}

export default ShowPicturePage;