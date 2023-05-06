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
            컨셉 기획자. 요새 할 게임이 많아 잠이 부족하다. <br />
            다정한 울보 오리 인형 보유.
          </div>
        </div>
        <div className="developer">
          <div className="nickname">유코니</div>
          <div>
            디쟌. 인형 러버. <br /> 잘 안 보인다.
          </div>
        </div>
      </StyledWrapper>
    </>
  )
}
