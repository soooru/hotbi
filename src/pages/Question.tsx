import HelmetComponents from 'components/HelmetComponents'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import axios from 'api'

interface questionType {
  id?: number
  question?: string
  answer?: answerType[]
}
interface answerType {
  title: string
  score: string
}

const QuestionBox = styled.div`
  font-size: 1.2rem;
  padding: 10px;
`
const AnswerBox = styled.div`
  text-align: center;
  padding: 10px;
  button {
    margin-top: 10px;
    display: block;
    width: 100%;
    font-size: 1.2rem;
    border: 1px solid lightgray;
    padding: 6px;
  }
`

export default function Question() {
  const [questionOrder, setOrderNum] = useState<number>(0)
  const [questionList, setQuestionList] = useState<questionType[]>([])
  const [resultList, setResultList] = useState<any[]>([])

  useEffect(() => {
    //문제를 가져오는 함수
    const getQuestions = async () => {
      try {
        let res = await axios.get('/questions.json')
        let { data } = res.data
        setQuestionList(data)

        console.log('questionList1', data)
      } catch (error) {
        console.log(error)
        setQuestionList([])
      }
    }
    getQuestions()
  }, [])

  //다음 문제로 이동하는 함수
  const navigate = useNavigate()
  const nextStep = (score: string) => {
    try {
      if (questionOrder < 7) {
        console.log('결과를 계산한다.')
        calculateQuestion(score)
      } else {
        caculateResult()
        console.log(
          '모든 문제가 끝났다. 계산한 결과로 result페이지로 이동한다.'
        )
        navigate('/result/intp')
      }
    } catch (error) {
      navigate('/notfound')
    }
  }

  //결과를 계산하는 함수
  const calculateQuestion = (score: string) => {
    const newElement: string[] = score.split(',').map((v) => v.trim())
    setResultList((current) => [...current, newElement])
    setOrderNum(questionOrder + 1)
  }

  //결과를 도출해내는 함수
  const caculateResult = () => {
    console.log('caculateResult')
    //리듀스 쓰면 한번일듯.
    //I와 E의 개수
    //S와 N의 개수
    //T와 F의 개수
    //P와 J의 개수
  }

  return (
    <>
      <HelmetComponents title=":질문" />
      <div>
        <div>{questionOrder}</div>
        <QuestionBox>Q. {questionList[questionOrder]?.question} </QuestionBox>
        <AnswerBox>
          {questionList[questionOrder]?.answer?.map((v, index) => (
            <button
              onClick={() => {
                nextStep(v.score)
              }}
              key={`question${questionOrder}-${index}`}
            >
              {v.title}
            </button>
          ))}
        </AnswerBox>
        <div>resultList?{resultList}</div>
      </div>
    </>
  )
}
