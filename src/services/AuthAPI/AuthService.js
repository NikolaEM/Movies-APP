import HttpService from "../HttpService";

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
  const  data  = await this.client.get("/users/");
  return data;
};

 createUserApi = async (userData) => {
  const data = await this.client.post("/users/", userData);
  localStorage.setItem("token", data.data.access);
  return data;
};

loginUserApi = async (credentials) => {
  const  data  = await this.client.post("/token/", credentials);
  localStorage.setItem("token", data.data.access);
  localStorage.setItem("token", data.data.refresh);
  this.setAuthorizationHeader();
  return data;
};

logoutUserApi = async () => {
  localStorage.removeItem("token");
  await this.client.post("/logout");
};
}
const authService = new AuthService();
export default authService;