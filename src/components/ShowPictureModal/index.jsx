import React, {useState} from "react";
import Modal from "react-modal";
import {REACT_MODAL_OPTIONS} from "config";
import {useNavigate} from "react-router-dom";
import ShowDetails from "components/ShowPictureModal/components/ShowDetails";
import BackButton from "assets/back-svgrepo-com.svg";
import "./showPictureModal.css";

const ShowPictureModal = ({picture}) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => navigate(-1), REACT_MODAL_OPTIONS.closeTimeoutMS);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => closeModal()}
            {...REACT_MODAL_OPTIONS}
        >
            <button className="modal-picture-back-button" onClick={() => closeModal()}>
                <img src={BackButton} alt="back-button"/>
            </button>
            {picture ? (
                <React.Fragment>
                    <div className="modal-picture-container">
                        <img src={picture.picture} alt={picture.title}/>
                    </div>
                    <div className="modal-picture-title">
                        {picture.title}
                    </div>
                    <ShowDetails picture={picture}/>
                </React.Fragment>
            ) : null}

        </Modal>
    );
}

export default ShowPictureModal;