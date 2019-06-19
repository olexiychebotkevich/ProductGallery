import axios from "axios";

export default class ProductService {
    static getListData() {
     
        return axios.get('http://localhost:100/api/test.php');
    };
}