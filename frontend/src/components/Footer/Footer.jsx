import "./Footer.css"
import { useUser } from "../../contexts/UserContext"

export default function Footer(){
    const {setTempStudent, setTempTeacher} = useUser();

    return(
        <footer className="main-footer">
            Footer stuff
            <button onClick={setTempStudent}>Student</button>
            <button onClick={setTempTeacher}>Teacher</button>
        </footer>
    )
}