import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Event Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    let error = "";

    if (name === "name") {
      if (value.length < 5) {
        error = "Name should have atleast 5 characters";
      }
    }

    if (name === "email") {
      if (!(value.includes("@") && value.includes("."))) {
        error = "Email should contain @ and .";
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        error = "Password should have atleast 8 characters";
      }
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // Submit Event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      errors.name === "" &&
      errors.email === "" &&
      errors.password === "" &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      alert("Registration Successful");
    } else {
      alert("Please Enter Valid Details");
    }
  };

  return (
    <div className="container">
      <h2>Mail Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="error">{errors.name}</td>
            </tr>

            <tr>
              <td>Email :</td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="error">{errors.email}</td>
            </tr>

            <tr>
              <td>Password :</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="error">{errors.password}</td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Register;