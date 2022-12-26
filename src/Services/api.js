import axios from 'axios';

export const BASE_URL = 'https://mock-api.driven.com.br/api/v4/driven-plus';


function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  console.log(body);
  return promise;
}

function assinarPlano(body, token) {
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/subscriptions/${idPlan}`, body, config);

  return promise;
}


const api = {
  createConfig,
  login,
  signUp,
  assinarPlano
}

export default api;