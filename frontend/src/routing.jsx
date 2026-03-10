import { Routes, Route, Navigate } from "react-router"
import { useUser } from "./contexts/UserContext"
import PublicLayout from "./layouts/PublicLayout/PublicLayout"
import TeacherLayout from "./layouts/TeacherLayout/TeacherLayout"
import StudentLayout from "./layouts/StudentLayout/StudentLayout"

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Auth from "./pages/Auth/Auth"
import TeacherDash from "./pages/TeacherDash/TeacherDash"
import StudentDash from "./pages/StudentDash/StudentDash"


export default function Routing() {
    const { user } = useUser()

    //Selecting which layout to use based on the account type
    function selectDashLayout(){
        // If user is not logged in at all, redirect to auth
        if(!user){
            return <Navigate to="/auth"/>
        }
        if(user.account_type == "teacher"){
            return <TeacherLayout/>
        } else {
            return <StudentLayout/>
        }
    }

    // This will prevent student users from accessing teacher pages
    function teacherPage(page){
        if(!user){
            return <Navigate to="/auth"/>
        }
        if(user.account_type != "teacher"){
            return <Navigate to="/myaccount"/>
        }
        return page
    }

    //this will prevent teacher users from accessing student pages
    function studentPage(page){
        if(!user){
            return <Navigate to="/auth"/>
        }
        if(user.account_type != "student"){
            return <Navigate to="/myaccount"/>
        }
        return page
    }

    //need to select a dashboard based on the user type as well
    function selectDashboard(){
        if(!user){
            return <Navigate to="/auth"/>
        }
        return user.account_type == "teacher" ? <TeacherDash/> : <StudentDash/>
    }

    return (
        <Routes>
            <Route element={<PublicLayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/auth" element={!user ? <Auth/> : <Navigate to="/myaccount"/>} />
            </Route>
            <Route path={"/myaccount"} element={selectDashLayout()}>
                <Route index element={selectDashboard()}/>

                {/* student routes */}
                <Route path="homework" element={studentPage(<div>Homework page</div>)}/>
                <Route path="schedule" element={studentPage(<div>Schedule Page</div>)}/>
            
                {/* teacher routes */}
            </Route>

        </Routes>
    )

}