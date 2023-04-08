import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  // const 함수명: React.FC<{ 프로퍼티 객체타입 }> = (props) => {
  // FC (Functional Component)
  // React.FC<{}> : 내부적으로 사용되는 제네릭 타입(React.FC에 의해 정의된 type T)에 구체적인 값을 집어넣음.
  // FC 타입 : 제네릭 타입 (함수형 컴포넌트마다 props에 대한 정의가 다르기 때문) -> 여기에 집어 넣을 값은 만든 props 객체 (함수형 컴포넌트에 맞게 props 정의한 객체)

  // React.FC<{}> : FC 타입 내부의 기능을 밖으로 꺼냄 (어떤 객체타입을 정의하든 객체의 기본타입, children 프로퍼티와 합쳐주는 기능)
  const todosCtx = useContext(TodosContext);
  // 타입이 자연스럽게 TodosContextObj 와 연결
  // props 대신에, context 사용하는거임.

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          // bind() : 실행할 함수를 미리 설정
        />
      ))}
    </ul>
  );
};

export default Todos;
