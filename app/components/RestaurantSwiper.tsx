import axios from "axios";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = width * 0.25;

// Single restaurant card that can be swiped left/right
function SwipeCard({ item, isTop, onSwipeLeft, onSwipeRight }: any) {
  const translateX = useSharedValue(0); // horizontal drag offset
  const translateY = useSharedValue(0); // vertical drag offset

  // Animated style updates card position as user drags
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value }, // move left/right
      { translateY: translateY.value }, // move up/down
    ],
  }));

  return (
    <PanGestureHandler
      enabled={isTop}
      onGestureEvent={(e) => {
        translateX.value = e.nativeEvent.translationX;
        translateY.value = e.nativeEvent.translationY;
      }}
      onEnded={() => {
        if (translateX.value > SWIPE_THRESHOLD) {
          onSwipeRight(item);
          translateX.value = withSpring(width * 2);
        } else if (translateX.value < -SWIPE_THRESHOLD) {
          onSwipeLeft(item);
          translateX.value = withSpring(-width * 2);
        } else {
          translateX.value = withSpring(0);
          translateY.value = withSpring(0);
        }
      }}
    >
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={{ uri: item.photo }} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.name}>
            {item.name}{" "}
            <Text style={styles.rating}>⭐ {item.rating || "N/A"}</Text>
          </Text>
          <Text style={styles.desc}>{item.vicinity}</Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
}

export default function RestaurantSwiper() {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      try {
        const res = await axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
          {
            params: {
              location: `${latitude},${longitude}`,
              radius: 1500,
              type: "restaurant",
              key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
            },
          }
        );

        const places = res.data.results.map((place: any) => ({
          id: place.place_id,
          name: place.name,
          vicinity: place.vicinity,
          rating: place.rating,
          photo: place.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
            : "https://via.placeholder.com/800",
        }));

        // 👉 Send to your Flask backend

        setRestaurants(places);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSwipe = () => {
    setIndex((prev) => prev + 1);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#e91e63' />
        <Text>Loading restaurants...</Text>
      </View>
    );
  }

  if (index >= restaurants.length) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No more restaurants 🍽️</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {restaurants
        .slice(index)
        .map((r, i) => {
          const isTop = i === 0;
          return (
            <SwipeCard
              key={r.id}
              item={r}
              isTop={isTop}
              onSwipeLeft={(i: any) => {
                console.log("Disliked:", i.name); // Log dislike
                handleSwipe();
              }}
              onSwipeRight={(i: any) => {
                console.log("Liked:", i.name); // Log like
                handleSwipe();
              }}
            />
          );
        })
        .reverse()}
    </View>
  );
}

// SUPER DUPER COOL STYLES :D
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: {
    width: width * 0.9,
    height: 550,
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    position: "absolute",
  },
  image: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  name: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  rating: { fontSize: 18, fontWeight: "600", color: "#FFD700" }, // gold star for da rating :)
  desc: { fontSize: 16, color: "#ddd", marginTop: 5 },
});
