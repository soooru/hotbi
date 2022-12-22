import HelmetComponents from 'components/HelmetComponents'
import { NavLink } from 'react-router-dom'
export default function Store() {
  return (
    <>
      <HelmetComponents title=":모든 인형" />
      <div>
        <h2>모든 결과 모음</h2>
        <button>
          <NavLink to="/">홈 페이지로 돌아가기</NavLink>
        </button>
      </div>
    </>
  )
}
