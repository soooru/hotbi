import HelmetComponents from 'components/HelmetComponents'
import styled from 'styled-components'
const StyledWrapper = styled.div`
  padding: 20px;
`
const NickName = styled.strong`
  font-weight: bold;
`

export default function Developer() {
  return (
    <>
      <HelmetComponents title=":가게 정보" />
      <StyledWrapper>
        <div>
          <NickName>배구리</NickName> <br />
          물가에 사는 개구리. 시도 때도 없이 울어재낀다. 슬픔이 닮음. 평소엔
          낯가리지만 술이 들어가면 텐션이 달라진다. 글을 쓴다.
        </div>
        <br />
        <div>
          <NickName>솔구리</NickName> <br />
          바위에 사는 개구리. 도넛을 좋아한다. 코딩을 한다.
        </div>
        <br />
        <div>
          <NickName>디자이너</NickName> <br /> 환상의 동물, 유니콘. 아직 못
          찾았다.
        </div>
      </StyledWrapper>
    </>
  )
}
