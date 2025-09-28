import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RestaurantSwiper from "../components/RestaurantSwiper";

export default function TabHome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name='person-circle-outline' size={28} color='#333' />
        </TouchableOpacity>

        <Text style={styles.title}>Hungie</Text>

        <TouchableOpacity>
          <Ionicons name='bookmark-outline' size={26} color='#333' />
        </TouchableOpacity>
      </View>

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
    color: "#e91e63",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
