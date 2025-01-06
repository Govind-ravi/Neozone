import React, { useState } from "react";
import Google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

function AuthForms() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForGotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    remember: false,
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fp-email") {
      setForgotPasswordData({ email: value });
    } else setFormData({ ...formData, [name]: value });

    // Validate email
    if (name === "email") {
      const emailRegex = /\S+@\S+\.\S+/;
      setIsEmailValid(emailRegex.test(value));
    }

    // Validate password
    if (name === "password") {
      setIsPasswordValid(value.length >= 5);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }
    }

    // Reset form after submission
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      remember: false,
    });
    setErrorMessage("");
  };

  return (
    <>
      <div className="w-[30%] mx-auto mt-28 p-6 rounded-lg text-secondary-text">
        <div
          className="fixed top-4 right-4 text-4xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          &times;
        </div>
        <div
          className={`flip-container transition-transform duration-500 ${
            isSignUp ? "flip" : ""
          }`}
        >
          {/* Sign In form */}
          <div
            className={`form-face bg-white/90 front p-4 backface-hidden whitespace-nowrap`}
          >
            <h1 className="text-primary text-center font-semibold text-4xl mb-8">
              Sign In
            </h1>
            <form
              className="w-full space-y-8 my-4 font-semibold"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`peer block w-full p-2 border-2 rounded mb-2 focus:outline-none bg-transparent text-secondary-text 
                    ${
                      formData.email === ""
                        ? "border-gray-600"
                        : isEmailValid
                        ? "border-green-500"
                        : "border-red-500"
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
                  >
                    Email
                  </label>
                </div>

                {!isEmailValid && formData.email !== "" && (
                  <p className="text-red-500 text-sm font-normal">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className={`peer block w-full p-lg border-2 rounded mb-2
                focus:outline-none bg-transparent text-secondary-text placeholder:text-secondary-text/80
                ${
                  formData.password === ""
                    ? "border-gray-600"
                    : isPasswordValid
                    ? "border-green-500"
                    : "border-red-500"
                } 
                `}
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
                  >
                    Password
                  </label>
                </div>
                {!isPasswordValid && formData.password !== "" && (
                  <p className="text-red-500 text-sm font-normal">
                    Password must be at least 5 characters.
                  </p>
                )}
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={formData.remember}
                    onChange={(e) =>
                      setFormData({ ...formData, remember: e.target.checked })
                    }
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-secondary-text"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-default-text rounded text-btn-text font-normal p-lg hover:opacity-80 transition duration-200"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setIsForGotPassword(true)}
                  className="w-full bg-white border-2 border-dark-gray-btn text-black rounded font-normal p-lg hover:opacity-80 transition duration-200"
                >
                  Forgot Password
                </button>
              </div>
            </form>
            <button className="w-full bg-gray-600 text-default-text flex items-center gap-2 justify-center rounded font-normal p-lg hover:opacity-80 transition duration-200">
              <img src={Google} alt="(Google)" width={20} /> Login with Gmail
            </button>
            <p className="mt-2">
              Don' t have an account?{" "}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-primary cursor-pointer font-medium"
              >
                Sign Up
              </span>
            </p>
            {errorMessage && (
              <p className="text-red-500 mt-2 text-lg font-semibold">
                {errorMessage}
              </p>
            )}
          </div>

          {/* Sign Up form */}
          <div
            className={`form-face back rounded bg-white/90 p-4 rotate-y-180 backfce-hidden`}
          >
            <h1 className="text-primary text-center font-semibold text-3xl mb-4">
              Sign Up
            </h1>
            <form
              className="w-full space-y-6 my-4 font-semibold"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="peer block w-full p-2 border-2 rounded mb-2 focus:outline-none bg-transparent text-secondary-text border-gray-600"
                    placeholder=" "
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 top-0 translate-y-[-50%] text-sm bg-white"
                  >
                    Username
                  </label>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer block w-full p-2 border-2 rounded mb-2 focus:outline-none bg-transparent text-secondary-text border-gray-600"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 top-0 translate-y-[-50%] text-sm bg-white"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="peer block w-full p-2 border-2 rounded mb-2 focus:outline-none bg-transparent text-secondary-text border-gray-600"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 top-0 translate-y-[-50%] text-sm bg-white"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="peer block w-full p-2 border-2 rounded mb-2 focus:outline-none bg-transparent text-secondary-text border-gray-600"
                    placeholder=" "
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 top-0 translate-y-[-50%] text-sm bg-white"
                  >
                    Confirm Password
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-default-text rounded text-btn-text font-normal p-lg hover:opacity-80 transition duration-200"
              >
                Sign Up
              </button>
            </form>
            <button className="w-full bg-gray-600 text-default-text flex items-center gap-2 justify-center rounded font-normal p-lg hover:opacity-80 transition duration-200">
              <img src={Google} alt="(Google)" width={20} /> Sign Up with Gmail
            </button>
            <p>
              Already have an account?{" "}
              <span
                className="text-primary cursor-pointer font-medium"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </span>
            </p>
          </div>
          {/* </div> */}
        </div>

        {/* Overlay */}
        {isForgotPassword && <div onClick={()=>setIsForGotPassword(false)} className="fixed bg-white/70 z-10 w-screen h-screen top-0 left-0"></div>}

        {/* Forgot password */}
        {
          <div
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20  bg-white border-2 border-primary  shadow-md shadow-primary p-10 rounded  ${
              isForgotPassword ? "scale-100 " : "scale-0"
            } transition-transform duration-75`}
          >
            <div className="">
              <div
                onClick={() => setIsForGotPassword(false)}
                className="cursor-pointer text-3xl absolute top-0 right-3"
              >
                &times;
              </div>
              <h1 className="text-primary text-center font-semibold text-3xl mb-8">
                Forgot Password
              </h1>
              <form action="" className="space-y-3">
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      id="fp-email"
                      name="fp-email"
                      required
                      value={forgotPasswordData.email}
                      onChange={handleChange}
                      className={`peer block w-full p-2 border-2 rounded mb-2 focus:outline-none bg-transparent text-secondary-text 
                    ${
                      forgotPasswordData.email === ""
                        ? "border-gray-600"
                        : isEmailValid
                        ? "border-green-500"
                        : "border-red-500"
                    }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="fp-email"
                      className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
                    >
                      Email
                    </label>
                  </div>

                  {!isEmailValid && formData.email !== "" && (
                    <p className="text-red-500 text-sm font-normal">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-default-text p-lg rounded"
                >
                  Send Reset Link
                </button>
              </form>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default AuthForms;
