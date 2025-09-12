import axios from "axios";
//Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=298482b9ea9bbd686c2dcf8390ff7a11&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
