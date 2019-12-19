// import fetch from 'dva/fetch';
import axios from 'axios';
import config from '../config';
import qs from 'qs';

const service = axios.create({
  baseURL: config.apiUrl, // api base_url
  timeout: 6000, // 请求超时时间
  withCredentials: true,
});
['get', 'delete'].forEach(method => {
  service[method] = (...options) => {
    const [url, params, config] = options;
    return service({
      method,
      url,
      params,
      ...config,
    });
  };
});
const err = error => {
  console.log(error);
  return Promise.reject(error);
};
const businessErr = data => {
  const { code } = data;
  if (code === 298) {
    return Promise.reject(data);
  }
  // if (code === LOGOUT_CODE) {
  //   Vue.ls.clear();
  //   window.location.href = '/register';
  // }
  return data;
};
// request interceptor
service.interceptors.request.use(config => {
  // const url = config.url;
  // if (config.url.indexOf('@api') > -1) {
  //   config.url = apiUrl + url.slice(4);
  // }
  // if (config.url.indexOf('@socket') > -1) {
  //   config.url = socketUrl + url.slice(7);
  // }
  // const token = Vue.ls.get('token');
  if (config.method === 'post') {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...config.headers,
    };
    config.data = {
      ...config.data,
    };
    config.data = qs.stringify(config.data);
  }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  const { data } = response;
  // return data;
  if (response.status === 200) return businessErr(data);
}, err);

export default service;
