import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "tailwind-rn";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
  //fetch all the matches

  const [matches, setMatches] = useState([]);
  const { user } = useAuth();

  //TODO implicit return again, so no unsub required alag se
  useEffect(
    () =>
      //real time listener
      //check all the matches `where` you are part of it
      onSnapshot(
        query(
          collection(db, "matches"),
          where("usersMatched", "array-contains", user.uid)
        ),
        (snapshot) =>
          setMatches(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
      ),
    [user]
  );

  // console.log("matches:", matches);

  return matches.length > 0 ? (
    <FlatList
      style={tw("h-full")}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  ) : (
    <View style={tw("p-5")}>
      <Text style={tw("text-center text-lg")}>No Matches at the Moment 😢</Text>
    </View>
  );
};

export default ChatList;
