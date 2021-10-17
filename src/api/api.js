import axios from "axios";

export const getData = () => axios.get("http://localhost:8080/?query=iphone");
