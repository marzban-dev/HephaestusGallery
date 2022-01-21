import React, {useContext, useState} from "react";
import {TemplateContext} from "context/PicturesContext";
import "./filterInput.css"

const FilterInput = () => {
    const {filter, setFilter, fetchData, search} = useContext(TemplateContext);
    const [timerID, setTimerId] = useState(null);

    const onFilterChanged = (filterName) => {
        setFilter(filterName)

        if (timerID) clearTimeout(timerID);

        if (search.length !== 0) {
            setTimerId(
                setTimeout(() => fetchData(25, 0, true), 1200)
            );
        }
    }


    const renderFilters = () => {
        return ["Title", "Year", "Type", "Artist", "Location"].map((filterName, index) => (
            <li
                key={index}
                onClick={() => onFilterChanged(filterName)}
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