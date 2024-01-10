import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles/LogIn.styled";
import { useEffect, useState } from "react";
import { login, signUp } from "../api/api";
import { getToken } from "../api/api";
import { useDispatch} from "react-redux";
import { setAccess, setRefresh, setUserData } from "../store/slices/authSlice";

export default function AuthPage() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogin = async ({ email, password }) => {
    setLoading(true)
    if (email === ""){
      setError("Укажите почту")
      setLoading(false)
      return
    }
    if (password === ""){
      setError("Укажите пароль")
      setLoading(false)
      return
    }
    
    login({email, password})
    .then(async (user) => {
      if (user.detail === "Пользователь с таким email или паролем не найден"){
        setError(user.detail)
        return
      }
      
      const tokenData = await getToken({email, password})
      let authData = {
        user: user,
        refresh: tokenData,
        access: tokenData,
      }
      localStorage.setItem("authData", JSON.stringify(authData))
      dispatch(setUserData(user))
      dispatch(setRefresh(tokenData.refresh))
      dispatch(setAccess(tokenData.access))
      navigate("/")
      })
    .finally(() => {
      setLoading(false)
      })
  };

  const handleRegister = async ({email, password, repeatPassword}) => {
    setLoading(true)
    if (email === ""){
      setError("Укажите почту")
      setLoading(false)
      return
    }
    if (password === ""){
      setError("Укажите пароль")
      setLoading(false)
      return
    }
    if (password !== repeatPassword){
      setError("Пароли не совпадают")
      setLoading(false)
      return
    }
    signUp({email, password})
    .then((user) => {
      if (user.email === "Пользователь с таким адрес электронной почты уже существует."){
        setError(user.email)
        return
      }
      if (user.username === "Пользователь с таким именем уже существует."){
        setError(user.username)
        return
      }
      if (user.password !== password && user.password !== undefined){
        setError(user.password[0])
        return
      }
      window.location.href="/login"
    })
    .finally(() => {
      setLoading(false)
    })
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login" onClick={() => setIsLoginMode(true)}>
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
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
              <S.PrimaryButton disabled={loading} onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <S.SecondaryButton disabled={loading} onClick={() => setIsLoginMode(!isLoginMode)}>Зарегистрироваться</S.SecondaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
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
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={loading} onClick={() => handleRegister({email, password, repeatPassword})}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}