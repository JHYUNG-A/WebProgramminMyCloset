import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userhome from './movePage/userhome.jsx'
import Mypage from './movePage/mypage.jsx'
import MainPage from './MainPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyCloset from './MyCloset.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MyCloset />}></Route>
          <Route path={"/user/home"} element={<Userhome />}></Route>
          <Route path={"/user/mypage"} element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;