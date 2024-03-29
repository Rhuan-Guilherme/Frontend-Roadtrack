import React from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStore = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const reponse = await fetch(url, options);
    const json = await reponse.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(email, senha) {
    try {
      setError(false);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, senha });
      const reponse = await fetch(url, options);
      if (!reponse.ok) throw new Error('Usuário ou senha inváildos');
      const json = await reponse.json();
      window.localStorage.setItem('token', json.token);
      await getUser(json.token);
      navigate('/');
    } catch (err) {
      setError('Usuário ou senha inváildos!');
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(null);
      setLogin(null);
      navigate('/login/cadastro');
      window.localStorage.removeItem('token');
    },
    [navigate],
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(false);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST({ token: token });
          const response = await fetch(url, options);
          if (!response.ok) throw new Error(response.statusText);
          getUser(token);
        } catch (err) {
          userLogout();
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, login, loading, error, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
