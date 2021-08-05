import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/api/v1/users/all/");
    }

    get(id) {
        return http.get(`/api/v1/users/${id}/`);
    }

    create(data) {
        return http.post("/api/v1/users/", data);
    }
}

export default new UserDataService();