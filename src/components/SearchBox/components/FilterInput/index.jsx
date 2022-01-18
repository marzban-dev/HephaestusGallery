import React, {useState, useContext} from "react";
import "./filterInput.css"
import {TemplateContext} from "context/PicturesContext";

const FilterInput = () => {
    const {filter, setFilter, setSearch} = useContext(TemplateContext);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    const renderFilters = () => {
        return ["Title", "Year", "Type", "Artist", "Location"].map(filterName => (
            <li
                onClick={() => {
                    setFilter(filterName);
                    setIsFilterMenuOpen(false);
                    setSearch("");
                }}
                className={[
                    filterName === filter ? "filter-box-menu-item-active" : null
                ].join(" ")}
            >
                {filterName}
            </li>
        ))
    }

    return (
        <div
            className={[
                "filter-box",
                isFilterMenuOpen ? "filter-box-active" : null
            ].join(" ")}
            onMouseEnter={() => setIsFilterMenuOpen(true)}
            onMouseLeave={() => setIsFilterMenuOpen(false)}
        >
            <button className="filter-box-button">{filter}</button>
            <ul className="filter-box-menu">
                {renderFilters()}
            </ul>
        </div>
    );
}

export default FilterInput;