import HelmetComponents from 'components/HelmetComponents'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ProcessBar from 'components/ProcessBar'

import axios from 'api'

interface questionType {
  id?: number
  type: string
  question?: string
  answer?: answerType[]
}
interface answerType {
  title: string
  score: string
}
interface tempResultType {
  type: string
  result: string[]
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
  const [tempResult, setTempResult] = useState<tempResultType[]>([
    { type: 'default', result: [] },
    { type: 'group1', result: [] },
    { type: 'group2', result: [] },
    { type: 'group3', result: [] },
    { type: 'group4', result: [] },
  ])
  const [isLoading, setLoading] = useState<boolean>(false)

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
  const nextStep = (score: string, order: number) => {
    try {
      if (order < 11) {
        calculateQuestion(score, order)
      } else {
        setLoading(true)
        const resultMBTI = caculateResult()
        setTimeout(() => {
          setLoading(false)
          navigate(`/result/${resultMBTI.toLowerCase()}`)
        }, 2000)
      }
    } catch (error) {
      navigate('/notfound')
    }
  }

  //결과를 계산하는 함수
  const calculateQuestion = (score: string, order: number) => {
    const newElement: string[] = score.split(',').map((v: string) => v.trim())
    const currentType = questionList[order].type

    const findIndex = tempResult.findIndex(
      (element) => element.type === currentType
    )

    let copyTempArray = [...tempResult]
    if (findIndex !== -1) {
      copyTempArray[findIndex] = {
        type: copyTempArray[findIndex].type,
        result: copyTempArray[findIndex].result.concat(newElement),
      }
    }

    setTempResult(copyTempArray)

    setOrderNum(questionOrder + 1)
  }

  //결과를 도출해내는 함수
  const caculateResult = () => {
    //가산점 추가
    let allResults: any = []
    tempResult.forEach((item) => {
      if (item.type === 'default') {
        allResults = [...allResults, ...item.result]
      } else {
        const arr = [...item.result]
        const findDuplicates = (arr: any) =>
          arr.filter((item: any, index: any) => arr.indexOf(item) !== index)
        const duplicates = findDuplicates(arr)

        allResults = [...allResults, ...item.result, ...duplicates]
      }
    })

    //가산점에 따른 결과값 정리
    allResults.forEach((item: string) => {
      setResult((current: any) => {
        current[item] = (current[item] || 0) + 1
        return { ...current }
      })
    })

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

    return resultMBTI
  }

  return (
    <>
      <HelmetComponents title=":질문" />
      {isLoading ? (
        <div>손님에게 맞는 인형을 골라 숨을 불어넣을게요.</div>
      ) : (
        <div>
          <ProcessBar total={questionList.length} now={questionOrder} />
          <QuestionBox>Q. {questionList[questionOrder]?.question} </QuestionBox>
          <AnswerBox>
            {questionList[questionOrder]?.answer?.map((v, index) => (
              <button
                onClick={() => {
                  nextStep(v.score, questionOrder)
                }}
                key={`question${questionOrder}-${index}`}
              >
                {v.title}
              </button>
            ))}
          </AnswerBox>
        </div>
      )}
    </>
  )
}
