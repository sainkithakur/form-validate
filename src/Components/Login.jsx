import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [errors, setErrors] = useState({});

  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  const validator = new SimpleReactValidator();

  console.log(errors);

  function done(event) {
    event.preventDefault();

    if (validator.allValid()) {
      console.log(email, password);
      localStorage.setItem("token", "Token");
      navigate("/");
    } else {
      validator.showMessages();

      setErrors(validator.errorMessages);
    }
  }

  return (
    <div className="ml-96 mt-20">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log in</h1>
          <p className="text-sm ">Log in to access your account</p>
        </div>
        <form onSubmit={done} action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="text"
                onChange={(event) => {
                  setErrors({ ...errors, email: "" });
                  setEmail(event.target.value);
                }}
                value={email}
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md  "
              />
              {validator.message("email", email, "required|email")}
              {errors?.email}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="/forget"
                  className="text-xs hover:underline "
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                onChange={(event) => {
                  setErrors({ ...errors, password: "" });
                  setPassword(event.target.value);
                }}
                value={password}
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                Log in
              </button>
            </div>
            <p className="px-6 text-sm text-center ">
              Don't have an account yet?
              <Link
                to="/signup"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline "
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
