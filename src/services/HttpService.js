import axios from "axios";

const options = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
  }
  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }
}

const httpService = new HttpService(options);
export default httpService;
