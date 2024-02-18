import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }}></View>
      <View
        style={{ width: 100, height: 100, backgroundColor: "green" }}
      ></View>
    </View>
  );
}
