import * as S from './LoginStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const onClick = () => {
        localStorage.setItem('user', 'token')
        navigate('/')
    }

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerEnter>
                    <S.ModalBlock>
                        <S.ModalFormLogin action="#">
                            <S.ModalButtonLink to="/">
                                <S.ModalLogo>
                                    <img
                                        src="../img/logo_modal.png"
                                        alt="logo"
                                    />
                                </S.ModalLogo>
                            </S.ModalButtonLink>
                            <S.ModalInputLogin
                                type="text"
                                name="login"
                                placeholder="Почта"
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <S.ModalButtonEnter onClick={onClick}>
                                Войти
                            </S.ModalButtonEnter>
                            <S.ModalButtonSignup>
                                <S.ModalButtonLink to="/register">
                                    Зарегистрироваться
                                </S.ModalButtonLink>
                            </S.ModalButtonSignup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.ContainerEnter>
            </S.Wrapper>
        </>
    )
}
