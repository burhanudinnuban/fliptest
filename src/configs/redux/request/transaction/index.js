import axios from 'axios';
import {Config} from 'react-native-config';

export function listTransaction() {
  return axios.get(`${Config.DOMAIN}/frontend-test`);
}
