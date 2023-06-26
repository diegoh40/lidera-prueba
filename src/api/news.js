import axios from 'axios';


const API_KEY = '491bdb2a7cc34f15940ba367371b1351'; 

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







