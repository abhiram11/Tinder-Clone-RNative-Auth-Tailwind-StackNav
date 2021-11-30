import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 20 }}>
      <Text>I am the chat screen!</Text>
      <Button
        title="Go Back to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ChatScreen;
