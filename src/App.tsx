import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    // context를 Provider로 감싸야 함.
    <TodosContextProvider>
      <NewTodo />
      {/* NewTodo에 addTodoHandler 전달 */}
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
