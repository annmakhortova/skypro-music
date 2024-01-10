import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function getAuthFromLocalStorage() {
  return localStorage.getItem("user") ?? null;
}
export const useAuth = () => {
  const user = useContext(AuthContext);
  return user;
};

const AuthContext = createContext(null);

export const WithAuth = ({ children }) => {
  const [auth, setAuth] = useState(getAuthFromLocalStorage());
  const navigate = useNavigate();
  const login = (authData) => {
    setAuth(authData);
    localStorage.setItem("user", JSON.stringify(authData));
    navigate("/");
  };
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("user");
    navigate("/signin");
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
