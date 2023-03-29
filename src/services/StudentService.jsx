import axios from 'axios';

// const STUDENTADMIN_BASE_REST_API_URL = "http://localhost:8083/usecase/student";
const STUDENT_BASE_REST_API_URL = "http://localhost:8081/usecase/student";

class StudentService{
    // applyleave(leave){
    //     return axios.post(STUDENTADMIN_BASE_REST_API_URL, leave)
    // }

    getAllStudent(){
        return axios.get(STUDENT_BASE_REST_API_URL);
    }

    saveStudent(person){
        return axios.post(STUDENT_BASE_REST_API_URL,person);
    }
}

export default new StudentService();