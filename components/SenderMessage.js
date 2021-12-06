import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";

const SenderMessage = ({ message }) => {
  return (
    <View
      style={[
        tw("bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2"),
        { alignSelf: "flex-start", marginLeft: "auto" }, //TODO flex-start makes it take only required space
        //else it will go full length, and then marginleft makes left margin SUPER HUGE so msg becomes RHS sticked
      ]}
    >
      <Text style={tw("text-white")}>{message.message}</Text>
    </View>
  );
};

export default SenderMessage;
