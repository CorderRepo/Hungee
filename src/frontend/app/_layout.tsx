import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} initialRouteName='welcome'>
        <Stack.Screen name='welcome' /> {/* Welcome screen */}
        <Stack.Screen name='(tabs)' /> {/* Tab View */}
        <Stack.Screen name='modal' options={{ presentation: "modal" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
