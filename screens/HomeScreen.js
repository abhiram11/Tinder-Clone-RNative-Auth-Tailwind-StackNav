import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import tw from "tailwind-rn";

import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import useAuth from "../hooks/useAuth";

//importing icons that come preinstalled in expo
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  console.log(user);

  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, []);
  return (
    <View style={{ marginTop: 20 }}>
      {/* header */}
      {/* can add justify-between, flex-row, and then (px-5)padding/margin(mx-5) horizontal and try it too
      then remove the absolute right left specs for others */}
      <View style={tw("relative items-center")}>
        <TouchableOpacity style={tw("absolute left-5 top-3")} onPress={logout}>
          {/* TODO onPress={logout} */}
          <Image
            source={{ uri: user.photoURL }}
            style={tw("h-10 w-10 rounded-full")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{
              uri: "https://www.globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531-1024x705.png",
            }}
            style={tw("h-14 w-14 rounded-full")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw("absolute right-5 top-3")}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>

      {/* end of header */}
      {/* <View style={{ marginTop: 60, borderTopWidth: 1, borderStyle: "solid" }}>
        <Text>I am the home screen!</Text>
        <Button
          title="Go to Chat Screen"
          onPress={() => navigation.navigate("Chat")}
        />

        <Button title="Logout" onPress={logout} />
      </View> */}
    </View>
  );
};

export default HomeScreen;
