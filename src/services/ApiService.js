import httpService from "./HttpService";

class ApiService {
  constructor() {
    this.api = httpService;
    this.client = this.api.client;
  }
}

export default ApiService;