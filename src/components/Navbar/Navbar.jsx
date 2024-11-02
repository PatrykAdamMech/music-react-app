import { FaMusic, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import "./Navbar.css";

// Define the Navbar component which takes in several props
const Navbar = ({
  isLogin, // Boolean indicating if the user is logged in
  libraryStatus, // Boolean to determine if the library sidebar is open
  setLibraryStatus, // Function to toggle the library sidebar
  favoriteStatus, // Boolean to determine if the favorites sidebar is open
  setFavoriteStatus, // Function to toggle the favorites sidebar
  accountStatus, // Boolean to determine if the account sidebar is open
  setAccountStatus, // Function to toggle the account sidebar
}) => {
  return (
    <div className="nav-container">
      {/* Header Logo */}
      <h1
        className={`nav-h1 ${
          !libraryStatus && !favoriteStatus && !accountStatus && "visible"
        }`}
        // Conditionally apply the 'visible' class if none of the sidebars are open
      >
        Logo
      </h1>

      {/* Navigation buttons */}
      <div className="nav-buttons-flex">
        {/* Conditional rendering based on login status */}
        {isLogin ? (
          // If the user is logged in, show the Account button
          <button
            className="nav-button"
            onClick={() => {
              setAccountStatus(!accountStatus); // Toggle account sidebar visibility
            }}
          >
            Account
            <FaUser /> {/* User icon */}
          </button>
        ) : (
          // If the user is not logged in, show the Login button wrapped with Link for navigation
          <Link to="/login">
            <button
              className="nav-button"
              onClick={() => {
                setLibraryStatus(false); // Close library sidebar
                setFavoriteStatus(!favoriteStatus); // Toggle favorites sidebar visibility
              }}
            >
              Login
              <FaUser /> {/* User icon */}
            </button>
          </Link>
        )}

        {/* Favorites button */}
        <button
          className="nav-button"
          onClick={() => {
            setLibraryStatus(false); // Close library sidebar
            setFavoriteStatus(!favoriteStatus); // Toggle favorites sidebar visibility
          }}
        >
          Favorites
          <FaRegHeart /> {/* Heart icon representing favorites */}
        </button>

        {/* Library button */}
        <button
          className="nav-button"
          onClick={() => {
            setFavoriteStatus(false); // Close favorites sidebar
            setLibraryStatus(!libraryStatus); // Toggle library sidebar visibility
          }}
        >
          Library
          <FaMusic /> {/* Music icon representing library */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
