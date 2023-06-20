// 김광민
// 내 옷 상세 페이지
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Detail from "../components/Detail/Detail";
import ClothesImage from "../components/ClothesImage/ClothesImage";
import { DetailContainer, DetailWrapper, ButtonContainer, StyledButton } from './ClothesDetail.style';

function ClothesDetail() {
  const { id } = useParams();
  const numericId = Number(id);
  const navigate = useNavigate();
  const clothes = JSON.parse(localStorage.getItem("clothes"));
  const item = clothes[id];

  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    clothes[id] = editedItem;
    localStorage.setItem("clothes", JSON.stringify(clothes));
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const updatedClothes = clothes.filter((_, index) => index !== numericId);
      localStorage.setItem("clothes", JSON.stringify(updatedClothes));
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setEditedItem({
      ...editedItem,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Navbar />
      <DetailContainer>
        <ClothesImage item={item} />
        <DetailWrapper>
          {isEditing ? (
            <form onSubmit={handleSave}>
              <input
                name="name"
                value={editedItem.name}
                onChange={handleChange}
              />
              <input
                name="type"
                value={editedItem.type}
                onChange={handleChange}
              />
              <input
                name="purchaseDate"
                value={editedItem.purchaseDate}
                onChange={handleChange}
              />
              <input
                name="size"
                value={editedItem.size}
                onChange={handleChange}
              />
              <input
                name="price"
                value={editedItem.price}
                onChange={handleChange}
              />
              <input
                name="image"
                value={editedItem.image}
                onChange={handleChange}
              />
              <StyledButton type="submit">Save</StyledButton>
            </form>
          ) : (
            <Detail item={item} />
          )}
          <ButtonContainer>
            <StyledButton onClick={isEditing ? handleSave : handleEdit}>
              {isEditing ? "Save" : "수정"}
            </StyledButton>
            <StyledButton onClick={handleDelete}>삭제</StyledButton>
          </ButtonContainer>
        </DetailWrapper>
      </DetailContainer>
    </div>
  );
}

export default ClothesDetail;