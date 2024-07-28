/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "./hooks/useForm";
import validate from "./validate";

export default function Form({ addData }) {
  const { addFormData, handleSubmit, values, errors } = useForm(
    () => addData(values),
    validate
  );

  console.log("Form Rendered");

  return (
    <div className="col-md-6">
      <h3 className="text-center">Add Details</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            {...addFormData("name")}
            placeholder="Enter your name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input
            type="text"
            {...addFormData("surname")}
            placeholder="Enter your sur-name"
          />
          {errors.surname && (
            <div className="invalid-feedback">{errors.surname}</div>
          )}
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            {...addFormData("age")}
            placeholder="Enter your age"
          />
          {errors.age && <div className="invalid-feedback">{errors.age}</div>}
        </div>
        <div className="form-group">
          <label>Expertise</label>
          <input
            type="text"
            {...addFormData("expertise")}
            placeholder="Enter your expertises"
          />
          {errors.expertise && (
            <div className="invalid-feedback">{errors.expertise}</div>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...addFormData("email")}
            placeholder="Enter your email"
          />
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
  );
}
