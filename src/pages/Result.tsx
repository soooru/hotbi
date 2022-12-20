import { useParams } from 'react-router-dom';

export default function Result() {
  const params = useParams();
  return (
    <div>
      <div>결과 페이지</div>
      <div>이미지</div>
      <div>너의 결과는 사실 {params.id}</div>
    </div>
  );
}
