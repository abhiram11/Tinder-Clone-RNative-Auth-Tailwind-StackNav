import React from "react";
import { View, Text } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  //since authprovider wraps the stack navigator in the app js, it can be accessed everywhere in the stack!
  const { user } = useAuth();
  console.log(user);
  return (
    <View>
      <Text>Login Screen!</Text>
    </View>
  );
};

export default LoginScreen;
