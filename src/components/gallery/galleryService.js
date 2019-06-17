import axios from "axios";

export default class GalleryService {
    static getListData() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    };
}