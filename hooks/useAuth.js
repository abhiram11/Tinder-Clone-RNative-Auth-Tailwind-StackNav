import React, { createContext, useContext, useState } from "react";
import { View, Text } from "react-native";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
import * as Google from "expo-google-app-auth"; //see from expo-google-app-auth NPM wale se github wala documentation
import { auth } from "../firebase";
//combining google and firebase

// initial state of the context
const AuthContext = createContext({});

const config = {
  iosClientId:
    "689137445225-sk11vafj5mrtbrjk8oeu4lj1v963i291.apps.googleusercontent.com",
  androidClientId:
    "689137445225-8heke5483topr83v0n7thjaujshqmrfi.apps.googleusercontent.com",
  //adding scopes and permissions that we need from google auth
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const signInWithGoogle = async () => {
    //allows us to CONNECT with Google's LOGIN,
    //combine it with firebase to keep track of who's logged in!!!!!!!!

    //returns a promise, no need to use await if we use then
    await Google.logInAsync(config)
      .then(async (loginResult) => {
        console.log("Login Result: ", loginResult);
        if (loginResult.type === "success") {
          console.log("Login success!!");
          //login successful!
          const { idToken, accessToken } = loginResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credential);
        }

        return Promise.reject();
      })
      .catch((error) => setError(error));
    // .finally(())
  };

  //we pass data store in value
  return (
    <AuthContext.Provider
      value={{
        user: null,
        //auth value above
        signInWithGoogle, // => CHANGE THE GOOGLE TO OTHER AUTHS BY CHANGING THIS FUNCTION CALL
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
