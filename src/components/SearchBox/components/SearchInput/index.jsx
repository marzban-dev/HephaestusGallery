import React, {useRef, useState, useContext} from "react";
import {TemplateContext} from "context/PicturesContext";
import "./searchInput.css";
import {fetchPictures} from "api";

const SearchInput = () => {
    const {setPictures, filter, search, setSearch, setCount} = useContext(TemplateContext);
    const [timerID, setTimerId] = useState(null);
    const searchTextRef = useRef(search);

    const fetchData = () => {
        fetchPictures(25, 0, {filter, search}).then(({result, count}) => {
            setPictures(result);
            setCount(count)
        }).catch(error => console.log(error));
    }

    const onSearchInputChanged = (e) => {
        const inputValue = e.target.value;

        setSearch(inputValue)
        searchTextRef.current = inputValue;

        if (inputValue.length !== 0) {
            if (timerID) clearTimeout(timerID);

            setTimerId(setTimeout(() => {
                fetchData();
            }, 1200));
        }
    }

    return (
        <div className="search-input">
            <input type="text" placeholder="Write your mind here" value={search} onChange={onSearchInputChanged}/>
        </div>
    );
}

export default SearchInput;