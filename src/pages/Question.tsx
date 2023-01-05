import HelmetComponents from 'components/HelmetComponents'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ProcessBar from 'components/ProcessBar'

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
  const [result, setResult] = useState<any>({})

  useEffect(() => {
    //문제를 가져오는 함수
    const getQuestions = async () => {
      try {
        let res = await axios.get('/questions.json')
        let { data } = res.data
        setQuestionList(data)
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
        calculateQuestion(score)
      } else {
        caculateResult()
      }
    } catch (error) {
      navigate('/notfound')
    }
  }

  //결과를 계산하는 함수
  const calculateQuestion = (score: string) => {
    const newElement: string[] = score.split(',').map((v: string) => v.trim())
    newElement.forEach((item: string) => {
      setResult((current: any) => {
        current[item] = (current[item] || 0) + 1
        return { ...current }
      })
    })

    setOrderNum(questionOrder + 1)
  }

  //결과를 도출해내는 함수
  const caculateResult = () => {
    //최종 결과값 구하기
    const requestCharactor = [
      ['I', 'E'],
      ['S', 'N'],
      ['T', 'F'],
      ['P', 'J'],
    ]
    let resultMBTI = ''

    requestCharactor.forEach((compareItem) => {
      const firstStr = compareItem[0]
      const secondStr = compareItem[1]
      let resultStr = compareItem[0]
      if (!result[firstStr] && result[secondStr]) {
        resultStr = secondStr
      }
      if (
        result[firstStr] &&
        result[secondStr] &&
        result[firstStr] < result[secondStr]
      ) {
        resultStr = secondStr
      }

      resultMBTI += resultStr
    })

    navigate(`/result/${resultMBTI.toLowerCase()}`)
  }

  return (
    <>
      <HelmetComponents title=":질문" />
      <div>
        <ProcessBar total={questionList.length} now={questionOrder} />
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
      </div>
    </>
  )
}
