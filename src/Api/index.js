import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const SERVER_API = process.env.REACT_APP_DEV_SERVER;

class AuthApi {
  constructor() {
    this.axios = axios;
  }

  registerUser = (username, email, password) =>
    this.axios.post(`${SERVER_API}/user/`, { username, email, password });

  loginUser = (email, password) =>
    this.axios.post(`${SERVER_API}/user/login`, { email, password });

  logoutUser = () => this.axios.post(`${SERVER_API}/user/me/logout`);

  logOutUserFromAllDevices = () =>
    this.axios.post(`${SERVER_API}/user/me/logoutall`);

  profile = () => this.axios.post(`${SERVER_API}/user/me/`);

  getLinkWithId = id => this.axios.get(`${SERVER_API}/link/${id}`);

  postLink = post => this.axios.post(`${SERVER_API}/link`, post);
}

export default AuthApi;
