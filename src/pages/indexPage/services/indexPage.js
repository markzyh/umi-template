import axios from '../../../utils/request';

export function getBanner(options) {
  return axios.post('/house/get-banner', options);
}
