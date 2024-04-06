import React from 'react';
import { ADD_VIPS, GET_VIPS, DELETE_VIPS, TERMO_USER } from '../api';

const useUsers = () => {
  const [vip, setVips] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [value, setValue] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const returnUsers = async (termo) => {
    try {
      setLoading(true);
      const { url, options } = TERMO_USER({ termo });
      const response = await fetch(url, options);
      const json = await response.json();
      setUsers(json);
    } catch (err) {
      console.error('Erro ao retornar usuários: ' + err);
    } finally {
      setLoading(false);
    }
  };

  const returnVips = async () => {
    try {
      setLoading(true);
      const { url, options } = GET_VIPS();
      const response = await fetch(url, options);
      const json = await response.json();
      setVips(json);
    } catch (error) {
      console.error('Ocorreu um erro ao retornar a lista VIP:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    returnVips();
  }, []);

  const deleteVip = React.useCallback(async (id) => {
    try {
      setLoading(true);
      const { url, options } = DELETE_VIPS({ id, remove: 'true' });
      const response = await fetch(url, options);
      returnVips();
    } catch (error) {
      console.error('Ocorreu um erro ao excluir o VIP:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addVips = React.useCallback(async (login) => {
    try {
      setLoading(true);
      const { url, options } = ADD_VIPS({ login });
      const response = await fetch(url, options);
      console.log(response);
      returnVips();
    } catch (error) {
      console.error('Ocorreu um erro ao adicionar o VIP:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    vip,
    setVips,
    value,
    setValue,
    users,
    setUsers,
    returnUsers,
    returnVips,
    deleteVip,
    addVips,
    loading,
  };
};

export default useUsers;
