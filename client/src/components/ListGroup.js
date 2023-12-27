function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago"];

  return (
    <>
      <h1> List Group </h1>
      <ul ClassName="list-group">
        {items.map((item) => (
          <li key = {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
