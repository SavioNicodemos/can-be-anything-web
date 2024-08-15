import axiosLib from 'axios';

const axios = axiosLib.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export { axios };
