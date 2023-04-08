import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

interface TodoChildren {
  children: ReactNode;
}

// type alias
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void; // 함수의 타입을 정의
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {}, // 함수를 정의
  removeTodo: (id: string) => {},
});

// context 제공하는 컴포넌트 : context의 상태(state)를 관리하는 역할
const TodosContextProvider = (props: TodoChildren) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const setTodos: React.Dispatch ---> 함수를 호출해 state를 변경할 수 있음. (state 업데이트 요청)
  // useState([]) : 초깃값 ---> useState<never[]>

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
      // concat : 새로운 배열을 반환
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
