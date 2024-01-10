import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main/Main";
import { MyPlaylist } from "./pages/MyTracks/MyTracks";
import { NotFound } from "./pages/NotFound/NotFound";
import { Register } from "./pages/Register/Register";
import { CategoryOne } from "./pages/Categories/Categories";
//import { CategoryTwo } from "./pages/Categories/Categories2";
//import { CategoryThree } from "./pages/Categories/Categories3";
import { ProtectedRoute } from "./components/protected-route/protected";
import { Login } from "./pages/Login/Login";
export const AppRoutes = ({
  isLoading,
  setLoading,
  volume,
  setVolume,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/registr" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/myplaylist" element={<MyPlaylist />} />
        <Route
          path="/"
          element={
            <MainPage
              isLoading={isLoading}
              setLoading={setLoading}
              volume={volume}
              setVolume={setVolume}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          }
        />
        <Route path="/category/:id" element={<CategoryOne />} />

        {/* <Route path="/category2" element={<CategoryTwo />} />
      <Route path="/category3" element={<CategoryThree />} /> */}
      </Route>
    </Routes>
  );
};
