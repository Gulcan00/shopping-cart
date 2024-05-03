import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />}></Route>)
  );

  return <RouterProvider router={router} />;
}
