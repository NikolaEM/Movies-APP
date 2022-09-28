import axios from "axios";
export default class HttpService{
    constructor(){
        this.client = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL
        });
    }
    
     attachHeaders(headers) {
  Object.assign(this.client.defaults.headers, headers);
 }
}