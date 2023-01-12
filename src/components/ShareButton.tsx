import { useEffect } from 'react'
import { shareKakao } from 'utils/ShareKakaoTalk'

interface Props {
  result?: string
}

function ShareButton({ result }: Props) {
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
      <span>카카오톡으로 공유하기</span>
    </button>
  )
}

export default ShareButton
