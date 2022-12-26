import axios from 'axios';
import AuthContext from '../context/auth';

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

function SubscribePlan(body, auth) {

  const promise = axios.post(`${BASE_URL}/subscriptions`, body, auth);

  return promise;
}


const api = {
  createConfig,
  login,
  signUp,
  SubscribePlan
}

export default api;