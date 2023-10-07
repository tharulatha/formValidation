import "./App.css";
import { React, useState } from "react";

const App = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    const validateError = {};

    if (!formValue.username.trim()) {
      validateError.username = "Username is required";
    }
    if (!formValue.email.trim()) {
      validateError.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValue.email)) {
      validateError.email = "email is not valid";
    }
    if (!formValue.phone.trim()) {
      validateError.phone = "phone number is required";
    } else if (!formValue.phone.length < 10) {
      validateError.phone = "phonenumber is should not less than 10 numbers";
    }
    if (!formValue.password.trim()) {
      validateError.password = "password is required";
    } else if (!formValue.password.length < 6) {
      validateError.password = "password is should not less than 6 characters";
    }

    setFormError(validateError);
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      alert("Registered Successfully");
      console.log(formValue);
    }
  };

  return (
    <div className="formContainer">
      <h1>Register Form</h1>
      <form onSubmit={handleSumit} className="form">
        <div className="formInputContainer">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="inputField"
            placeholder="Enter the username"
            value={formValue.username}
            onChange={handleChange}
          />
          {formError.username && <p>{formError.username}</p>}
        </div>
        <div className="formInputContainer">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="inputField"
            placeholder="Enter the email"
            value={formValue.email}
            onChange={handleChange}
          />
          {formError.email && <p>{formError.email}</p>}
        </div>
        <div className="formInputContainer">
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            className="inputField"
            placeholder="Enter the Phone number"
            value={formValue.phone}
            onChange={handleChange}
          />
          {formError.phone && <p>{formError.username}</p>}
        </div>
        <div className="formInputContainer">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="inputField"
            placeholder="Enter the password"
            value={formValue.password}
            onChange={handleChange}
          />
          {formError.password && <p>{formError.username}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
