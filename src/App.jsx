import Header from './layout/Header';
import LoginPage from './Components/Login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStore } from './contexts/UserContext';
import { AnimeStore } from './contexts/AnimeContext';
import SlideBar from './layout/SlideBar';
import ListaPage from './Components/ListaChamados/ListaPage';
import VipsModal from './Components/Modal/VipsModal';
import LinksModal from './Components/Modal/LinksModal';
import HomePage from './Components/Home/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStore>
          <AnimeStore>
            <Header />
            <main className="flex h-[1900px]">
              <SlideBar />
              <VipsModal />
              <LinksModal />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login/*" element={<LoginPage />} />
                <Route path="/lista" element={<ListaPage />} />
              </Routes>
            </main>
          </AnimeStore>
        </UserStore>
      </BrowserRouter>
    </>
  );
}

export default App;
