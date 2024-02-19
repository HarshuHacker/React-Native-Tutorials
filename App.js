import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightbluebox, styles.box]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.lightgreenbox, styles.box]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  title: { fontSize: 40 },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightbluebox: {
    backgroundColor: "lightblue",
  },
  lightgreenbox: {
    backgroundColor: "lightgreen",
  },
});
