import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const SERVER_API = process.env.REACT_APP_DEV_SERVER;

class AuthApi {
  // constructor(props) {
  //   this.axios = axios;
  // }

  registerUser = post => axios.post(`${SERVER_API}/user/`, post);

  loginUser = post => axios.post(`${SERVER_API}/user/login`, post);

  logoutUser = () => axios.post(`${SERVER_API}/user/me/logout`);

  logOutUserFromAllDevices = () =>
    axios.post(`${SERVER_API}/user/me/logoutall`);

  profile = () => axios.post(`${SERVER_API}/user/me/`);

  getLinkWithId = id => axios.get(`${SERVER_API}/link/${id}`);

  postLink = post => axios.post(`${SERVER_API}/link`, post);
}

export default AuthApi;
