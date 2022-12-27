import HelmetComponents from 'components/HelmetComponents'
import Button from 'components/Button'
import styled from 'styled-components'
import mainObj from 'assets/images/main-object.jpg'
import { NavLink } from 'react-router-dom'

const StyledBox = styled.div`
  text-align: center;
  padding: 20px;
  img {
    max-width: 100%;
  }
  button {
    margin-top: 20px;
  }
`

export default function Home() {
  return (
    <>
      <HelmetComponents title="" />
      <StyledBox>
        <img src={mainObj} alt="main" />
        <p>"내가 하는 질문에 대답을 하면 인형을 하나 주마."</p>
        <Button mode="primary">
          <NavLink to="question"> 인형 받으러 가기 </NavLink>
        </Button>
      </StyledBox>
    </>
  )
}
