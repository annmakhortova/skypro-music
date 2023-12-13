import * as S from './RegisterStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'

export const Register = () => {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerSignup>
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
                            <S.ModalInput
                                type="text"
                                name="login"
                                placeholder="Почта"
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <S.ModalButtonSignin>
                                <S.ModalButtonLink to="/login">
                                    Войти
                                </S.ModalButtonLink>
                            </S.ModalButtonSignin>
                            <S.ModalButton>
                                <S.ModalButtonLink to="/">
                                    Зарегистрироваться
                                </S.ModalButtonLink>
                            </S.ModalButton>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.ContainerSignup>
            </S.Wrapper>
        </>
    )
}
