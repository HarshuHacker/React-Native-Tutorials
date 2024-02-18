import { Image, ImageBackground, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 200, height: 200 }}
      />
      <ImageBackground
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ flex: 1 }}
      >
        <Text>Hii</Text>
      </ImageBackground>
    </View>
  );
}
