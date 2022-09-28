import axios from "axios";

export default class HttpService{
    constructor(){
        this.client = axios.create({
            baseURL: "http://127.0.0.1:8000/api"
        });
    }


     attachHeaders(headers) {
  Object.assign(this.client.defaults.headers, headers);
 }
}