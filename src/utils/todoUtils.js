export const getLastId = (todoList) => {
    let lastId = 0;
    todoList.map((todo) => lastId = (todo.id > lastId ? todo.id : lastId));
    return lastId;
  }