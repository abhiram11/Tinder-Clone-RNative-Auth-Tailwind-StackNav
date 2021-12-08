import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";
import tw from "tailwind-rn";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";

const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  // console.log("matchDetails:", matchDetails);

  //use utility fn to remove the other users info from the collection match
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState("");

  // console.log("matchDetails.user, user.uid", matchDetails.users, user.uid);

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  console.log("matcheduserinfo:", matchedUserInfo);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches", matchDetails.id, "messages"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setLastMessage(snapshot.docs[0]?.data().message);
        } // 0th index as we used desc order in CHATS
        //using ? because if there is no message, it will be undefined
      ),
    [matchDetails, db]
  );

  console.log("matcheduserinfo:", matchedUserInfo);
  return (
    <TouchableOpacity
      style={[
        tw("flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg"),
        styles.cardShadow,
      ]}
      onPress={() =>
        navigation.navigate("Message", {
          //TODO pass data during navigation as well!
          matchDetails,
        })
      }
    >
      <Image
        style={tw("rounded-full h-16 w-16 mr-4")}
        source={{ uri: matchedUserInfo?.photoURL }}
      />
      <View>
        <Text style={tw("text-lg font-semibold")}>
          {matchedUserInfo?.displayName}
        </Text>
        <Text>{lastMessage || "Say Hi!"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
