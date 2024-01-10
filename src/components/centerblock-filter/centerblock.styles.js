import styled from 'styled-components'

export const FilterScroll = styled.div`
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 10px;
  width: 248px;
  height: 305px;
  padding: 34px;
  background-color: #313131;
  border-radius: 12px;
`

export const FilterTextListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-sizing: border-box;
  height: 241px;
  list-style: none;
  overflow-y: scroll;
  scrollbar-color: gray;

  &::-webkit-scrollbar {
    background-color: #313131;
    width: 4px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #4b4949;
  }
`

export const FilterText = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
    color: #b672ff;
    cursor: pointer;
  }
`

export const FilterTextActive = styled.li`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #ad61ff;
  text-decoration: underline;
`

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterBlock = styled.div`
  display: flex;
  gap: 10px;
`

export const FilterButton = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
`

export const FilterButtonActive = styled(FilterButton)`
  border-color: #b672ff;
  color: #b672ff;
}
`

export const CircleCount = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #ad61ff;
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  right: -8px;
  top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`