import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
    axios
        .post("http://localhost:5000/api/login", data)
        .then((res) => {
            callback(true, res.data.token);
        })
        .catch((error) => {
            callback(false, error);
        });
};

// Decode Token JWT yang sudah diperoleh
export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    return decoded.user;
    //   console.log(decoded);
};
