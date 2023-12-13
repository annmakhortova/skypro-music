import * as S from './CategoryPageStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useParams } from 'react-router-dom'
import { Categories } from '../../constants.js'

export const CategoryPage = () => {
    const params = useParams()
    const category = Categories.find(
        (category) => category.id === Number(params.id),
    )
    const title = `${category.title}`

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Text>Здесь будет плейлист '{title}'</S.Text>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
