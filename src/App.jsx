import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStore } from './contexts/UserContext';
import { AnimeStore } from './contexts/AnimeContext';
import { TikectesStore } from './contexts/TikectesContext';
import Header from './Components/layout/Header';
import SlideBar from './Components/layout/SlideBar';
import LoginPage from './Components/Login/LoginPage';
import HomePage from './Components/Home/HomePage';
import ListaPage from './Components/ListaChamados/ListaPage';
import VipsModal from './Components/Modal/VipsModal';
import LinksModal from './Components/Modal/LinksModal';
import AccountPage from './Components/Account/AccountPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStore>
          <AnimeStore>
            <TikectesStore>
              <Header />
              <main className="mainContainer dark:bg-cinzaRoxo-600 ">
                <SlideBar />
                <VipsModal />
                <LinksModal />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login/*" element={<LoginPage />} />
                  <Route path="/lista" element={<ListaPage />} />
                  <Route path="/conta" element={<AccountPage />} />
                </Routes>
              </main>
            </TikectesStore>
          </AnimeStore>
        </UserStore>
      </BrowserRouter>
    </>
  );
}

export default App;
