import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="send-eth"
        options={{
          title: "send-eth",
        }}
      />
      <Tabs.Screen
        name="send-neo"
        options={{
          title: "send-neo",
        }}
      />
    </Tabs>
  );
}
