function ListGroup() {
  let items = ["Ney York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];

  const message = items.length === 0 && <p>No item found</p>; //items.length === 0 ? <p>No item found</p> : null;

  return (
    /*Fragment from react */
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
