import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      첫 시작 페이지
      <div>임시입니다 ==</div>
      <Button mode="primary">시작하기 버튼</Button> <br />
      <NavLink to="question">question 페이지</NavLink> <br />
      <NavLink to="result/intp">result-intp 페이지</NavLink> <br />
      <NavLink to="notfound">notFound 페이지</NavLink>
    </div>
  );
}
