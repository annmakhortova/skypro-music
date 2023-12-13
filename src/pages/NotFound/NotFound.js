import * as S from './NotFoundStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'

export const NotFoundPage = () => {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                        <S.Text>Такой страницы нет :c</S.Text>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
