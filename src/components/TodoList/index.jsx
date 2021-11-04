const TodoList = ({ todos, handleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (<li key={index} id={index}>
            {todo}
          <button onClick={()=>handleTodo(todo)}>remover</button>
        </li>)
      })}
    </ul>
  );
}
export default TodoList;
