import React, {useEffect, useState} from "react";
import StackGrid, {transitions} from "react-stack-grid";
import PictureCard from "./components/PictureCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import {fetchPictures} from "./api";
import "./app.css";


const {scaleDown} = transitions;

const App = () => {
    const [pictures, setPictures] = useState([]);
    const [columnWidth, setColumnWidth] = useState(300);

    useEffect(() => {
        specifyColumnWidth()
        fetchPictures(25, pictures.length).then(result => {
            let copyOfPictures = [...pictures];
            copyOfPictures = [...copyOfPictures, ...result];
            setPictures(copyOfPictures);
        }).catch(error => console.log(error));
    }, []);

    window.addEventListener('resize', () => {
        specifyColumnWidth();
    });

    const specifyColumnWidth = () => {
        if (window.innerWidth > 1300) setColumnWidth(300);
        if (window.innerWidth < 1300 && window.innerWidth > 1050) setColumnWidth(230);
        if (window.innerWidth < 1050 && window.innerWidth > 840) setColumnWidth(180);
        if (window.innerWidth < 840 && window.innerWidth > 650) setColumnWidth(140);
        if (window.innerWidth < 650 && window.innerWidth > 550) setColumnWidth(250);
        if (window.innerWidth < 550 && window.innerWidth > 440) setColumnWidth(200);
        if (window.innerWidth < 440 && window.innerWidth > 360) setColumnWidth(160);
        if (window.innerWidth < 360 && window.innerWidth > 260) setColumnWidth(120);
    }

    const fetchData = () => {
        fetchPictures(15, pictures.length).then(result => {
            let copyOfPictures = [...pictures];
            copyOfPictures = [...copyOfPictures, ...result];
            setPictures(copyOfPictures);
        }).catch(error => console.log(error));
    }

    return (
        <div>
            <Header/>
            <InfiniteScroll
                dataLength={pictures.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<LoadingSpinner/>}
                scrollThreshold={1}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className="infinite-scroll-container"
            >
                <StackGrid
                    columnWidth={columnWidth}
                    appear={scaleDown.appear}
                    appeared={scaleDown.appeared}
                    enter={scaleDown.enter}
                    entered={scaleDown.entered}
                    leaved={scaleDown.leaved}
                    itemComponent="span"
                    gutterWidth={18}
                    gutterHeight={18}
                >
                    {
                        pictures.map(picture => (
                            <PictureCard key={picture.id} title={picture.title} imageSrc={picture.picture}/>
                        ))
                    }
                </StackGrid>
            </InfiniteScroll>
        </div>
    );
}

export default App;
