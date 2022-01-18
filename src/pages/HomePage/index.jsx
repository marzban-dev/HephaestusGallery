import React, {useEffect, useState} from "react";
import {fetchPictures} from "api";
import {Outlet} from "react-router-dom";
import ShowPictures from "components/ShowPictures";

const HomePage = () => {

    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetchPictures(25, pictures.length).then(result => {
            let copyOfPictures = [...pictures];
            copyOfPictures = [...copyOfPictures, ...result];
            setPictures(copyOfPictures);
        }).catch(error => console.log(error));
    }, []);

    const fetchData = () => {
        fetchPictures(15, pictures.length).then(result => {
            let copyOfPictures = [...pictures];
            copyOfPictures = [...copyOfPictures, ...result];
            setPictures(copyOfPictures);
        }).catch(error => console.log(error));
    }

    return (
        <React.Fragment>
            <ShowPictures pictures={pictures} fetchData={fetchData}/>
            <Outlet/>
        </React.Fragment>
    );
}

export default HomePage;