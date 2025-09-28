import { Image, StyleSheet, Text, View } from "react-native"; // simpler unless you need expo-image

export default function IgorScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/hungeeBackground.png")}
        style={styles.heroImage}
      />
      <Text style={styles.title}>Welcome to Hungee!</Text>
      <Text style={styles.subtitle}>
        Find meals that match your dietary options and make your nutritional
        life the best it can be.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  heroImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
});
