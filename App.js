import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "black" : "white" },
      ]}
    >
      <TextInput
        style={[styles.input, { color: !isDarkMode ? "black" : "white" }]}
        value={name}
        onChangeText={setName}
        placeholder="Enter Your Name"
        // secureTextEntry
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="words"
      />
      <TextInput
        style={[
          styles.input,
          styles.multiline,
          ,
          { color: !isDarkMode ? "black" : "white" },
        ]}
        placeholder="Message"
        multiline
      />
      <Text style={{ color: !isDarkMode ? "black" : "white" }}>
        Hello {name} !!
      </Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.text, { color: !isDarkMode ? "black" : "white" }]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: "#767577", true: "lightblue" }}
          thumbColor="#f4f3f4"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
