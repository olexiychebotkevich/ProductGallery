import axios from "axios";

export default class ProductService {
    static getListData() {
     
        console.log("data: ",axios.get('http://localhost:100/api/test.php'));
        return axios.get('http://localhost:100/api/add.php');
    };
}