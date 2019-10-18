import React from "react";
import axios from "axios";
import ServerApi from "./../Api";

const LogOut = () => {
  ServerApi.logoutUser()
    .then(() => sessionStorage.removeItem("key"))
    .catch(err => console.log(err));
};

export default LogOut;
