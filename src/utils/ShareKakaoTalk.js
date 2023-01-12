export const shareKakao = (text) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_SHARE_KAKAO_KEY) // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Share.sendDefault({
      objectType: 'text',
      text: `마법의 인형가게 : ${text}`,
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    })
  }
}
