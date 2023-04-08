import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  // onAddTodo 함수 타입지정
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // 모든 DOM 요소들은 미리 정의된 타입을 가짐.
  // input 요소의 타입은 HTMLInputElement
  // <input> element is based on the HTMLInputElement interface

  // tsconfig.json 에 DOM 라이브러리 추가했기 때문에 사용가능

  const submitHandler = (e: React.FormEvent) => {
    // event: React.FormEvent 타입지정
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    // '.current?' 물음표가 있는 이유 : 레퍼런스에 아직 값이 설정되지 않았을 수도 있기 때문 --> string | undefined
    // '.current!' 느낌표가 있는 이유 :null 이 될 수 있지만, 이 시점에는 null이 아님 (값이 null이 아니라는 것을 확신할 때만 사용해야 함) --> string
    //   - 확실히 연결된 경우에만 사용
    //   - null 이 아닌 실제 값을 가져와라.
    // .current!value (언제나 value 가져올 것) : 절대 null이 될 수 없으니, 바로 객체의 프로퍼티로 들어가서 null이 아닌 실제 값을 가져와라.

    // 검증 : 공백을 제거했을 때 아무것도 없다면
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
