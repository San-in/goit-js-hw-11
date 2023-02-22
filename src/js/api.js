import axios from "axios";

export default async function fetchImages (url,objectOfParams) {
    try {
        const searchedImages = await axios.get(`${url}`,{params: objectOfParams});
        return searchedImages.data;
    } catch(error) {
        Notify.failure(error);
    }
}