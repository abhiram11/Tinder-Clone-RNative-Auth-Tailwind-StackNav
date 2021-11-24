import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
// initial state of the context

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //we pass data store in value
  return (
    <AuthContext.Provider
      value={{
        user: "Abhiram",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;
//

//same as the file name
export default function useAuth() {
  return useContext(AuthContext);
}
