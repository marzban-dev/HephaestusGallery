import React, {useState, useContext, useRef} from "react";
import {TemplateContext} from "context/PicturesContext";
import "./searchInput.css";

const SearchInput = () => {
    const {fetchData, setSearch, filter, search} = useContext(TemplateContext);
    const [timerID, setTimerId] = useState(null);

    const onSearchInputChanged = (e) => {
        setSearch(e.target.value)

        if (timerID) clearTimeout(timerID);

        setTimerId(
            setTimeout(() => fetchData(25, 0, true), 1200)
        );
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