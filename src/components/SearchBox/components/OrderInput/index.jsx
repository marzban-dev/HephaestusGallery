import React, {useContext, useState} from "react";
import {TemplateContext} from "context/PicturesContext";
import "./orderInput.css";

const SortInput = () => {
    const {order, setOrder, fetchData, orderType, setOrderType} = useContext(TemplateContext);
    const [timerID, setTimerId] = useState(null);

    const onOrderChanged = (orderName = null, orderTypeName = null) => {

        if (orderName) setOrder(orderName)
        if (orderTypeName) setOrderType(orderTypeName)

        if (timerID) clearTimeout(timerID);

        setTimerId(
            setTimeout(() => fetchData(25, 0, true), 1200)
        );
    }

    const renderSortOptions = () => {
        return ["Artist", "Type", "Title", "Location", "Year"].map((orderName, index) => (
            <li
                key={index}
                onClick={() => onOrderChanged(orderName)}
                className={[
                    orderName === order ? "order-box-menu-item-active" : null
                ].join(" ")}
            >
                {orderName}
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
                            if (order !== "?") onOrderChanged(null, "Asc");
                        }}
                        className={orderType === "Asc" ? "order-box-head-asc-or-desc-item-active" : null}
                    >
                        Asc
                    </span>
                    <span
                        onClick={() => {
                            if (order !== "?") onOrderChanged(null, "Desc");
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