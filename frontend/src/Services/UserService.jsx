import axios from "axios";

const API = "http://localhost:8080/users";

class UserService {

    getAllUsers() {
        return axios.get(API);
    }
}

export default new UserService();
