import HelmetComponents from 'components/HelmetComponents'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  h2 {
    margin-bottom: 20px;
  }
`

export default function NotFound() {
  return (
    <>
      <HelmetComponents title=":not found" />
      <StyledWrapper>
        <h2>
          알 수 없는 에러가 발생하였습니다. <br /> 잠시 후 다시 시도해주세요.
        </h2>
        <button>
          <NavLink to="/">처음으로 돌아가기</NavLink>
        </button>
      </StyledWrapper>
    </>
  )
}
