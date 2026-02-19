import {
  AuthorisationProvider,
  useAuthorisation,
} from "@/context/AuthorisationContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

function NavigationStack() {
  const { isAuthorised } = useAuthorisation();
  return (
    <Stack>
      <Stack.Protected guard={!isAuthorised}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isAuthorised}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <StatusBar style="auto" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthorisationProvider>
      <NavigationStack />
    </AuthorisationProvider>
  );
}
