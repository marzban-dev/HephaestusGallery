import React, {useContext} from "react";
import {TemplateContext} from "context/PicturesContext";
import "./orderInput.css";

const SortInput = () => {

    const {order, setOrder, setSearch, orderType, setOrderType} = useContext(TemplateContext);

    const renderSortOptions = () => {
        return ["Artist", "Type", "Title", "Location", "Year"].map((orderTitle, index) => (
            <li
                key={index}
                onClick={() => {
                    setOrder(orderTitle);
                    setSearch("");
                }}
                className={[
                    orderTitle === order ? "order-box-menu-item-active" : null
                ].join(" ")}
            >
                {orderTitle}
            </li>
        ))
    }

    return (
        <div className="order-box">
            <div className="order-box-head">
                <h3 className="order-box-head-title">Order By</h3>
                <div className="order-box-head-asc-or-desc">
                    <span
                        onClick={() => {
                            setOrderType("Asc");
                            setSearch("");
                        }}
                        className={orderType === "Asc" ? "order-box-head-asc-or-desc-item-active" : null}
                    >
                        Asc
                    </span>
                    <span
                        onClick={() => {
                            setOrderType("Desc");
                            setSearch("");
                        }}
                        className={orderType === "Desc" ? "order-box-head-asc-or-desc-item-active" : null}
                    >
                        Desc
                    </span>
                </div>
            </div>
            <ul className="order-box-menu">
                {renderSortOptions()}
            </ul>
        </div>
    );
}

export default SortInput;