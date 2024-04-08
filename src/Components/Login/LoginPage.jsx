import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../contexts/UserContext';

const LoginPage = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/" />;
  return (
    <div className="flex w-screen h-screen items-center bg-cinza-100">
      <section className="lg:w-[50%] hidden lg:flex flex-col items-center justify-center h-screen p-3">
        <div className="bg-gradient-to-b from-roxo-300 to-roxo-600 w-full h-full rounded-md flex flex-col items-center justify-center">
          <h1 className="text-cinza-100 lg:text-8xl 2xl:text-9xl font-semibold">
            RoadTrack
          </h1>
          <p className="text-cinza-200 text-center mt-4">
            Sua solução completa para o gerenciamento eficiente <br /> para o
            registo de monitoramentos de servicedesk.
          </p>
        </div>
      </section>

      <div className="w-full lg:w-[50%] p-10 lg:p-20 xl:p-32">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginCreate />} />
          <Route path="senha" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </div>
  );
};

export default LoginPage;
