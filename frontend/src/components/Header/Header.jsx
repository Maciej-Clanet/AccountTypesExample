import "./Header.css"
import { NavLink } from "react-router"
import { useUser } from "../../contexts/UserContext"
export default function () {
    const { user, logout } = useUser()

    function showAuthOptions() {
        return (
            <>
                <NavLink to="/myaccount">Account</NavLink>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </>
        )
    }

    return <header className="main-header">
        <p>User: {JSON.stringify(user)}</p>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {user 
                ? showAuthOptions() 
                : <NavLink to="/auth">Sign Up</NavLink>
            }
        </nav>
    </header>
}