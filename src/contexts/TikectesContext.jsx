import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { GET_TIKECTS } from '../api';

export const TikectesContext = React.createContext();

export const TikectesStore = ({ children }) => {
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
  return (
    <TikectesContext.Provider
      value={{ tickets, setTickets, id, setId, returnTickets }}
    >
      {children}
    </TikectesContext.Provider>
  );
};
