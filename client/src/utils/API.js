import axios from 'axios';

export const login = async (data) => {
  console.log('BEFORE AXIOS POST /LOGIN');
  console.log('DATA: ', data);
  return axios.post('/login', data);
};

export const signup = (data) => {
  console.log('BEFORE AXIOS POST /LOGIN');
  console.log('DATA: ', data);
  return axios.post('/signup', data);
}

export const getUser = () => {
  return axios.get('/api/user');
}
