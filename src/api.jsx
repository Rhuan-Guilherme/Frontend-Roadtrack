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
