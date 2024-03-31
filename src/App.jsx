import Header from './layout/Header';
import LoginPage from './Components/Login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStore } from './contexts/UserContext';
import { AnimeStore } from './contexts/AnimeContext';
import SlideBar from './layout/SlideBar';
import ListaPage from './Components/ListaChamados/ListaPage';
import VipsModal from './Components/Modal/VipsModal';
import LinksModal from './Components/Modal/LinksModal';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStore>
          <AnimeStore>
            {console.log()}
            <Header />
            <main className="flex">
              <SlideBar />
              <VipsModal />
              <LinksModal />
              <Routes>
                <Route path="/" element={<div>Home</div>} />
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
