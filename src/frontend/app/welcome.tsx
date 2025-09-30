import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hungee</Text>
      <Text style={styles.subtitle}>
        Discover new meals, swipe through restaurants, and save your favorites.
      </Text>
      <Button title='Continue' onPress={() => router.replace("/(tabs)")} />
      {/* ^ When user hits Continue, go to tab view ^ */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#e91e63",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
});
