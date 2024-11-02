import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import "./Login.css";

const Login = ({ setIsLogin }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [email, setEmail] = useState(""); // State to hold email input value
  const [password, setPassword] = useState(""); // State to hold password input value

  /**
   * Handles the form submission event (Signing in functionality).
   * Sends user credentials to the backend for authentication.
   */
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(email, password);
    setIsLogin(true);
    navigate("/"); // Navigate to Home page
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div>
          <button className="go-back-btn" onClick={handleGoBack}>
            <IoArrowBackSharp />
            Go back
          </button>
          <h2 className="heading">
            Sign in to your account {/* Page heading */}
          </h2>
          <p className="register-prompt">
            Don&apos;t have an account?{" "}
            {/* Prompt for users who don't have an account */}
            <Link to="/register" className="register-link">
              Sign Up {/* Link to the registration page */}
            </Link>
          </p>
        </div>
        <form
          onSubmit={onSubmitHandler} // Form submission handler
          className="form-container"
        >
          <div>
            <label htmlFor="email" className="label">
              Email address {/* Label for email input */}
            </label>
            <div className="input-container">
              <input
                id="email"
                name="email"
                type="email"
                value={email} // Bind email input value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on email input change
                autoComplete="email"
                required
                className="input-field" // Styling for email input
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="label">
              Password {/* Label for password input */}
            </label>
            <div className="input-container">
              <input
                id="password"
                name="password"
                type="password"
                value={password} // Bind password input value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on password input change
                autoComplete="current-password"
                required
                className="input-field" // Styling for password input
              />
            </div>
          </div>

          {/* ----------Submit button--------- */}
          <button type="submit" className="submit-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
