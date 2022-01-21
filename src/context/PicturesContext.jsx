import React, {createContext, useEffect, useRef, useState} from "react";
import {fetchPictures} from "api";

export const TemplateContext = createContext({});

const PicturesContext = ({children}) => {

    const [pictures, setPictures] = useState([]);
    const [filter, setFilter] = useState("Title");
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState("?");
    const [orderType, setOrderType] = useState("Asc");

    const searchRef = useRef(search);
    const filterRef = useRef(filter);
    const orderRef = useRef(order);
    const orderTypeRef = useRef(orderType);

    useEffect(() => {
        searchRef.current = search;
        filterRef.current = filter;
        orderRef.current = order;
        orderTypeRef.current = orderType;
    }, [search, filter, order, orderType])

    const fetchData = async (limit, offset, replace = false) => {
        try {
            // console.log(orderTypeRef.current === "Asc" ? orderRef.current : "-" + orderRef.current);
            const {result, count} = await fetchPictures(
                limit,
                offset,
                search.length !== 0 ? {
                    filter: filterRef.current,
                    search: searchRef.current,
                    order: orderTypeRef.current === "Asc" ? orderRef.current : "-" + orderRef.current
                } : {order: orderTypeRef.current === "Asc" ? orderRef.current : "-" + orderRef.current}
            );

            setCount(count);

            if (replace) {
                setPictures(result);
            } else {
                let copyOfPictures = [...pictures];
                copyOfPictures = [...copyOfPictures, ...result];
                setPictures(copyOfPictures);
            }

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

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
        setOrderType,
        fetchData
    };

    return (
        <TemplateContext.Provider value={value}>
            {children}
        </TemplateContext.Provider>
    );
};

export default PicturesContext;