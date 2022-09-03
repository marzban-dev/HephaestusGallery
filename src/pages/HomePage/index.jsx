import React, {useContext, useEffect} from "react";
import {Outlet} from "react-router-dom";
import ShowPictures from "components/ShowPictures";
import SearchBox from "components/SearchBox";
import {TemplateContext} from "context/PicturesContext";

const HomePage = () => {
    const {pictures, fetchData} = useContext(TemplateContext);

    useEffect(() => {
        fetchData(25, pictures.length);
    }, []);

    const fetchMoreData = () => {
        fetchData(15, pictures.length);
    }

    return (
        <React.Fragment>
            <SearchBox/>
            <ShowPictures pictures={pictures} fetchData={fetchMoreData}/>
            <Outlet/>
        </React.Fragment>
    );
}

export default HomePage;