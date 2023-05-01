import HelmetComponents from 'components/HelmetComponents'
import styled from 'styled-components'
const StyledWrapper = styled.div`
  .developer {
    margin-top: 40px;
    padding: 0px 20px;
  }
  .nickname {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
`

export default function Developer() {
  return (
    <>
      <HelmetComponents title=":가게 정보" />
      <StyledWrapper>
        <div className="developer">
          <div className="nickname">솔구리</div>
          도넛을 좋아하는 개발자. <br />
          탐구왕 안경 고양이 인형을 데리고 있다.
        </div>
        <div className="developer">
          <div className="nickname">배구리</div>
          <div>
            고양이를 모시는 기획자 <br />
            다정한 울보 오리 인형을 데리고 있다.
          </div>
        </div>
        <div className="developer">
          <div className="nickname">정이</div>
          <div>야근이 싫은 도트그래픽디자이너</div>
        </div>
      </StyledWrapper>
    </>
  )
}
