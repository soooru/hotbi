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
          <NickName>솔구리</NickName> <br />
          충동적으로 인형을 만드는 자유로운 인형 재단사. <br />
          인형 조형사를 커피로 꼬셔 가게를 열었다. <br />
          그런데 재봉틀 앞보다는 컴퓨터 앞에 있는 시간이 긴 것 같다. <br />
          도넛을 좋아해서 다음에 도넛으로 꼬시면 넘어 갈 수도 있다.
        </div>
        <br />
        <div>
          <NickName>배구리</NickName> <br />
          마감이 닥치면 인형을 만드는 미루기 대장 인형 조형사. <br />
          인형 재단사에게 커피를 얻어먹고 동업의 길에 들어섰다. <br />
          인형을 조형할 때도, 그리고 스토리 구상을 할 때도 늘 머리를 쥐어뜯는다.
          <br />
          요새 닭발에 꽂혀있어서 닭발과 주먹밥이면 행복해한다.
        </div>
        <br />
        <div>
          <NickName>유니콘</NickName> <br />
          가게의 디자이너 <br />
          환상의 동물, 유니콘. <br />
          아직 못 찾았다.
        </div>
      </StyledWrapper>
    </>
  )
}
