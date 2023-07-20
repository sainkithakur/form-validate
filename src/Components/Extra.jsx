import { useState } from "react";
import "./App.css";
import SimpleReactValidator from "simple-react-validator";

function App() {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});
  // console.log(errors);

  const validator = new SimpleReactValidator({
    validators: {
      number: {
        message: "The :attribute must be a valid phone number.",
        rule: function (val, params, validator) {
          return (
            validator.helpers.testRegex(val, /^\d{10}$/) &&
            params.indexOf(val) === -1
          );
        },
      },
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: "" });
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validator.allValid()) {
      alert("You submitted the form and stuff!");
    } else {
      validator.showMessages();
      setErrors(validator.errorMessages);
      // console.log(validator.errorMessages);
    }
  };
  return (
    <div>
      <h3> Form Validation</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formValue?.name}
            onChange={handleChange}
            placeholder="enter your name"
          />
          {validator.message("name", formValue?.name, "required")}
          <p>{errors?.name}</p>
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={formValue?.email}
            onChange={handleChange}
            placeholder="enter your email"
          />
          {validator.message("email", formValue?.email, "required|email")}
          <p>{errors?.email}</p>
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={formValue?.phone}
            onChange={handleChange}
            placeholder="enter your phone"
          />
          {validator.message("phone", formValue?.phone, "required|number")}
          <p>{errors?.phone}</p>
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formValue?.password}
            onChange={handleChange}
            placeholder="enter passowrd"
          />
          {validator.message("password", formValue?.password, "required")}
          <p>{errors?.password}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;