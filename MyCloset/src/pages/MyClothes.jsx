// 김준하
// 내 옷장 페이지
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function MyClothes() {

  const [item, setItem] = useState({
    name: '',
    type: '', 
    purchaseDate: '',
    size: '',
    price: '',
    image: '',
    minTemp: '', // 옷이 적합한 최저 기온
    maxTemp: '', // 옷이 적합한 최고 기온
});

  const [clothes, setClothes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const storedClothes = JSON.parse(localStorage.getItem('clothes')) || [];
    setClothes(storedClothes);
  }, []);


  const handleChange = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newClothes = [...clothes, item];
    localStorage.setItem('clothes', JSON.stringify(newClothes));
    setClothes(newClothes);
    alert('Item added!');
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(clothes.length / itemsPerPage)));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClothes = clothes.slice(startIndex, endIndex);

  return (
    <div>
      <Navbar />
      <h1>Add Clothes</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="type" placeholder="Type" onChange={handleChange} />
        <input name="purchaseDate" placeholder="Purchase Date" onChange={handleChange} />
        <input name="size" placeholder="Size" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="image" placeholder="Image URL" onChange={handleChange} />
        <input name="minTemp" placeholder="최저기온" onChange={handleChange} />
        <input name="maxTemp" placeholder="최고기온" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <h1>My Clothes</h1>
      {currentClothes.map((clothe, index) => (
        <Link to={`/clothes/${index}`} key={index}>
        <div key={index}>
          <img src={clothe.image} alt={clothe.name} />
          <h2>{clothe.name}</h2>
          <p>{clothe.price}</p>
          </div>
        </Link>
      ))}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default MyClothes