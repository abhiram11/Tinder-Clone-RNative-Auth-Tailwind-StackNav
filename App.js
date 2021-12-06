import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthProvider } from "./hooks/useAuth";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import StackNavigator from "./StackNavigator";

//3:05:00 part important with teeny tiny bits
//4:40:00 destructuring firebase data, old data copied to new object to update

export default function App() {
  return (
    <NavigationContainer>
      {/* aka HOC - Higher Order Component */}
      <AuthProvider>
        {/* where we WRAP some CHILD Component, and we pass down the AUTH info to the children */}

        <StackNavigator />
      </AuthProvider>
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
