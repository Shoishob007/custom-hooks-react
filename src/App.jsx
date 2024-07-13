/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "./useForm";
import validate from "./validate";

export default function App() {
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, values]);
  };

  const { getFieldProps, handleSubmit, values, errors } = useForm(
    addData,
    validate
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Name</label>
              <input type="text" {...getFieldProps("name")} />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input type="text" {...getFieldProps("surname")} />
              {errors.surname && (
                <div className="invalid-feedback">{errors.surname}</div>
              )}
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="text" {...getFieldProps("age")} />
              {errors.age && (
                <div className="invalid-feedback">{errors.age}</div>
              )}
            </div>
            <div className="form-group">
              <label>Expertise</label>
              <input type="text" {...getFieldProps("expertise")} />
              {errors.expertise && (
                <div className="invalid-feedback">{errors.expertise}</div>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" {...getFieldProps("email")} />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="mt-5 mt-md-0 text-center">
            <h3>Added Data:</h3>
            {data.map((item, index) => (
              <div key={index} className="mb-3 p-3 border rounded text-left">
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Surname:</strong> {item.surname}
                </p>
                <p>
                  <strong>Age:</strong> {item.age}
                </p>
                <p>
                  <strong>Expertise:</strong> {item.expertise}
                </p>
                <p>
                  <strong>Email:</strong> {item.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
