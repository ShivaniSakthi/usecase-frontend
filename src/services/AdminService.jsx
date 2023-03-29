import axios from 'axios';

const ADMIN_BASE_REST_API_URL = "http://localhost:8083/usecase/admin";

class AdminService{
    createPerson(person){
        return axios.post(ADMIN_BASE_REST_API_URL, person)
    }

    login(person){
        return axios.post("http://localhost:8083/usecase/admin/login",person)
    }
}

export default new AdminService();