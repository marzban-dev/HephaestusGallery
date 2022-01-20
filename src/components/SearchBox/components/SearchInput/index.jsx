import React, {useState, useContext, useRef} from "react";
import {TemplateContext} from "context/PicturesContext";
import {fetchPictures} from "api";
import "./searchInput.css";

const SearchInput = () => {
    const {setPictures, filter, search, setSearch, setCount} = useContext(TemplateContext);
    const [timerID, setTimerId] = useState(null);
    const searchText = useRef(search);

    const fetchData = () => {
        if (search.length !== 0) {
            fetchPictures(25, 0, {filter, search:searchText.current}).then(({result, count}) => {
                setPictures(result);
                setCount(count);
            }).catch(error => console.log(error));
        }else{
            fetchPictures(25, 0).then(({result, count}) => {
                setPictures(result);
                setCount(count)
            }).catch(error => console.log(error));
        }
    }

    const onSearchInputChanged = (e) => {
        setSearch(e.target.value)
        searchText.current = e.target.value;

        if (timerID) clearTimeout(timerID);

        setTimerId(setTimeout(() => {
            fetchData();
        }, 1200));
    }

    return (
        <div className="search-input">
            <input
                type="text"
                placeholder={filter === "Year" ? "e.g : 1990-98" : "Write your mind here"}
                value={search}
                onChange={onSearchInputChanged}
            />
        </div>
    );
}

export default SearchInput;