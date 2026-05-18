import { API_BASE_URL, fetchData } from "@/plugins/api/apiConfig.js";

class LoginService {
    constructor() {
    }

    async authorizationUser(email, password) {
        return fetchData(`${API_BASE_URL}/login/auth?email=${email}&password=${password}`);
    }
}

const service = new LoginService(API_BASE_URL);

export default service;