import React, {useContext, useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "components/LoadingSpinner";
import StackGrid, {transitions} from "react-stack-grid";
import PictureCard from "components/PictureCard";
import {useNavigate} from "react-router-dom";
import {TemplateContext} from "context/PicturesContext";

const {scaleDown} = transitions;

const ShowPictures = ({pictures, fetchData}) => {
    const navigate = useNavigate();
    const [columnWidth, setColumnWidth] = useState(300);
    const {count} = useContext(TemplateContext);

    useEffect(() => {
        specifyColumnWidth()
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

    const ShowPicture = (picture) => {
        navigate(`/${picture.id}`, {
            state: {cachedPicture: picture}
        })
    }

    const noMoreResultContainerStyle = {
        textAlign: 'center',
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0 5rem 0"
    };
    const noMoreResultParagraphStyle = {
        border: "1px solid gray",
        padding: "1rem 5rem",
        borderRadius: "20px"
    };

    return (
        <InfiniteScroll
            dataLength={pictures.length}
            next={fetchData}
            hasMore={pictures.length < count}
            loader={<LoadingSpinner/>}
            scrollThreshold={1}
            endMessage={
                <div style={noMoreResultContainerStyle}>
                    <p style={noMoreResultParagraphStyle}>
                        {pictures.length === 0 ? "Nothing found" : "You have seen it all"}
                    </p>
                </div>
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
                monitorImagesLoaded={true}
            >
                {
                    pictures.map(picture => (
                        <PictureCard
                            key={picture.id}
                            title={picture.title}
                            imageSrc={picture.picture}
                            onClick={() => ShowPicture(picture)}
                        />
                    ))
                }
            </StackGrid>
        </InfiniteScroll>
    );
}

export default ShowPictures;