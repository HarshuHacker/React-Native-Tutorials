import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightbluebox, styles.box, styles.boxShadow]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.lightgreenbox, styles.box, styles.androidShadow]}>
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
    margin: 20,
  },
  lightbluebox: {
    backgroundColor: "lightblue",
  },
  lightgreenbox: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "red",
    shadowOffset: {
      height: 6,
      width: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: "red",
  },
});
