import HelmetComponents from 'components/HelmetComponents'
import Button from 'components/Button'
import { useState } from 'react'
import styled from 'styled-components'
import npcSom from 'assets/images/npc-som.jpg'
import npcSol from 'assets/images/npc-sol.jpg'

import { NavLink } from 'react-router-dom'

const StyledBox = styled.div`
  text-align: center;
  padding: 20px 40px;
  img {
    max-width: 100%;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  article {
    line-height: 1.2rem;
    font-size: 1rem;
    position: relative;
    background: #f2f2f2;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
    span {
      font-size: 0.9rem;
    }
  }
`
const StyledArrow = styled.div`
  display: block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-top: 10px solid #666666;
  border-right: 6px solid transparent;
`

export default function Home() {
  const [step, setStep] = useState<number>(1)

  return (
    <>
      <HelmetComponents title="" />
      <StyledBox>
        {step === 1 && (
          <div
            onClick={() => {
              setStep(2)
            }}
          >
            <img src={npcSom} alt="avatar" />
            <article>
              어서오세요~ <br />
              마법의 인형가게에 오신 걸 환영합니다. <br />
              저희의 마법인형이 당신을 기다렸어요. <br />
              잠시 머물다 가시겠어요? <br />
              <br />
              <br />
              <span>다음으로</span>
              <br />
              <br />
              <StyledArrow className="animation-topdown"></StyledArrow>
            </article>
          </div>
        )}
        {step === 2 && (
          <div>
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
            </article>

            <Button mode="primary">
              <NavLink to="question"> 인형 받으러 가기 </NavLink>
            </Button>
          </div>
        )}
      </StyledBox>
    </>
  )
}
