import React, {useEffect, useState} from "react";
import {fetchPicture} from "api";
import {useParams, useLocation} from "react-router-dom";
import ShowPictureModal from "components/ShowPictureModal";
import "./showPicturePage.css";

const ShowPicturePage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";

        if (!state || !state.cachedPicture) {
            fetchPicture(id).then(result => setPicture(result)).catch(error => console.log(error));
        } else {
            setPicture(state.cachedPicture);
        }

        return () => document.getElementsByTagName('body')[0].style.overflowY = "scroll";
    }, []);

    return <ShowPictureModal picture={picture}/>
}

export default ShowPicturePage;