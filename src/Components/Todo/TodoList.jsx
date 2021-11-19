function TodoList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title} - {item.description}- {item.status ? "Yes" : "Pending"}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
