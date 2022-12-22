import HelmetComponents from 'components/HelmetComponents'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Question() {
  const [questionOrder, setNumber] = useState<number>(0)
  //문제를 가져오는 함수

  //다음 문제로 이동하는 함수
  const navigate = useNavigate()
  const nextStep = () => {
    try {
      if (questionOrder < 7) {
        setNumber(questionOrder + 1)
        console.log('결과를 계산한다.')
      } else {
        console.log('모든 문제가 끝났다. 결과를 내서 result페이지로 이동한다.')
        navigate('/result/intp')
      }
    } catch (error) {
      navigate('/notfound')
    }
  }
  return (
    <>
      <HelmetComponents title=":질문" />
      <div>
        <div>질문 페이지</div>
        <div>질문 / 현재 질문 스텝은 {questionOrder}</div>
        <div>
          <button onClick={nextStep}>답변1</button>
          <button onClick={nextStep}>답변2</button>
        </div>
      </div>
    </>
  )
}
