export const shareKakao = ({ result, desc, mbti }) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_SHARE_KAKAO_KEY) // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `나의 인형은 : ${result}`,
        description: `마법의 인형가게에서 당신의 인형을 만나세요. 나의 인형은 ${result}, ${desc}`,
        imageUrl: `${window.location.origin}/images/${mbti}.png`,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      },
    })
  }
}
