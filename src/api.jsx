const API_URL = 'http://localhost/API/';
// const API_URL = 'https://roadtrack.com/API/'

export function TOKEN_POST(body) {
  return {
    url: API_URL + 'login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + 'validate',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    },
  };
}

export function GET_USER(token) {
  return {
    url: API_URL + 'validate',
    options: {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    },
  };
}

export function CREATE_USER(body) {
  return {
    url: API_URL + 'cadastro',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TERMO_USER(termo) {
  return {
    url: API_URL + 'usuarios',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(termo),
    },
  };
}

export function GET_VIPS() {
  return {
    url: API_URL + 'vips',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function ADD_VIPS(login) {
  return {
    url: API_URL + 'vips',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    },
  };
}

export function DELETE_VIPS(id) {
  return {
    url: API_URL + 'vips',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    },
  };
}

export function GET_TIKECTS(id) {
  return {
    url: API_URL + `tickets?id=${id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function ALTER_DADOS(body) {
  return {
    url: API_URL + 'dados',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
