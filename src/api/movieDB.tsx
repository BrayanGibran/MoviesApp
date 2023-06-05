import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6b3d89f01988c748ebc6d4bd3a836803',
    language: 'es-ES',
  },
});

export default movieDB;
