import React from 'react';
import { batch } from 'react-redux';
import { todoActions, useAppDispatch } from 'src/redux';

export const Modal = ({ setModal }: any) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleOnSubmit = () => {
    if (title !== '' || description !== '') {
      batch(async () => {
        await dispatch(
          todoActions.addTodo({
            title,
            description,
          }),
        );
        await dispatch(todoActions.fetchTodo());
        setModal(false);
      });
    }
  };

  return (
    <div
      className="justify-center bg-trans items-center flex overflow-x-hidden 
      overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div
          className="border-0 rounded-lg shadow-lg relative flex 
          flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div
            className="flex items-start justify-between p-5 border-b b
          order-solid border-trans rounded-t"
          >
            <h3 className="text-3xl text-fonts-100 font-bold font-montserrat">Add Todo</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="w-full max-w-xs">
              <form className="">
                <div className="mb-4">
                  <input
                    className="shadow appearance-none font-montserrat border rounded 
                    w-full py-2 px-3text-fonts-100 leading-tight focus:outline-none 
                    focus:shadow-outline"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="shadow appearance-none border border-red-500 rounded 
                w-full py-2 px-3 text-fonts-100 font-montserrat mb-3 leading-tight 
                focus:outline-none focus:shadow-outline"
                    cols={40}
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    rows={5}
                  />
                </div>
              </form>
            </div>
          </div>
          <div
            className="flex items-center justify-end p-6 border-t 
          border-solid border-trans rounded-b"
          >
            <button
              className="text-lightred background-transparent font-bold uppercase
             px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 
             ease-linear transition-all duration-150"
              onClick={() => setModal(false)}
              type="button"
            >
              Close
            </button>
            <button
              className="bg-main text-white active:bg-main
            font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
            outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => handleOnSubmit()}
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
