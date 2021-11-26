import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";

const LoginScreen = () => {
  //since authprovider wraps the stack navigator in the app js, it can be accessed everywhere in the stack!
  const { signInWithGoogle, loading } = useAuth();
  // const { user } = useAuth();
  // console.log(user);

  const navigation = useNavigation(); //redirect user

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={tw("flex-1")}>
      <ImageBackground
        source={{ uri: "https://tinder.com/static/tinder.png" }}
        resizeMode="cover"
        style={tw("flex-1")}
      >
        {/* TRY OTHER TOUCHABLES AS WELL */}
        <TouchableOpacity
          style={[
            tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
            { marginHorizontal: "25%" },
          ]}
          onPress={signInWithGoogle}
        >
          <Text style={tw("font-semibold text-center")}>
            Sign in & Swipe in!
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      {/* //using image background */}
      {/* <Text>{loading ? "Loading.." : "Login to the App!"}</Text>
      <Button title="Login" onPress={signInWithGoogle} /> */}
    </View>
  );
};

export default LoginScreen;
