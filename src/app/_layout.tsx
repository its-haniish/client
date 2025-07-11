import { Stack } from "expo-router";
import "./global.css";
export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="Notifications" options={{ title: "Notifications" }} />
    <Stack.Screen name="Support" options={{ title: "Support" }} />
    <Stack.Screen name="Wallet" options={{ title: "Add Money Wallet" }} />
    <Stack.Screen name="Profile" options={{ title: "Profile" }} />
  </Stack>;
}
