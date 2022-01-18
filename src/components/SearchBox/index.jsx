import React from "react";
import SearchInput from "components/SearchBox/components/SearchInput";
import FilterInput from "components/SearchBox/components/FilterInput";
import "./searchBox.css"

const SearchBox = () => {
    return (
        <div className="search-box-container">
            <div className="search-box">
                <SearchInput />
                <FilterInput />
            </div>
        </div>
    );
}

export default SearchBox;