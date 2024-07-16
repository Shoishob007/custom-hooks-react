/* eslint-disable react/prop-types */
import { useMemo, useCallback, useEffect, useState, useRef } from "react";

export default function List({ items }) {
  const [observedItems, setObservedItems] = useState(new Set());

  const observer = useRef(null);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute("data-index"), 10);
            if (entry.isIntersecting) {
              setObservedItems((prev) => new Set(prev.add(index)));
            } else {
              setObservedItems((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          });
        },
        {
          threshold: 1,
          rootMargin: "0px 0px -10% 0px",
        }
      );
    }

    items.forEach((_, index) => {
      const element = document.querySelector(`[data-index="${index}"]`);
      if (element && observer.current) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [items]);

  const getListItems = useCallback(() => {
    return items.map((item, index) => (
      <li
        key={index}
        className={`list-group-item mb-3 transform transition-transform ${
          observedItems.has(index) ? "translate-x-0" : "translate-x-full"
        }`}
        data-index={index}
        ref={(current) => {
          if (current && observer.current) observer.current.observe(current);
        }}
      >
        <strong>
          {index + 1}. {item.name}
        </strong>
        <ul className="list-unstyled ms-3">
          <li>Expertise: {item.expertise}</li>
          <li>Email: {item.email}</li>
        </ul>
      </li>
    ));
  }, [items, observedItems]);

  console.log("List Rendered");

  const listItems = useMemo(() => getListItems(), [getListItems]);

  return (
    <div className="col-md-6 d-flex flex-column align-items-center text-center">
      <h3>Memoized List</h3>
      <ol className="list-group">{listItems}</ol>
    </div>
  );
}
