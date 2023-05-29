import { useNavigate } from "react-router-dom";

export default function mypage() {
    const moveUserHome = useNavigate();
    const moveMyPage = useNavigate();

    function goUserHome() {
        moveUserHome('/user/home');
    }

    function goMyPage() {
        moveMyPage('/user/mypage')
    }
    return (
        <div>
            <div>메인 페이지</div>
            <button onClick={goUserHome}>사용자 홈으로이동</button>
            <button onClick={goMyPage}>마이 페이지로 이동</button>
        </div>
    );
}