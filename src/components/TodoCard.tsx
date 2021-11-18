import React from 'react';
import { batch } from 'react-redux';
import { todoActions, useAppDispatch } from 'src/redux';

interface TodoCardProps {
  todoID: string;
  title: string;
  description: string;
  date: string;
}

export const TodoCard = ({ todoID, title, description, date }: TodoCardProps) => {
  const dispatch = useAppDispatch();
  const newDate = new Date(date);

  const handleOnDelete = () => {
    if (title !== '' || description !== '') {
      batch(async () => {
        await dispatch(todoActions.deleteTodo(todoID));
        await dispatch(todoActions.fetchTodo());
      });
    }
  };

  return (
    <div className="flex flex-col py-5 justify-center items-center">
      <div
        className="w-full h-32 flex flex-row justify-center 
        items-center bg-main rounded-xl p-5"
      >
        <div>
          <h1 className="text-3xl text-primary font-bold mr-auto mt-1 font-montserrat">{title}</h1>
          <h1 className="text-sm text-primary font-regular mr-auto mt-1 font-montserrat">
            {description}
          </h1>
          <h1 className="text-sm text-primary font-regular mr-auto font-montserrat">
            {newDate.toString().substr(0, 15)}
          </h1>
        </div>
        <div className="flex flex-row ml-auto">
          {/* <button
            className="bg-green-200 h-12 w-24 hover:bg-green-100 
          text-white font-bold py-2 px-4 rounded mr-3"
            type="button"
          >
            Done
          </button> */}
          <button
            className="bg-lightred h-12 w-24 hover:bg-lightred-100 
          text-white font-bold py-2 px-4 rounded"
            onClick={() => handleOnDelete()}
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
