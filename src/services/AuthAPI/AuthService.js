import ApiService from "../ApiService";

const ENDPOINTS = {
  GET_USERS: "/users/",
  REGISTER: "/users/",
  LOGIN: "/token/",
  LOGOUT: "/logout",
  ACTIVE_USER: "/users/me/",
};

class AuthService extends ApiService {
  constructor() {
    super();
    this.setAuthorizationHeader();
  }

  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

  removeHeaders(headerKeys) {
    headerKeys.forEach((key) => delete this.client.defaults.headers[key]);
  }

  getToken = () => {
    return localStorage.getItem("token");
  };

  loadUsersApi = async () => {
    const data = await this.client.get(`${ENDPOINTS.GET_USERS}`);
    return data;
  };

  createUserApi = async (userData) => {
    const data = await this.client.post(`${ENDPOINTS.REGISTER}`, userData);
    localStorage.setItem("token", data.data.access);
    return data;
  };

  loginUserApi = async (credentials) => {
    const data = await this.client.post(`${ENDPOINTS.LOGIN}`, credentials);
    localStorage.setItem("token", data.data.access);
    this.setAuthorizationHeader();
    return data;
  };

  logoutUserApi = async () => {
    localStorage.removeItem("token");
    await this.client.post(`${ENDPOINTS.LOGOUT}`);
    this.removeHeaders();
  };

  getActiveUser = async () => {
    const data = await this.client.get(`${ENDPOINTS.ACTIVE_USER}`);
    return data;
  };
}

const authService = new AuthService();
export default authService;
