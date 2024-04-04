import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStore } from './contexts/UserContext';
import { AnimeStore } from './contexts/AnimeContext';
import Header from './layout/Header';
import SlideBar from './layout/SlideBar';
import LoginPage from './Components/Login/LoginPage';
import HomePage from './Components/Home/HomePage';
import ListaPage from './Components/ListaChamados/ListaPage';
import VipsModal from './Components/Modal/VipsModal';
import LinksModal from './Components/Modal/LinksModal';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStore>
          <AnimeStore>
            <Header />
            <main className="mainContainer">
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
