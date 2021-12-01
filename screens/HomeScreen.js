import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect, useRef } from "react";
import tw from "tailwind-rn";

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import useAuth from "../hooks/useAuth";

//importing icons that come preinstalled in expo
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  console.log(user);
  const swipeRef = useRef(null);

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

      {/* CARDS */}
      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0} //starts at zero, helps a lot later
          verticalSwipe={false}
          //adding SWIPE FUNCTIONS

          onSwipedLeft={() => {
            console.log("SWIPED NOPE!");
          }}
          onSwipedRight={() => {
            console.log("SWiped MATCH!");
          }}
          //ending SWIPE FUNCTIONS
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right", //by default its to the left
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",

              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          animateCardOpacity //swipe out animation comes in for stack size and cards behind it
          renderCard={(card) => (
            <View
              key={card.fakeId}
              style={tw("relative bg-white h-3/4 rounded-xl")}
            >
              <Image
                source={{ uri: card.photoURL }}
                style={tw("absolute top-0 h-full w-full rounded-xl")}
              />
              {/* Profile Description below the image */}
              <View
                style={[
                  tw(
                    "absolute bottom-0 flex-row bg-white justify-between items-center w-full h-20 px-6 py-2 rounded-b-xl"
                  ),
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw("text-xl font-bold")}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text style={tw("text-2xl font-bold")}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* useRef buttons here */}
      <View style={tw("flex flex-row justify-evenly")}>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-red-200"
          )}
        >
          <Entypo name="cross" size={30} color="#FF5864" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-green-200"
          )}
        >
          <AntDesign name="heart" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

//for shadows since not in tailwind RN
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
