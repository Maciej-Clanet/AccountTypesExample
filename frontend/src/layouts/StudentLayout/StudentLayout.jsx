import "./StudentLayout.css";
import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useUser } from "../../contexts/UserContext";

export default function StudentLayout() {

    return (
        <>
            <Header />
            <main className="main-content student">
                <Outlet/>

                <nav className="student-options">
                    <NavLink to="schedule">My Schedule</NavLink>
                    <NavLink to="homework">Homework</NavLink>
                </nav>
            </main>
            <Footer/>
        </>
    )
}