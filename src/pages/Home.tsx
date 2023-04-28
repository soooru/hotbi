import HelmetComponents from 'components/HelmetComponents'
import { useState } from 'react'
import styled from 'styled-components'
import ic_ball from 'assets/images/ic_ball.png'

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
  p {
    padding-top: 40px;
    line-height: 1.4rem;
    font-size: 1.1rem;
    position: relative;
    span {
      font-size: 1rem;
    }
  }
`
const StyledArrow = styled.div`
  display: block;
  width: 0;
  height: 0;
  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
  border-left: 10px solid #666666;
  border-right: 10px solid transparent;
`

const StyledBtn = styled.div`
  background: #fff;
  display: flex;
  padding: 10px 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0px 10px;
  margin-top: 30px;
`

export default function Home() {
  const [step, setStep] = useState<number>(1)

  return (
    <>
      <HelmetComponents title="" />
      <StyledBox>
        <img src={ic_ball} alt="avatar" />
        {step === 1 && (
          <div
            onClick={() => {
              setStep(2)
            }}
          >
            <p>
              마법의 인형가게에 <br /> 오신 걸 환영합니다.
              <br />
              <br />
              마법인형이 당신을 기다렸어요.
            </p>
            <StyledBtn>
              <StyledArrow className="animation-leftright"></StyledArrow>
              <span>다음으로</span>
            </StyledBtn>
          </div>
        )}
        {step === 2 && (
          <div>
            <p>
              이곳에는 마법으로 영혼을 갖게 된 <br /> 마법 인형들이 있습니다.
              <br />
              각자 고유의 매력을 가지고 있죠. <br />
              <br />
              이제부터 질문에 대답한다면 <br />
              당신의 단짝 마법 인형을 찾아드리죠. <br />
            </p>

            <NavLink to="question">
              <StyledBtn>
                <StyledArrow className="animation-leftright"></StyledArrow>
                <span>인형 받으러 가기</span>
              </StyledBtn>
            </NavLink>
          </div>
        )}
      </StyledBox>
    </>
  )
}
