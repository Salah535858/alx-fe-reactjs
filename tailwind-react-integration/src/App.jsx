// eslint-disable-next-line no-unused-vars
import React from "react";
import UserProfile from "./components/UserProfile"; // Importing the UserProfile component

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl my-10">Welcome to My Profile</h1>
      <UserProfile /> {/* Using the UserProfile component */}
    </div>
  );
}

export default App;
