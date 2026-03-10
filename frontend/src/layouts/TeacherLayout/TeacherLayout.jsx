import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import { useUser } from "../../contexts/UserContext";
import "./TeacherLayout.css"

export default function TeacherLayout(){
    const {user} = useUser()

    return(
        <>
            <Header/>
            <div className="main-content teacher">
                <div className="teacher-nav">
                    some nav
                </div>
                <div className="teacher-content">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    )
}