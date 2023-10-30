import { ApiError } from '@/utils/errors/ApiError';
import { startWithSlash } from '@/utils/string';

type FetchTypes = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestConfigs = Omit<RequestInit, 'body' | 'method'> | undefined;

const BASE_URL = process.env.BASE_URL;

async function request(
  url: string,
  method: FetchTypes,
  body: any = null,
  configs: RequestConfigs | undefined = undefined
) {
  const cleanedUrl = startWithSlash(url);

  const response = await fetch(BASE_URL + cleanedUrl, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    ...configs,
  });

  const data = await response.json().catch(() => {
    return { message: 'Something went wrong, please try again later.' };
  });

  if (!response.ok) throw new ApiError(data.message, response.status, data);

  return data;
}

function get(url: string, configs: RequestConfigs = undefined) {
  return request(url, 'GET', null, configs);
}

function post(url: string, body: any, configs: RequestConfigs = undefined) {
  return request(url, 'POST', body, configs);
}

function put(url: string, body: BodyInit, configs: RequestConfigs = undefined) {
  return request(url, 'PUT', body, configs);
}

function del(url: string, configs: RequestConfigs = undefined) {
  return request(url, 'DELETE', null, configs);
}

const api = {
  get,
  post,
  put,
  del,
};

export default api;
