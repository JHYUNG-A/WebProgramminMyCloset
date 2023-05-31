import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root from '../pages/Root';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import TopClothes from '../pages/TopClothes'; // 상의 페이지
import BottomClothes from '../pages/BottomClothes'; // 하의 페이지
import OuterClothes from '../pages/OuterClothes'; // 아우터 페이지
import OOTD from '../pages/OOTD'; // OOTD 페이지
import About from '../pages/About'; // 개발자 소개 페이지
import ClothesDetail from '../pages/ClothesDetail'; // 내 옷 상세 페이지
import WeatherRecommend from '../pages/WeatherRecommend'; // 날씨별 옷차림 추천 페이지
import MyClothes from '../pages/MyClothes';

// const Router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Home />} errorElement={<NotFound />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/top" element={<TopClothes />} /> 
//       <Route path="/bottom" element={<BottomClothes />} /> 
//       <Route path="/outer" element={<OuterClothes />} /> 
//       <Route path="/ootd" element={<OOTD />} /> 
//       <Route path="/about" element={<About />} /> 
//       <Route path="/weather-recommend" element={<WeatherRecommend />} />
//     </Route>,
//   ),
// );

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/top",
    element: <TopClothes />,
  },
  {
    path: "/bottom",
    element: <BottomClothes />,
  },
  {
    path: "/outer",
    element: <OuterClothes />,
  },
  {
    path: "/ootd",
    element: <OOTD />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/weather-recommend",
    element: <WeatherRecommend />,
  },
  {
    path: "/myclothes",
    element: <MyClothes />,
  }
]);

export default Router;