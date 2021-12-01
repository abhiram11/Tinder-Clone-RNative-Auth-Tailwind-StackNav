import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import tw from "tailwind-rn";

import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import useAuth from "../hooks/useAuth";

//importing icons that come preinstalled in expo
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  console.log(user);

  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, []);

  const DUMMY_DATA = [
    {
      firstName: "Abhiram",
      lastName: "Satpute",
      occupation: "Chief Technology Officer",
      photoURL:
        "https://avatars.githubusercontent.com/u/20269286?s=400&u=bce2509c4f3fd8766d14e52755dfbdf358705236&v=4",
      age: 25,
      fakeId: 1,
    },
    {
      firstName: "Elon",
      lastName: "Musk",
      occupation: "Extra Terrestrial Officer",
      photoURL:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
      age: 125,
      fakeId: 2,
    },
    {
      firstName: "James",
      lastName: "Bond",
      occupation: "007",
      photoURL:
        "https://avatars.githubusercontent.com/u/20269286?s=400&u=bce2509c4f3fd8766d14e52755dfbdf358705236&v=4",
      age: 25,
      fakeId: 3,
    },
  ];

  return (
    <View style={tw("flex-1 my-5")}>
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

      {/* SWIPER HERE */}

      {/* CARDS */}
      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0} //starts at zero, helps a lot later
          verticalSwipe={false}
          animateCardOpacity //swipe out animation comes in for stack size and cards behind it
          renderCard={(card) => (
            <View
              key={card.fakeId}
              style={tw("relative bg-white h-3/4 rounded-xl")}
            >
              {/* <Text>{card.firstName}</Text> */}
              <Image
                source={{ uri: card.photoURL }}
                style={tw("absolute top-0 h-full w-full rounded-xl")}
              />
            </View>
          )}
        />
      </View>

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
