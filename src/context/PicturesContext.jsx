import React, {createContext, useState} from "react";

export const TemplateContext = createContext({});

const PicturesContext = ({children}) => {

    const [pictures, setPictures] = useState([]);
    const [filter, setFilter] = useState("Title");
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState("?");
    const [orderType, setOrderType] = useState("Asc");

    const value = {
        pictures,
        setPictures,
        filter,
        setFilter,
        search,
        setSearch,
        count,
        setCount,
        order,
        setOrder,
        orderType,
        setOrderType
    };

    return (
        <TemplateContext.Provider value={value}>
            {children}
        </TemplateContext.Provider>
    );
};

export default PicturesContext;