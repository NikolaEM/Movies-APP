import HttpService from "../HttpService";
import { ENDPOINTS } from "../endPoints";

class AuthService extends HttpService{

   getToken(){
    localStorage.getItem("token")
  }

  setAuthorizationHeader = () => {
    const token = this.getToken()
    if (token) {
      this.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

 loadUsersApi = async () => {
  const  data  = await this.client.get(`${ENDPOINTS.GET_USERS}`);
  return data;
};

 createUserApi = async (userData) => {
  const data = await this.client.post(`${ENDPOINTS.REGISTER}`, userData);
  localStorage.setItem("token", data.data.access);
  return data;
};

loginUserApi = async (credentials) => {
  const  data  = await this.client.post(`${ENDPOINTS.LOGIN}`, credentials);
  localStorage.setItem("token", data.data.access);
  localStorage.setItem("token", data.data.refresh);
  this.setAuthorizationHeader();
  return data;
};

logoutUserApi = async () => {
  localStorage.removeItem("token");
  await this.client.post(`${ENDPOINTS.LOGOUT}`);
};

getActiveUser = async () => {
  const data = await this.apiClient.get(`${ENDPOINTS.ACTIVE_USER}`);
  return data;
};

}
const authService = new AuthService();
export default authService;