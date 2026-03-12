import { useState, useContext, createContext, useEffect } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  function loginUser(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  function setTempStudent() {
    const data = {
      username: "goober",
      account_type: "student",
    };
    loginUser(data);
  }
  function setTempTeacher() {
    const data = {
      username: "chad",
      account_type: "teacher",
    };
    loginUser(data);
  }

  return (
    <UserContext.Provider
      value={{ user, loginUser, logout, setTempStudent, setTempTeacher }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
