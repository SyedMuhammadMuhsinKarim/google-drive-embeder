import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const SERVER_API = process.env.REACT_APP_DEV_SERVER;

class AuthApi {
  getLinkWithId = id => axios.get(`${SERVER_API}/link/${id}`);

  postLink = post => axios.post(`${SERVER_API}/link`, post);
}

export default AuthApi;
