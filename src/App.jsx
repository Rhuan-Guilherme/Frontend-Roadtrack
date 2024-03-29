import Header from './layout/Header';
import LoginPage from './Components/Login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStore } from './contexts/UserContext';
import SlideBar from './layout/SlideBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStore>
          {console.log()}
          <Header />
          <main className="flex">
            <SlideBar />
            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/login/*" element={<LoginPage />} />
            </Routes>
          </main>
        </UserStore>
      </BrowserRouter>
    </>
  );
}

export default App;
