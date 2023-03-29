import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'
import AdminLogin from './components/AdminLogin';
import StudentProfile from './components/StudentProfile';
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import AddTeacher from './components/AddTeacher';
import UpdateStudent from './components/UpdateStudent';
import UpdateTeacher from './components/UpdateTeacher';
import DropMessage from './components/DropMessage';
import Applyleave from './components/Applyleave';
import Payfee from './components/Payfee';
import TeacherProfile from './components/TeacherProfile';
import ViewMessage from './components/ViewMessage';
import LeaveStatus from './components/LeaveStatus';
import StudentLogin from './components/StudentLogin';
import TeacherLogin from './components/TeacherLogin';
import Editform from './components/Editform';

function App() {
  return (
    <>
    <Router>
      {/* <Header/> */}
      <Navbar/>
      <div className='container'>
      <Routes>
          <Route exact path='/' Component={Homepage}/>
          <Route path='/signup' Component={Register}/>
          <Route path='/login' Component={Login}/>
          <Route path='/studentlogin/:username' Component={StudentLogin}/>
          <Route path='/teacherlogin/:username' Component={TeacherLogin}/>
          <Route path='/studentlogin/profile' Component={StudentProfile}/>
          <Route path='/teacherlogin/profile' Component={TeacherProfile}/>
          <Route path='/login/admin' Component={AdminLogin}/>
          <Route path='/login/admin/addstudent' Component={AddStudent}/>
          <Route path='/login/admin/addteacher' Component={AddTeacher}/>
          <Route path='/login/admin/updatestudent' Component={UpdateStudent}/>
          <Route path='/login/admin/updateteacher' Component={UpdateTeacher}/>
          <Route path='/login/student/message/:username' Component={DropMessage} />
          <Route path='/login/teacher/message/:username' Component={ViewMessage} />
          <Route path='/login/student/leave/:username' Component={Applyleave} />
          <Route path='/login/student/payfee/:username' Component={Payfee} />
          <Route path='/login/teacher/leave/:username' Component={LeaveStatus} />
          <Route path='/editform/:rollno' Component={Editform}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
