import { useAuthorisation } from "@/context/AuthorisationContext";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const { setIsAuthorised } = useAuthorisation();

  const onLogoutPress = () => {
    setIsAuthorised(false);
  };

  return (
    <View>
      <Text>Settings Screen</Text>
      <Pressable style={styles.button} onPress={onLogoutPress}>
        <Text style={styles.buttonText}>LOGOUT</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: "red", padding: 10, margin: 20, borderRadius: 5 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
});
