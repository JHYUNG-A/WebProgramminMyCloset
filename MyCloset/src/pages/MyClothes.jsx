// 김준하
// 내 옷장 페이지
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import './MyClothes.css';

function MyClothes() {

  const [item, setItem] = useState({
    name: '',
    type: 'top',  // 기본값을 top으로 설정
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
      <h1>My Clothes</h1>
      <Navbar /><br/>
      
      <div className='clothes-container'>
        {currentClothes.map((clothe, index) => (
          <Link to={`/clothes/${index}`} key={index}>
            <div key={index}>
              <img src={clothe.image} alt={clothe.name} />
              <h2>{clothe.name}</h2>
              <p>{clothe.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className='button-container'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <h2>Add Clothes</h2>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input className='input-field' name="name" placeholder="Name" onChange={handleChange} />
          <select className='input-field' name="type" value={item.type} onChange={handleChange}>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="outer">Outer</option>
          </select>
          <input className='input-field' name="purchaseDate" placeholder="Purchase Date" onChange={handleChange} />
          <input className='input-field' name="size" placeholder="Size" onChange={handleChange} />
          <input className='input-field' name="price" placeholder="Price" onChange={handleChange} />
          <input className='input-field' name="image" placeholder="Image URL" onChange={handleChange} />
          <input className='input-field' name="minTemp" placeholder="최저기온" onChange={handleChange} />
          <input className='input-field' name="maxTemp" placeholder="최고기온" onChange={handleChange} />
          <button className='submit-button' type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default MyClothes