import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#eee",
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='igor'
        options={{
          title: "Igor",
          tabBarIcon: ({ color }) => (
            <Ionicons name='star' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
