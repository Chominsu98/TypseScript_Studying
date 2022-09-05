/* eslint-disable prettier/prettier */
// type ToDO={
//   id: number;
//   title: string;
//   done: boolean;
// };
// 이와같이별칭을 달아줄수도 있다

interface ToDo{
  id: number;
  title: string;
  done: boolean;
};
//또는 이렇게 인터페이스를 만들어 중복성을 줄일 수 있다

let todoItems: ToDo[];
//좀 더 구체적으로 타입을 명시해주면 더 좋구 정 안되면 any라도 넣어주자

// api
function fetchTodoItems(): ToDo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): ToDo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: ToDo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number,
   todo: ToDo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): ToDo[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1={
    id:4,
    title:"아이템4",
    done:false
  };
  addTodo(item1);
  addTodo({
    id:5,
    title:"아이템5",
    done:false
  })
}

// NOTE: 유틸 함수
function log(): void{
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
