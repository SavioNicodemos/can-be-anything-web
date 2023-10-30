import axiosLib from 'axios';

const axios = axiosLib.create({
  baseURL: process.env.BASE_URL,
});

export { axios };
