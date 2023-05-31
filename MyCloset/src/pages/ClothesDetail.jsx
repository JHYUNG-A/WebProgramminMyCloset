// 김광민
// 내 옷 상세 페이지
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Detail from '../components/Detail/Detail';
import ClothesImage from '../components/ClothesImage/ClothesImage';
import Button from '../components/Button/Button';

function ClothesDetail({ clothes }) {
  const handleEdit = () => {
    // 여기에 수정 로직을 구현합니다.
  };

  const handleDelete = () => {
    // 여기에 삭제 로직을 구현합니다.
  };

  return (
    <div>
      <Navbar />
      <ClothesImage clothes={clothes} />
      <Detail clothes={clothes} />
      <Button onClick={handleEdit}>수정</Button>
      <Button onClick={handleDelete}>삭제</Button>
    </div>
  );
}

export default ClothesDetail;
