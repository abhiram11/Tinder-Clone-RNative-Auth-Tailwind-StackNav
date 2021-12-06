import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";
import Header from "../components/Header";

//using Components in RN

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 60 }}>
      <Text>I am the chat screen!</Text>
      <Header title="Chat" callEnabled />
      <Button
        title="Go Back to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ChatScreen;
