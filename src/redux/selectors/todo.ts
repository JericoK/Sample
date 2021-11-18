import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

const todo = (state: RootState) => state.todo;

export const selectTodoLoading = createSelector(todo, (state) => state.loading);

export const selectAllTodo = createSelector(todo, (state) => state.data ?? []);

export const selectAllTodoAndMetadata = createSelector(
  selectAllTodo,
  selectTodoLoading,
  (data = [], loading = false) => ({ data, loading }),
);
