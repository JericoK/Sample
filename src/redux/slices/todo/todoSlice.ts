import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos, addTodos, updateTodos, deleteTodos } from 'src/services';
import { TodoState, TODO } from './type';

export const todosInitialState: TodoState = {
  loading: false,
  data: [],
};

const fetchTodo = createAsyncThunk('todo/fetchTodo', async () => {
  const data: any = await getTodos();
  return data.data;
});

const addTodo = createAsyncThunk('todo/addTodo', async (body: TODO) => {
  const { data }: any = await addTodos(body);
  return data;
});

const updateTodo = createAsyncThunk('todo/updateTodo', async (body: TODO) => {
  const { data }: any = await updateTodos(body);
  return data;
});

const deleteTodo = createAsyncThunk('todo/deleteTodo', async (todoID: string) => {
  const { data }: any = await deleteTodos(todoID);
  return data;
});

const { actions, reducer } = createSlice({
  name: 'todo',
  initialState: todosInitialState,
  reducers: {},
  extraReducers: {
    [fetchTodo.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchTodo.fulfilled.type]: (state, { payload: { data } }: PayloadAction<TodoState>) => {
      state.data = data;
      state.loading = false;
    },
  },
});

export const todoActions = {
  ...actions,
  fetchTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};

export const todoReducer = reducer;
