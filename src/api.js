import axios from "axios";

export const fetchPictures = async (limit, offset, searchObj) => {

    const filterObject = {};

    if (searchObj && searchObj.search.length !== 0) {
        filterObject[`${searchObj.filter.toLowerCase()}__contains`] = searchObj.search;
    }

    try {
        const pictures = await axios.get("https://onlineartdatabase.pythonanywhere.com/", {
            params: {
                format: "json",
                limit,
                offset,
                ...filterObject
            }
        });

        return {result: pictures.data.results, count: pictures.data.count};
    } catch (error) {
        console.log(error);
    }
}

export const fetchPicture = async (id) => {
    try {
        const pictures = await axios.get(`https://onlineartdatabase.pythonanywhere.com/${id}`, {
            params: {
                format: "json",
            }
        });
        return pictures.data;
    } catch (error) {
        console.log(error);
    }
}


