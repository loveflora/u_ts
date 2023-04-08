// 컴포넌트 생성 안할거라서 .ts 로 생성함

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString(); // 날짜 가져와서 문자로 변경
  }
}

export default Todo;
