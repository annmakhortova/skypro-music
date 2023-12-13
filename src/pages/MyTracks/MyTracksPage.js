import * as S from './MyTracksPageStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'

export const MyTracksPage = () => {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Text>
                        Здесь будут треки <br />
                        конкретного пользователя
                    </S.Text>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
