import React, {useState, useContext} from "react";
import "./filterInput.css"
import {TemplateContext} from "context/PicturesContext";

const FilterInput = () => {
    const {filter, setFilter, setSearch} = useContext(TemplateContext);

    const renderFilters = () => {
        return ["Title", "Year", "Type", "Artist", "Location"].map((filterName, index) => (
            <li
                key={index}
                onClick={() => {
                    setFilter(filterName);
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
        <div className="filter-box">
            <h3 className="filter-box-title">Filter By</h3>
            <ul className="filter-box-menu">
                {renderFilters()}
            </ul>
        </div>
    );
}

export default FilterInput;