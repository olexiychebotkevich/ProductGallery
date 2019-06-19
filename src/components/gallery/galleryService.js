import axios from "axios";

export default class GalleryService {
    static getListData() {
        return axios.get('http://localhost:100/chebotkevich/api/gallery.php')
    };
}