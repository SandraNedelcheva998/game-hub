import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api", // bez /games na kraj
    params:{
        key:'217c64988ed44896a154e3d7763c6507'
    }
})