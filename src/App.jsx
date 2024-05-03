import Header from './components/header/Header';
import Home from './components/home/Home';

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-[#eaeded]">
        <Home />
      </main>
    </>
  );
}
