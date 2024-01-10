import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import * as S from "../Login/AuthPage.styles";
import { useState } from "react";
import { register } from "../../api";
import { useAuth } from "../../auth";

export function Register() {
  //const { register } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  //function onClick() {
  //  setUser("1234");
  //  localStorage.setItem("user", "1234");
  //  navigate("/");
  // }
  const [repeatPassword, setRepeatPassword] = useState("");
  const { login } = useAuth();
  const handleRegister = async () => {
    if (email === "") {
      console.log({ email });
      setRegistrationError("Заполните почту!");
      return;
    }
    if (password === "") {
      console.log({ password });
      setRegistrationError("Укажите пароль!");
      return;
    }
    if (password !== repeatPassword) {
      console.log({ repeatPassword });
      setRegistrationError("Укажите идентичные пароли!");
      return;
    }
    const response = await register({ email, password });

    if (response?.status === 400) {
      const res = await response.json();
      setRegistrationError(res.email);
      alert(`Произошла ошибка: неверные данные`);
      return;
    }
    if (response?.status === 500) {
      setRegistrationError(
        `Ошибка соединения с сервером. Попробуйте чутка позже.`
      );
      return;
    }

    const res = await response.json();
    login(res);
  };
  // useEffect(() => {
  //   setRegistrationError(null);
  // }, [email, password, repeatPassword]);
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
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value);
            }}
          />
        </S.Inputs>
        <div className="regErrors">
          {registrationError ? registrationError : null}
        </div>
        <S.Buttons>
          <S.PrimaryButton onClick={handleRegister}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}
