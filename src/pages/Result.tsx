import HelmetComponents from 'components/HelmetComponents'
import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'api'
import styled from 'styled-components'
import Toast from 'components/Toast'
import ShareButton from 'components/ShareButton'
import ProfileImage from 'components/ProfileImage'

interface result {
  name?: string
  summary?: string
  description: string
  description2: string
  with?: string
}

const TitleBox = styled.div`
  font-size: 1.4rem;
  margin: 20px 0px;
  line-height: 1.5rem;
  font-weight: 500;
  text-align: center;
`
const SubTitleBox = styled.div`
  font-size: 1.2rem;
  line-height: 1.4rem;
`
const WrapBox = styled.div`
  .content {
    padding: 16px;
    background: #fff;
  }
  .profile {
    text-align: center;
  }
  .desc {
    margin-top: 20px;
    line-height: 1.2rem;
  }
  .more-action {
    margin-top: 60px;
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
  const [yourResult, setYourResult] = useState<result>({
    description: '',
    description2: '',
  })
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
        <TitleBox>{yourResult?.name}</TitleBox>
        <div className="profile">
          <ProfileImage mbti={params.id} />
        </div>
        <div className="content">
          <SubTitleBox>{yourResult?.summary}</SubTitleBox>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: yourResult.description }}
          ></div>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: yourResult.description2 }}
          ></div>
          <SubTitleBox>손님과 친할 것 같은 인형은...</SubTitleBox>
          <br />
          <div>{yourResult?.with}</div>
        </div>
        <div className="more-action">
          <button>
            <NavLink to="/question">다시 하기</NavLink>
          </button>
          <button
            onClick={(e: any) => {
              handleCopyClipBoard(window.location.href)
            }}
          >
            <span>페이지 주소 복사하기</span>
          </button>
          <ShareButton result={yourResult?.name} />
        </div>
      </WrapBox>
      <Toast text={toastText} active={toastState} />
    </>
  )
}
