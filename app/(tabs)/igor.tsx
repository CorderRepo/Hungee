import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Hide default navigation header
export const options = {
  headerShown: false,
};

export default function IgorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Top Nav */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name='person-circle-outline' size={28} color='#333' />
        </TouchableOpacity>

        <Text style={styles.navTitle}>Hungie</Text>

        <TouchableOpacity>
          <Ionicons name='bookmark-outline' size={26} color='#333' />
        </TouchableOpacity>
      </View>

      {/* Page Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../../assets/images/hungeeBackground.png")}
          style={styles.heroImage}
        />
        <Text style={styles.title}>Welcome to Hungee!</Text>
        <Text style={styles.subtitle}>
          Find meals that match your dietary options and make your nutritional
          life the best it can be.
        </Text>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Made by Sameer, Drew, Rahul, and Igor
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  navTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e91e63",
  },
  content: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  heroImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    color: "#555",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  footer: {
    marginTop: "auto",
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    color: "#999",
  },
});
