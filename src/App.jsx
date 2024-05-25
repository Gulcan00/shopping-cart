import { Outlet } from 'react-router-dom';
import Header from './components/header/header';

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-[#eaeded] min-h-[calc(100vh-60px)]">
        <Outlet />
      </main>
    </>
  );
}
