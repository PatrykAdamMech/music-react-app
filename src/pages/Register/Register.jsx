import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [firstName, setFirstName] = useState(""); // State to hold first name input value
  const [lastName, setLastName] = useState(""); // State to hold last name input value
  const [email, setEmail] = useState(""); // State to hold email input value
  const [password, setPassword] = useState(""); // State to hold password input value
  const [confirmPassword, setConfirmPassword] = useState(""); // State to hold confirm password input value

  /**
   * Handles the form submission event (Signing up functionality).
   * Sends user data to the backend for registration.
   */
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const userData = {
      firstName,
      lastName,
      email,
      password,
    }; // Collect user data from state
    console.log(userData);
  };

  const handleGoBack = () => {
    navigate(-1); // Goes back one step in history
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <button className="go-back-btn" onClick={handleGoBack}>
          <IoArrowBackSharp />
          Go back
        </button>
        <div>
          <h2 className="title">Create your account</h2>
          <p className="subtitle">
            Already have an account?{" "}
            <Link to="/login" className="sign-in-link">
              Sign In
            </Link>
          </p>
        </div>

        <form onSubmit={onSubmitHandler} className="form">
          {/* -------First and Last Name-------- */}
          <div className="name-fields">
            <div className="input-group">
              <label htmlFor="fname" className="input-label">
                First Name
              </label>
              <input
                id="fname"
                name="first name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="lname" className="input-label">
                Last Name
              </label>
              <input
                id="lname"
                name="last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="input"
              />
            </div>
          </div>

          {/*  -----------Email Address---------- */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="input"
            />
          </div>

          {/*  -----------Password---------- */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="input"
            />
          </div>

          {/*  -----------Confirm Password---------- */}
          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input"
            />
          </div>

          {/*  -----------Submit Button---------- */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
