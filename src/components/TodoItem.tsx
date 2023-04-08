import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props,
) => {
  // <> 타입정의 안하면, props.children 밖에 없는데,
  // <> 타입정의 하면, 프로퍼티를 기존 props와 합칠 수 있음.
  // const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  //                     models 폴더에서 Todo 가져오는 법
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
