import "./Auth.css";
import { useState } from "react";
import { useUser } from "../../contexts/UserContext";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("student");

  const { loginUser } = useUser();

  function handleLogin(e) {
    e.preventDefault();
    const data = {
      username,
      account_type: accountType,
    };
    loginUser(data);
  }

  return (
    <div className="auth-page-content">
      <form className="auth-form" onSubmit={handleLogin}>
        {/* simple */}
        <div className="type-options">
          <label className="type-selector">
            <h2>Student Account</h2>
            <p>Enroll and complete courses</p>
            <input
              type="radio"
              name="account_type"
              value="student"
              checked={accountType === "student"}
              onChange={(e) => setAccountType(e.target.value)}
            />
          </label>
          <label className="type-selector">
            <h2>Teacher Account</h2>
            <p>Create courses</p>
            <input
              type="radio"
              name="account_type"
              value="teacher"
              checked={accountType === "teacher"}
              onChange={(e) => setAccountType(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
