import axios from 'axios';
import { API } from 'src/constants';

interface TODO {
  todoID?: string;
  title: string;
  description: string;
}

export const addTodos = async (body: TODO) => {
  axios
    .post(`${API}/todo`, {
      title: body.title,
      description: body.description,
    })
    .then((response) => response);
};
