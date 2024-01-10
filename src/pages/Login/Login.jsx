import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useState } from "react";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";
export function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email и пароль не могут быть пустыми");
      return;
    }
    try {
      const response = await fetch(
        "	https://skypro-music-api.skyeng.tech/user/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      login(data);
      navigate("/");
    } catch (error) {
      setError(
        "Упс... что-то пошло не так. Мы уже работаем над этим! Попробуйте позже "
      );
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
