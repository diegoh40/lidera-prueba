import axios from 'axios';


const API_KEY = '491bdb2a7cc34f15940ba367371b1351'; 

// Configura las cabeceras de respuesta para permitir solicitudes desde tu origen
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://diegoh40.github.io'; // Reemplaza con tu origen específico
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': API_KEY
  }
});

export const getNews = () => {
  return newsApi.get('/top-headlines', {
    params: {
      country: 'us'
    }
  });
};







