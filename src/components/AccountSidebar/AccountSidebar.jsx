import women from "../../assets/images/women.jpg";
import "./AccountSidebar.css";

// Define the AccountSidebar component which takes in props 'accountStatus', 'setAccountStatus', and 'setIsLogin'
const AccountSidebar = ({ accountStatus, setAccountStatus, setIsLogin }) => {
  // Function to handle logout
  const logoutHandler = () => {
    setIsLogin(false); // Set login state to false, logging the user out
    setAccountStatus(false); // Close the account sidebar after logging out
  };

  return (
    <div className={`sidebar-container ${accountStatus && "open"}`}>
      <h2 className="sidebar-h1">Account</h2>
      <div className="sidebar-heading">
        <h4>Welcome, Maria</h4>
        <img src={women} alt="women" className="sidebar-profile" />
      </div>
      <div style={{ marginTop: 20 }}>
        <button className="sidebar-action-button">
          Change Profile Picture
        </button>
        <button className="sidebar-action-button">Change Password</button>
      </div>
      <div className="sidebar-btn-flex">
        <button className="sidebar-action-button">Delete Account</button>
        <button className="sidebar-action-button" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;
