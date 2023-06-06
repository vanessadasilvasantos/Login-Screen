import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./img/logo.png")} />
      <Text style={styles.titulo}>Acesse sua conta</Text>
      <View style={styles.input}>
        <Image source={require("./img/email.png")} />
        <TextInput
          placeholder="Digite seu e-mail"
          placeholderTextColor={"#7C7C8A"}
          style={styles.inputText}
        />
      </View>
      <View style={styles.input}>
        <Image source={require("./img/key.png")} />
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor={"#7C7C8A"}
          style={styles.inputText}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#7C7C8A",
    flexDirection: "row",
    backgroundColor: "#121212",
    gap: 5,
    width: "80%",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20,
    color: "#E1E1E6",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 10,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#E51C44",
  },
  button: {
    textAlign: "center",
    fontWeight: 600,
    color: "#fff",
  },
  inputText: {
    color: "#7C7C8A",
  },
});
