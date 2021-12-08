import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "tailwind-rn";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

//call icon enabled if in the actual Chat, not in the ChatList

const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();

  return (
    <View style={tw("p-2 flex-row items-center justify-between")}>
      <View style={tw("flex flex-row items-center")}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw("p-2")}>
          <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
        </TouchableOpacity>
        <Text style={tw("text-2xl font-bold pl-2")}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity
          style={tw("rounded-full mr-4 p-3 bg-red-200")}
          onPress={() =>
            Alert.alert("Thanks for Tuning!", "Feature Coming Soon!")
          }
        >
          <Foundation name="telephone" size={20} color="red" style={tw("")} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
