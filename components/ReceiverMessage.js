import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-rn";

const ReceiverMessage = ({ message }) => {
  return (
    <View
      style={[
        tw("bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2"),
        { alignSelf: "flex-start" }, //TODO flex-start makes it take only required space
        //else it will go full length, and then marginleft makes left margin SUPER HUGE so msg becomes RHS sticked
      ]}
    >
      <Image
        style={tw("h-12 w-12 rounded-full absolute top-0 -left-14")}
        source={{ uri: message.photoURL }}
      />
      <Text style={tw("text-white")}>{message.message}</Text>
    </View>
  );
};

export default ReceiverMessage;
