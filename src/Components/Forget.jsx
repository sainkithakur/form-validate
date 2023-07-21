import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
const Forget = () => {
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const validator = new SimpleReactValidator({
    validators: {
      number: {
        // name the rule
        message: "The :attribute must be a valid phone number.",
        rule: (val, params, validator) => {
          return (
            validator.helpers.testRegex(val, /^\d{10 }$/i) &&
            params.indexOf(val) === -1
          );
        },
        messageReplace: (message, params) =>
          message.replace(":values", this.helpers.toSentence(params)),
        required: true,
      },
    },
  });
  console.log(errors);
  function done(event) {
    event.preventDefault();
    if (validator.allValid()) {
      console.log(email, phone, password);
      navigate("/");
    } else {
      validator.showMessages();

      setErrors(validator.errorMessages);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
        <b>
          <h1>Forget Password</h1>
        </b>
        <form
          onSubmit={done}
          action=""
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100"
        >
          <label htmlFor="email" className="self-start text-xs font-semibold">
            Username or Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setErrors({ ...errors, email: "" });
              setEmail(event.target.value);
            }}
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
          />
          {validator.message("email", email, "required|email")}
          {errors?.email}

          <label htmlFor="phone" className="self-start text-xs font-semibold">
            Phone{" "}
          </label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(event) => {
              setErrors({ ...errors, phone: "" });
              setPhone(event.target.value);
            }}
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
          />
          {validator.message("phone", phone, "required|phone")}
          {errors?.phone}

          <label
            htmlFor="password"
            className="self-start mt-3 text-xs font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => {
              setErrors({ ...errors, password: "" });
              setPassword(event.target.value);
            }}
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
          />
          {validator.message("password", password, "required")}
          {errors?.password}
          <button
            type="submit"
            className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Login
          </button>
          <div className="flex justify-center mt-6 space-x-2 text-xs">
            <Link
              rel="noopener noreferrer"
              to="/signup"
              className="dark:text-gray-400 flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-green-600 dark:text-white"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
