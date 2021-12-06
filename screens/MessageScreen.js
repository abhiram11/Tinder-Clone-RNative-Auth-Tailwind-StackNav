import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import tw from "tailwind-rn";
import Header from "../components/Header";
import ReceiverMessage from "../components/ReceiverMessage";
import SenderMessage from "../components/SenderMessage";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";

const MessageScreen = () => {
  const { user } = useAuth();
  const { params } = useRoute();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const { matchDetails } = params;

  const sendMessage = () => {
    //make it async and then put .then with setInput(""), if there is error restore the input
    addDoc(collection(db, "matches", matchDetails.id, "messages"), {
      //represent the msgs here
      timestamp: serverTimestamp(),
      userId: user.uid,
      displayName: user.displayName,
      photoURL: matchDetails.users[user.uid.photoURL], //TODO the person's DP that they UPLOADED during profile details making
      message: input,
    });

    console.log("Msg Sent to firebase successfully");
    setInput("");
  };

  return (
    <View style={tw("flex-1 mt-10")}>
      <Header
        title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName}
        callEnabled
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw("flex-1")}
        keyboardVerticalOffset={10}
      >
        {/* //where all prev msgs will populate */}
        {/* <Text>Message Screeen</Text> */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            style={tw("pl-4")}
            keyExtractor={(item) => item.id}
            renderItem={({ item: message }) =>
              message.userId === user.uid ? (
                <SenderMessage key={message.id} message={message} />
              ) : (
                <ReceiverMessage key={message.id} message={message} />
              )
            }
          />
        </TouchableWithoutFeedback>

        <View
          style={tw(
            "flex-row justify-between items-center border-t border-gray-200 px-5 py-2 bg-white"
          )}
        >
          {/* //keep it at bottom of screen, but avoid keyboard view  */}
          <TextInput
            style={tw("h-10 text-lg")}
            placeholder="Send message..."
            onChangeText={setInput}
            onSubmitEditing={sendMessage} //press enter to send
            value={input}
          />
          <Button title="Send" onPress={sendMessage} color="#FF5864" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MessageScreen;
