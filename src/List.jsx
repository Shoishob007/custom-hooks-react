/* eslint-disable react/prop-types */
import useInOnScreen from "./hooks/use-in-on-screen";
import { BiTrash } from "react-icons/bi";

export default function List({ Listitems, deleteData }) {
  const [isOnScreen, elementRefs] = useInOnScreen();

  console.log("List Rendered", Listitems);

  return (
    <div className="col-md-6 d-flex flex-column align-items-center text-center">
      <h3>Memoized List</h3>
      <ol className="list-group">
        {Listitems.map((item, index) => (
          <li
            key={index}
            ref={(item) => (elementRefs.current[index] = item)}
            className={`list-group-item mb-3 transform transition-transform ${
              isOnScreen[index] ? "translate-x-0" : "translate-x-full"
            }`}
            data-index={index}
          >
            <div className="position-relative">
              <button
                className="position-absolute ml-2"
                style={{ right: "-10px", top: "" }}
                onClick={() => deleteData(index)}
              >
                <BiTrash />
              </button>
            </div>
            <strong>
              {index + 1}. {item.name}
            </strong>
            <ul className="list-unstyled ms-3">
              <li>Expertise: {item.expertise}</li>
              <li>Email: {item.email}</li>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
