import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    console.log(email, password);
  };

  return (
    <View>
      <View style={styles.form}>
        <Text style={styles.title}>Welcome to YourMovies!</Text>
        <Text style={styles.subtitle}>
          Your personal guide to the world of cinema
        </Text>
        <View>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={"grey"}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={"grey"}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Pressable style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 10,
    marginTop: 5,
  },
  button: { backgroundColor: "red", padding: 10, marginTop: 20 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
});
