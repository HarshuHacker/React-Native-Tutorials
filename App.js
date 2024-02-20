import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome !!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 20,
      },
      android: {
        color: "blue",
        fontSize: 40,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
