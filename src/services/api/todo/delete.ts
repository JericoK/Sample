import axios from 'axios';
import { API } from 'src/constants';

export const deleteTodos = async (todoID: string) => {
  axios.delete(`${API}/todo/${todoID}`).then((response) => response);
};
