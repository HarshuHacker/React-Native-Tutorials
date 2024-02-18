import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Greet from "./components/Greet";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        paddingVertical: 60,
        paddingHorizontal: 30,
      }}
    >
    <Greet name="Harsh Prasad"/>
    <Greet name="Ayush Prasad"/>
    </View>
  );
}
