import axios from 'axios';
import { API } from 'src/constants';

interface TODO {
  todoID?: string;
  title: string;
  description: string;
}

export const updateTodos = async (body: TODO) => {
  axios
    .put(`${API}/todo`, {
      todoID: body.todoID,
      title: body.title,
      description: body.description,
    })
    .then((response) => response);
};
