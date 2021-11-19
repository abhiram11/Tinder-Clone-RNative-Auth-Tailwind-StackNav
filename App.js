import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import tw from "tailwind-rn";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

    // <View style={tw("flex-1 justify-center items-center")}>
    //   <Text>Hello Abhiram!</Text>
    //   <Button title="Click Me" onPress={() => alert("Hello Abhiram")} />
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
