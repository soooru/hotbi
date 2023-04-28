import HelmetComponents from 'components/HelmetComponents'
import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'api'
import styled from 'styled-components'
import Toast from 'components/Toast'
import ShareButton from 'components/ShareButton'
import ProfileImage from 'components/ProfileImage'
import ic_ball from 'assets/images/ic_ball.png'

interface result {
  name?: string
  summary?: string
  description: string
  description2: string
  with?: string
}

const TitleBox = styled.div`
  font-size: 1.4rem;
  line-height: 1.5rem;
  font-weight: 500;
  text-align: center;
`
const SubTitleBox = styled.div`
  font-size: 1rem;
  line-height: 1.4rem;
  padding: 12px 0px;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
  color: #666;
`
const ProfileBg = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 0 0 150px 150px;
  position: absolute;
  top: 0px;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`
const WrapBox = styled.div`
  .content {
    padding: 16px 20px;
  }
  .star {
    font-size: 0.9rem;
    color: #666;
    padding: 20px 0px;
    border-top: 1px dashed #929292;
    margin-top: 10px;
  }
  .profile {
    position: relative;
    margin: 0px auto;
    background: #fff;
    border-radius: 59px 50px 0px 0px;
    width: calc(100% - 30px);
    text-align: center;
    margin-top: 80px;
    img {
      width: 250px;
      height: 250px;
      margin-top: -100px;
    }
  }
  .desc {
    margin-top: 20px;
    line-height: 1.4rem;
  }
  .content {
    position: relative;
  }
  .best-friends {
    margin-top: 40px;
    text-align: center;
    img {
      width: 40px;
      height: 40px;
    }
    div {
      margin: 10px 0px;
    }
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
        <ProfileBg />
        <div className="profile">
          <ProfileImage mbti={params.id} />
          <TitleBox>{yourResult?.name}</TitleBox>
          <SubTitleBox>{yourResult?.summary}</SubTitleBox>
          <div className="star">다정함 ⭐️⭐️⭐️⭐️⭐️ 이해심 🌸🌸🌸🌸🌸 </div>
        </div>
        <div className="content">
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: yourResult.description }}
          ></div>
          <br />
          <div className="best-friends">
            <img src={ic_ball} alt="avatar" />
            <div>찰떡궁합 친구</div>
            {yourResult?.with}
          </div>
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
