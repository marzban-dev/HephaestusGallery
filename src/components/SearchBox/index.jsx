import React, {useState} from "react";
import SearchInput from "components/SearchBox/components/SearchInput";
import OptionsBox from "components/SearchBox/components/OptionsBox";
import ArrowIcon from "assets/back-svgrepo-com.svg";
import "./searchBox.css"

const SearchBox = () => {
    const [isOptionBoxOpen, setIsOptionBoxOpen] = useState(false);

    return (
        <div className="search-box-container">
            <div className="search-box">
                <OptionsBox isOpen={isOptionBoxOpen}/>
                <SearchInput/>
                <button
                    className="options-box-toggle-button"
                    style={{
                        transform : isOptionBoxOpen ? "rotateZ(90deg)" : "rotate(0)"
                    }}
                    onClick={() => setIsOptionBoxOpen(!isOptionBoxOpen)}
                >
                    <img src={ArrowIcon} alt="arrow"/>
                </button>
            </div>
        </div>
    );
}

export default SearchBox;