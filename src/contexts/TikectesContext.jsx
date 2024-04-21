import React from 'react';
import { UserContext } from '../contexts/UserContext';
import {
  DELETE_TICKETS,
  FECHA_TICKETS,
  GET_TIKECTS,
  POST_TICKETS,
  REABRE_TICKETS,
} from '../api';

export const TikectesContext = React.createContext();

export const TikectesStore = ({ children }) => {
  const { data } = React.useContext(UserContext);
  const [tickets, setTickets] = React.useState([]);
  const [id, setId] = React.useState(null);

  const [login, setLogin] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [vip, setVip] = React.useState(false);
  const [area, setArea] = React.useState('');
  const [ramal, setRamal] = React.useState('');
  const [patrimonio, setPatrimonio] = React.useState('');
  const [informacao, setInformacao] = React.useState('');
  const [local, setLocal] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [chamado, setChamado] = React.useState('');
  const [destinatario, setDestinatario] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [copy, setCopy] = React.useState(false);

  async function postTikects(tipoChamado) {
    setLoading(true);
    const now = new Date();
    const dia = now.getDate();
    const mes = now.getMonth() + 1;
    const ano = now.getFullYear();
    const hora = now.getHours();
    const minuto = now.getMinutes();
    const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;

    try {
      const { url, options } = POST_TICKETS({
        user_id: data.id,
        criador: data.nome,
        login,
        nome,
        cargo,
        area,
        ramal,
        patrimonio,
        informacao,
        chamado,
        local,
        destinatario,
        created_at: `${dia}/${mes}/${ano} às ${hora}:${minutoFormatado}`,
        tipo: tipoChamado,
        vip: vip ? 'sim' : 'nao',
      });
      const response = await fetch(url, options);
      const json = await response.json();
    } catch (err) {
      console.log(err);
    } finally {
      setLogin('');
      setNome('');
      setArea('');
      setCargo('');
      setRamal('');
      setPatrimonio('');
      setInformacao('');
      setLocal('');
      setVip('');
      setDestinatario('');
      setChamado('');
      returnTickets();
      setLoading(false);
    }
  }

  const deleteTicket = async (id) => {
    try {
      setLoading(true);
      const { url, options } = DELETE_TICKETS(id);
      const response = await fetch(url, options);
      const json = await response.json();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      returnTickets();
    }
  };

  const fechaTicket = async (id) => {
    try {
      const { url, options } = FECHA_TICKETS(id);
      const response = await fetch(url, options);
      const json = await response.json();
      returnTickets();
    } catch (err) {
      console.log(err);
    }
  };
  const reabreTicket = async (id) => {
    try {
      const { url, options } = REABRE_TICKETS(id);
      const response = await fetch(url, options);
      const json = await response.json();
      returnTickets();
    } catch (err) {
      console.log(err);
    }
  };

  const clipboard = (ticket, tipo) => {
    let cardText = '';
    switch (tipo) {
      case 'chamado':
        cardText = `Prezados, o Sr(a). ${
          ticket.nome.split(' ')[0]
        } entrou em contato ${ticket.informacao}.\n\nNome: ${
          ticket.nome
        }\nLogin: ${ticket.login}\nRamal: ${ticket.ramal}\nLocal: ${
          ticket.local
        }\nPatrimônio: ${ticket.patrimonio}\n
        `;
        break;
      case 'queda':
        cardText = `Senhor(a) Senhor(a) não identificado entrou em contato com o helpdesk no ramal 3416 e interrompeu a ligação antes do atendimento inicial.\n\nRamal: ${ticket.ramal}`;
        break;
      case 'trasnferencia':
        cardText = `Senhor(a) ${ticket.nome} entrou em contato solicitando transferência de ligação para o(a) senhor(a) ${ticket.destinatario}.\n\nRamal: ${ticket.ramal}`;
        break;
      case 'reiteracao':
        cardText = `Senhor(a) ${ticket.nome} entrou em contato requisitando a reiteração e brevidade no chamado SERVICEDESK-${ticket.chamado}\n\nLogin: ${ticket.login}\nRamal: ${ticket.ramal}`;
        break;
      default:
        console.error('Tipo de cartão desconhecido:', tipo);
        break;
    }

    navigator.clipboard
      .writeText(cardText)
      .then(() => {
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Erro ao copiar o conteúdo:', err);
        alert(
          'Erro ao copiar o conteúdo. Verifique se o navegador suporta essa funcionalidade.',
        );
      });
  };

  const returnTickets = React.useCallback(async () => {
    try {
      setLoading(true);
      const { url, options } = GET_TIKECTS(id);
      const response = await fetch(url, options);
      const json = await response.json();
      setTickets(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
    }
    returnTickets();
  }, [returnTickets, data]);
  return (
    <TikectesContext.Provider
      value={{
        tickets,
        setTickets,
        id,
        setId,
        returnTickets,
        postTikects,
        login,
        setLogin,
        nome,
        setNome,
        vip,
        setVip,
        area,
        setArea,
        ramal,
        setRamal,
        patrimonio,
        setPatrimonio,
        informacao,
        setInformacao,
        local,
        setLocal,
        cargo,
        setCargo,
        loading,
        setLoading,
        destinatario,
        setDestinatario,
        deleteTicket,
        chamado,
        setChamado,
        fechaTicket,
        reabreTicket,
        clipboard,
        copy,
      }}
    >
      {children}
    </TikectesContext.Provider>
  );
};
