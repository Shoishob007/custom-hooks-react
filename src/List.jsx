/* eslint-disable react/prop-types */
import { useMemo, useCallback } from "react";

export default function List({ items }) {
  const getListItems = useCallback(() => {
    return items.map((item, index) => (
      <li key={index} className="list-group-item mb-3">
        <strong>
          {index + 1}. {item.name}
        </strong>
        <ul className="list-unstyled ms-3">
          <li>Expertise: {item.expertise}</li>
          <li>Email: {item.email}</li>
        </ul>
      </li>
    ));
  }, [items]);

  console.log("List Rendered");

  const listItems = useMemo(() => getListItems(), [getListItems]);

  return (
    <div className="col-md-6 d-flex flex-column align-items-center text-center">
      <h3>Memoized List</h3>
      <ol className="list-group">{listItems}</ol>
    </div>
  );
}
