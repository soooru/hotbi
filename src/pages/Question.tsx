import HelmetComponents from 'components/HelmetComponents'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ProcessBar from 'components/ProcessBar'
import ic_portion from 'assets/images/ic_portion.png'

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
  font-size: 1.1rem;
  line-height: 1.4rem;
  padding: 20px 30px;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`
const AnswerBox = styled.div`
  padding: 20px 30px;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
  button {
    font-size: 1.1rem;
    line-height: 1.4rem;
    margin-bottom: 20px;
    background: #77a2af;
    width: 100%;
    text-decoration: none;
    color: white;
    padding: 12px 20px;
    display: inline-block;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.21);
    border-bottom: 4px solid rgba(0, 0, 0, 0.21);
    border-radius: 4px;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 500px) {
      font-size: 0.9rem;
      line-height: 1.4rem;
      padding: 12px 8px;
    }
  }
`
const LoadingWrap = styled.div`
  margin-top: 80px;
  text-align: center;
  font-size: 1.2rem;
  img {
    width: 60px;
    height: 60px;
    margin: 30px auto;
    object-fit: contain;
    display: block;
    -webkit-transform: rotate(45deg);
  }
`

export default function Question() {
  const [questionOrder, setOrderNum] = useState<number>(0)
  const [questionList, setQuestionList] = useState<questionType[]>([])
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
    //1.가산점 추가
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

    //2.가산점에 따른 결과값 정리
    const result = allResults.reduce((accu: any, curr: any) => {
      accu[curr] = (accu[curr] || 0) + 1
      return accu
    }, {})

    const requestCharactor = [
      ['I', 'E'],
      ['S', 'N'],
      ['T', 'F'],
      ['P', 'J'],
    ]

    //3.실제 결과 도출하기
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
        <LoadingWrap>
          <img src={ic_portion} alt="avatar" className="animation-topdown" />
          <span>
            손님에게 맞는 인형을 골라
            <br />
            숨을 불어넣을게요.
          </span>
        </LoadingWrap>
      ) : (
        <div>
          <ProcessBar total={questionList.length} now={questionOrder} />
          <QuestionBox>{questionList[questionOrder]?.question} </QuestionBox>
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
