import axios from 'axios';
import { API } from 'src/constants';

export const getTodos = async () => axios.get(`${API}/todo`).then((response) => response);
