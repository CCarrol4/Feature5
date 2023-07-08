import React from "react";
import Parse from "parse";

const MainList = () => {
  //LOGGING OUT IS HARD BUT HERE IT IS
  const handleLogout = () => {
    Parse.User.logOut()
      .then(() => {
        // IF logout successful
        window.location.href = "/Auth.js"; // Go to Auth.js after successful logout
      })
      .catch((error) => {
        alert(`Error: ${error.message}`); // ERROR IN CASE LOGGING OUT MESSES UP BAD
      });
  };

  return (
    <div>
      <div>
        Thank you for registering/logging in. You can only see this page if you
        have done so.
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainList;
