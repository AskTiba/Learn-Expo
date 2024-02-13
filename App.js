import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Navigation from "./Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#32cd32] ">
      <View>
        <Text className="bg-[#ffd700] text-lg text-center font-bold px-4 py-10 items-center justify-center rounded-md">
          Welcome to the React Native app! This is a basic example of how you
          can structure your code
        </Text>
        <Navigation />
        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  );
}
