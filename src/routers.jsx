import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Favorites } from "./pages/Favorites";
import { CategorySongs } from "./pages/categorySongs";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./protected-routes/protectedRoutes";
import React from "react";
//import AuthPage from "./pages/LogIn";
import { useContext } from "react";
import Context from "./context";
import { Layout } from "./pages/layuot";
import { Register } from "./pages/loginRegister/Register";
import { Login } from "./pages/loginRegister/Login";

export const AppRoutes = () => {
  const { user, setUser } = useContext(Context);

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Favorites" element={<Favorites />} />
          <Route path="categorySongs/:id" element={<CategorySongs />} />
        </Route>
      </Route>
      <Route path="/registr" element={<Register />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
