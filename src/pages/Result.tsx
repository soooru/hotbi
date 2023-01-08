import HelmetComponents from 'components/HelmetComponents'
import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'api'
import styled from 'styled-components'
import Toast from 'components/Toast'

interface result {
  name?: string
  summary?: string
  description?: string
  with?: string
}

const TitleBox = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
`
const WrapBox = styled.div`
  padding: 10px;
  .more-action {
    margin-top: 30px;
    button {
      display: block;
      width: 80%;
      margin: 0 auto;
      padding: 0px;
      margin-bottom: 20px;
      border-radius: 16px;
      a,
      span {
        width: 100%;
        height: 100%;
        display: block;
        padding: 16px 0px;
      }
    }
  }
`
export default function Result() {
  const [yourResult, setYourResult] = useState<result>({})
  const [toastState, setToastState] = useState<boolean>(false)
  const [toastText, setToastText] = useState<string>('')

  const params = useParams()
  const handleCopyClipBoard = async (text: string) => {
    if (toastState) return
    try {
      await navigator.clipboard.writeText(text)

      setToastText('복사 완료, 인형 가게를 공유해 주세요.')
    } catch (error) {
      setToastText('복사에 실패하였습니다.')
    } finally {
      setToastState(true)
      setTimeout(() => {
        setToastState(false)
      }, 2000)
    }
  }

  useEffect(() => {
    //결과 가져오는 함수
    const getResults = async () => {
      try {
        let res = await axios.get('/result.json')
        let yourData = res.data[`${params.id}`]
        if (yourData) {
          setYourResult(yourData)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getResults()
  }, [params.id])

  return (
    <>
      <HelmetComponents title=":결과" />
      <WrapBox>
        <div>이미지</div>
        <TitleBox>너의 인형은?</TitleBox>
        <div>{yourResult?.name}</div>
        <TitleBox>이 인형의 특징은?</TitleBox>
        <div>{yourResult?.summary}</div>
        <TitleBox>이 인형과 어울리는 너는?</TitleBox>
        <div>{yourResult?.description}</div>
        <TitleBox>네 인형과 어울리는 다른 인형은?</TitleBox>
        <div>{yourResult?.with}</div>
        <div className="more-action">
          <button>
            <NavLink to="/question">다시 하기</NavLink>
          </button>
          <button
            onClick={(e: any) => {
              handleCopyClipBoard(window.location.href)
            }}
          >
            <span>공유 하기</span>
          </button>
        </div>
      </WrapBox>
      <Toast text={toastText} active={toastState} />
    </>
  )
}
