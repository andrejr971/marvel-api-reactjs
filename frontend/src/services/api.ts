import axios from 'axios';

export const params = {
  apikey: 'c864834742a06404ba0a7f38d9ec30f0',
  ts: '1593199711102',
  hash: '5fd2f51a60c7bffff4e3bba154d3187e',
};

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
});

export default api;
