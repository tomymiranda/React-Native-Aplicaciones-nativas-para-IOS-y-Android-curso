import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "66707013158e041a1dd215e512a09a46",
        language: "es-ES"
    }
});

export default movieDB;