import { createContext, useState } from "react";

// Create the context
const UserContext = createContext(null);

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Export the context
export default UserContext;
