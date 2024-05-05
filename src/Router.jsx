import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
