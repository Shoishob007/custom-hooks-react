/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./Form";
import Time from "./Time";
import List from "./List";

export default function App() {
  const [data, setData] = useState([]);

  const addData = (values) => {
    setData([...data, values]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <Form addData={addData} />
        <List items={data} />
      </div>
      <div>
        <Time />
      </div>
    </div>
  );
}
