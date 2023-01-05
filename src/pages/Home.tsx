import HelmetComponents from 'components/HelmetComponents'
import Button from 'components/Button'
import styled from 'styled-components'
import npcSom from 'assets/images/npc-som.jpg'
import npcSol from 'assets/images/npc-sol.jpg'

import { NavLink } from 'react-router-dom'

const StyledBox = styled.div`
  text-align: center;
  padding: 20px;
  img {
    max-width: 100%;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  article {
    background: #f2f2f2;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`
const StyledArrow = styled.div`
  margin-left: 6px;
  display: inline-block;
  text-algin: right;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-top: 10px solid #666666;
  border-right: 6px solid transparent;
`

export default function Home() {
  return (
    <>
      <HelmetComponents title="" />
      <StyledBox>
        <img src={npcSom} alt="avatar" />
        <article>
          어서오세요~ 마법의 인형가게에 오신 걸 환영합니다. <br />
          먼길 찾아오느라 힘드셨죠? <br />
          고생한 만큼, 즐거운 시간이 되었으면 해요.
          <StyledArrow className="home-arrow"></StyledArrow>
        </article>
        <img src={npcSol} alt="avatar" />
        <article>
          저희 가게의 인형들은 좀 특별해요. <br />
          마법을 통해 영혼을 갖게 된 존재들이거든요. <br />
          각자 고유의 개성과 매력을 가지고 있어요. <br />
          <br />
          이제부터 저희가 드리는 질문들에 솔직하게 답변해주시면, <br />
          손님에게 맞는 마법인형을 찾아드릴게요. <br />
          <br />
          이런 마법인형과 친구가 되시면 하루하루가 즐거우실 거예요.
          <StyledArrow className="home-arrow"></StyledArrow>
        </article>
        <Button mode="primary">
          <NavLink to="question"> 인형 받으러 가기 </NavLink>
        </Button>
      </StyledBox>
    </>
  )
}
