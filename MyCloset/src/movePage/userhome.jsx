import { useNavigate } from "react-router-dom";

export default function home() {
  const moveMyPage = useNavigate();
  const moveMainPage = useNavigate();

  function goMyPage() {
    moveMyPage('/user/mypage');
  }

  function goMainPage() {
    moveMainPage('/');
  }
  return (

    <div className="home">
      <div>사용자 홈 입니다.</div>
      <button onClick={goMainPage}>메인 페이지로이동</button>
      <button onClick={goMyPage}>마이 페이지로이동</button>
    </div>
  );
}