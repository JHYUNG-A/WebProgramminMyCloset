import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<NotFound />} />
  ),
);

export default Router;
