/* eslint-disable react/jsx-no-constructed-context-values */
import { StrictMode, useState } from "react";
import AppRoutes from "./components/Routes/Routes";
import Context from "./components/AuthForm/AuthForm";
import * as S from "./StyledApp";

export function App() {
  const user = localStorage.getItem("user");
  const [token, setToken] = useState(user);
  return (
    <StrictMode>
      <S.StyledWrapper>
        <Context.Provider value={[token, setToken]}>
          <AppRoutes />
        </Context.Provider>
      </S.StyledWrapper>
    </StrictMode>
  );
}

export default App;
