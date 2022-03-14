import React from "react";
import {CSSTransition} from "react-transition-group";
import FilterInput from "components/SearchBox/components/FilterInput";
import OrderInput from "components/SearchBox/components/OrderInput";
import "./optionsBox.css";

const OptionsBox = ({isOpen}) => {
    return (
        <CSSTransition
            in={isOpen}
            timeout={700}
            classNames="fade"
            unmountOnExit
        >
            <div className="options-box">
                <FilterInput />
                <OrderInput />
            </div>
        </CSSTransition>
    );
}

export default OptionsBox;