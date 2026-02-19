import {
  AuthorisationProvider,
  useAuthorisation,
} from "@/context/AuthorisationContext";
import { FavouritesProvider } from "@/context/FavouritesContext";
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
      <FavouritesProvider>
        <NavigationStack />
      </FavouritesProvider>
    </AuthorisationProvider>
  );
}
