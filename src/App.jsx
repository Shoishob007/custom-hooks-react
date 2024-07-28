/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Form from "./Form";
import Time from "./Time";
import List from "./List";

export default function App() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const addData = (values) => {
    const newData = [...data, values];
    setData(newData);
  };

  const deleteData = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  console.log(data);

  return (
    <div className="container mt-5">
      <div className="row">
        <Form addData={addData} />
        <List Listitems={data} deleteData={deleteData} />
      </div>
      <div>
        <Time />
      </div>
    </div>
  );
}
