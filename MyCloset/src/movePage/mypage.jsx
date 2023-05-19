import { useNavigate } from "react-router-dom";

export default function mypage() {
  const moveUserHome = useNavigate();
  const moveMainPage = useNavigate();

  function goUserHome() {
    moveUserHome('/user/home');
  }

  function goMainPage() {
    moveMainPage('/');
  }
  return (
    <div className="mypage">
      <div>마이페이지 입니다.</div>
      <button onClick={goMainPage}>메인 페이지로이동</button>
      <button onClick={goUserHome}>사용자 홈으로이동</button>
    </div>
  );
}