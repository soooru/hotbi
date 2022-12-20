import { NavLink } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      <h2>에러 페이지</h2>
      <button>
        <NavLink to="question">홈 페이지로 돌아가기</NavLink>
      </button>
    </div>
  );
}
