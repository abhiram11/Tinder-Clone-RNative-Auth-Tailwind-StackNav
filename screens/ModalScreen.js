import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";

// TODO there are full screen modal and also normal modal

const ModalScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !job || !age;

  const updateUserProfile = () => {
    //firebase v9 MODULAR Functions
    //users keys used

    // console.log("Values:", user);
    setDoc(doc(db, "users", user.uid), {
      //pull the following data from the mentioned collection (users) and given uid

      //TODO error => right hand side me hi kuch error hogi
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        //close the modal after you're done
        navigation.navigate("Home");
      })
      .catch((error) => {
        //TODO make UI for error
        alert(error.message);
      });
  };

  return (
    <View style={tw("flex-1 items-center pt-1 mt-4")}>
      <Image
        style={tw("h-20 w-full")}
        resizeMode="contain"
        source={{
          uri: "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png",
        }}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName} !
      </Text>
      {/* STEPS */}
      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Step 1: Upload profile pic
      </Text>
      <TextInput
        style={tw("text-center text-xl pb-2 ")}
        placeholder="Profile Pic URL"
        value={image}
        onChangeText={setImage}
      />
      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Step 2: Job
      </Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        style={tw("text-center text-xl pb-2 ")}
        placeholder="Enter your Occupation"
      />
      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Step 3: Age
      </Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        style={tw("text-center text-xl pb-2 ")}
        placeholder="Enter your Age"
        //validation
        maxLength={2}
        keyboardType="numeric"
      />

      <TouchableOpacity
        disabled={incompleteForm}
        onPress={updateUserProfile}
        style={[
          tw("w-64 p-3 rounded-xl absolute bottom-10 bg-red-400"),
          //if incompleteForm is true
          incompleteForm ? tw("bg-gray-400") : tw("bg-red-400"),
        ]}
      >
        <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
