import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        paddingVertical: 60,
        paddingHorizontal: 30,
      }}
    >
      <Button
        title="Submit Button"
        onPress={() => {
          console.log("Button Pressed");
        }}
        color="red"
        disabled={true}
      />
    </View>
  );
}
