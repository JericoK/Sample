export type TodoData = {
  _id: string;
  title: string;
  description: string;
  date: string;
};

export type TodoState = {
  loading: boolean;
  data: TodoData[];
};

export type TODO = {
  todoID?: string;
  title: string;
  description: string;
};
