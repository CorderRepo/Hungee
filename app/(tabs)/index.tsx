import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import your swiper component
import RestaurantSwiper from "../components/RestaurantSwiper";

export default function TabHome() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name='person-circle-outline' size={28} color='#333' />
        </TouchableOpacity>

        <Text style={styles.title}>Munchr</Text>

        <TouchableOpacity>
          <Ionicons name='chatbubble-outline' size={26} color='#333' />
        </TouchableOpacity>
      </View>

      {/* Swiper below header */}
      <View style={styles.content}>
        <RestaurantSwiper />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e91e63", // brand color
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
