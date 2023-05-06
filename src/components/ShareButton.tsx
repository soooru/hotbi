import { useEffect } from 'react'
import { shareKakao } from 'utils/ShareKakaoTalk'
import ic_kakao from 'assets/images/ic_kakao.png'

interface Props {
  result: any
  desc: any
  mbti: any
}

function ShareButton(result: Props) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <button onClick={() => shareKakao(result)}>
      <img src={ic_kakao} alt="avatar" />
    </button>
  )
}

export default ShareButton
