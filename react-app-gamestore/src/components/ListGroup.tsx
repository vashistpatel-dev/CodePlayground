import { MouseEvent, useState } from "react";

// pass {item: [], heading: string}
interface ListGroupProps {
  // props should be treated as immutable vs state can be mutable
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const message = items.length === 0 && <p>No item found</p>; //items.length === 0 ? <p>No item found</p> : null;
  //   const handleClick = (event: MouseEvent) => console.log(event); //type annotation, event handler
  //   let selectedIndex = 4;

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    /*Fragment from react */
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item} //can use props.items
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              //   console.log(selectedIndex);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
