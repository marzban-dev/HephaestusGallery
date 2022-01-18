import React, {useContext, useEffect} from "react";
import {fetchPictures} from "api";
import {Outlet} from "react-router-dom";
import ShowPictures from "components/ShowPictures";
import SearchBox from "components/SearchBox";
import {TemplateContext} from "context/PicturesContext";

const HomePage = () => {
    const {pictures, setPictures, filter, search} = useContext(TemplateContext);

    useEffect(() => {
        fetchPictures(25, pictures.length).then(({result, count}) => {
            let copyOfPictures = [...pictures];
            copyOfPictures = [...copyOfPictures, ...result];
            setPictures(copyOfPictures);
        }).catch(error => console.log(error));
    }, []);

    const fetchData = () => {
        fetchPictures(15, pictures.length, {filter, search}).then(({result, count}) => {
            let copyOfPictures = [...pictures];
            copyOfPictures = [...copyOfPictures, ...result];
            setPictures(copyOfPictures);
        }
    ).catch(error => console.log(error))}

    return (
        <React.Fragment>
            <SearchBox/>
            <ShowPictures pictures={pictures} fetchData={fetchData}/>
            <Outlet/>
        </React.Fragment>
    );
}

export default HomePage;