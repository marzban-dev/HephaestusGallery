import axios from "axios";

export const fetchPictures = async (limit, offset) => {
    try {
        const pictures = await axios.get("https://onlineartdatabase.pythonanywhere.com/api/", {
            params: {
                format: "json",
                limit,
                offset
            }
        });

        return pictures.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const fetchPicture = async (id) => {
    try {
        const pictures = await axios.get(`https://onlineartdatabase.pythonanywhere.com/api/${id}`, {
            params: {
                format: "json",
            }
        });
        return pictures.data;
    } catch (error) {
        console.log(error);
    }
}


