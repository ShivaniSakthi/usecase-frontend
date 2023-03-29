import axios from 'axios';

const TEACHER_BASE_REST_API_URL = "http://localhost:8082/usecase/teacher";

class TeacherService{
    getAllTeachers(){
        return axios.get(TEACHER_BASE_REST_API_URL);
    }

    getTeacherById(teacherId){
        return axios.get(TEACHER_BASE_REST_API_URL+'/'+teacherId);
    }

    saveTeacher(teacher){
        return axios.post(TEACHER_BASE_REST_API_URL,teacher);
    }
}

export default new TeacherService();