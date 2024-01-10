import { Link } from "react-router-dom";
import * as S from "./Authpages";
import { useState } from "react";
// import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/api";
import { getToken } from "../../api/api";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email и пароль не могут быть пустыми");
      return;
    }

    const response = await loginApi({ email, password });
    console.log("f");
    if (!response.detail) {
      const tokenData = await getToken({ email, password });
      console.log(tokenData);
      let authData = {
        user: response,
        refresh: tokenData,
        access: tokenData,
      };

      localStorage.setItem("authData", JSON.stringify(authData));
      navigate("/");
    } else {
      alert(response.detail);
    }
  };

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={() => handleLogin()}>Войти</S.PrimaryButton>
          <Link to="/registr">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}
