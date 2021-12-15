import React from 'react';
import { Modal, TodoCard } from 'src/components';
import { batch, useDispatch, useSelector } from 'react-redux';
import { todoActions, selectAllTodo } from 'src/redux';

const App = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(selectAllTodo);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    batch(() => {
      dispatch(todoActions.fetchTodo());
    });
  }, [dispatch, batch, todoActions]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      {modal ? <Modal setModal={setModal} /> : null}
      <h1 className="text-3xl s font-black mb-4 mt-4 font-montserrat">MERN To-Do App</h1>
      <div className="w-4/12 h-full mb-4 px-10 py-11 rounded-xl bg-secondary">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-3xl font-black mr-auto font-montserrat">TODO</h1>
          <button
            className="bg-green-200 hover:bg-green-100 text-white font-bold py-2 px-4 rounded"
            onClick={() => setModal(true)}
            type="button"
          >
            Add Todo
          </button>
        </div>
        {allTodos?.map((item) => (
          <TodoCard
            date={item.date}
            description={item.description}
            key={item._id}
            title={item.title}
            todoID={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
