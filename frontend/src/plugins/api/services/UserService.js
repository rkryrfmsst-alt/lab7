import { API_BASE_URL, fetchData } from "@/plugins/api/apiConfig.js";

class UserService {
    constructor() {}

    getCurrentUser(recordId) {
        return fetchData(`${API_BASE_URL}/users/current?recordId=${recordId}`);
    }
}

const service = new UserService();
export default service;