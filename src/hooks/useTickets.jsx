import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { GET_TIKECTS } from '../api';

const useTickets = () => {
  const { data } = React.useContext(UserContext);
  const [tickets, setTickets] = React.useState([]);
  const [id, setId] = React.useState(null);

  const returnTickets = React.useCallback(async () => {
    const { url, options } = GET_TIKECTS(id);
    const response = await fetch(url, options);
    const json = await response.json();
    setTickets(json);
  }, [id]);

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
    }
    returnTickets();
  }, [returnTickets, data]);

  return { tickets, setTickets, id, setId, returnTickets };
};

export default useTickets;
