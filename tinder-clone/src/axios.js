import axios from "axios";

const instance = axios.create({
  baseURL: "https://seogkim-tinder-backend.herokuapp.com/",
});

export default instance;
